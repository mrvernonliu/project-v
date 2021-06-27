import styles from "../../styles/UnderConstructionView.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function UnderConstructionView() {
    return (
        <div className={styles.container}>
            <div>
                <FontAwesomeIcon icon={"tools"} size={"10x"} />
            </div>
            <div className={styles.constructionLabel}>
                <h1>Under Construction</h1>
            </div>
        </div>
    )
}