import React, { Component } from 'react';
import html from "../img/html.png";
import css from "../img/css.png";
import bootstrap from "../img/bootstrap.png";
import sass from "../img/sass.png";
// import gulp from "../img/gulp.png";
import js from "../img/javascript.png";
import react from "../img/react.png";
import pug from "../img/pug.png";
import xd from "../img/xd.png";
import cpp from "../img/cpp.png";
import backImg from '../img/contact.jpg';
class Tech extends Component {
    state = {
        skills : [
            {
                class : "col-lg-3 mx-auto col-sm-3 my-3 skill",
                title : "Html",
                img : html
            },
            {
                class : "col-lg-3 mx-auto col-sm-3 my-3 skill",
                title : "Css",
                img : css
            },
            {
                class : "col-lg-3 mx-auto col-sm-3 my-3 skill",
                title : "Boostrap",
                img : bootstrap
            },
            {
                class : "col-lg-3 mx-auto col-sm-3 my-3 skill",
                title : "Sass",
                img : sass
            },

            {
                class : "col-lg-3 mx-auto col-sm-3 my-3 skill",
                title : "Pug",
                img : pug
            },
            {
                class : "col-lg-3 mx-auto col-sm-3 my-3 skill",
                title : "C++",
                img : cpp
            },
            {
                class : "col-lg-3 mx-auto col-sm-3 my-3 skill",
                title : "Js",
                img : js
            },
            {
                class : "col-lg-3 mx-auto col-sm-3 my-3 skill",
                title : "React",
                img : react
            },
            {
                class : "col-lg-3 mx-auto col-sm-3 my-3 skill",
                title : "Adobe Xd",
                img : xd
            },
        ]
    }
    render() {
        return (
            <div className="tech">
                <img className="img-tech" src={backImg} alt="background-tech"/>
                <div className="overlay-tech"></div>
                <div className="container">
                  
                    <div className="row content-skills">
                        {this.state.skills.map((item , index) => {
                           return(
                               <div className={item.class} key={index}>
                                    <div className="content-skill">
                                        <img src={item.img} alt={item.title} className="img-skill"/>
                                        <h4 className="text-center title-skill">{item.title}</h4>
                                    </div>
                               </div>
                           )
                        })};
                    </div>
                </div>
            </div>
        );
    }
}

export default Tech;