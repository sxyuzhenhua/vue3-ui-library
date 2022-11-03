import langs1 from '../../i18n/lang.json'
import { useRoute, useRouter } from 'vitepress'
import { useLang } from './lang'
// const PREFERRED_LANG_KEY = 'preferred_lang'

// const language = useStorage(PREFERRED_LANG_KEY, 'en-US')
export const useTranslation = () => {
    const router = useRouter()
    const route = useRoute()
    const lang = useLang()
    const switchLang = (targetLang: string) => {
        if (lang.value === targetLang) return
    
        // language.value = targetLang
    
        const firstSlash = route.path.indexOf('/', 1)
    
        const goTo = `/${targetLang}/${route.path.slice(firstSlash + 1)}`
    
        router.go(goTo)
    }
    const langs: string[] = langs1;

    return {
        langs,
        switchLang
    }
}
