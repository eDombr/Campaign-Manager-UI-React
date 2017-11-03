import axios from 'axios';

export const getCampaigns = () => dispatch => {
    axios.get('https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns')
        .then(
            res => {
                const campaigns = res.data;
                dispatch({ type: 'ADD_CAMPAIGNS', payload: campaigns })
            }
        )
};