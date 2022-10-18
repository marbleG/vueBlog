module.exports = {
    base: "/vueblog/",
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'java', link: '/zh/java/'},
            {text: 'redis', link: '/redis/'},
            {text: 'foo', link: '/foo/'},
            {text: '百度一下', link: 'https://www.baidu.com'},
            {text: 'google', link: 'https://www.google.com'},
        ],
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],
            '/redis/': [
                '',  /* /redis/README.html */
                'aof',  /* /redis/aof.html */
                'rdb'   /* /redis/chapter2.html */
            ],
        }
    },
    // sidebar: 'auto'
}
