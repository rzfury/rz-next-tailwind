import fetch from 'node-fetch';

export async function get(url: string) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(async (res: any) => {
        const data = await res.json();
        resolve(data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}

export async function post(url: string, body:Object) {
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'post', body: JSON.stringify(body) })
      .then(async (res: any) => {
        const data = await res.json();
        resolve(data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}

const http = { post, get };

export default http;
