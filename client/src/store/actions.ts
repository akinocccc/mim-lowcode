import { ActionContext } from 'vuex';
import { login, register } from './../api/user';
export default {
  async register({ commit }: ActionContext<{}, {}>, user: IUser) {
    const res = await register(user);
    if (res?.code === 0) {
      commit('SET_USER_INFO', res.data);
    }
    return res;
  },
  async login({ commit }: ActionContext<{}, {}>, user: IUser) {
    const res = await login(user);
    if (res?.code === 0) {
      commit('SET_USER_INFO', res.data);
      commit('SET_TOKEN', res.token);
      commit('SET_IS_SHOW_USER_MODAL', false);
    }
    return res;
  },
  logout({ commit }: ActionContext<{}, {}>) {
    commit('SET_USER_INFO', {});
    commit('SET_TOKEN', '');
    commit('SET_IS_SHOW_USER_MODAL', true);
  },
};
