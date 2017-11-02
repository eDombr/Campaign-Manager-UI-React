import React, { Component } from 'react';
import axios from 'axios';

class CampaignList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            campaigns: []
        }
    }

    componentDidMount() {
        axios.get('https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns')
            .then(
                res => {
                    const campaigns = res.data;
                    this.setState({
                        campaigns
                    });
                }
            )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>Name</th>
                                <th>Daily Budget</th>
                                <th>Total Budget</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.campaigns.map(campaign =>
                                <tr key={campaign.id}>
                                    <td>
                                        <span className={'badge ' + (campaign.status === 'ACTIVE' ? 'badge-primary' : 'badge-secondary')}>{campaign.status}</span>
                                    </td>
                                    <td>{campaign.name}</td>
                                    <td>{campaign.daily_budget}</td>
                                    <td>{campaign.total_budget}</td>
                                    <td>
                                        <div className="dropdown show">
                                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Actions
                                            </button>

                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item" href="">
                                                    Deactivate
                                                </a>
                                                <a className="dropdown-item" href="">
                                                    Stats
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CampaignList;