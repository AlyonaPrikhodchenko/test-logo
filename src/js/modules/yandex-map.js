import {getData} from "./api.js";

const initMap = () => {
  const isEnterKey = (evt) => evt.key === 'Enter';
  const input = document.querySelector('#address');
  const addressButton = document.querySelector('#contacts-button');

  const coordsDefault = {
    lat: '60.03311250396163',
    lng: '30.42866049999992',
  };

  // Создание карты
  let myMap = new ymaps.Map('map', {
    center: [coordsDefault.lat, coordsDefault.lng],
    zoom: 7
  });

  // Вытягивает координаты широты и долготы адреса из поля ввода
  const poolsCoords = (addressArr) => {
    for (let el of addressArr) {
      const coords = el.GeoObject.Point.pos;
      const resultCoords = coords.split(' ');
      return [resultCoords[1], resultCoords[0]];
    }
  }

  // Генерирует пин
  const generatesPin = (coords) => {
    let placemark = new ymaps.Placemark(coords, {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/icons/map-pin.svg',
      iconImageSize: [27, 39],
      iconImageOffset: [-10, -39],
      draggable: true
    })

    myMap.geoObjects.add(placemark);
  }

  // Функцию генерации пина, смены центра карты и очистки от старого пина
  const bindsInputwithMap = async (i) => {
    myMap.geoObjects.removeAll();
    const addressItems = await getData(i);
    const addressItem = addressItems.response.GeoObjectCollection.featureMember;
    const coords = poolsCoords(addressItem);
    myMap.setCenter(coords);
    myMap.setZoom(5);
    generatesPin(coords);
  }

  // Вызывыет функцию генерации пина, смены центра карты и очистку от старого пина при событии клика на ENTER
  input.addEventListener('keydown', (e) => {
    if (isEnterKey(e)) {
      e.preventDefault();
      bindsInputwithMap(e.target);
    }
  });

  // Вызывыет функцию генерации пина, смены центра карты и очистку от старого пина при событии клика по кнопке поиска
  addressButton.addEventListener('click', async () => {
    bindsInputwithMap(input);
  })
}

export {initMap};
