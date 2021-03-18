import React from "react";
import {viewportContext} from "./Viewport";


const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
}

export default useViewport;