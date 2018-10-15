import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import zh from './zh'
import en from './en'
// if (process.env.NODE_ENV === 'development') {
//   Vue.use(VueI18n)
// }
Vue.use(VueI18n)

const messages = {
  zh: {
    ...zh,
    ...zhLocale
  },
  en: {
    ...en,
    ...enLocale
  }
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

export default i18n
