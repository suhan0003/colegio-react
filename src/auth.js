
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const LOGOUT = 'LOGOUT';

export const logout = () => ({
  type: LOGOUT,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Reducer
const initialState = {
  token: localStorage.getItem('token') || null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:     
      localStorage.setItem('token', action.payload);  
      return {
        ...state,
        token: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload,
      };
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          error: null,
        };

    default:
      return state;
  }
};
