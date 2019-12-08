import  React from 'react';
import styles from './ChooseTheme.module.css';

const ChooseTheme = (props) => {
    const themes = ['Red-blue','Red-green', 'Pink-blue', 'Pink-green',
        'Green-blue', 'Blue-green','Six-colors', 'Blue-green-red'
    ];

    const theme = themes.map((el, i) => {
        return <label key={i} className={styles.element}>
            <input type='radio' onChange={(e) => props.setTheme(e.target.value)}
                   name='theme' value={el}/>
            <span><b>{el}</b></span>
        </label>
    });

    return (
        <fieldset>
            <legend><h3>Choose color theme:</h3></legend>
            <section className={styles.chooseTheme}>
                {theme}
            </section>
        </fieldset>
    );
};

export default ChooseTheme;