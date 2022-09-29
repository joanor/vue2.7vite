import { autoImport } from '@/libs/utils'

autoImport(import.meta.glob(['./*.js', '!./index.js'], { eager: true }))
