export const getRequestConfiguration = (extraHeader: any) => {
  const header = {
    headers: {
      ...extraHeader,
    },
  };
  return header;
};
