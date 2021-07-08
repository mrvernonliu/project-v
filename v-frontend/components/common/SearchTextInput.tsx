import styles from "../../styles/SearchTextInput.module.scss"
import {ChangeEventHandler} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SearchTextInputProps {
    onChange: ChangeEventHandler
}

export function SearchTextInput(props: SearchTextInputProps) {
    return (
        <div className={styles.searchWrapper}>
            <FontAwesomeIcon icon={['fas', 'search']} className={styles.searchIcon}/>
            <input
                className={styles.searchInput}
                type="text"
                placeholder={"Looking for something?"}
                onChange={props.onChange}
            />

        </div>
    )
}