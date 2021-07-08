import {Projects} from "./types/Projects";
import ProjectCard from "./ProjectCard";

import styles from "../../../styles/ProjectView.module.scss";

interface ProjectProps {
    projects: Projects[]
}
export default function ProjectView(props: ProjectProps) {
    console.log(props)
    return (
        <div>
            <h2>Projects</h2>
            <div className={styles.projectCardContainer}>
                {
                    props.projects && props.projects.map((project) => {
                        return <ProjectCard project={project} key={project.name}/>
                    })
                }
            </div>
        </div>
    )
}