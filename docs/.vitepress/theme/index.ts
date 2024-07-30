import DefaultTheme from 'vitepress/theme'
import './custom.css'
// @ts-expect-error missing types
import MyLayout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
}
