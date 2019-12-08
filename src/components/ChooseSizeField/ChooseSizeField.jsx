import  React from 'react';
import styles from './ChooseSizeField.module.css';

const ChooseSizeField = (props) => {
    const fieldsArray = ['10*2', '5*5', '10*10', '16*9', '12*8', '17*10'];

    const fields = fieldsArray.map((el, i) => {
        return <label key={i} className={styles.choose}>
            <span><b>{el}</b></span>
            <input type='radio' onChange={(e) => props.setFieldSize(e.target.value)}
                   name='field' value={el}/>
        </label>
    });

    return (
        <fieldset>
            <legend><h3>Choose field size:</h3></legend>
            <section className={styles.wrapper}>
            {fields}
            </section>
        </fieldset>
    );
};

export default ChooseSizeField;