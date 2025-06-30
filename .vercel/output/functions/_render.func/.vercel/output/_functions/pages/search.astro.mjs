import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BadD3_hS.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/site-config_Dd6ooKtg.mjs';
import { a as $$Search$1, $ as $$BaseLayout } from '../chunks/BaseLayout_DnRD0Oiz.mjs';
import { a as $$PostPreview } from '../chunks/PostPreview_HXW_FMw1.mjs';
import { s as sortItemsByDateDesc } from '../chunks/data-utils_C94Drn0q.mjs';
export { renderers } from '../renderers.mjs';

const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("guide")).sort(sortItemsByDateDesc);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Search", "description": "Search through our collection of college preparation guides and resources", "showHeader": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-12 sm:mb-16"> <h1 class="text-2xl leading-tight font-serif italic sm:text-4xl mb-8">Search Guides</h1> <div class="relative max-w-md"> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> ${renderComponent($$result2, "Search", $$Search$1, {})} </div> <input type="text" id="search-input" class="block w-full pl-10 pr-3 py-2 border border-main rounded-md leading-5 bg-transparent placeholder-main/60 focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent" placeholder="Search guides..." autocomplete="off"> </div> </div> <div id="search-results" class="space-y-10 sm:space-y-12"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": post, "class": "search-result" })}`)} </div> <div id="no-results" class="hidden text-center py-12"> <p class="text-lg text-main/60">No guides found matching your search.</p> </div> ` })} `;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/pages/search.astro", void 0);

const $$file = "C:/Users/Khongor/Desktop/CP-Astro/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Search,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
