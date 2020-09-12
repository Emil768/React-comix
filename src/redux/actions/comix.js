import axios from "axios";

export let setComix = (items) => ({
  type: "SET_COMIX",
  payload: items,
});

export let setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export let fetchComix = (category, sortBy, order) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `/comix?${category !== null ? `category=${category}` : ""}&_sort=${
        sortBy.type
      }&_order=${order}`
    )
    .then((resp) => dispatch(setComix(resp.data)));
};
