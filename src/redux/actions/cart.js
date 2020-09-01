export let addComixCart = (comixObj) => ({
  type: "ADD_COMIX_CART",
  payload: comixObj,
});

export let removeComixCart = (id) => ({
  type: "REMOVE_CART",
  payload: id,
});

export let plusComixCart = (id) => ({
  type: "PLUS_COMIX",
  payload: id,
});

export let minusComixCart = (id) => ({
  type: "MINUS_COMIX",
  payload: id,
});

export let clearComixCart = () => ({
  type: "CLEAR_CART",
});
