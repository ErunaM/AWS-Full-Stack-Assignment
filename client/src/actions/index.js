import axios from 'axios';
import { FETCH_SILO } from './types';

export const fetchCitys = values => async dispatch => {
    const res = await axios.post('/api/silo', values);

    dispatch({ type: FETCH_SILO, payload: res.data});

};
