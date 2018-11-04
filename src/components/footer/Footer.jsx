import React from 'react';
import css from "./Footer.scss";

class Footer extends React.Component{
    render(){
        return <React.Fragment>
            <div className={css.footer}>
                <div className={css.icons}>
                <img src="./images/fb.svg"/>
                <img src="./images/in.svg"/>
                <img src="./images/tw.svg"/>
                </div>
                <p>Copyright: Piotr Thread</p>
            </div>
        </React.Fragment>;
    }
}

export default Footer;