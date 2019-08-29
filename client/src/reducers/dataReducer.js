import { FETCH_TEMP } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_TEMP:
    //  console.log("TTTT");
      //console.log(action.payload.cuisines);
			return action.payload;
		default:
			return state;
	}
}
