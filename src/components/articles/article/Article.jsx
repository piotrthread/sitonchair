import React from 'react';
import css from './Article.scss';

class Article extends React.Component{
    render(){
        return <React.Fragment>
            <div className={css.article} style={{backgroundImage: this.props.img ? `url(${this.props.img})` : null}}>
                <div className={css.box}>
                <h3>{this.props.title}</h3>
                </div>
                {this.props.text ? <p>{this.props.text}</p> : null}
            </div>
        </React.Fragment>;
    }
}

export default Article;