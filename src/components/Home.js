import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Logo from "../img/home.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
// import About from "../components/About";
class Home extends Component {
    render() {
        return (
            <div>
                 <img src={Logo} alt="Abdallah" className="photo-home"/>
                 <div className="overlay-home"></div>
               <div className="container">
                    <div className="row">
                            <div className="col-md-6 col-sm-12  title-job">
                                   <h2 className="intro-content">I am Abdallah Abdelghafar <br></br><span className="child-title">JR. Front End Developer </span> </h2>
                                   <Button  className="btn-cv" ><a href="https://hostmycv.s3.amazonaws.com/uploads/resume/file/89/mycv.pdf" target="_blank">MY - CV</a></Button>
                        
                            </div>
                        </div>
               </div>
               {/* <About/> */}
            </div>
        );
    }
}

export default Home;