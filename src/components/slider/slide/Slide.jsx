import React from 'react';
import css from './Slide.scss';


class Slide extends React.Component{
    render(){
        return <React.Fragment>
            <div className={css.slide}>
            <img src={this.props.image} className={css.image}/>
            <div className={css.description}>
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
            <button>Show More</button>
            </div>
            <div className={css.forward} onClick={this.props.forward}></div>
            <div className={css.backward}onClick={this.props.backward}></div>
            </div>
        </React.Fragment>;
    }
}

export default Slide;