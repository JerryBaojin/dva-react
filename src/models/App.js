import {getTotal} from '../services/DashBord';

export default {

  namespace: 'App',

  state: {
    a:1
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
        console.log(history)
    },
  },

  effects: {
    *getTotal({ payload }, { call, put }) {  // eslint-disable-line
      const response=yield call(getTotal,payload);

      yield put({ type: 'save',payload:response});
    },
  },

  reducers: {
    save(state, action) {
      console.log({ ...state, ...action.payload })
      return { ...state, ...action.payload };
    },
  },

};
