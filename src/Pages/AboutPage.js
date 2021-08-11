import React, {useEffect} from 'react'
import Tittle from '../Components/Tittle'
import PersonalInfo from '../Components/PersonalInfo';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import AOS from 'aos'
import 'aos/dist/aos.css'

function AboutPage() {
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <PersonalInfo />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer" data-aos="fade-up"
                      data-aos-anchor-placement="center-bottom">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={`60%`} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Lua'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'25%'} width={'25%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle
             title={'Services'} 
             span={'Services'} 
             />
            <div className="ServiceContainer" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                <ServicesSection
                 image={design} 
                 title={'Web design'} 
                 text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection
                 image={design} 
                 title={'Web design'} 
                 text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
