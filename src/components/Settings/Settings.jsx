import React from 'react';
import styles from './Settings.module.css'



function Settings(props) {

    return (
        <article className={styles.settings}>

            <fieldset>
                <legend><h3>Choose size field:</h3></legend>
                <article className={styles.choose}>
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
                    <label>
                        <h3>10*10</h3>
                        <input type='radio' onChange={(e) => props.setField(e.target.value)}
                               name='field'
                               value='1010'/>
                    </label>
                    <label>
                        <h3>12*8</h3>
                        <input type='radio' onChange={(e) => props.setField(e.target.value)}
                               name='field'
                               value='128'/>
                    </label>
                    <label>
                        <h3>16*9</h3>
                        <input type='radio' onChange={(e) => props.setField(e.target.value)}
                               name='field'
                               value='169'/>
                    </label>
                </article>
            </fieldset>

            <fieldset>
                <legend><h3>Choose color theme:</h3></legend>
                <section className={styles.choose}>
                    <label>
                        <h3>Mix(six color)</h3>
                        <input type='radio' onChange={(e) => props.setTheme(e.target.value)}
                               name='theme'
                               value='six-colors'/>
                    </label>
                    <label>
                        <h3>Blue-green-red</h3>
                        <input type='radio' onChange={(e) => props.setTheme(e.target.value)}
                               name='theme'
                               value='blue-green-red'/>
                    </label>
                    <label>
                        <h3>Red-blue</h3>
                        <input type='radio' onChange={(e) => props.setTheme(e.target.value)}
                               name='theme'
                               value='red-blue'/>
                    </label>
                </section>
            </fieldset>
        </article>
    );
}

export default Settings;