import {
   GET_PROPOSED_MATCH,
PROPOSED_MATCH_TO_CONFIRM
} from '../constants/Match';

const initState = {
 // proposedMatchToConfirm: [],
	proposedMatchToConfirm: null,
}

const match = (state = initState, action) => {
	switch (action.type) {
		case PROPOSED_MATCH_TO_CONFIRM:
			return {
				...state,
				proposedMatchToConfirm: action.payload,
			}
		default:
			return state;
	}
}

export default match