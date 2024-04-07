import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MyLayout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
}
