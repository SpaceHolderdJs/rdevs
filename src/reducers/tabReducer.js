const tabReducer = (tab = "about us", action) => {
  switch (action.type) {
    case "INIT_TAB":
      return action.payload;

    default:
      return tab;
  }
};

export default tabReducer;
