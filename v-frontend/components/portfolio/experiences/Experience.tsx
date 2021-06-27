import Image from "next/Image"
import {Experience} from "./types/Experience";

import styles from "../../../styles/Experience.module.scss"

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function ExperienceItem(props: Experience) {
    const startDateObject = new Date(props.startDate)
    const endDateObject = props.endDate ? new Date(props.endDate) : new Date()
    const startTime = `${monthNames[startDateObject.getMonth()]} ${startDateObject.getFullYear()}`
    const endTime = props.endDate ? `${monthNames[endDateObject.getMonth()]} ${endDateObject.getFullYear()}` : 'Present'

    const duration = getDuration(startDateObject, endDateObject);

    return (
        <div className={styles.experienceContainer}>
            <Image
                src={props.iconUrl}
                alt={`${props.name} logo`}
                height={"150px"}
                width={"150px"}
                className={styles.logo}
            />
            <div className={styles.details}>
                <h2>
                    { props.name }
                </h2>
                <h3>
                    { props.title }
                </h3>
                <p className={styles.subtext}>
                    {startTime} - {endTime}
                </p>
                <p className={styles.subtext}>
                    {duration}
                </p>
                <br/>
                <div className={styles.tech}>
                    { props.techStack.map((tech) => (
                        <svg className={styles.skillIcons} viewBox="0 0 128 128" dangerouslySetInnerHTML={{ __html: tech.icon}} key={tech.language}>
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    )
}

function getDuration(start: Date, end: Date): string {
    let months;
    let years;
    let result = ""
    months = (end.getFullYear() - start.getFullYear()) * 12;
    months = months + end.getMonth() - start.getMonth();

    if (months >= 12) {
        years = months / 12;
        months = months % 12;
        const yearSuffix = years < 2 ? "year" : "years"
        result += `${years} ${yearSuffix} `
    }
    const monthSuffix = months < 2 ? "month" : "months"
    result += `${months} ${monthSuffix}`
    return result
}