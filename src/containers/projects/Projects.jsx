import React from 'react'
import './Projects.css'
import { Headline } from '../../components'
import { data } from '../../constants'
import { BsBoxArrowUpRight } from "react-icons/bs";



const WorkCard = ({ work: { imgUrl, projectTitle, projectSub, url, tech } }) => (
    <div className="work-card">
        <div className='workcard-img'>
            <img src={imgUrl} alt="website-shot" />
        </div>
        <div className="work-card_content">
            <h3>{projectTitle}</h3>
            <p>{projectSub}</p>
            <span className='tech'>{tech}</span>
            <a href={url} target='blank'><BsBoxArrowUpRight className='work-icon'/></a>
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
        </section>
    )
}

export default Projects
