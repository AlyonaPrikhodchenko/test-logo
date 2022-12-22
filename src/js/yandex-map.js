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
    zoom: 12
  });

  // Вытягивает координаты широты и долготы адреса

  const poolsCoords = (addressArr) => {
    for (let el of addressArr) {
      const coords = el.GeoObject.Point.pos;
      const resultCoords = coords.split(' ');
      return resultCoords;
    }
  }

  // Генерирует пин
  const generatesPin = (coords) => {
    let placemark = new ymaps.Placemark(coords, {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/icons/map-pin.svg',
      iconImageSize: [27, 39],
      iconImageOffset: [-10, -39],
      draggable: true
    })

    myMap.geoObjects.add(placemark);
  }

  // Вызывыет функцию генерации пина при событии клика на ENTER
  input.addEventListener('keydown', async (e) => {
    if (isEnterKey(e)) {
      e.preventDefault();
      const addressItems = await getData(e.target);
      const addressItem = addressItems.response.GeoObjectCollection.featureMember;
      const coords = poolsCoords(addressItem);
      console.log(coords)
      generatesPin(coords);
    }
  });

  // Вызывыет функцию генерации пина при событии клика по кнопке поиска
  addressButton.addEventListener('click', async () => {
    const addressItems = await getData(input);
    const addresItem = addressItems.response.GeoObjectCollection.featureMember;
    generatesPin(addresItem);
  })



  // const input = document.querySelector('#address');

  // input.addEventListener('input', onInput)

  // const onInput = (e) => {
  //   changeCoords(e.target.value)
  // }

  // const changeCoords = (address) => {
  //   const coords = getCoordsFromAddress(address);
  //   // ну и что-то там дальше, чтобы на карте всё обновилось)))
  // }

  // placemark.events.add('dragend', function (e) {
  //   const pinCoords = e.get('target').geometry.getCoordinates();
  //   addressInput.value = pinCoords;
  //   console.log(e.target)
  // });

  // addressButton.addEventListener('click', () => {
  //   placemark.geometry.Point = addressInput.value;
  // })
}

export {initMap};
