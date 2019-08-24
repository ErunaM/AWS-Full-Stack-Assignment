import { combineReducers } from 'redux';
import siloReducer from './siloReducer';

export default combineReducers({
	siloData: siloReducer
});
