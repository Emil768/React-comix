let initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

let getTotalPrice = (arr) => arr.reduce((sum, item) => (sum += item.price), 0);

let cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMIX_CART": {
      let currentComixItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      let newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentComixItems,
          totalPrice: getTotalPrice(currentComixItems),
        },
      };

      let items = Object.values(newItems).map((obj) => obj.items);

      let allComix = [].concat.apply([], items);

      let totalPrice = getTotalPrice(allComix);

      return {
        ...state,
        items: newItems,
        totalCount: allComix.length,
        totalPrice,
      };
    }
    case "CLEAR_CART": {
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };
    }
    case "REMOVE_CART": {
      let newItems = { ...state.items };
      let currentTotalPrice = newItems[action.payload].totalPrice;
      let currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case "PLUS_COMIX": {
      let newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      let newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      let items = Object.values(newItems).map((obj) => obj.items);

      let allComix = [].concat.apply([], items);
      let totalPrice = getTotalPrice(allComix);
      let totalCount = allComix.length;
      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount,
      };
    }

    case "MINUS_COMIX": {
      let oldItems = state.items[action.payload].items;
      let newObjItem =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;
      let newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItem,
          totalPrice: getTotalPrice(newObjItem),
        },
      };

      let items = Object.values(newItems).map((obj) => obj.items);

      let allComix = [].concat.apply([], items);
      let totalPrice = getTotalPrice(allComix);
      let totalCount = allComix.length;
      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount,
      };
    }
    default:
      return state;
  }
};

export default cart;
