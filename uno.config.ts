import { defineConfig, presetWebFonts } from 'unocss'

export default defineConfig({
    presets: [
      presetWebFonts({
        provider: 'google',
        fonts: {
          firamono: 'Fira Mono:400',
          roboto: 'Roboto:200,400,700',
        },
      })
    ]  
})