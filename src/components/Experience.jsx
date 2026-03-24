import { ExperienceCard } from "./ExperienceCard"
import { ExperienceIcon } from "./Icons"

import '../css/Experience.css'

export function Experience () {
    const EXPERIENCES = [
        {
            title: 'Prácticas como técnico de reparación de dispositivos Apple',
            company: 'Rosellimac',
            year: '2022',
            description: 'Reparación y mantenimiento de dispositivos Apple (iphones, macbooks, Imacs etc.)'
        },
        {
            title: 'Desarrollador Web Frontend',
            company: 'Autorepuestos Valdemoro',
            year: '2023',
            description: 'Realización de aplicaciones web sencillas y funcionales a diferentes clientes.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            title: 'Prácticas como desarrollador web',
            company: 'Istel',
            year: '2024',
            description: 'Desarrollo de una aplicación web full stack para la gestión de los cuadros de luz de la empresa haciendo uso de tecnologías modernas tanto en front-end como back-end.',
            technologies: ['React', 'Node.js', 'MySQL']
        }
    ]

    return (
        <>
            <div id="experience" className="experiences">
                <div className="experiences_title">
                    <ExperienceIcon />
                    <h2>Experiencia</h2>
                </div>
                <ul className="experiences_container">
                {
                    EXPERIENCES.map((experience, index) => (
                        <li key={index} className="experience_card">
                            <ExperienceCard 
                                key={index} 
                                title={experience.title} 
                                company={experience.company} 
                                year={experience.year}
                                description={experience.description} 
                                technologies={experience?.technologies}
                            />
                        </li>
                    ))
                }
                </ul>
            </div>
        </>
    )
}
