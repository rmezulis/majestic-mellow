module.exports = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en', 'lv'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en',
    },
    async redirects() {
        return [
            {
                source: '/with-locale',
                destination: '/',
                permanent: false,
            },
        ]
    },
}