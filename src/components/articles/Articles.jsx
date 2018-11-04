import React from 'react';
import Article from '../articles/article/Article.jsx';
import css from './Articles.scss';

class Articles extends React.Component{
    render(){
        return <React.Fragment>
            <div className={css.articles}>
                <Article img={"./images/box1_img.jpg"} title={"Personal Coach"} text={false}/>
                <Article img={"./images/box2_img.jpg"} title={"Nutrition Tips"} text={false}/>
                <Article img={false} title={"Get Motivated!"} text={"Strength does not come from the physical capacity. It comes from an indomitable will."}/>
            </div>
        </React.Fragment>;
    }
}

export default Articles;

