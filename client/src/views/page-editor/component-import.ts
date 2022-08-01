import MyLink from '@/views/page-editor/page-components/my-link.vue';
import MyImg from '@/views/page-editor/page-components/my-img.vue';
import MyText from '@/views/page-editor/page-components/my-text.vue';
import MyButton from '@/views/page-editor/page-components/my-button.vue';
import MyInput from '@/views/page-editor/page-components/my-input.vue';
import MyTable from '@/views/page-editor/page-components/my-table.vue';
import MyVideo from '@/views/page-editor/page-components/my-video.vue';

export const componentMap = new Map();
componentMap.set('my-link', MyLink);
componentMap.set('my-img', MyImg);
componentMap.set('my-text', MyText);
componentMap.set('my-button', MyButton);
componentMap.set('my-input', MyInput);
componentMap.set('my-table', MyTable);
componentMap.set('my-video', MyVideo);

export interface componentsList {
  id: number;
  name: string;
  tag?: any;
  text?: string;
  props?: object;
  icon: string;
}
export const componentList: Array<componentsList> = reactive([
  {
    id: 1,
    name: '按钮',
    tag: 'my-button',
    props: { type: 'primary', text: '按钮' },
    icon: 'Mouse',
  },
  {
    id: 2,
    name: '链接',
    tag: 'my-link',
    props: { href: 'https://www.runoob.com/typescript/ts-map.html', text: '菜鸟教程' },
    icon: 'Link',
  },
  {
    id: 4,
    name: '图片',
    tag: 'my-img',
    icon: 'PictureFilled',
    props: {},
  },
  { id: 5, name: '视频', tag: 'my-video', icon: 'Film' },
  {
    id: 6,
    name: '输入框',
    tag: 'my-input',
    props: { placeholder: '请输入一段文字' },
    icon: 'ChatDotRound',
  },
  {
    id: 6,
    name: '文本',
    tag: 'my-text',
    props: {},
    icon: 'Message',
  },
  {
    id: 7,
    name: '表格',
    tag: 'my-table',
    props: {
      tableColumData: [
        { prop: 'name', label: '名字' },
        { prop: 'age', label: '年龄' },
      ],
      tableData: [
        { name: 'tom', age: 18 },
        { name: 'red', age: 20 },
        { name: 'bob', age: 40 },
      ],
    },
    icon: 'Menu',
  },
]);

export const boardList: Array<componentsList> = reactive([]);
