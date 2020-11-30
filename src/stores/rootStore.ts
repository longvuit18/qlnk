import { combineReducers, createStore } from "redux";

import { ActionBase } from "./ActionBase";
import { reducerNhanKhau } from "./data/nhanKhau";
import { IReduxStore } from "./IReduxStore";

const rootReducer = combineReducers<IReduxStore>({
    nhanKhau: reducerNhanKhau
});

let store = createStore(rootReducer);

// This is required for HMR
// @see https://github.com/parcel-bundler/parcel/issues/314
const hotModule: NodeModule & { dispose: (fn: () => void) => void } = (module as any).hot;
if (process.env.NODE_ENV === "development" && hotModule) {
    const windowsMapped: Window & { initialState?: IReduxStore } = window;
    store = createStore(rootReducer, windowsMapped.initialState);

    // Save current state before module being reloaded
    hotModule.dispose(() => windowsMapped.initialState = store.getState());
}

// In redux, there is only 1 root store. Hence we do a default export.
export default {
    ...store,

    // Mapping is needed since Redux enforce plain objects.
    dispatch: <TAction extends ActionBase>(args: TAction) => store.dispatch({ ...args })
};

