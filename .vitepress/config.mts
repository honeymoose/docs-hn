import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: './src',
    lang: 'zh-CN',
    title: "湖湘人文",
    description: "湖湘人文",
    head: [
        [
            'script',
            {},
            `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3NL9V');`
        ]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '主页', link: '/'},
            {text: 'iSharkFly', link: 'https://www.isharkfly.com'}
        ],

        sidebar: [
            {
                text: '',
                items: [
                    {
                        text: '湘南地区村落',
                        collapsed: true,
                        items: [
                            {text: '大皮口村', link: '/yong-zhou/ling-ling/da-pi-kou-cun/index'},
                            {text: '毛坪里村', link: '/yong-zhou/ling-ling/mao-ping-li-cun/index'}
                        ]
                    },
                    {text: '短文', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
