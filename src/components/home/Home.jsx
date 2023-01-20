import React from 'react';
import "./Home.css";
import SocialsHeader from "./SocialsHeader";
import ScrollDown from "./ScrollDown";
import Avatar from "../../assets/logo.svg"
import Window3d from "../SubComponents/Window3d"

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        {/* <img src={Avatar} alt="avatar" className="home__img" /> */}
        <div className='home__img'>
          <Window3d/>
        </div>
        <h1 className="home__name">Miguel Ángel Mireles Vázquez</h1>
        <span className="home__education">Mechatronics Engineer</span>

        <SocialsHeader />

        <a href="#contact" className="btn">Hire me</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home