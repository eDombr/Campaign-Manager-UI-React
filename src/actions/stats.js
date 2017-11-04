import axios from 'axios';

export const setCampaignStats = (id) => dispatch => {
    axios.get(`https://5cd3f999-f49f-4e42-8b8b-173c7185f093.mock.pstmn.io/campaigns/${id}/stats`)
        .then(
            res => {
                console.log(res);
                const currentStats = res.data;
                dispatch({ type: 'SET_CURRENT_STATS', payload: currentStats })
            }
        )
}