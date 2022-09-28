import UnocssPlugin from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'

export function configUnocssPlugin() {
  return UnocssPlugin({
    presets: [
      presetIcons({
        scale: 1.2,
        warn: true,
      }),
      presetUno(),
    ],
    variants: [
      {
        match: s => {
          if (s.startsWith('i-')) {
            return {
              matcher: s,
              selector: s => {
                return s.startsWith('.') ? `${s.slice(1)},${s}` : s
              },
            }
          }
        },
      },
    ],
  })
}
