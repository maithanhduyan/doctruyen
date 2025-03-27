import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import navbar from './navbar'
import sidebar from './sidebar'

export default defineUserConfig({
  base: process.env.NODE_ENV === 'production' ? '/doctruyen/' : '/',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: navbar,
    sidebar: sidebar,
  }),

  bundler: viteBundler(),
})