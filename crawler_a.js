import * as cheerio from 'cheerio';
import { fetchPage } from './fetchPage.js';
const url = 'https://hs.blizzard.cn/news/';

async function crawler_a(){
    const html = await fetchPage(url);
    const $ = cheerio.load(html);
    const links = [];
    const $article = $('.article-container');
    const href = $article.find('a');
    href.each((index, element) => {
      links.push($(element).attr('href'));
    });
    console.log(links[1]);
  }
  
crawler_a();