//改版store中各种状态的地方
export const getMsg = (state, payload) => {
  state.msg = payload.msg;
};
export const getStateUserName = (state, payload) => {
  state.stateUserName = payload.stateUserName;
};