import React from 'react'
import './Allwork.css'
import { data } from '../../constants'
import { BsBoxArrowUpRight } from "react-icons/bs";

const WorkCard = ({ work: { imgUrl, projectTitle, url } }) => (
    <div data-aos="fade-up" className="work-card">
        <div className='project-card-hover'>
            <div className='workcard-img'>
                <img src={imgUrl} alt="website-shot" />
            </div>
            <div className="work-card_content">
                <h3>{projectTitle}</h3>
                <a className='allwork-link' href={url} target='blank'><BsBoxArrowUpRight fontSize={'18px'} />Visit website</a>
            </div>
        </div>
    </div>
);

const Allwork = () => {
    return (
        <section className='padding allwork'>

            <div className="project-card">
                {data.projects.map((work) => <WorkCard work={work} key={work.projectTitle} />)}
            </div>
        </section>
    )
}

export default Allwork
