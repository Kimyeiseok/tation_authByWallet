import {
    GET_PROPOSED_MATCH,
	PROPOSED_MATCH_TO_CONFIRM,
	APPROVE_PROPOSED_MATCH,
	PROPOSE_MATCH,
	TEST,
	GET_ALL_APPROVED_MATCHES,
	ALL_APPROVED_MATCHES,
	MY_APPROVED_MATCHES,
	GET_MY_APPROVED_MATCHES,
} from '../constants/Match';

export function test(address) {
  return {
    type: TEST,
    address
  };
}

export function getAllApprovedMatches(payload) {
  return {
    type: GET_ALL_APPROVED_MATCHES,
    payload
  };
}

export function allApprovedMatches(payload) {
  return {
    type: ALL_APPROVED_MATCHES,
    payload
  };
}

export function getMyApprovedMatches(address) {
  return {
    type: GET_MY_APPROVED_MATCHES,
    address
  };
}

export function myApprovedMatches(payload) {
  return {
    type: MY_APPROVED_MATCHES,
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


