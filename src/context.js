import React, { createContext, useState } from "react";

const CoordsContext = createContext(null);
export { CoordsContext };
const Context = ({ children }) => {
    const [coords, setCoords] = useState([43.158157, 20.346822]);
    return (
        <CoordsContext.Provider value={{ coords, setCoords }}>
            {children}
        </CoordsContext.Provider>
    );
};

export default Context;