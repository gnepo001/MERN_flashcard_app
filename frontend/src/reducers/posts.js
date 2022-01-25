const data = (posts = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
    case "FETCH_ALL":
      return action.payload;
  }
};

export default data;
