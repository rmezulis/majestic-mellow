import Footer from "../components/Layout/Footer";
import '../styles/globals.css';
import '../styles/template/bootstrap.min.css';
import '../styles/template/meanmenu.css';
import '../styles/template/nice-select.css';
import '../styles/template/normalize.css';
import '../styles/template/responsive.css';
import '../styles/template/style.css';
import '../styles/styles.css';
import ViewportProvider from "../components/Viewport/Viewport";
import {IntlProvider} from "react-intl";
import {useRouter} from "next/router";
import Latvian from "../messages/lv.json";
import English from "../messages/en.json";
import Header from "../components/Layout/Header";
import NextHead from "next/head";

function MyApp({Component, pageProps}) {
    const {locale, defaultLocale} = useRouter();
    let messages;
    switch (locale) {
        case 'lv':
            messages = Latvian;
            break;
        default:
            messages = English;
            break;
    }
    return (
        <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
            <ViewportProvider>
                <NextHead>
                    <link rel="icon" href="/favicon.ico" type="image/icon type"/>
                    <meta name="title" content="Latvian Sacred Birman Cattery - Majestic Mellow"/>
                </NextHead>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </ViewportProvider>
        </IntlProvider>
    )
}

export default MyApp;
