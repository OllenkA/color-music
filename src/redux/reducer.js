export const START_PLAY_MUSIC = 'START_PLAY_MUSIC';

const initialState = {
    colors: [
        {id: 1, color: '#FF1493', brightness: 0.7, visible: false},
        {id: 2, color: '#F08080', brightness: 1, visible: false},
        {id: 3, color: '#CD5C5C', brightness: 0.2, visible: false},
        {id: 4, color: '#E9967A', brightness: 1, visible: false},
        {id: 5, color: '#FF0000', brightness: 1, visible: false},
        {id: 7, color: '#DC143C', brightness: 1, visible: false},
        {id: 8, color: '#DC143C', brightness: 1, visible: false},
        {id: 9, color: '#DC143C', brightness: 1, visible: false},
        // {id: 10, color: '#DC143C', brightness: 1, visible: false},
        // {id: 11, color: '#DC143C', brightness: 1, visible: false},
        // {id: 12, color: '#DC143C', brightness: 0.5, visible: false},
        // {id: 13, color: '#DC143C', brightness: 0.4, visible: false},
        // {id: 14, color: '#DC143C', brightness: 0.8, visible: false},
        // {id: 15, color: '#DC143C', brightness: 0.2, visible: false},
        // {id: 16, color: '#DC143C', brightness: 0.6, visible: false},
    ],
    arrayColors: ['#ADFF2F', '#F08080', '#7FFF00','#00FA9A','#008000',
    '#008080','#808000','#66CDAA', '#008080','#FF1493','#FF0000',
    '#FF4500', '#FFD700','#DC143C', '#FF1493', '#E9967A'],
    isMusicPlay: false,
};

// const shuffle = (arr) => {
//     for(let i = 0; i<arr.length; i++) {
//         const random = Math.floor(Math.random() * arr.length)
//         const temp = arr[i];
//         arr[i] = arr[random];
//         arr[random] = temp;
//     }
//     return arr
// };

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