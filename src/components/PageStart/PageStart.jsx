import React, {useState} from 'react';
import styles from './PageStart.module.css';

function PageStart() {
    const [isLanguageEn, setLanguage] = useState(true);

    let changeLanguage = () => {
        setLanguage(!isLanguageEn);
    };

    let descriptions = {
        false: <section>
            <h3>Описание задачи:</h3>
            <p>Cделать графический визуализатор для музыки.</p>
            <p> Пока играет ваша любимая мп3шка, на экране видна сетка 16х9 квадратов,
                квадраты меняют цвет и яркость в зависимости от громкости в разных частях звукового спектра,
                каждый квадрат отвечает за свою часть диапазона.</p>

            <p>Результат задания в виде ссылки на гитхаб надо прислать по адресу godelmastery@gmail.com</p>

            <h3>Задания со звездочкой:</h3>
            <ul>
                <li>рабочее решение собрано в один html-файл (включает скрипты, стили и саму музыку) и выложено на
                    github-pages
                </li>
                <li>пользователь может задать количество квадратов (5х5, 10х2, …)</li>
                <li>можно выбрать «тему» — диапазон цветов которые появляются на визуализаторе.</li>
            </ul>
            <h3>Задача выполнена с помощью библиотеки React.</h3>
            <p>Вы можете выбрать свою любимую песню кликнув на кнопку выбрать файл.</p>
            <p>Выбирать размер игрового поля и тему и перед началом проигрывания
                и в процессе прослушивания песни.</p>
        </section>,
        true: <section>
            <h3>Description of the task:</h3>
            <p>Make a graphic visualizer for music.</p>
            <p>While your favorite mp3 is playing, a 16x9 square grid is visible on the screen,
                squares change color and brightness depending on the volume in different parts of the sound spectrum,
                each square is responsible for its part of the range.</p>

            <p>The result of the task in the form of a link to the github should be sent to the address
                godelmastery@gmail.com</p>

            <h3>Advanced tasks:</h3>
            <ul>
                <li>The working solution is assembled in one html-file (includes scripts, styles and music itself) and
                    laid out on
                    github-pages
                </li>
                <li>the user can set the number of squares (5x5, 10x2, ...)</li>
                <li>you can select the “theme” - the range of colors that appear on the visualizer.</li>
            </ul>
            <h3>Task completed using React library.</h3>
            <p>You can select your favorite song by clicking on the select file button.</p>
            <p>Choose the size of the playing field and theme, both before playing and
                in the process of listening to a song.</p>
        </section>
    };

    return (
        <article className={styles.taskDescription}>
            <section className={styles.buttonAndHref}>
                <button onClick={changeLanguage}>
                    {!isLanguageEn ? 'Translate description task to english'
                        : 'Translate description task to russian'}
                </button>
                <a href={'https://github.com/OllenkA/color-music'}
                   target="_blank" rel="noreferrer noopener">
                    {isLanguageEn ? "Look the code of the completed task" :
                        "Посмотреть код выполненного задания"}</a>
            </section>
            {descriptions[isLanguageEn]}
        </article>
    );
}

export default PageStart;