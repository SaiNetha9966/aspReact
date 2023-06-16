
export const brandAction = (type, data, message, loading) => {
  return {
    type: type,
    payload: {
      data,
      message,
      loading,
    },
  };
};