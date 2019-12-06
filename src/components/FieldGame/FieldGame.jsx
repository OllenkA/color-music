import React from 'react';
import styles from './FieldGame.module.css';
import {connect} from "react-redux";
import one from '../../audio/1.mp3'
import {startPlayMusic} from "../../redux/reducer";

function FieldGame(props) {

    let cells = props.colors.map((el, i) => {
        return <section key={i} style={{ backgroundColor: el.color, opacity: el.brightness}} className={styles.cell}>
        </section>
    });

    return (<>
        <button onClick={props.startPlayMusic}>Listen music</button>

        <article className={styles.container}>
            <audio ref={props.audioRef} src={one}/>
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
            {cells}
        </article>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        colors: state.main.colors,
    }
};

export default connect(mapStateToProps, {startPlayMusic})(FieldGame);