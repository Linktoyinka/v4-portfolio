import React from 'react'
import './Projects.css'
import { Headline } from '../../components'
import { data } from '../../constants'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';



const WorkCard = ({ work: { imgUrl, projectTitle, projectSub, url } }) => (
    <div data-aos="fade-up" className="work-card">
        <div className='workcard-img'>
            <img src={imgUrl} alt="website-shot" />
        </div>
        <div className="work-card_content">
            <h3>{projectTitle}</h3>
            <p>{projectSub}</p>
            <a href={url} target='blank'><BsBoxArrowUpRight fontSize={'18px'} className='work-icon'/></a>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section className='padding projects'>
            <Headline title='work' subtitle='Bringing stellar results for every client.' />

            <div className="project-card">
                {data.works.map((work) => <WorkCard work={work} key={work.projectTitle} />)}
            </div>
            
            <div data-aos="fade-up" className='home-link'>
                <Link className='pri-btn' to='/work' onClick={() => window.scrollTo(0, 0)}>See all</Link>
            </div>
            

        </section>
    )
}

export default Projects
