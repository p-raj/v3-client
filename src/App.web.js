import React from "react";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import store from "./store";
import AuthScreen from "./screens/AuthScreen";
import SplashScreen from "./screens/SplashScreen";
import {syncHistoryWithStore} from "react-router-redux";


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={SplashScreen}/>
                </Router>
            </Provider>
        );
    }
}

export default App;
