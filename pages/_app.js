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
        <>
            <ViewportProvider>
                <div className="vh-100">
                    <Component {...pageProps} />
                    <Footer/>
                </div>
            </ViewportProvider>
            <script src="/__/firebase/8.3.1/firebase-app.js"></script>

            <script src="/__/firebase/8.3.1/firebase-analytics.js"></script>

            <script src="/__/firebase/init.js"></script>
        </>
    )
}

export default MyApp;
