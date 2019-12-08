import React from 'react';
import styles from './Settings.module.css'
import ChooseTheme from "../ChooseTheme/ChooseTheme";



function Settings(props) {

    return (
        <article className={styles.settings}>

            <fieldset>
                <legend><h3>Choose size field:</h3></legend>
                <article className={styles.choose}>
                    <label>
                        <span>10*2</span>
                        <input type='radio' onChange={(e) => props.setField(e.target.value)}
                               name='field'
                               value='102'/>
                    </label>
                    <label>
                        <span>5*5</span>
                        <input type='radio' onChange={(e) => props.setField(e.target.value)}
                               name='field'
                               value='55'/>
                    </label>
                    <label>
                        <span>10*10</span>
                        <input type='radio' onChange={(e) => props.setField(e.target.value)}
                               name='field'
                               value='1010'/>
                    </label>
                    <label>
                        <span>12*8</span>
                        <input type='radio' onChange={(e) => props.setField(e.target.value)}
                               name='field'
                               value='128'/>
                    </label>
                    <label>
                        <span>16*9</span>
                        <input type='radio' onChange={(e) => props.setField(e.target.value)}
                               name='field'
                               value='169'/>
                    </label>
                </article>
            </fieldset>
            <ChooseTheme setTheme={props.setTheme}/>
        </article>
    );
}

export default Settings;