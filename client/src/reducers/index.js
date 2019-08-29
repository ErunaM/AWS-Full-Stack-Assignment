import { combineReducers } from 'redux';
import siloReducer from './siloReducer';
import dataReducer from './dataReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
	form: reduxForm,
	places: siloReducer,
	temp: dataReducer

});
