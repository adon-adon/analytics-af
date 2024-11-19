import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetUno,
} from 'unocss'

import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno,
    presetAttributify,
    presetIcons(),
    presetRemToPx({
      baseFontSize: 4,
    }),
    presetMini(),
  ],
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
  ],
  theme:{
    colors:{
      'common-blue': '#26AEFE',
      'error': '#FF0000',
      'common-gray': '#5A5A5A',
    },
  }
})
