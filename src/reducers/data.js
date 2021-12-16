const initialState = {};

function dataReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    default:
      return { ...state };
  }
}

export default dataReducer;
