import React from 'react';
import styles from './FieldGame.module.css';
import Settings from "../Settings/Settings";
import colorCreator from "../../utils/colorCreator";
import PageStart from "../PageStart/PageStart";

function FieldGameView({setMusic, audioElRef, fieldWidth,
                           setFieldSize, setTheme, newData, theme, isButtonPressed}) {

    let cells = newData.map((el, i) => {
        let newColor = colorCreator.getColors(el, theme);
        return <div key={i}
                    style={{backgroundColor: newColor}}
                    className={styles.cell}>
        </div>
    });


    return (
        <article>
            <section className={styles.audioSection}>
                <input type='file' accept='audio/*' onChange={setMusic} className={styles.input}/>
                <audio ref={audioElRef} controls={true} className={styles.audio}/>
            </section>
            <section className={styles.wrapper}>
                {isButtonPressed ? <article className={styles.container} style={fieldWidth}>
                    {cells}
                </article> : <PageStart/>}
                <Settings setFieldSize={setFieldSize} setTheme={setTheme}/>
            </section>
        </article>
    );
}

export default FieldGameView;