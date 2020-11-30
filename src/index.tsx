import React from "react";
import { render } from "react-dom";
import { AppRoutes } from "../src/containers/AppRoutes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import store from "../src/stores/rootStore";



export class App extends React.Component {

    componentDidMount() {
        store.subscribe(() => null)
    }
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <AppRoutes />
                </Provider>
            </BrowserRouter>
        );
    }
}

render(<App />, document.getElementById("app"));