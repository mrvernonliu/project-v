import {Projects} from "./types/Projects";

import styles from "../../../styles/ProjectCard.module.scss";

interface ProjectCardProps {
    project: Projects
}

export default function ProjectCard(props: ProjectCardProps) {
    if (props.project) {
        return (
            <div className={styles.projectCard}>
                <h3>{props.project.name}</h3>
                <div>{props.project.description}</div>
            </div>
        )
    } else {
        return <div></div>
    }
}