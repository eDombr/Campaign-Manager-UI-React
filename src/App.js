import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import CampaignList from './components/CampaignList';
import CampaignStats from './components/CampaignStats';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={CampaignList} />
                            <Route path="/stats" component={CampaignStats} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}

export default App;
