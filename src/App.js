import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CampaignList from './components/CampaignList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <CampaignList />
            </div>
        );
    }
}

export default App;
