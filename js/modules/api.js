const SERVER_URL="https://geocode-maps.yandex.ru/1.x/?apikey=bb32e304-92c1-4f44-8826-c90e304b0dc3&format=json";async function getData(t){try{const a=SERVER_URL+"&geocode="+t.value,e=await fetch(a);return await e.json()}catch(t){console.log(t)}}export{getData};