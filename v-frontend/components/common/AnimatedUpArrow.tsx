import styles from '../../styles/AnimatedUpArrow.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AnimatedUpArrow() {
    return (
        <div>
            <FontAwesomeIcon className={styles.animatedArrow} icon={'arrow-up'} size={"2x"} />
        </div>
    )
}