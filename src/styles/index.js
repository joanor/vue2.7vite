import 'uno.css'
import 'normalize.css'
import { autoImport } from '@/libs/utils'
import 'element-ui/lib/theme-chalk/index.css'

autoImport(import.meta.glob(['./*', '!./var.scss'], { eager: true }))
