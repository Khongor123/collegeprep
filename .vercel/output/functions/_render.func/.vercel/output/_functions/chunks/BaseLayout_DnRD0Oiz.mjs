import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, e as renderSlot, d as renderComponent, f as renderHead } from './astro/server_BadD3_hS.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { s as siteConfig } from './site-config_Dd6ooKtg.mjs';

const $$Astro$3 = createAstro("https://collegeart.vercel.app");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro("https://collegeart.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { description = "", image = siteConfig.image, pageType = "website" } = Astro2.props;
  const title = [Astro2.props.title, siteConfig.title].filter(Boolean).join(" | ");
  const resolvedImage = image?.src ? {
    src: new URL(image.src, Astro2.site).toString(),
    alt: image.alt
  } : void 0;
  const canonicalURL = new URL(Astro2.request.url, Astro2.site);
  function formatCanonicalURL(url) {
    const path = url.toString();
    const hasQueryParams = path.includes("?");
    if (hasQueryParams) {
      path.replace(/\/?$/, "");
    }
    return path.replace(/\/?$/, hasQueryParams ? "" : "/");
  }
  return renderTemplate`<!-- High Priority Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&display=swap" rel="stylesheet"><!-- Low Priority Global Metadata --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml" href="/rss.xml" title="RSS"><!-- Page Metadata --><link rel="canonical"${addAttribute(formatCanonicalURL(canonicalURL), "href")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(pageType, "content")}><meta property="og:url"${addAttribute(formatCanonicalURL(canonicalURL), "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${resolvedImage?.src && renderTemplate`<meta property="og:image"${addAttribute(resolvedImage.src, "content")}>`}${resolvedImage?.alt && renderTemplate`<meta property="og:image:alt"${addAttribute(resolvedImage.alt, "content")}>`}<!-- X/Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(formatCanonicalURL(canonicalURL), "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}>${resolvedImage?.src && renderTemplate`<meta property="twitter:image"${addAttribute(resolvedImage.src, "content")}>`}${resolvedImage?.alt && renderTemplate`<meta name="twitter:image:alt"${addAttribute(resolvedImage?.alt, "content")}>`}`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const navLinks = siteConfig.footerNavLinks || [];
  return renderTemplate`${maybeRenderHead()}<footer class="w-full max-w-3xl mx-auto pt-12 pb-10 sm:pt-24 sm:pb-14"> ${navLinks.length > 0 && renderTemplate`<div class="mb-4 flex flex-wrap gap-x-6 gap-y-1 justify-center"> ${navLinks.map((link) => renderTemplate`<a class="font-serif hover:underline hover:underline-offset-2"${addAttribute(link.href, "href")}> ${link.text} </a>`)} </div>`} <div${addAttribute(["pt-6 flex flex-col gap-4 border-t border-main text-center"], "class:list")}> <p class="text-sm">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()}&nbsp;<a class="hover:underline hover:underline-offset-2" href="/">CollegeArt</a>. All rights reserved.
</p> </div> </footer>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full max-w-3xl mx-auto mb-12 sm:mb-16"> ${siteConfig.logo && siteConfig.logo?.src ? renderTemplate`<a href="/"> <img${addAttribute(siteConfig.logo.src, "src")}${addAttribute(siteConfig.logo.alt || "", "alt")} class="max-h-12"> </a>` : renderTemplate`<a class="font-serif text-2xl leading-tight font-medium text-theme-foreground sm:text-4xl" href="/"> ${siteConfig.title} </a>`} ${renderTemplate`<p class="text-sm leading-tight mt-1">${siteConfig.subtitle}</p>`} </header>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro("https://collegeart.vercel.app");
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([className, { "underline underline-offset-2 decoration-1": isActive }], "class:list")}${addAttribute(href, "href")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/NavLink.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="-mr-2 flex items-center justify-center" aria-label="Change color scheme"> <!-- <svg class="w-6 h-6 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8"></circle>
    </svg> --> <svg class="hidden dark:flex w-11 h-11 fill-current" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"> <path d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"></path> <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"></path> </svg> <svg class="dark:hidden w-11 h-11 fill-current" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"> <path d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"></path> <path d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"></path> </svg> </button>  `;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/ThemeToggle.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"> <circle cx="11" cy="11" r="8"></circle> <path d="m21 21-4.35-4.35"></path> </svg>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/icons/Search.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const navLinks = siteConfig.headerNavLinks || [];
  return renderTemplate`${maybeRenderHead()}<nav class="min-h-10 pt-4 pb-12 relative sm:min-h-14 sm:pb-24 md:pt-8" data-astro-cid-dmqpwcec> ${navLinks.length > 0 && renderTemplate`<div class="w-full max-w-3xl mx-auto relative" data-astro-cid-dmqpwcec> <button class="menu-toggle w-8 h-8 -ml-1 flex items-center justify-center relative z-30 md:hidden" aria-label="Open Menu" aria-expanded="false" aria-controls="menu-items" data-astro-cid-dmqpwcec> <span class="menu-toggle-icon w-6 h-px relative bg-current" data-astro-cid-dmqpwcec></span> </button> <ul id="menu-items" class="menu flex gap-11 justify-center" data-astro-cid-dmqpwcec> ${navLinks.map((link) => renderTemplate`<li class="py-1" data-astro-cid-dmqpwcec> ${renderComponent($$result, "NavLink", $$NavLink, { "class": "text-xl font-serif text-main hover:underline hover:underline-offset-2 hover:decoration-1 md:text-base", "href": link.href, "data-astro-cid-dmqpwcec": true }, { "default": ($$result2) => renderTemplate`${link.text}` })} </li>`)} </ul> </div>`} <div class="absolute right-0 top-4 z-10 md:top-8 flex items-center gap-4" data-astro-cid-dmqpwcec> <a href="/search" class="text-main hover:text-main/80 transition-colors" aria-label="Search" data-astro-cid-dmqpwcec> ${renderComponent($$result, "Search", $$Search, { "data-astro-cid-dmqpwcec": true })} </a> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-dmqpwcec": true })} </div> </nav>  `;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/Nav.astro", void 0);

const $$Astro = createAstro("https://collegeart.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { showHeader = true, ...head } = Astro2.props;
  return renderTemplate`<html lang="en" class="antialiased break-words"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...head })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-main text-main"> <div class="flex flex-col min-h-screen px-4 md:px-8"> ${renderComponent($$result, "Nav", $$Nav, {})} ${showHeader && renderTemplate`${renderComponent($$result, "Header", $$Header, {})}`} <main class="grow w-full max-w-3xl mx-auto"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Search as a };
