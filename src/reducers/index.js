import {combineReducers} from 'redux';
import receiptsReducer from './receiptsReducer';
import detailReducer from './detailReducer';

const rootReducer = combineReducers({
    receipts: receiptsReducer,
    detail: detailReducer,
})

export default rootReducer;