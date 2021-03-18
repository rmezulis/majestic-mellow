import Footer from "../components/Layout/Footer";
import '../styles/globals.css';
import '../styles/template/bootstrap.min.css';
import '../styles/template/meanmenu.css';
import '../styles/template/nice-select.css';
import '../styles/template/normalize.css';
import '../styles/template/responsive.css';
import '../styles/template/style.css';
import '../styles/styles.css';
import Header from "../components/Layout/Header";

function MyApp({Component, pageProps}) {
    return (
        <div className="vh-100">
            <Component {...pageProps} />
            <Footer/>
        </div>
    )
}

export default MyApp;
