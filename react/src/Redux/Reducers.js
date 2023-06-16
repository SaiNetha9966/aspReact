export const brandsReducer = (state, payload) => {
  return {
    ...state,
    brandData: payload && payload.data && payload.data,
    brandMsg: payload && payload.message && payload.message,
    brandLoading: payload && payload.loading && payload.loading,
  };
};