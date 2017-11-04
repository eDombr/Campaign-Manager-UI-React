import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCampaignStats } from '../actions/stats';

class CampaignStats extends Component {
    componentWillMount() {
        this.setState({id: this.props.match.params.id});

        this.props.onSetCurrentStats(this.props.match.params.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if(!prevProps) {
            return false
        }

        if (this.state.id !== this.props.match.params.id) {
            this.props.onSetCurrentStats(this.props.match.params.id);
            this.setState({id: this.props.match.params.id});
        }
    }

    render() {
        const currentCampaign = this.props.campaigns.find(campaign => campaign.id === this.props.match.params.id);
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{currentCampaign && currentCampaign.name}</h2>
                    </div>
                    <div className="col">
                        <div className="btn-group">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Change Campaign
                            </button>
                            <div className="dropdown-menu">
                                {this.props.campaigns.map(campaign => 
                                    <Link to={'/stats/' + campaign.id} className="dropdown-item" href="" key={campaign.id}>{campaign.name}</Link>
                                )}
                            </div>
                        </div>

                        <Link to="/" className="btn btn-light">All Campaigns</Link>
                    </div>
                </div>

                <div className="row">
                    laallala
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        campaigns: state.campaigns,
        currentStats: state.stats 
    }),
    dispatch => ({
        onSetCurrentStats: (id) => {
            dispatch(setCampaignStats(id));
        }
    })
)(CampaignStats);