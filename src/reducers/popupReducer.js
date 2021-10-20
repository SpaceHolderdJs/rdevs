const popupReducer = (popup = null, action) => {
  switch (action.type) {
    case "INIT_POPUP":
      return action.payload;

    case "REMOVE_POPUP":
      return null;

    default:
      return popup;
  }
};

export default popupReducer;
