# Cấu trúc Dự án như sau:

```
./
├── .github
│   └── workflows
│       └── deploy.yml
├── docs
│   ├── .vuepress
│   │   ├── config.js
│   │   ├── config.js.45661a34.mjs
│   │   ├── navbar.js
│   │   ├── sidebar.js
│   │   └── styles
│   │       └── index.scss
│   ├── markdown.md
│   └── nhung_cuoc_phieu_luu_cua_mit_dac_va_cac_ban
│       ├── chuong_1.md
│       └── chuong_2.md
├── package.json
└── pnpm-lock.yaml
```

# Danh sách chi tiết các file:

## File ./docs/.vuepress/navbar.js:
```javascript

export default [
  { text: 'Trang chủ', link: '/' },
  {
    text: 'Thể loại',
    children: [
      { text: 'Hành động', link: '/category/action/' },
      { text: 'Kinh dị', link: '/category/horror/' },
      { text: 'Tình cảm', link: '/category/romance/' },
      { text: 'Hài hước', link: '/category/comedy/' },

    ],
  },
]
```

## File ./docs/.vuepress/sidebar.js:
```javascript
export default {
  '/nhung_cuoc_phieu_luu_cua_mit_dac_va_cac_ban/': [
    {
      text: 'Danh sách chương',
      collapsable: false,
      children: [
        '/nhung_cuoc_phieu_luu_cua_mit_dac_va_cac_ban/chuong_1/',
        '/nhung_cuoc_phieu_luu_cua_mit_dac_va_cac_ban/chuong_2/',
      ],
    },
  ],
  '/category/': [
    {
      text: 'Danh sách thể loại',
      collapsable: false,
      children: [
        '/category/action/',
        '/category/horror/',
        '/category/romance/',
        '/category/comedy/',
      ],
    },
  ],
  '/': [
    // Sidebar cho trang chủ (có thể để trống hoặc thêm nội dung tùy ý)
    '',
  ],
}
```

## File ./docs/.vuepress/config.js:
```javascript
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
```

## File ./docs/.vuepress/config.js.45661a34.mjs:
```
// docs/.vuepress/config.js
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

// docs/.vuepress/navbar.js
var navbar_default = [
  { text: "Trang ch\u1EE7", link: "/" },
  {
    text: "Th\u1EC3 lo\u1EA1i",
    children: [
      { text: "H\xE0nh \u0111\u1ED9ng", link: "/category/action/" },
      { text: "Kinh d\u1ECB", link: "/category/horror/" },
      { text: "T\xECnh c\u1EA3m", link: "/category/romance/" },
      { text: "H\xE0i h\u01B0\u1EDBc", link: "/category/comedy/" }
    ]
  }
];

// docs/.vuepress/sidebar.js
var sidebar_default = {
  "/nhung_cuoc_phieu_luu_cua_mit_dac_va_cac_ban/": [
    {
      text: "Danh s\xE1ch ch\u01B0\u01A1ng",
      collapsable: false,
      children: [
        "/nhung_cuoc_phieu_luu_cua_mit_dac_va_cac_ban/chuong_1/",
        "/nhung_cuoc_phieu_luu_cua_mit_dac_va_cac_ban/chuong_2/"
      ]
    }
  ],
  "/category/": [
    {
      text: "Danh s\xE1ch th\u1EC3 lo\u1EA1i",
      collapsable: false,
      children: [
        "/category/action/",
        "/category/horror/",
        "/category/romance/",
        "/category/comedy/"
      ]
    }
  ],
  "/": [
    // Sidebar cho trang chủ (có thể để trống hoặc thêm nội dung tùy ý)
    ""
  ]
};

// docs/.vuepress/config.js
var config_default = defineUserConfig({
  base: process.env.NODE_ENV === "production" ? "/doctruyen/" : "/",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: navbar_default,
    sidebar: sidebar_default
  }),
  bundler: viteBundler()
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIiwgImRvY3MvLnZ1ZXByZXNzL25hdmJhci5qcyIsICJkb2NzLy52dWVwcmVzcy9zaWRlYmFyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL3dvcmtzcGFjZXMvZG9jdHJ1eWVuL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvd29ya3NwYWNlcy9kb2N0cnV5ZW4vZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy93b3Jrc3BhY2VzL2RvY3RydXllbi9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gJ0B2dWVwcmVzcy9idW5kbGVyLXZpdGUnXG5pbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tICd2dWVwcmVzcydcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInXG5pbXBvcnQgc2lkZWJhciBmcm9tICcuL3NpZGViYXInXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBiYXNlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJy9kb2N0cnV5ZW4vJyA6ICcvJyxcbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcbiAgdGhlbWU6IGRlZmF1bHRUaGVtZSh7XG4gICAgbmF2YmFyOiBuYXZiYXIsXG4gICAgc2lkZWJhcjogc2lkZWJhcixcbiAgfSksXG5cbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcbn0pIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9kb2N0cnV5ZW4vZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi93b3Jrc3BhY2VzL2RvY3RydXllbi9kb2NzLy52dWVwcmVzcy9uYXZiYXIuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3dvcmtzcGFjZXMvZG9jdHJ1eWVuL2RvY3MvLnZ1ZXByZXNzL25hdmJhci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgW1xuICB7IHRleHQ6ICdUcmFuZyBjaFx1MUVFNycsIGxpbms6ICcvJyB9LFxuICB7XG4gICAgdGV4dDogJ1RoXHUxRUMzIGxvXHUxRUExaScsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgdGV4dDogJ0hcdTAwRTBuaCBcdTAxMTFcdTFFRDluZycsIGxpbms6ICcvY2F0ZWdvcnkvYWN0aW9uLycgfSxcbiAgICAgIHsgdGV4dDogJ0tpbmggZFx1MUVDQicsIGxpbms6ICcvY2F0ZWdvcnkvaG9ycm9yLycgfSxcbiAgICAgIHsgdGV4dDogJ1RcdTAwRUNuaCBjXHUxRUEzbScsIGxpbms6ICcvY2F0ZWdvcnkvcm9tYW5jZS8nIH0sXG4gICAgICB7IHRleHQ6ICdIXHUwMEUwaSBoXHUwMUIwXHUxRURCYycsIGxpbms6ICcvY2F0ZWdvcnkvY29tZWR5LycgfSxcblxuICAgIF0sXG4gIH0sXG5dIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9kb2N0cnV5ZW4vZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi93b3Jrc3BhY2VzL2RvY3RydXllbi9kb2NzLy52dWVwcmVzcy9zaWRlYmFyLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy93b3Jrc3BhY2VzL2RvY3RydXllbi9kb2NzLy52dWVwcmVzcy9zaWRlYmFyLmpzXCI7ZXhwb3J0IGRlZmF1bHQge1xuICAnL25odW5nX2N1b2NfcGhpZXVfbHV1X2N1YV9taXRfZGFjX3ZhX2NhY19iYW4vJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdEYW5oIHNcdTAwRTFjaCBjaFx1MDFCMFx1MDFBMW5nJyxcbiAgICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICcvbmh1bmdfY3VvY19waGlldV9sdXVfY3VhX21pdF9kYWNfdmFfY2FjX2Jhbi9jaHVvbmdfMS8nLFxuICAgICAgICAnL25odW5nX2N1b2NfcGhpZXVfbHV1X2N1YV9taXRfZGFjX3ZhX2NhY19iYW4vY2h1b25nXzIvJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgJy9jYXRlZ29yeS8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0Rhbmggc1x1MDBFMWNoIHRoXHUxRUMzIGxvXHUxRUExaScsXG4gICAgICBjb2xsYXBzYWJsZTogZmFsc2UsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICAnL2NhdGVnb3J5L2FjdGlvbi8nLFxuICAgICAgICAnL2NhdGVnb3J5L2hvcnJvci8nLFxuICAgICAgICAnL2NhdGVnb3J5L3JvbWFuY2UvJyxcbiAgICAgICAgJy9jYXRlZ29yeS9jb21lZHkvJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgXSxcbiAgJy8nOiBbXG4gICAgLy8gU2lkZWJhciBjaG8gdHJhbmcgY2hcdTFFRTcgKGNcdTAwRjMgdGhcdTFFQzMgXHUwMTExXHUxRUMzIHRyXHUxRUQxbmcgaG9cdTFFQjdjIHRoXHUwMEVBbSBuXHUxRUQ5aSBkdW5nIHRcdTAwRjl5IFx1MDBGRClcbiAgICAnJyxcbiAgXSxcbn0iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9SLFNBQVMsbUJBQW1CO0FBQ2hULFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsd0JBQXdCOzs7QUNEakMsSUFBTyxpQkFBUTtBQUFBLEVBQ2IsRUFBRSxNQUFNLGtCQUFhLE1BQU0sSUFBSTtBQUFBLEVBQy9CO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDUixFQUFFLE1BQU0sMEJBQWEsTUFBTSxvQkFBb0I7QUFBQSxNQUMvQyxFQUFFLE1BQU0sZ0JBQVcsTUFBTSxvQkFBb0I7QUFBQSxNQUM3QyxFQUFFLE1BQU0sb0JBQVksTUFBTSxxQkFBcUI7QUFBQSxNQUMvQyxFQUFFLE1BQU0seUJBQVksTUFBTSxvQkFBb0I7QUFBQSxJQUVoRDtBQUFBLEVBQ0Y7QUFDRjs7O0FDYnNSLElBQU8sa0JBQVE7QUFBQSxFQUNuUyxpREFBaUQ7QUFBQSxJQUMvQztBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQTtBQUFBLElBRUg7QUFBQSxFQUNGO0FBQ0Y7OztBRnJCQSxJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU0sUUFBUSxJQUFJLGFBQWEsZUFBZSxnQkFBZ0I7QUFBQSxFQUM5RCxTQUFTLFlBQVk7QUFBQSxFQUNyQixPQUFPLGFBQWE7QUFBQSxJQUNsQixRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUEsRUFDWCxDQUFDO0FBQUEsRUFFRCxTQUFTLFlBQVk7QUFDdkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

```

