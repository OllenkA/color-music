const colorCreator = {
    getColors(el, theme) {
        let r = 0;
        let g = 0;
        let b = 0;
        let a = 255 / el;

        switch (theme) {
            case 'red-blue':
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
            case 'blue-green':
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
            default:
                r = 255 - el;
                g = el;
                b = 255 - el;


        }

        let newColor = "rgb(" + r + "," + g + "," + b + "," + a + ")";
        return newColor;

    },
    getFieldStyle(fieldSize) {
        fieldSize = +fieldSize;

        switch (fieldSize){
            case 102:
                return { width: 10*64+ 'px', height: 2*64 + 'px'};
            case 55:
                return { width: 5*64+ 'px', height: 5*64 + 'px' };
            default:
                return {width: 16*64 + 'px', height: 9*64 + 'px'};
        }
    }
}

export default colorCreator;