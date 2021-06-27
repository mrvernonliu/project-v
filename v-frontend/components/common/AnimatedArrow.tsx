import styles from '../../styles/AnimatedArrow.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AnimatedArrow() {
    return (
        <div>
            <FontAwesomeIcon className={styles.animatedArrow} icon={'arrow-down'} size={"2x"} />
        </div>
    )
}