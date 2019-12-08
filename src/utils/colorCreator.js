const colorCreator = {
    getColors(el, theme) {
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 255 / el;
        switch (theme) {
            case 'Six-colors':
                r = (el < 40) ? el : 0;
                r = (el > 75 && el < 120) ? el : r;
                r = (el > 160 && el < 210) ? el : r;
                g = (el > 20 && el < 70) ? el : 0;
                g = (el > 100 && el < 150) ? el : g;
                g = (el > 190 && el < 240) ? el : g;
                b = (el > 50 && el < 95) ? el : 0;
                b = (el > 130 && el < 180) ? el : b;
                b = (el > 220) ? el : b;
                break;
            case 'Blue-green-red':
                r = (el < 30) ? el : 0;
                r = (el > 85 && el < 110) ? el : r;
                r = (el > 170 && el < 200) ? el : r;
                g = (el > 30 && el < 60) ? el : 0;
                g = (el > 110 && el < 140) ? el : g;
                g = (el > 200 && el < 230) ? el : g;
                b = (el > 60 && el < 85) ? el : 0;
                b = (el > 140 && el < 170) ? el : b;
                b = (el > 230) ? el : b;
                break;
            case 'Red-blue':
                r = el;
                g = 0;
                b = 255 - el;
                break;
            case 'Green-blue':
                r = 0;
                g = el;
                b = 255 - el;
                break;
            case 'Blue-green':
                r = 0;
                g = 255 - el;
                b = el;
                break;
            case 'Pink-blue':
                r = el;
                g = 255 - el;
                b = 255;
                break;
            case 'Red-green':
                r = el;
                g = 255 - el;
                b = 0;
                break;
            case 'Pink-green':
                r = el;
                g = 255 - el;
                b = el;
                break;
            default:
                r = 255 - el;
                g = el;
                b = 255 - el;
        }
        return "rgb(" + r + "," + g + "," + b + "," + a + ")";
    },
    getFieldStyle(fieldSize) {
        switch (fieldSize) {
            case '10*2':
                return {width: 10 * 54 + 'px', height: 2 * 54 + 'px'};
            case '5*5':
                return {width: 5 * 54 + 'px', height: 5 * 54 + 'px'};
            case '16*9':
                return {width: 16 * 54 + 'px', height: 9 * 54 + 'px'};
            case '10*10':
                return {width: 10 * 54 + 'px', height: 10 * 54 + 'px'};
            case '12*8':
                return {width: 12 * 54 + 'px', height: 8 * 54 + 'px'};
            case '17*10':
                return {width: 17 * 54 + 'px', height: 10 * 54 + 'px'};
            default:
                return {width: 16 * 54 + 'px', height: 9 * 54 + 'px'};
        }
    },
    getNewData(fieldSize, data){
        switch (fieldSize) {
            case '10*2':
                return data.slice(0, 20);
            case '5*5':
                return data.slice(0, 25);
            case '16*9':
                return data.slice(0, 144);
            case '10*10':
                return data.slice(0, 100);
            case '12*8':
                return data.slice(0, 96);
            case '17*10':
                return data.slice(0, 170);
            default:
                return data.slice(0, 144);
        }
    }
};

export default colorCreator;