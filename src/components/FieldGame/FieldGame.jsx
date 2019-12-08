import React, {useRef, useState} from 'react';
import colorCreator from "../../utils/colorCreator";
import audioPlayer from "../../utils/AudioPlayer";
import FieldGameView from "./FieldGameView";

function FieldGame() {
    const audioElRef = useRef(null);
    const [data, setData] = useState([]);
    const [isButtonPressed, pressButton] = useState(false);
    const [fieldSize, setFieldSize] = useState('');
    const [theme, setTheme] = useState('');

    const newData = colorCreator.getNewData(fieldSize, data);

    let setMusic = async (e) => {
        let file = e.target.files[0];
        if (!file) return;
        pressButton(true);

        audioPlayer.setFileAndPlay(audioElRef.current, file);
        let {analyser, dataArray} = audioPlayer.createAnalyser(audioElRef.current, file);

        renderFrame();

        function renderFrame() {
            requestAnimationFrame(renderFrame);
            analyser.getByteFrequencyData(dataArray);
            setData(Array.from(dataArray))
        }
    };

    let fieldWidth = colorCreator.getFieldStyle(+fieldSize);

    return (
        <FieldGameView audioElRef={audioElRef}
                       fieldWidth={fieldWidth}
                       setFieldSize={setFieldSize}
                       setMusic={setMusic}
                       setTheme={setTheme}
                       theme={theme}
                       newData={newData}
                       isButtonPressed={isButtonPressed}
        />
    );
}

export default FieldGame;