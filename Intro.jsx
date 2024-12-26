import React from 'react'
import './Intro.css'
import bg from '../../assets/Intro.jpg'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll' ;

const intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introtext">I'm
                <span className="introName"> Akanksha</span> 
                <br />Website Developer</span>
                <p className="intropara">I am a skilled web developer with experience in creating <br/>visually
                    Oppealling and user-friendly websites
                </p>
                <Link><button className="btn">
                    <img src={btnImg} alt="HireMe" className='btnImg' />Hire me</button></Link>
        </div>
        <img src={bg} alt="profile" className='bg'/>
    </section>
  )
}

export default intro
