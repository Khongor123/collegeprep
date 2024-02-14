import { A as AstroError, i as UnknownContentCollectionError, f as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, r as renderTemplate, n as renderComponent, u as unescapeHTML, e as createAstro, h as addAttribute, m as maybeRenderHead, s as spreadAttributes, o as renderSlot, p as renderHead, F as Fragment } from '../astro_MsMIaWQK.mjs';
import 'cssesc';
import 'kleur/colors';
import 'clsx';
import { marked } from 'marked';
import { p as prependForwardSlash } from '../astro/assets-service_XBVADT_P.mjs';
/* empty css                           */

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://collegeprep-six.vercel.com", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/guide/SAT-Books.md": () => import('../SAT-Books_sAVBOGgH.mjs'),"/src/content/guide/post-1.md": () => import('../post-1_Petn1RBk.mjs'),"/src/content/guide/post-2.md": () => import('../post-2_xXNSqrD6.mjs'),"/src/content/guide/post-3.md": () => import('../post-3_PIGfnUD-.mjs'),"/src/content/pages/about.md": () => import('../about_kx5-pHhv.mjs'),"/src/content/pages/contact.md": () => import('../contact_pgRKFwnW.mjs'),"/src/content/pages/terms.md": () => import('../terms_eIZra-Bb.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"pages":{"type":"content","entries":{"about":"/src/content/pages/about.md","contact":"/src/content/pages/contact.md","terms":"/src/content/pages/terms.md"}},"guide":{"type":"content","entries":{"post-1":"/src/content/guide/post-1.md","post-2":"/src/content/guide/post-2.md","post-3":"/src/content/guide/post-3.md","sat-books":"/src/content/guide/SAT-Books.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/guide/SAT-Books.md": () => import('../SAT-Books_02hHRJR4.mjs'),"/src/content/guide/post-1.md": () => import('../post-1_8D6CgraQ.mjs'),"/src/content/guide/post-2.md": () => import('../post-2_Ivg-IQFG.mjs'),"/src/content/guide/post-3.md": () => import('../post-3_IwxtfAD5.mjs'),"/src/content/pages/about.md": () => import('../about_jWtwp1gl.mjs'),"/src/content/pages/contact.md": () => import('../contact_Eu5D-Gxw.mjs'),"/src/content/pages/terms.md": () => import('../terms_rFYzn7B3.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$e = createAstro("https://collegeprep-six.vercel.com");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const siteConfig = {
  title: "College Prep",
  subtitle: "Growing resources for you to prepare for college",
  description: "Collective resources for college prep",
  image: {
    src: "/dante-preview.jpg",
    alt: "Dante - Astro.js and Tailwind CSS theme"
  },
  headerNavLinks: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Guides",
      href: "/guide"
    },
    {
      text: "Tags",
      href: "/tags"
    }
  ],
  footerNavLinks: [
    // TODO
    // {
    //     text: 'About',
    //     href: '/about'
    // },
    {
      text: "Contact",
      href: "/contact"
    },
    {
      text: "Terms",
      href: "/terms"
    }
  ],
  socialLinks: [
    {
      text: "Dribbble",
      href: "https://dribbble.com/"
    },
    {
      text: "Instagram",
      href: "https://instagram.com/"
    },
    {
      text: "X/Twitter",
      href: "https://twitter.com/"
    }
  ],
  hero: {
    title: "Hi There *Traveller*",
    text: "I'm **Khongor**, a high-school junior set to graduate in June 2025. As my college applications are near, I've decided to start preparing as early as possible and have obtained quite some knowledge and resources, hence deciding to share it online (also organizing everything).",
    image: {
      src: "/hero.jpeg",
      alt: "A person sitting at a desk in front of a computer"
    },
    actions: [
      {
        text: "Get in Touch",
        href: "/contact"
      }
    ]
  },
  postsPerPage: 8,
  projectsPerPage: 8
};

const $$Astro$d = createAstro("https://collegeprep-six.vercel.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
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

const $$Astro$c = createAstro("https://collegeprep-six.vercel.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Footer;
  const navLinks = siteConfig.footerNavLinks || [];
  return renderTemplate`${maybeRenderHead()}<footer class="w-full max-w-3xl mx-auto pt-12 pb-10 sm:pt-24 sm:pb-14"> ${navLinks.length > 0 && renderTemplate`<div class="mb-4 flex flex-wrap gap-x-6 gap-y-1 justify-center"> ${navLinks.map((link) => renderTemplate`<a class="font-serif hover:underline hover:underline-offset-2"${addAttribute(link.href, "href")}> ${link.text} </a>`)} </div>`} <div${addAttribute(["pt-6 flex flex-col gap-4 border-t border-main text-center"], "class:list")}> <p class="text-sm">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()}&nbsp;<a class="hover:underline hover:underline-offset-2" href="/">Khongor</a>. All rights reserved.
</p> </div> </footer>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/Footer.astro", void 0);

const $$Astro$b = createAstro("https://collegeprep-six.vercel.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="w-full max-w-3xl mx-auto mb-12 sm:mb-16"> ${siteConfig.logo && siteConfig.logo?.src ? renderTemplate`<a href="/"> <img${addAttribute(siteConfig.logo.src, "src")}${addAttribute(siteConfig.logo.alt || "", "alt")} class="max-h-12"> </a>` : renderTemplate`<a class="font-serif text-2xl leading-tight font-medium text-theme-foreground sm:text-4xl" href="/"> ${siteConfig.title} </a>`} ${renderTemplate`<p class="text-sm leading-tight mt-1">${siteConfig.subtitle}</p>`} </header>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/Header.astro", void 0);

const $$Astro$a = createAstro("https://collegeprep-six.vercel.com");
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([className, { "underline underline-offset-2 decoration-1": isActive }], "class:list")}${addAttribute(href, "href")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/NavLink.astro", void 0);

const $$Astro$9 = createAstro("https://collegeprep-six.vercel.com");
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="w-8 h-8 -mr-2 flex items-center justify-center" aria-label="Change color scheme"> <svg class="w-4 h-4 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"> <circle cx="8" cy="8" r="8"></circle> </svg> </button>  `;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/ThemeToggle.astro", void 0);

const $$Astro$8 = createAstro("https://collegeprep-six.vercel.com");
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Nav;
  const navLinks = siteConfig.headerNavLinks || [];
  return renderTemplate`${maybeRenderHead()}<nav class="min-h-10 pt-4 pb-12 relative sm:min-h-14 sm:pb-24 md:pt-8" data-astro-cid-dmqpwcec> ${navLinks.length > 0 && renderTemplate`<div class="w-full max-w-3xl mx-auto relative" data-astro-cid-dmqpwcec> <button class="menu-toggle w-8 h-8 -ml-1 flex items-center justify-center relative z-30 md:hidden" aria-label="Open Menu" aria-expanded="false" aria-controls="menu-items" data-astro-cid-dmqpwcec> <span class="menu-toggle-icon w-6 h-px relative bg-current" data-astro-cid-dmqpwcec></span> </button> <ul id="menu-items" class="menu flex gap-6" data-astro-cid-dmqpwcec> ${navLinks.map((link) => renderTemplate`<li class="py-1" data-astro-cid-dmqpwcec> ${renderComponent($$result, "NavLink", $$NavLink, { "class": "text-xl font-serif text-main hover:underline hover:underline-offset-2 hover:decoration-1 md:text-base", "href": link.href, "data-astro-cid-dmqpwcec": true }, { "default": ($$result2) => renderTemplate`${link.text}` })} </li>`)} </ul> </div>`} <div class="absolute right-0 top-4 z-10 md:top-8" data-astro-cid-dmqpwcec> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-dmqpwcec": true })} </div> </nav>  `;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/Nav.astro", void 0);

const $$Astro$7 = createAstro("https://collegeprep-six.vercel.com");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { showHeader = true, ...head } = Astro2.props;
  return renderTemplate`<html lang="en" class="antialiased break-words"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...head })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-main text-main"> <div class="flex flex-col min-h-screen px-4 md:px-8"> ${renderComponent($$result, "Nav", $$Nav, {})} ${showHeader && renderTemplate`${renderComponent($$result, "Header", $$Header, {})}`} <main class="grow w-full max-w-3xl mx-auto"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/layouts/BaseLayout.astro", void 0);

const $$Astro$6 = createAstro("https://collegeprep-six.vercel.com");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, class: className, ...rest } = Astro2.props;
  const buttonClasses = "inline-flex items-center justify-center px-6 py-2 font-serif text-sm leading-tight italic text-main bg-main border border-main rounded-full transition hover:bg-muted";
  return renderTemplate`${href ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([buttonClasses, className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute([buttonClasses, className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/Button.astro", void 0);

const $$Astro$5 = createAstro("https://collegeprep-six.vercel.com");
const $$FormattedDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/FormattedDate.astro", void 0);

const $$Astro$4 = createAstro("https://collegeprep-six.vercel.com");
const $$ArrowRight = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${addAttribute(className, "class")}${spreadAttributes(props)}> <path d="M4.286 12c0-0.533 0.432-0.964 0.964-0.964v0h11.172l-4.14-4.138c-0.175-0.175-0.283-0.416-0.283-0.683 0-0.533 0.432-0.965 0.965-0.965 0.267 0 0.508 0.108 0.683 0.283v0l5.785 5.785c0.175 0.175 0.283 0.416 0.283 0.683s-0.108 0.508-0.283 0.683l-5.785 5.785c-0.175 0.175-0.416 0.283-0.683 0.283-0.533 0-0.965-0.432-0.965-0.965 0-0.267 0.108-0.508 0.283-0.683v0l4.14-4.138h-11.172c-0.533 0-0.964-0.432-0.964-0.964v0z"></path> </svg>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/icons/ArrowRight.astro", void 0);

const $$Astro$3 = createAstro("https://collegeprep-six.vercel.com");
const $$PostPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { post, class: className, headingLevel = "h2" } = Astro2.props;
  const { title, publishDate, updatedDate, excerpt } = post.data;
  const TitleTag = headingLevel;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(["flex justify-between items-start gap-8 group", className], "class:list")}${addAttribute(`/guide/${post.slug}/`, "href")}> <div class="grow"> ${renderComponent($$result, "TitleTag", TitleTag, { "class": "text-xl leading-tight font-serif font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1 sm:text-2xl" }, { "default": ($$result2) => renderTemplate`${title}` })} <div class="mt-1 text-sm leading-normal"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": publishDate })} ${updatedDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${" "}<span>
(Updated on ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": updatedDate })})
</span> ` })}`} </div> ${excerpt && renderTemplate`<div class="mt-3 text-sm leading-normal">${excerpt}</div>`} </div> <div class="hidden font-serif italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
Read Guide ${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "fill-current w-4 h-4" })} </div> </a>`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/PostPreview.astro", void 0);

function slugify(input) {
  if (!input)
    return "";
  var slug = input.toLowerCase().trim();
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();
  slug = slug.replace(/[\s-]+/g, "-");
  return slug;
}

function sortItemsByDateDesc(itemA, itemB) {
  return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}
function getAllTags(posts) {
  const tags = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
  return tags.map((tag) => {
    return {
      name: tag,
      slug: slugify(tag)
    };
  }).filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
  });
}
function getPostsByTag(posts, tagSlug) {
  const filteredPosts = posts.filter((post) => (post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug));
  return filteredPosts;
}

const $$Astro$2 = createAstro("https://collegeprep-six.vercel.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  const hero = siteConfig.hero;
  return renderTemplate`${renderTemplate`${maybeRenderHead()}<section class="w-full flex flex-col gap-8 mb-16 sm:mb-24">${renderTemplate`<h1 class="text-3xl leading-tight font-serif font-medium sm:text-5xl sm:leading-tight">${unescapeHTML(marked.parse(hero.title))}</h1>`}${renderTemplate`<figure><!-- <img class="w-full" src={hero.image.src} loading="lazy" decoding="async" alt={hero.image.alt || ''} /> -->${hero.image.caption && renderTemplate`<figcaption class="mt-1.5 text-xs sm:text-sm">${hero.image.caption}</figcaption>`}</figure>`}${renderTemplate`<div class="max-w-none prose prose-dante sm:prose-lg">${unescapeHTML(marked.parse(hero.text))}</div>`}${hero.actions && hero.actions.length > 0 && renderTemplate`<div class="flex flex-wrap gap-4">${hero.actions.map((action) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "href": action.href }, { "default": ($$result2) => renderTemplate`${action.text}` })}`)}</div>`}</section>`}`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://collegeprep-six.vercel.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("guide")).sort(sortItemsByDateDesc);
  const featuredPosts = posts.filter(({ data }) => data.isFeatured);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "description": siteConfig.description, "image": siteConfig.image, "showHeader": false }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${featuredPosts.length > 0 && renderTemplate`${maybeRenderHead()}<div class="mb-16 sm:mb-24"> <h2 class="mb-12 text-xl font-serif italic sm:mb-16 sm:text-2xl">Writing</h2> ${featuredPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": post, "class": "mb-10 sm:mb-12", "headingLevel": "h3" })}`)} <div class="mt-12 sm:mt-16"> ${renderComponent($$result2, "Button", $$Button, { "href": "/guide" }, { "default": ($$result3) => renderTemplate`View All Posts` })} </div> </div>`}` })}`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/pages/index.astro", void 0);

const $$file$1 = "C:/Users/Khongor/Desktop/CP-Astro/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://collegeprep-six.vercel.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("guide")).sort(sortItemsByDateDesc);
  const tags = getAllTags(posts).sort((tagA, tagB) => {
    const postCountTagA = getPostsByTag(posts, tagA.slug).length;
    const postCountTagB = getPostsByTag(posts, tagB.slug).length;
    return postCountTagB - postCountTagA;
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tags", "description": "Explore tag directory for easy navigation and discovery. Find a wide range of topics, articles, and insights organized by tags, making it effortless to locate the content that interests you most.", "showHeader": false }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="mb-12 text-2xl font-serif italic sm:mb-16 sm:text-4xl">All Tags</h1> ${tags.map((tag) => {
    const postCount = getPostsByTag(posts, tag.slug).length;
    return renderTemplate`<a class="mb-10 flex justify-between items-start gap-8 group sm:mb-12"${addAttribute(`/tags/${tag.slug}`, "href")}> <div class="grow"> <h2 class="text-xl leading-tight font-serif font-medium group-hover:underline group-hover:decoration-dashed group-hover:underline-offset-4 group-hover:decoration-1 sm:text-2xl"> ${tag.name} </h2> <div class="mt-1 text-sm leading-normal"> ${postCount} ${postCount === 1 ? "post" : "posts"} </div> </div> <div class="hidden font-serif italic opacity-0 transition group-hover:opacity-100 sm:inline-flex sm:gap-1 sm:items-center sm:shrink-0">
View Tag Archive ${renderComponent($$result2, "ArrowRight", $$ArrowRight, { "class": "fill-current w-4 h-4" })} </div> </a>`;
  })}` })}`;
}, "C:/Users/Khongor/Desktop/CP-Astro/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/Khongor/Desktop/CP-Astro/src/pages/tags/index.astro";
const $$url = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, siteConfig as a, $$FormattedDate as b, slugify as c, $$Button as d, $$PostPreview as e, $$ArrowRight as f, getCollection as g, getAllTags as h, getPostsByTag as i, index$1 as j, index as k, sortItemsByDateDesc as s };
