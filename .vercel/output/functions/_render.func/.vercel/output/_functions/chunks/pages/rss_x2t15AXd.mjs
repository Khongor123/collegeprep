import rss from '@astrojs/rss';
import { g as getCollection, s as sortItemsByDateDesc, a as siteConfig } from './index_kUEIVg9V.mjs';

async function GET(context) {
    const posts = (await getCollection('guide')).sort(sortItemsByDateDesc);
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: posts.map((item) => ({
            title: item.data.title,
            description: item.data.excerpt,
            link: `/guide/${item.slug}/`,
            pubDate: item.data.publishDate.setUTCHours(0)
        }))
    });
}

export { GET };
