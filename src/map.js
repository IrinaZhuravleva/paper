 import { listHouses } from "./listHouses";
 
 export class Map {
    constructor(){ 

    }

    addMapContainer(identificator) {
        const element = document.createElement('div');
        element.setAttribute("id", "map");

        document.body.appendChild(element);
    }
    
    renderYandexMaps() {
        var myMap = new ymaps.Map("map", {
            center: [59.95102988, 30.31618480],
            zoom: 14
        });

        listHouses.forEach(renderHouses);

        function renderHouses(item) {
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point", // тип геометрии - точка
                    coordinates: item.latlong // координаты точки
                },
                properties: {
                    hintContent: item.address,
                    // iconContent: '1',
                    // iconCaption:'2',
                    // hintContent: '3',
                    // balloonContent: '4',
                    balloonContentHeader: `<p><b>${item.title}</b></p><p>${item.address}</p>`,
                    // balloonContentBody: '7'  
                }

            });
            myMap.geoObjects.add(myGeoObject);
        }

    }

}