import React, { createContext, useState } from 'react';

export const ControlViewsContext = createContext();

const ControlViewsContextProvider = ({ children }) => {
    //State
    const [views, setViews] = useState({
        view: "home"
    });

    //Function onClick for Nav Bar
    const viewHome = (event) => {
        event.preventDefault();
        setViews({
            ...views,
            view: "home"
        })
    }

    const viewAbout = (event) => {
        event.preventDefault();
        setViews({
            ...views,
            view: "about"
        })
    }

    const viewContact= (event) => {
        event.preventDefault();
        setViews({
            ...views,
            view: "contact"
        })
    }

    const viewHelp = (event) => {
        event.preventDefault();
        setViews({
            ...views,
            view: "help"
        })
    }

    

    //ContextData
    const viewsDataContext = {
        views,
        viewAbout,
        viewHome,
        viewContact,
        viewHelp
    };

    //Return Provider
    return(
        <ControlViewsContext.Provider value={viewsDataContext}>
            {children}
        </ControlViewsContext.Provider>
    )
}

export default ControlViewsContextProvider;