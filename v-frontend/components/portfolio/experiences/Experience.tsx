import Image from "next/Image"
import {Experience} from "./types/Experience";

import styles from "../../../styles/Experience.module.scss"
import ReactTooltip from "react-tooltip";
import {useEffect, useState} from "react";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

interface ExperienceItemProps {
    experience: Experience
}

export default function ExperienceItem(props: ExperienceItemProps) {
    // Required for react tooltip bug https://stackoverflow.com/questions/64079321/react-tooltip-and-next-js-ssr-issue
    const [isTooltipVisible, setTooltipVisibility] = useState(false);

    useEffect(() => {
        setTooltipVisibility(true);
    }, []);

    const startDateObject = new Date(props.experience.startDate)
    const endDateObject = props.experience.endDate ? new Date(props.experience.endDate) : new Date()
    const startTime = `${monthNames[startDateObject.getMonth()]} ${startDateObject.getFullYear()}`
    const endTime = props.experience.endDate ? `${monthNames[endDateObject.getMonth()]} ${endDateObject.getFullYear()}` : 'Present'

    const duration = getDuration(startDateObject, endDateObject);
    return (
        <div className={styles.experienceContainer}>
            <Image
                src={props.experience.iconUrl}
                alt={`${props.experience.name} logo`}
                height={"500px"}
                width={"500px"}
                className={styles.logo}
            />
            <div className={styles.details}>
                <h2 className={styles.companyName}>
                    { props.experience.name }
                </h2>
                <h3 className={styles.companyTitle}>
                    { props.experience.title }
                </h3>
                <p className={styles.subtext}>
                    {startTime} - {endTime}
                </p>
                <p className={styles.subtext}>
                    {duration}
                </p>
                <br/>
                {   isTooltipVisible &&
                    <div className={styles.tech}>
                        { props.experience.techStack.map((tech) => (
                            <span key={tech.language + 'container'}>
                            <span
                                className={styles.skillIcons}
                                style={ tech.whiteBackground ? {backgroundColor: "white"} : {}}
                                data-tip
                                data-for={tech.language + 'experience'}
                                dangerouslySetInnerHTML={{ __html: tech.icon}}
                            />
                            <ReactTooltip id={tech.language + 'experience'} place="top" type="light" effect="solid" key={tech.language + 'experiencetooltip'}>
                                <h4>{tech.language}</h4>
                            </ReactTooltip>
                        </span>
                        ))}
                    </div>
                }
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