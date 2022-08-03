import { Module } from 'vuex';

const editor: Module<IEditorState, IUserState> = {
  namespaced: true,
  state() {
    const state = {
      boardList: JSON.parse(sessionStorage.getItem('boardList') || '[]'),
      active_id: parseInt(sessionStorage.getItem('active_id') || '-1'),
    };
    return state;
  },
  getters: {
    boardList: (state: IEditorState) => state.boardList,
  },
  actions: {},
  mutations: {
    /**
     *
     * @param state
     * @param boardList
     */
    SET_BOARD_LIST: (state: IEditorState, boardList: Array<IComponentsList>) => {
      sessionStorage.setItem('boardList', JSON.stringify(boardList));
      state.boardList = boardList;
    },
    SET_ACTIVE_ID: (state: IEditorState, active_id: number) => {
      sessionStorage.setItem('active_id', JSON.stringify(active_id));
      state.active_id = active_id;
    },
  },
};
export default editor;
