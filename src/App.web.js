import React from "react";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import store from "./store";
import AuthScreen from "./screens/AuthScreen";

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={AuthScreen}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
