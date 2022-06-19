import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "./actiontypes";

const initState = {
  auth: false
};

const Registerreducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_REQUEST:
      return {
        auth: false
      };
    case REGISTER_SUCCESS:
      return {
        auth: true
      };
    case REGISTER_FAILURE:
      return {
        auth: false
      };
    default:
      return state;
  }
};

export default Registerreducer;
