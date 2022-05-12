import sidebar from './sidebar.js'
module.exports = {
    base: '/maoxuan/',
    title: "毛泽东选集",
    description: "伟大领袖毛主席的著作",
    themeConfig: {
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '正文', link: '/001-第一卷 国内革命战争时期/' }],
        sidebar: {
            "/": sidebar
        },
        repo: 'kumlowhup/maoxuan',
        repoLabel: '源码',
        docsRepo: 'https://github.com/kumlowhup/maoxuan',
        docsBranch: 'master',
    }
}