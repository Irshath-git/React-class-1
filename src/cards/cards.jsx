import React,{Component} from "react";
import Card from './cardsUI'


import img1 from '../assets/mov_1.jpg';
import img2 from '../assets/mov_2.jpg';
import img3 from '../assets/mov_3.jpg';

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3 sm-6">
                        <Card imgsrc={img1} title="MOONFALL"/>
                    </div>
                    <div className="col-md-3 sm-6">
                        <Card imgsrc={img2} title="THE GRAY MAN"/>
                    </div>
                    <div className="col-md-3 sm-6">
                        <Card imgsrc={img3} title="TRAIN TO BUSAN"/>
                    </div>
                    <div className="col-md-3 sm-6">
                        <Card imgsrc={img3} title="TRAIN TO BUSAN"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;