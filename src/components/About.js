import React, { Component } from 'react';
import logo from "../img/contact.jpg";
class About extends Component {
    render() {
        return (
            <section className="py-5">
                <img  src={logo} alt="About-photo" className="about-img" />
                <div className="overlay-about"></div>
                <div className="container">
                      <div className="row">
                          <div className="col-10 mx-auto col-md-6 my-3 ">
                              <h2 className="title-about">About Me</h2>
                          <p className="text-lead  my-3">
                          I'm a software Engineer who is passionate about creating new things, And i'm really big fan to linux. Some technologies I enjoy working with include Javascript, ReactJS, And other frontend stuff 🚀.
                          </p>
                          </div>

                      </div>
                </div>
            </section>
        );
    }
}

export default About;