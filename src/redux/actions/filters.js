export let setSortBy = (name) => ({
  type: "SET_SORT_BY",
  payload: name,
});
export let setCategory = (cartIndex) => ({
  type: "SET_CATEGORY",
  payload: cartIndex,
});
