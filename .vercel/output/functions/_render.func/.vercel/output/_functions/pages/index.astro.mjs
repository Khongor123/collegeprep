import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, d as renderComponent } from '../chunks/astro/server_BadD3_hS.mjs';
import 'kleur/colors';
import { s as siteConfig, g as getCollection } from '../chunks/site-config_Dd6ooKtg.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DnRD0Oiz.mjs';
import { $ as $$Button } from '../chunks/Button_BJK4_gyV.mjs';
import { marked } from 'marked';
import { a as $$PostPreview } from '../chunks/PostPreview_HXW_FMw1.mjs';
import { s as sortItemsByDateDesc } from '../chunks/data-utils_C94Drn0q.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const hero = siteConfig.hero;
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<section class="w-full flex flex-col gap-8 mb-16 sm:mb-24 dark:hidden">${renderTemplate`<figure><img class="w-full"${addAttribute(hero.image.src, "src")} loading="lazy" decoding="async"${addAttribute(hero.image.alt, "alt")}></figure>`}${renderTemplate`<div class="max-w-none prose prose-dante sm:prose-lg text-center">${unescapeHTML(marked.parse(hero.text))}</div>`}${hero.actions && hero.actions.length > 0 && renderTemplate`<div class="flex flex-wrap gap-4 justify-center">${hero.actions.map((action) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": action.href }, { "default": ($$result2) => renderTemplate`${action.text}` })}`)}</div>`}</section>
        <section class="w-full flex-col gap-8 mb-16 sm:mb-24 hidden dark:flex">${renderTemplate`<figure><img class="w-full"${addAttribute(hero.image.src_dark, "src")} loading="lazy" decoding="async"${addAttribute(hero.image.alt, "alt")}></figure>`}${renderTemplate`<div class="max-w-none prose prose-dante sm:prose-lg text-center">${unescapeHTML(marked.parse(hero.text))}</div>`}${hero.actions && hero.actions.length > 0 && renderTemplate`<div class="flex flex-wrap gap-4 justify-center">${hero.actions.map((action) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": action.href }, { "default": ($$result2) => renderTemplate`${action.text}` })}`)}</div>`}</section>`}`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/Hero.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("guide")).sort(sortItemsByDateDesc);
  const featuredPosts = posts.filter(({ data }) => data.isFeatured);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "description": siteConfig.description, "image": siteConfig.image, "showHeader": false }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<div${addAttribute(["pt-6 flex flex-col gap-4 border-t border-main text-center mb-6"], "class:list")}></div> ${featuredPosts.length > 0 && renderTemplate`<div class="mb-16 sm:mb-24"> <h2 class="mb-12 text-xl font-serif italic sm:mb-16 sm:text-2xl text-center">Guides</h2> ${featuredPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": post, "class": "mb-10 sm:mb-12 flex", "headingLevel": "h3" })}`)} <div class="mt-12 sm:mt-16"> ${renderComponent($$result2, "Button", $$Button, { "href": "/guide" }, { "default": ($$result3) => renderTemplate`View All` })} </div> </div>`}` })}`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/Khongor/Desktop/CP-Astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
