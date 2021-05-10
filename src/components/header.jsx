/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useContext} from 'react';
import { ControlViewsContext } from '../context/controlViews';
import LSLLogo from '../images/LSL Logo.png';

const Header = () => {

    const {viewsValueSet} = useContext(ControlViewsContext);

    const viewControlHome = (e) => {
        viewsValueSet(e, "home");
    }
    const viewControlAbout = (e) => {
        viewsValueSet(e, "about");
    }
    const viewControlContact = (e) => {
        viewsValueSet(e, "contact");
    }
    const viewControlHelp = (e) => {
        viewsValueSet(e, "help");
    }


    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={LSLLogo} style={{width:"3%"}}></img>
        <a className="navbar-brand" href="#">LifeScience Logistics</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="Home" onClick={viewControlHome}>Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="About" onClick={viewControlAbout}>About</a>
                <a className="nav-item nav-link" href="Contact" onClick={viewControlContact}>Contact</a>
                <a className="nav-item nav-link" href="Help" onClick={viewControlHelp}>Help</a>
            </div>
        </div>
    </nav>
    )
}

export default Header;