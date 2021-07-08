import React from "react";
import Image from "next/Image"
import animations from "../../../styles/Animations.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedDownArrow from "../../common/AnimatedDownArrow";

import styles from "../../../styles/Splash.module.scss";

export default function SplashScreen() {
    const faceUrl = "/face.png"
    return (
        <div className={styles.splashBackground}>
            <div className={`${styles.container} ${animations.animationFadeIn}`}>
                <div className={styles.pictureContainer}>
                    <Image
                        src={faceUrl}
                        alt={"vernon portrait"}
                        layout="fill"
                        objectFit="cover"
                        className={styles.vernonImage}
                    />
                </div>
                <h1 className={styles.title}>
                    Vernon Liu
                </h1>
                <div className={styles.infoWrapper}>
                    <div id={styles.externalLinks}>
                    <span id={styles.linkedinWrapper}>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size={"lg"} />
                        &nbsp;
                        LinkedIn
                    </span>
                        &nbsp; - &nbsp;
                        <span id={styles.githubWrapper}>
                        <FontAwesomeIcon icon={['fab', 'github']} size={'lg'} />
                            &nbsp;
                            Github
                    </span>
                    </div>
                    <div id={styles.school}>University of Victoria - Software Engineering</div>
                    <div id={styles.professionTitle}>New Graduate</div>
                </div>
                <div className={styles.internalLinkWrapper}>
                    {/* TODO: Extract these to a component later */}
                    <a href={"/gallery/"} className={`${styles.buttonBlue} ${styles.blueGlow}`}>
                        Gallery
                    </a>
                    &nbsp;
                    <a href={"/contact"} className={styles.buttonPink}>
                        Contact
                    </a>
                </div>
                <div className={styles.arrowContainer}>
                    <AnimatedDownArrow />
                </div>
            </div>
        </div>
    )
}
