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

function MyApp({Component, pageProps}) {
    const {locale} = useRouter();
    let messages;
    switch (locale){
        case 'lv':
            messages = Latvian;
            break;
        default:
            messages = English;
            break;
    }
    return (
        <IntlProvider messages={messages} locale={locale}>
        <ViewportProvider>
            <div className="vh-100">
                <Component {...pageProps} />
                <Footer/>
            </div>
        </ViewportProvider>
        </IntlProvider>
    )
}

export default MyApp;
