import React from 'react';
import styles from './Settings.module.css'
import ChooseTheme from "../ChooseTheme/ChooseTheme";
import ChooseSizeField from "../ChooseSizeField/ChooseSizeField";


function Settings(props) {
    return (
        <article className={styles.settings}>
            <ChooseSizeField setFieldSize={props.setFieldSize}/>
            <ChooseTheme setTheme={props.setTheme}/>
        </article>
    );
}

export default Settings;