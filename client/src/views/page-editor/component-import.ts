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

export const componentList: Array<IComponentsList> = reactive([
  {
    id: 1,
    name: '按钮',
    tag: 'my-button',
    props: {
      type: 'primary',
      text: '按钮',
      size: 'default',
      round: false,
      disabled: false,
    },
    icon: 'Mouse',
    isActive: false,
  },
  {
    id: 2,
    name: '链接',
    tag: 'my-link',
    props: {
      href: 'https://www.runoob.com/typescript/ts-map.html',
      text: '菜鸟教程',
      type: 'primary',
      underline: false,
      disabled: false,
    },
    icon: 'Link',
    isActive: false,
  },
  {
    id: 4,
    name: '图片',
    tag: 'my-img',
    icon: 'PictureFilled',
    props: {
      src: 'https://cdn.staticaly.com/gh/AdhereZ/image-hosting@master/img/image.53e4jna2hww0.jpg',
      alt: '',
      srcset: '',
      mimWidth: '',
      mimHeight: '',
    },
    isActive: false,
  },
  {
    id: 5,
    name: '视频',
    tag: 'my-video',
    icon: 'Film',
    props: {
      src: 'https://player.vimeo.com/external/650353455.sd.mp4?s=62239034048fbd225c5da8c3ecd4b7df5ff72664&profile_id=164&oauth_token_id=57447761',
      mimWidth: '',
      mimHeight: '',
    },
    isActive: false,
  },
  {
    id: 6,
    name: '输入框',
    tag: 'my-input',
    props: {
      placeholder: '请输入一段文字',
      // type: 'text',
      clearable: false,
      disabled: false,
      // size: 'default',
      readonly: false,
    },
    icon: 'ChatDotRound',
    isActive: false,
  },
  {
    id: 8,
    name: '文本',
    tag: 'my-text',
    props: {
      text: '文本',
      mimFontSize: 30,
      mimFontWeight: 400,
      mimColor: '',
    },
    icon: 'Message',
    isActive: false,
  },
  {
    id: 7,
    name: '表格',
    tag: 'my-table',
    props: {
      tableColumData: `[
        { 
          prop: 'name', 
          label: '名字', 
          sortable: false 
        },
        { 
          prop: 'age', 
          label: '年龄', 
          sortable: false 
        },
      ]`,
      tableData: `[
        { name: 'tom', age: 18 },
        { name: 'red', age: 20 },
        { name: 'bob', age: 40 },
      ]`,
      stripe: false,
      border: false,
      // size: 'default',
      needIndex: false,
    },
    icon: 'Menu',
    isActive: false,
  },
]);

export const boardList: Array<IComponentsList> = reactive([]);
