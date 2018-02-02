//存放vuex的核心处理函数
export const fun = ({
  commit
}) => {
  commit({
    type: 'getMsg', //对应mutation.js中的getMsg方法
    msg: '我是修改后的数据...'
  });
};

export const setStateUserName = ({
  commit
}, stateUserName) => {
  commit({
    type: 'getStateUserName', //对应mutation.js中的getMsg方法
    stateUserName: stateUserName
  });
};