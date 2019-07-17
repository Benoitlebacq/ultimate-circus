export default (state = {}, action) => {
  switch (action.type) {
    case "SHOPP_IN":
      return { ...state, ticket: action.payload };
    default:
      return state;
  }
};
