const SERVER_URL = 'https://geocode-maps.yandex.ru/1.x/?apikey=bb32e304-92c1-4f44-8826-c90e304b0dc3&format=json';

async function getData(address) {
  try {
    const url = SERVER_URL + '&geocode=' + address.value;
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
}

export {getData};
