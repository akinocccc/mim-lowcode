import { ActionContext } from 'vuex';
import { login, register } from './../api/user';
export default {
  async register({ commit }: ActionContext<{}, {}>, user: User) {
    const res = await register(user);
    if (res?.code === 0) {
      commit('SET_USER_INFO', res.data);
    }
    return res;
  },
  async login({ commit }: ActionContext<{}, {}>, user: User) {
    const res = await login(user);
    if (res?.code === 0) {
      commit('SET_USER_INFO', res.data);
      commit('SET_IS_LOGIN', true);
      commit('SET_IS_SHOW_USER_MODEL', false);
    }
    return res;
  },
  logout({ commit }: ActionContext<{}, {}>) {
    commit('SET_USER_INFO', {});
    commit('SET_IS_LOGIN', false);
    commit('SET_IS_SHOW_USER_MODEL', true);
  },
};
