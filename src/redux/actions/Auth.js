import {
  SIGNIN,
  SIGNIN_WALLET,
  AUTHENTICATED,
  SET_USER_INFO,
	UPDATE_USER_INFO,
  SIGNOUT,
  SIGNOUT_SUCCESS,
  SHOW_AUTH_MESSAGE,
  HIDE_AUTH_MESSAGE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SHOW_LOADING,
  SIGNIN_WITH_GOOGLE,
  SIGNIN_WITH_GOOGLE_AUTHENTICATED,
  SIGNIN_WITH_FACEBOOK,
  SIGNIN_WITH_FACEBOOK_AUTHENTICATED
} from '../constants/Auth';

export const signIn = (user) => {
  return {
    type: SIGNIN,
    payload: user
  }
};

export const signInwithWallet = (payload) => {
	return{
		type: SIGNIN_WALLET,
		payload
	}
}

export const authenticated = (token, userInfo) => {
  return {
    type: AUTHENTICATED,
    token,
	userInfo,
  }
};


export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    userInfo
  }
};

export const updateUserInfo = (payload) => {
  return {
    type: UPDATE_USER_INFO,
    payload
  }
};

export const signOut = () => {
  return {
    type: SIGNOUT
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGNOUT_SUCCESS,
  }
};

export const signUp = (user) => {
  return {
    type: SIGNUP,
    payload: user
  };
};

export const signUpSuccess = (token) => {
  return {
    type: SIGNUP_SUCCESS,
    token
  };
};

export const signInWithGoogle = () => {
  return {
    type: SIGNIN_WITH_GOOGLE
  };
};

export const signInWithGoogleAuthenticated = (token) => {
  return {
    type: SIGNIN_WITH_GOOGLE_AUTHENTICATED,
    token
  };
};

export const signInWithFacebook = () => {
  return {
    type: SIGNIN_WITH_FACEBOOK
  };
};

export const signInWithFacebookAuthenticated = (token) => {
  return {
    type: SIGNIN_WITH_FACEBOOK_AUTHENTICATED,
    token
  };
};

export const showAuthMessage = (message) => {
  return {
    type: SHOW_AUTH_MESSAGE,
    message
  };
};

export const hideAuthMessage = () => {
  return {
    type: HIDE_AUTH_MESSAGE,
  };
};

export const showLoading = () => {
  return {
    type: SHOW_LOADING,
  };
};
