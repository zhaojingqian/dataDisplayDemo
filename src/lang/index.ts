import { createI18n } from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh-cn'

const messages = {
    en: {
        ...enLocale
    },
    zh: {
        ...zhLocale
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'zh',
    messages
})

export default i18n

