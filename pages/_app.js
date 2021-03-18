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

function MyApp({Component, pageProps}) {
    return (
        <ViewportProvider>
            <div className="vh-100">
                <head>
                    <link rel="stylesheet" href="../styles/font-awesome/css/font-awesome.min.css"/>
                </head>
                <Component {...pageProps} />
                <Footer/>
            </div>
        </ViewportProvider>
    )
}

export default MyApp;
