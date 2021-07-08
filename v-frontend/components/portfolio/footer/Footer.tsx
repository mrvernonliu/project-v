import styles from "../../../styles/Footer.module.scss";

export default function Footer() {

    return (
        <div className={styles.footerBackground}>
            <div className={styles.container}>
                <h1>Thanks for reading!</h1>
                <p>some message about ways to connect, need to to have linkedin and contact me button here</p>
            </div>
        </div>
    )
}