import * as cheerio from 'cheerio';
import { fetchPage } from './fetchPage.js';
const url='https://hs.blizzard.cn/news/24179067/index.html';

export default async function crawler_article(){
    const html = await fetchPage(url);
    const $ = cheerio.load(html);
    const blogs = $('.detail.blog-detail').text();
    const detail = blogs.replace(/[\r\n]+/g, '')
    return detail;
    console.log(detail);
  }
//crawler_article();