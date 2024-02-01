import React from "react";
import Card from "../Card/Card.jsx";
import Footer from "../Footer/Footer.jsx";
import Contact from "../Contact/Contact.jsx";
import Testimonial from "../Testimonial/Testimonial.jsx";
import Faq from "../FAQ/Faq.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";
import Feature from "../Feature/Feature.jsx";
import IndividualFeat from "../IndividualFeat/IndividualFeat.jsx";
import style from "./Landing.module.css";

const Landing = () => {
  const person = {
    name1: "Arshil Amaan Ansari",
    name2: "Dhatri Dwivedi",
    name3: "Shantanu Saini",
  };
  const arshil =   '../src/images/arshil.jpg';
  // const arshil =   '../../images/arshil.jpg';
  return (
    <>
      <Navbar />    {/* done */}

      {/* Hero Section */}
      <Hero />  {/* done */}

      {/* Feature Section */}
      <Feature />  {/* done */}

      {/* Individual Feature Section 1 */}
      <IndividualFeat />

      {/* Testimonial Section */}
      <Testimonial />

      {/* FAQ Section */}
      <section>
        <Faq />
      </section>

      {/* Team Section */}
      <section className={style.sec}>
        <div className="container mx-auto">
          {/* {`${style.container} ${style.marg}`} */}
          <h2 className={style.heading}>Meet Our Team Member</h2>
          <div className={style["card-hold"]}>
            <Card name={person.name1} designation={'Developer'} clsname={ "arshil" } />
            <Card name={person.name2} designation={'Creative Designer'} clsname={ "dhatri" } />
            <Card name={person.name3} designation={'Developer'} clsname={ "shantanu" } />
          </div>
        </div>
      </section>   {/* Done */}

      {/* Contact Form Section */}
      <Contact />   {/* done */}

      {/* Footer Section */}
      <Footer />   {/* done */}
    </>
  );
};

export default Landing;
