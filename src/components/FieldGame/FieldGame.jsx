import React, {useRef, useState} from 'react';
import colorCreator from "../../utils/colorCreator";
import audioPlayer from "../../utils/AudioPlayer";
import FieldGameView from "./FieldGameView";

function FieldGame(props) {
    const audioElRef = useRef(null);
    const [data, setData] = useState([]);
    // const [isButtonPressed, pressButton] = useState(false);
    const [fieldSize, setFieldSize] = useState('');
    const [theme, setTheme] = useState('');

    const newData = (fieldSize === '55') ? data.slice(0, 25) : (fieldSize === '102') ?
        data.slice(0, 20) : data.slice(0, 144);

    let setMusic = async (e) => {
        let file = e.target.files[0];
        if (!file) return;

        audioPlayer.setFileAndPlay(audioElRef.current, file);
        let {analyser, dataArray} = audioPlayer.createAnalyser(audioElRef.current, file);

        renderFrame();

        function renderFrame() {
            requestAnimationFrame(renderFrame);
            analyser.getByteFrequencyData(dataArray);
            setData(Array.from(dataArray))
        }
    };

    let fieldWidth = colorCreator.getFieldStyle(+fieldSize)

    return (
        <FieldGameView audioElRef={audioElRef}
                       fieldWidth={fieldWidth}
                       setFieldSize={setFieldSize}
                       setMusic={setMusic}
                       setTheme={setTheme}
                       theme={theme}
                       newData={newData}
        />
    );
}

export default FieldGame;