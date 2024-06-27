export default function getFullResponseFromAPI(value) {
  return new Promise((resolve, reject) => {
    if (value) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
