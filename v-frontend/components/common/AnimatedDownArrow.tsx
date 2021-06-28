import styles from '../../styles/AnimatedDownArrow.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AnimatedDownArrow() {
    return (
        <div>
            <FontAwesomeIcon className={styles.animatedArrow} icon={'arrow-down'} size={"2x"} />
        </div>
    )
}