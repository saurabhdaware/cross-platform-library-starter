if (import.meta.env.MODE === 'development') {
  console.log('This log is only added in development bundle')
}

export const getData = () => {
  // returning some data from server
  return 1234;
}