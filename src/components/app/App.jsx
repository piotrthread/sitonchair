import React from 'react';
import css from "./App.scss";
import Menu from "../menu/Menu.jsx";
import Slider from "../slider/Slider.jsx";
import Articles from '../articles/Articles.jsx';
import Pricing from '../pricing/Pricing.jsx';
import Form from '../form/Form.jsx';
import Footer from '../footer/Footer.jsx';

class App extends React.Component{
    render(){
        return <React.Fragment>
                <nav>
                    <div className={css.container}>
                    <Menu menu = {["OUR TRAINERS", "MOTIVATION", "NUTRITION", "GET STARTED"]} 
                          submenu = {["Mark", "Jane", "Lucas"]}/>
                    </div>
                </nav>
                <section>
                <div className={css.container}>
                    <Slider />
                </div>
                </section>
                
                <section>
                    <div className={css.container}>
                        <Articles />
                    </div>
                </section>
                <section className={css.pricing}>
                    <div className={css.container}>
                        <Pricing />
                    </div>
                </section>
                <section>
                <div className={css.container}>
                        <Form />
                    </div>
                </section>
                <footer>
                <div className={css.container}>
                    <Footer />
                </div>
                </footer>
        </React.Fragment>;
    }
}

export default App;