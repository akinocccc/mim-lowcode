import { createStore, useStore as baseUseStore, Store, mapState, Mapper } from 'vueX';
import { InjectionKey } from 'vue';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export const key: InjectionKey<Store<UserState>> = Symbol();

export const store = createStore<UserState>({
  state,
  mutations,
  actions,
  getters,
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}

export function useGetters(mapper: any) {
  const store = useStore();
  const storeStateFns = mapState<any>(mapper);
  const storeState: any = {};
  Object.keys(storeStateFns).forEach((fnKey) => {
    // console.log(fnKey);
    const fn = storeStateFns[fnKey].bind({ $store: store });
    storeState[fnKey] = computed(fn);
  });
  return storeState;
}
