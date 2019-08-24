import { FETCH_SILO } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_SILO:
    //  console.log("TTTT");
      //console.log(action.payload.cuisines);
			return action.payload;
		default:
			return state;
	}
}
