import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, q as prependForwardSlash } from './astro/assets-service_Dfo_e_os.mjs';
import { a as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_BadD3_hS.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://collegeart.vercel.app", "SSR": true}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
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
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
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
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
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

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/guide/SAT-Books.md": () => import('./SAT-Books_D6vi-bwC.mjs'),"/src/content/guide/begin.md": () => import('./begin_fo1u_E17.mjs'),"/src/content/guide/intro-to-SAT-Math.md": () => import('./intro-to-SAT-Math_Lp50P2J8.mjs'),"/src/content/guide/satpreprw.md": () => import('./satpreprw_COe3kim_.mjs'),"/src/content/guide/school-selection.md": () => import('./school-selection_Cs1wRLqO.mjs'),"/src/content/pages/about.md": () => import('./about_Dm4h9j_4.mjs'),"/src/content/pages/contact.md": () => import('./contact_D0jRpAAs.mjs'),"/src/content/pages/terms.md": () => import('./terms_BBlAMDNa.mjs')});
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
lookupMap = {"guide":{"type":"content","entries":{"sat-books":"/src/content/guide/SAT-Books.md","begin":"/src/content/guide/begin.md","intro-to-sat-math":"/src/content/guide/intro-to-SAT-Math.md","satpreprw":"/src/content/guide/satpreprw.md","school-selection":"/src/content/guide/school-selection.md"}},"pages":{"type":"content","entries":{"about":"/src/content/pages/about.md","contact":"/src/content/pages/contact.md","terms":"/src/content/pages/terms.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/guide/SAT-Books.md": () => import('./SAT-Books_CUylvK5d.mjs'),"/src/content/guide/begin.md": () => import('./begin_CXlsfGpt.mjs'),"/src/content/guide/intro-to-SAT-Math.md": () => import('./intro-to-SAT-Math_BHa69jNn.mjs'),"/src/content/guide/satpreprw.md": () => import('./satpreprw_B_QMmNly.mjs'),"/src/content/guide/school-selection.md": () => import('./school-selection_DE5WIwIc.mjs'),"/src/content/pages/about.md": () => import('./about_ViFhjxes.mjs'),"/src/content/pages/contact.md": () => import('./contact_1SLZgecp.mjs'),"/src/content/pages/terms.md": () => import('./terms_DNyxuIuA.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const siteConfig = {
  title: "College Prep",
  subtitle: "Growing resources for you to prepare for college",
  description: "Collective resources for college prep",
  image: {
    src: "/dante-preview.jpg",
    src_dark: "",
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
    },
    {
      text: "Search",
      href: "/search"
    },
    {
      text: "Contact Us",
      href: "/contact"
    }
  ],
  footerNavLinks: [
    // TODO
    {
      text: "About",
      href: "/about"
    },
    // {
    //     text: 'Contact',
    //     href: '/contact'
    // },
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
    title: "Welcome 👋",
    text: "This website has been built to help out any student in need of centralized **College Preparation** info and guides, and we hope that it will prove useful to you!",
    image: {
      src: "/hero.jpg",
      src_dark: "/hero-dark.jpg",
      alt: "banner"
    },
    actions: [
      {
        text: "Manifesto",
        href: "/about"
      }
    ]
  },
  postsPerPage: 8,
  projectsPerPage: 8
};

export { getCollection as g, siteConfig as s };
