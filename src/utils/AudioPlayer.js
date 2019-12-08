const audioPlayer = {
    setFileAndPlay(audioEl, file) {
        audioEl.src = URL.createObjectURL(file);
        audioEl.load();
        audioEl.play();
    },

    _data: null,

    createAnalyser(audioEl) {
        if (this._data) return this._data;

        let contextNew = new AudioContext();
        //setContext(contextNew);
        //pressButton(true);
        let src2 = contextNew.createMediaElementSource(audioEl);
        let analyser = contextNew.createAnalyser();
        src2.connect(analyser);
        analyser.connect(contextNew.destination);
        analyser.fftSize = 512;
        let bufferLength = analyser.frequencyBinCount;
        let dataArray = new Uint8Array(bufferLength);

        //audioEl.play();
        this._data = {
            analyser,
            dataArray
        };
        return this._data;
    }
};

export default audioPlayer;