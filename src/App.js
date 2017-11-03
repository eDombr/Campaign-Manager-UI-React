import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CampaignList from './components/CampaignList';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header />
                    <CampaignList />
                </div>
            </Provider>
        );
    }
}

export default App;
