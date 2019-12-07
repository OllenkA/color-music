import React from 'react';
import styles from './FieldGame.module.css';
import Settings from "../settings/Settings";
import colorCreator from "../../utils/colorCreator";

function FieldGameView({setMusic, audioElRef, fieldWidth, setFieldSize, setTheme, newData, theme}) {

    let cells = newData.map((el, i) => {
        let newColor = colorCreator.getColors(el, theme);
        return <div key={i}
                    style={{backgroundColor: newColor,}}
            // style={{backgroundColor: el.color, opacity: el.brightness}}
                    className={styles.cell}>
        </div>
    });


   return (
        <article>
            <input type='file' accept='audio/*' onChange={setMusic} className={styles.input}/>
            <audio ref={audioElRef} controls={true} className={styles.audio}/>
            <section className={styles.wrapper}>
                <article className={styles.container} style={fieldWidth}>
                    {cells}
                </article>
                <Settings setField={setFieldSize} setTheme={setTheme}/>
            </section>
        </article>
    );
}

export default FieldGameView;