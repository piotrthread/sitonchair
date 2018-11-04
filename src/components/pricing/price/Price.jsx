import React from 'react';
import css from './Price.scss';

class Price extends React.Component{
    render(){
        return <React.Fragment>
            <div className={css.price}>
                <h1>{this.props.title}</h1>
                <div className={css.p}><span>{this.props.price}</span><span>PLN/MSC</span></div>
                <ul>
                    {this.props.options.map((element,index) => {
                        return <li key={index}>{element}</li>;
                    })}
                </ul>
                <button>BUY IT</button>
            </div>
        </React.Fragment>;
    }
}

export default Price;