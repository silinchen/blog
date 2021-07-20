import { createStore } from 'redux';
// 定义 reducer 函数
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
};
// 使用 createStore ，传入 reducer 函数，生成一个 store
const store = createStore(reducer);

export default store;