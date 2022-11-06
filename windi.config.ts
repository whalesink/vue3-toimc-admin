import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'
import lineClampPlugin from 'windicss/plugin/line-clamp'

export default defineConfig({
  theme: {
    extend: {}
  },
  plugins: [formsPlugin, lineClampPlugin],
  shortcuts: {}
})
