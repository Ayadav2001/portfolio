import React from 'react'
import './Working.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Working = () => {
  return (
    <section id='work'>
       <h2 className="workTitle"> My Portfolio</h2>
        <span className="workDesc">I take a paying attention to the smallest details and making 
            sure that my work is pixel perfect. I am excited to bring my skills and experience to 
            help businesses achieve their goals and create a strong online presence.
        </span>
        <div className="workImgs">
            <img src={Portfolio1} alt="Portfolio1" className="workImg" />
            <img src={Portfolio2} alt="Portfolio2" className="workImg" />
            <img src={Portfolio3} alt="Portfolio3" className="workImg" />
            <img src={Portfolio4} alt="Portfolio4" className="workImg" />
            <img src={Portfolio5} alt="Portfolio5" className="workImg" />
            <img src={Portfolio6} alt="Portfolio6" className="workImg" />
        </div>
        <button className="workBtn">See More</button>

    </section>
  )
}

export default Working
