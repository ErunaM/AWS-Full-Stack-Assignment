import axios from 'axios';
import { FETCH_SILO } from './types';
import { FETCH_TEMP } from './types';

export const fetchData = values => async dispatch => {

    const res = await axios.get('/api/silo', values);
    // console.log("DATA", res.data)
    dispatch({ type: FETCH_SILO, payload: res.data});
};

export const fetchTempData = values => async dispatch => {
    const res = await axios.get('/api/temp', values);

    // console.log("DATA", res.data)
    dispatch({ type: FETCH_TEMP, payload: res.data});

};
