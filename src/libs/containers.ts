import { LocationState } from "history";
import { connect } from "react-redux";
import { RouteComponentProps, StaticContext, withRouter } from "react-router";
import { Dispatch } from "redux";

import { ActionBase } from "../stores/ActionBase";
import { IReduxStore } from "../stores/IReduxStore";

export interface IStorePropsBase<IState, TAction extends ActionBase> {
    /** Use your */
    store: IState;

    /** Mounted automatically by connect(...)(...) */
    dispatch: Dispatch<TAction>;
}

/**
 * Use this as base for creating your container's props type if you use {@link connectWithStore} to create the HoC.
 * 
 * @template P is the template for the route's parameters.
 *             https://reacttraining.com/react-router/web/example/url-params
 * @template C is the template for the static context.
 * @template S is the template for the location state object, which is used to pass information throught routes.
 *             https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/location.md
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type IRouterProps<P extends { [K in keyof P]?: string } = {}, C extends StaticContext = StaticContext, S = LocationState>
    = RouteComponentProps<P, C, S>;

/**
 * Use this as base for creating your container's props type if you use {@link connectContainer} to create the HoC.
 * 
 * @template TAction is the template for the action object. This app use string as fixed type.
 * @template TRouter see {@link IRouterProps}
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export type IPageProps = IStorePropsBase<IReduxStore, ActionBase> & IRouterProps<{}, StaticContext, LocationState>;

/**
 * Link the React component with the store making { store, dispatch } available throught the component's props.
 * 
 * @param cp is the component to linked.
 * @return a Higher Order Component, that wraps the Component cp
 * @see connectContainer
 * @see https://reactjs.org/docs/higher-order-components.html
 * @see https://redux.js.org/basics/usage-with-react#presentational-and-container-components
 */
export const connectWithStore = <TProps, T extends React.ComponentType<TProps>>(cp: T) => connect(state => ({ store: { ...state } }))(cp as any);

/**
 * Link the React component with the router { match, location, history }.
 * 
 * @param cp is the component to be linked.
 */
export const connectWithRouter = (cp: any) => withRouter(cp);

/**
 * Link the React component with the store and router { store, dispatch, match, location, history }.
 * 
 * 
 * @param cp is the component to be linked.
 * @return a Higher Order Component, that wraps the Component cp. 
 *         Use UpperCase to save the result otherwise you will get "Property does not exist on type 'JSX.IntrinsicElements' "
 * @see https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md
 */
export const connectContainer = <TProps, T extends React.ComponentType<TProps>>(cp: T) => withRouter(connectWithStore(cp));
