import React, { createContext, useState } from 'react';

export const ControlViewsContext = createContext();

const ControlViewsContextProvider = ({ children }) => {
    //State
    const [views, setViews] = useState({
        view: "home"
    });

    //Function onClick for Nav Bar
    const changeView = (event) => {
        event.preventDefault();
        setViews({
            ...views,
            view: "about"
        })
    }

    //ContextData
    const viewsDataContext = {
        views,
        changeView
    };

    //Return Provider
    return(
        <ControlViewsContext.Provider value={viewsDataContext}>
            {children}
        </ControlViewsContext.Provider>
    )
}

export default ControlViewsContextProvider;