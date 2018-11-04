import React from 'react';
import Slide from './slide/Slide.jsx';

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 1,
            sliderLength: 3
        };
    }

    handleForward = () => {
        if(this.state.index == 3){
            this.setState({index:1});
        }else{
            this.setState({index: this.state.index + 1});
        }
    }

    handleBackward = () => {
        if(this.state.index == 1){
            this.setState({index:3});
        }else{
            this.setState({index: this.state.index - 1});
        }
    }

    render(){
        switch (this.state.index) {
            case 1:
                return <Slide forward={this.handleForward} backward={this.handleBackward} image={"./images/chair1.jpg"} title = {"CORDOBA CHAIR"} 
                        text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Reiciendis dolorum vero cum cupiditate voluptatum ex fuga autem debitis 
                        corporis hic eveniet commodi animi officiis, ea impedit optio! Corporis, 
                        numquam rerum."/>;
            break;
            case 2:
                return <Slide forward={this.handleForward} backward={this.handleBackward}  image={"./images/chair3.jpg"} title = {"ANDORA CHROME"} 
                        text = "Lorem ipsum, dolor sit amet ea impedit optio! Corporis consectetur adipisicing elit. 
                     Reiciendis dolorum vero cum cupiditate voluptatum ex fuga autem debitis 
                     corporis hic eveniet commodi animi officiis, 
                     numquam."/>;
            break;
            case 3:
                return <Slide forward={this.handleForward} backward={this.handleBackward}  image={"./images/chair2.jpg"} title = {"ELBA ARMCHAIR"} 
                      text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                       ex fuga autem debitis 
                     corporis hic eveniet commodi animi officiis, ea impedit optio! Corporis, 
                     numquam rerum Reiciendis dolorum vero cum cupiditate voluptatum."/>;
            break;
        
        }
    }
}

export default Slider;

