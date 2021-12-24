import React from "react";
import styles from './styles.module.scss'

const Card = (props) => {
    return <div className={styles.card}>{props.children}</div>;
};

export default Card;
