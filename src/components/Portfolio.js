import React, { Component } from 'react';
import project1 from  "../img/porject1.jpg";
import project2 from  "../img/project2.jpg";
import project3 from  "../img/project3.jpg";
import project4 from  "../img/project4.jpg";
import project5 from  "../img/project5.jpg";
import project6 from  "../img/project6.jpg";
import backImg from '../img/contact.jpg';
class Port extends Component {

    state = {
        projects : [
            {
                
                url : "https://stupefied-colden-3fd401.netlify.app/",
                img : project1,
                name: "Realod Academy",
                info : "Sint deserunt mollit esse esse esse duis Lorem ad culpa ullamco duis.  "
            },
            {
                
                url : "https://abdallah3.netlify.app/",
                img : project2,
                name: "Landing Page",
                info : "Sint deserunt mollit esse esse esse duis Lorem ad culpa ullamco duis.  "
            },
            {
                
                url : "https://abdallah5.netlify.app/",
                img : project3,
                name: "MediHub",
                info : "Sint deserunt mollit esse esse esse duis Lorem ad culpa ullamco duis.  "
            },
            {
                
                url : "https://goofy-boyd-745170.netlify.app/",
                img : project4,
                name: "infinity Scroll",
                info : "Sint deserunt mollit esse esse esse duis Lorem ad culpa ullamco duis.  "
            },
            {
                
                url : "https://elegant-ramanujan-c548c6.netlify.app/",
                img : project5,
                name: "Array Methods",
                info : "Sint deserunt mollit esse esse esse duis Lorem ad culpa ullamco duis.  "
            },
            {
            
                url : "https://angry-turing-85d8d4.netlify.app/",
                img : project6,
                name: "Typing Game",
                info : "Sint deserunt mollit esse esse esse duis Lorem ad culpa ullamco duis.  "
            }
        ]
    }
    render() {
        return (
            <div className="portfolio">
                <img src={backImg} alt="backgroundPhoto" className="about-img" />
                <div className="overlay-portfolio"></div>
                <div className="container">
                 <div><h2>MY Projects</h2></div> 
                 <div className="row">
                  
                       {this.state.projects.map((item , index) => {
                           return(
                            <div  key={index} className="col-lg-4 col-md-6 mx-auto col-sm-12 my-3 parent-project">
                            <a href={item.url}  target="_blank" >
                               <div className="content-project">
                               <img src={item.img} alt="project-one"/>
                               <div className="overlay-project"></div>
                                    <div className="text-content">
                                         <h1 className="title-project">{item.name}</h1>
                                         <p className="description">{item.info}</p>
                                    </div>
                               </div>
                            </a>
                            </div>
                           );
                       })}
                    


                 </div>
                </div>
            </div>
        );
    }
}

export default Port;