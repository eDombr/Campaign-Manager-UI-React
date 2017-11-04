import { combineReducers } from 'redux';

import campaigns from './campaigns';
import stats from './stats';

export default combineReducers({
    campaigns,
    stats
});