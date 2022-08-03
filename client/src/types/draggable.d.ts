interface IComponentsList {
  id: number;
  name: string;
  tag: string;
  text?: string;
  props?: object;
  icon: string;
  isActive: boolean;
}

interface IEditorState {
  boardList: Array;
  active_id: number;
}
