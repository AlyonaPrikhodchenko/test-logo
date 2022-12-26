const initAddressHints = () => {
  const token = 'e2eeb413a16819871f748c5de52aaaeee3059d46'
  $("#address").suggestions({
    token: token,
    type: "ADDRESS"
  });
}



export {initAddressHints};
