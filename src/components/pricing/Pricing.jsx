import React from 'react';
import css from './Pricing.scss';
import Price from './price/Price.jsx';

class Pricing extends React.Component{
    render(){
        return <React.Fragment>
            <div className={css.pricing}>
                <p className={css.header}>PRICING</p>
                <Price title={"BASIC PLAN"} price={"89"} options={["Zakup towaru + dowóz", "Serwis"]}/>
                <Price title={"STANDART PLAN"} price={"97"} options={["Zakup towaru + dowóz", "Serwis", "Gwarancja 5 lat"]}/>
                <Price title={"ADVANCED PLAN"} price={"211"} options={["Zakup towaru + dowóz", "Serwis", "Gwarancja 5 lat", "Porady projektanta"]}/>
            </div>
        </React.Fragment>;
    }
}

export default Pricing;