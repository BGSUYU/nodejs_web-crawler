import axios from 'axios';
import path from 'path';
import fs from 'fs';

export async function fetchPage(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(res => {
      resolve(res.data);
    })
    .catch(error => {
      reject(error);
    });
  });
}

