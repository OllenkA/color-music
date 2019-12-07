import React from 'react';
import styles from './Settings.module.css'

function Settings(props) {

    return (
        <article className={styles.settings}>
            <legend><h3>Choose field:</h3></legend>
                <label>
                    <h3>10*2</h3>
                    <input type='radio' onChange={(e) => props.setField(e.target.value)}
                           name='field'
                           value='102'/>
                </label>
            <label>
                <h3>5*5</h3>
                <input type='radio' onChange={(e) => props.setField(e.target.value)}
                       name='field'
                       value='55'/>
            </label>

            <legend><h3>Choose theme:</h3></legend>
            <label>
                <h3>Red-blue</h3>
                <input type='radio' onChange={(e) => props.setTheme(e.target.value)}
                       name='theme'
                       value='red-blue'/>
            </label>
            <label>
                <h3>Blue-green</h3>
                <input type='radio' onChange={(e) => props.setTheme(e.target.value)}
                       name='theme'
                       value='blue-green'/>
            </label>

        </article>
    );
}

export default Settings;
