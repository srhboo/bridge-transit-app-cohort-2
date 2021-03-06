import { ACTION_TYPES } from '../../constants/ActionTypes';

const DEFAULT_STATE = {
  event: null,
  isFetching: false,
  didInvalidate: false,
};

export const eventReducer = (state = DEFAULT_STATE, action) => {

  switch(action.type) {
    case ACTION_TYPES.GET_EVENT:
      return {...state, isFetching: true};
    case ACTION_TYPES.SET_EVENT:
      return {...state, event: action.payload, isFetching: false, didInvalidate: false}
    case ACTION_TYPES.SET_EVENT_INVALIDATE:
      return {...state, isFetching: false, didInvalidate: true, event: null}
    default:
      return state;
  }
}