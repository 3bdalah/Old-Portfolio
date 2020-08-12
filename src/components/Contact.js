import React, { Component } from 'react';
import background from "../img/contact.jpg";
import {FaLocationArrow ,FaMobileAlt,FaLinkedin,FaGithubSquare} from "react-icons/fa"; 
import {FiMail} from "react-icons/fi";
class Contact extends Component {
    render() {
        return (
            <section className="py-5 contact">
                    <img  src={background} alt="About-photo" className="about-img" />
                <div className="overlay-contact"></div>
                <div className="container">
                      <div className="row">
                          <div className="col-10 mx-auto col-md-6 my-3 ">
                             
                          <div className="form-contact">
                                 <h2 className="title-contact">Contact Me</h2>
                              <h4 className="info-contact"><span className="location"><FaLocationArrow /> </span> : New Cairo, Cairo, Egypt</h4>
                              <h4 className="info-contact"><span className="mobile"><FaMobileAlt /></span>  : 01156448493</h4>
                              <h4 className="info-contact" ><span className="mail"><FiMail /></span>  : abdoabdalla763@gmail.com</h4>
                              <h4 className="info-contact"><span className="linkedin"><FaLinkedin /></span>  : <a href="https://www.linkedin.com/in/abdallah-abdelghafar-65136614b/" className="linkedin-prof" target="_blank">Abdallah Abdelghafar</a></h4>
                              <h4 className="info-contact"><span className="linkedin"><FaGithubSquare /></span>  : <a href="https://github.com/abdallllaa" className="linkedin-prof" target="_blank">Abdallah Abdelghafar</a></h4>
                              {/* <button type="submit" className="send">Send</button> */}
                          </div>
                          </div>

                      </div>
                </div>
            </section>
        );
    }
}

export default Contact;