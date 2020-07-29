import _ from "lodash";
import {Map} from "./map";
import './style.css';

function componentTitle() {
    const elementTitle = document.createElement('h1');
    elementTitle.classList.add('title-container');
    elementTitle.innerHTML = _.join(['Карта', 'домов', 'для', '«БУМАГИ»'], ' ');

    return elementTitle;
}

document.body.appendChild(componentTitle());

var map = new Map();
map.addMapContainer();

ymaps.ready(map.renderYandexMaps);

