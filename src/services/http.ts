import fetch from 'node-fetch';

export async function get(url: string, params?: { [key:string]: any }) {
  const _params = new URLSearchParams(params);
  const _url = params ? `${url}?${_params.toString()}` : url;

  return new Promise((resolve, reject) => {
    fetch(_url)
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

export async function post(url: string, body: Object, params?: { [key:string]: any }) {
  const _params = new URLSearchParams(params);
  const _url = params ? `${url}?${_params.toString()}` : url;

  return new Promise((resolve, reject) => {
    fetch(_url, { method: 'post', body: JSON.stringify(body) })
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
