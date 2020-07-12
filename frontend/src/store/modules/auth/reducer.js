import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  active: false,
  activating: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.active = true;
        draft.activating = false;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_ACTIVATION': {
        draft.signed = false;
        draft.active = false;
        draft.activating = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        draft.activating = false;
        draft.active = false;
        break;
      }
      case '@auth/ACTIVATION_REQUEST': {
        draft.signed = false;
        draft.active = false;
        draft.activating = true;
        draft.loading = false;
        break;
      }
      case '@auth/ACTIVATION_SUCCESS': {
        draft.signed = true;
        draft.active = true;
        draft.activating = true;
        draft.loading = false;
        break;
      }
      case '@auth/ACTIVATION_FAILURE': {
        draft.signed = false;
        draft.active = false;
        draft.activating = false;
        break;
      }
      default:
    }
  });
}
