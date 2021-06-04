import {
   GET_PROPOSED_MATCH,
PROPOSED_MATCH_TO_CONFIRM,
	ALL_APPROVED_MATCHES,
	MY_APPROVED_MATCHES
} from '../constants/Match';

const initState = {
 // proposedMatchToConfirm: [],
	proposedMatchToConfirm: null,
	approvedMatches: null,
	myApprovedMatches: null,
}

const match = (state = initState, action) => {
	switch (action.type) {
		case PROPOSED_MATCH_TO_CONFIRM:
			return {
				...state,
				proposedMatchToConfirm: action.payload,
			}
		case ALL_APPROVED_MATCHES:
			return {
				...state,
				approvedMatches: action.payload,
			}
		case MY_APPROVED_MATCHES:
			return {
				...state,
				myApprovedMatches: action.payload,
			}			
		default:
			return state;
	}
}

export default match