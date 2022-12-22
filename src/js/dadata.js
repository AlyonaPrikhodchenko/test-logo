const initAddressHints = () => {
  const token = 'e2eeb413a16819871f748c5de52aaaeee3059d46'
  $("#address").suggestions({
    token: token,
    type: "ADDRESS",
    /* Вызывается, когда пользователь выбирает одну из подсказок */
    onSelect: function (suggestion) {
      console.log(suggestion.data.geo_lat);
      console.log(suggestion.data.geo_lon);
    }
  });
}



export {initAddressHints};
