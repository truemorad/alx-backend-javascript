function getResponseFromAPI() {
  const success = true;
  if (success) {
    return Promise.resolve('success');
  }
  return Promise.reject(new Error('failed'));
}

export default getResponseFromAPI;
