import React from "react";
import Loader from "../Loader";

export const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {

    if (typeof window === "undefined")
    {
        return <Loader/>
    }
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    );
};

export default ViewportProvider;