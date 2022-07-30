import { createStore, useStore as baseUseStore, Store } from 'vueX';
import { InjectionKey } from 'vue';
import state from './state';
import mutations from './mutations';
import actions from './actions';

export const key: InjectionKey<Store<State>> = Symbol();

export interface State {
  isLogin: boolean;
  isShowLoginModel: boolean;
}

export const store = createStore<State>({
  state,
  mutations,
  actions,
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
