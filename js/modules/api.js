const SERVER_URL_GET="https://geocode-maps.yandex.ru/1.x/?apikey=bb32e304-92c1-4f44-8826-c90e304b0dc3&format=json",URL_SEND_DATA="https://echo.htmlacademy.ru/",METHOD="POST";async function getData(t){try{const a=SERVER_URL_GET+"&geocode="+t.value,e=await fetch(a);return await e.json()}catch(t){console.log(t)}}const sendData=(t,a,e)=>{fetch(URL_SEND_DATA,{method:"POST",body:t}).then((t=>{t.ok?a():e()})).catch((()=>{e()}))};export{getData,sendData};