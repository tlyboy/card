import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import { transformShortVmodel } from '@vue-macros/short-vmodel'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          template: {
            compilerOptions: {
              nodeTransforms: [
                transformShortVmodel({
                  prefix: '$'
                })
              ]
            }
          }
        })
      }
    }),
    Pages(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      dirs: ['./src/stores']
    }),
    Components()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
