import {
    GET_PROPOSED_MATCH,
	PROPOSED_MATCH_TO_CONFIRM,
	APPROVE_PROPOSED_MATCH,
	PROPOSE_MATCH,
	TEST,
} from '../constants/Match';

export function test(payload) {
  return {
    type: TEST,
    payload
  };
}



export function proposeMatch(payload) {
  return {
    type: PROPOSE_MATCH,
    payload
  };
}

export function getProposedMatch(address) {
	
  return {
    type: GET_PROPOSED_MATCH,
    address
  };
}

export function proposedMatchToconfirm(payload) {
  return {
    type: PROPOSED_MATCH_TO_CONFIRM,
    payload
  };
}

export function approveMatchToconfirm(address, id, message) {
  return {
    type: APPROVE_PROPOSED_MATCH,
    address,
	  id,
	  message
  };
}


