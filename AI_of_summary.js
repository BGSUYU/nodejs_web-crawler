import ollama from 'ollama';
import crawler_article from './crawler_article.js';

    async function main() {
        const content = await crawler_article();
        const response = await ollama.chat({
            model: 'deepseek-r1:1.5b',
            messages: [
                {
                    role: 'user', 
                    content: '对这个内容'+content+'进行总结'
                }
            ],
        })
        console.log(response.message.content)

    }

    main()