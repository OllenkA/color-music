import React, {useRef, useState} from 'react';
import styles from './FieldGame.module.css';
import {connect} from "react-redux";
// import one from '../../audio/1.mp3'
import {startPlayMusic} from "../../redux/reducer";

function FieldGame(props) {

    const [data, setData] = useState([1,34]);


    console.log(data)
    let cells = data.map((el, i) => {
        // let r = el;
        // let g = 0;
        // let b = 255 - el;
        let r = el + (25 * (i/128));
        let g = 250 * (i/128);
        let b = 50;
        let newColor = "rgb(" + r + "," + g + "," + b + ")";
        // console.log(newColor);
        // console.log(el);
        return <div key={i}
                        style={{backgroundColor: newColor}}
                        // style={{backgroundColor: el.color, opacity: el.brightness}}
                        className={styles.cell}>
        </div>
    });

    let setMusic = (e) => {
        let file = e.target.files[0];
        audioEl.current.src = URL.createObjectURL(file);
        audioEl.current.load();
        audioEl.current.play();
        let context = new AudioContext();
        let src = context.createMediaElementSource(audioEl.current);
        let analyser = context.createAnalyser();
        src.connect(analyser);
        analyser.connect(context.destination);
        analyser.fftSize = 256;

        let bufferLength = analyser.frequencyBinCount;
        let dataArray = new Uint8Array(bufferLength);
        function renderFrame() {
            requestAnimationFrame(renderFrame);
            // x = 0;
            analyser.getByteFrequencyData(dataArray);
            setData(Array.from(dataArray))
            console.log(dataArray)
        }
        audioEl.current.play();
        renderFrame();

    };



    const audioEl = useRef(null);

    return (<>
            <button onClick={props.startPlayMusic}>Listen music</button>
            <input type='file' accept='audio/*' onChange={setMusic}/>
            <audio ref={audioEl} controls={true}/>
            <article className={styles.container}>

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