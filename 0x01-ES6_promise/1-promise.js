export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const resolved = { status:200, body: 'success', };
    if (success) {
      return resolve(resolved);
    } else {
      return reject(new Error('The fake API is not working currently'));
    }
  });
}
