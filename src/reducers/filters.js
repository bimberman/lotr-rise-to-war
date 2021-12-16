const initialState = {};

function filtersReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    default:
      return { ...state };
  }
}

export default filtersReducer;
