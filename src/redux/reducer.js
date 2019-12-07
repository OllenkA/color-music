export const START_PLAY_MUSIC = 'START_PLAY_MUSIC';

const initialState = {

// const shuffle = (arr) => {
//     for(let i = 0; i<arr.length; i++) {
//         const random = Math.floor(Math.random() * arr.length)
//         const temp = arr[i];
//         arr[i] = arr[random];
//         arr[random] = temp;
//     }
//     return arr
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case START_GAME:
        //     let newStartArray = shuffle(state.questions.map(el => ({...el, answers: shuffle([...el.answers])})));
        //     newStartArray[0].visible = true;
        //     return {
        //         ...state,
        //     };
        case START_PLAY_MUSIC:
            let newOpacityElement = (num) => {
                return  Math.floor(Math.random() * num)
            };
            let newArray = state.colors.map(el => {
                return {
                    ...el,
                    brightness: Math.random(),
                    color: state.arrayColors[newOpacityElement(state.arrayColors.length-1)]
                }
            });
            return {
                ...state,
                colors: newArray,
                isMusicPlay: true,
            };
        default:
            return state;
    }
};

export const startPlayMusic = () => ({type: START_PLAY_MUSIC});

export default reducer;