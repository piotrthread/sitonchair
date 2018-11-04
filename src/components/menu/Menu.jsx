import React from "react";
import { CSSTransitionGroup } from 'react-transition-group';
import css from "./Menu.scss"

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu: this.props.menu,
            submenu: this.props.submenu,
            hamburgerActive: false,
            subMenuActive: false
        };
    }

    handleClick = () => {
        this.setState({hamburgerActive: !this.state.hamburgerActive});
    }
    handleClickSubmenu = () => {
        this.setState({subMenuActive: !this.state.subMenuActive});
    }

    render(){
        return <React.Fragment>
            <div className={css.menuContainer}>
            <p className={css.logo}>SIT <span className={css.on}>ON</span> CHAIR</p>
            <ul className={css.menuDesktop}>
                {this.state.menu.map((element, index) => {
                    return <li key={index}>{element}</li>;
                })}</ul>
            {this.state.hamburgerActive 
                ? <div className={css.closeMenu} onClick = {this.handleClick} /> 
                : <div className={css.hamburgerMenu} onClick = {this.handleClick} />}
            {this.state.hamburgerActive ? <ul className={css.menu}>
                {this.state.menu.map((element, index) => {
                    return <li key={index} onClick={index == 0 ? this.handleClickSubmenu : null}>{element}{index == 0 ? (this.state.subMenuActive ? <ul className={css.submenu}>{this.state.submenu.map((element, index) => {
                        return <li key={index}>{element}</li>;
                    })}</ul> : null) : null}</li>;
                })}
            </ul> : null}
        </div>

        
        </React.Fragment>;
    }
}

export default Menu;