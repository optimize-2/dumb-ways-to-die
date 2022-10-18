import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { sidebar } from './sidebar'

module.exports = {
    lang: 'zh-CN',
    base: '/dumb-ways-to-die/',
    title: 'o2 的九金日志',
    description: '坐牢中',
    theme: defaultTheme({
        logo: '/images/avatar.png',
        repo: 'https://github.com/optimize-2/dumb-ways-to-die',
        docsDir: 'docs',
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '介绍',
                link: '/intro.html'
            },
            {
                text: '日志',
                link: '/log.html'
            },
            {
                text: '笔记',
                link: '/note.html'
            },
            {
                text: '路线',
                link: '/route/'
            }
        ],
        sidebar
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索'
                }
            },
            isSearchable: (page) => page.path !== '/',
            getExtraFields: (page) => page.frontmatter.tags ?? []
        })
    ]
}
