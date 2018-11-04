import React from 'react';
import css from './Form.scss';

class Form extends React.Component{
    render(){
        return <React.Fragment>
            <div className={css.form}>
            <p className={css.header}>CONTACT</p>
            <form>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="E-Mail"></input>
                <input type="text" placeholder="Message"></input>
            </form>
            <button>SEND</button>
            </div>
        </React.Fragment>;
    }
}

export default Form;