import { combineReducers } from 'redux';
import siloReducer from './siloReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
	form: reduxForm,
	siloData: siloReducer

});
