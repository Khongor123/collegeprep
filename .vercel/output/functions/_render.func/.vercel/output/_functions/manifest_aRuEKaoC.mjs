import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import './chunks/astro_MsMIaWQK.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2ukJRgSl.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.irZrYa8S.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2ukJRgSl.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.irZrYa8S.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://collegeprep-six.vercel.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Khongor/Desktop/CP-Astro/src/pages/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Khongor/Desktop/CP-Astro/src/pages/guide/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/guide/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Khongor/Desktop/CP-Astro/src/pages/guide/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/guide/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Khongor/Desktop/CP-Astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Khongor/Desktop/CP-Astro/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["C:/Users/Khongor/Desktop/CP-Astro/src/pages/tags/[slug]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[slug]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Khongor/Desktop/CP-Astro/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Khongor/Desktop/CP-Astro/src/utils/data-utils.ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_iNuSyv_s.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_x2t15AXd.mjs","\u0000@astrojs-manifest":"manifest_aRuEKaoC.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_MvoZTKfX.mjs","\u0000@astro-page:src/pages/guide/[slug]@_@astro":"chunks/_slug__AGLumpl4.mjs","\u0000@astro-page:src/pages/guide/[...page]@_@astro":"chunks/_.._On0cXKdg.mjs","\u0000@astro-page:src/pages/tags/[slug]/[...page]@_@astro":"chunks/_.._M9LtztUs.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_0BqY4wUv.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_ZAuoDist.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_Q7AZz4zy.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"chunks/_.._s8efTpx4.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/SAT-Books.md?astroContentCollectionEntry=true":"chunks/SAT-Books_sAVBOGgH.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-1.md?astroContentCollectionEntry=true":"chunks/post-1_Petn1RBk.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-2.md?astroContentCollectionEntry=true":"chunks/post-2_xXNSqrD6.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-3.md?astroContentCollectionEntry=true":"chunks/post-3_PIGfnUD-.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/about.md?astroContentCollectionEntry=true":"chunks/about_kx5-pHhv.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/contact.md?astroContentCollectionEntry=true":"chunks/contact_pgRKFwnW.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/terms.md?astroContentCollectionEntry=true":"chunks/terms_eIZra-Bb.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/SAT-Books.md?astroPropagatedAssets":"chunks/SAT-Books_02hHRJR4.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-1.md?astroPropagatedAssets":"chunks/post-1_8D6CgraQ.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-2.md?astroPropagatedAssets":"chunks/post-2_Ivg-IQFG.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-3.md?astroPropagatedAssets":"chunks/post-3_IwxtfAD5.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/about.md?astroPropagatedAssets":"chunks/about_jWtwp1gl.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/contact.md?astroPropagatedAssets":"chunks/contact_Eu5D-Gxw.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/terms.md?astroPropagatedAssets":"chunks/terms_rFYzn7B3.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/SAT-Books.md":"chunks/SAT-Books_DK8sBRBI.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-1.md":"chunks/post-1_KKeoyXW_.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-2.md":"chunks/post-2_Na7yWWOV.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-3.md":"chunks/post-3_S010-MGd.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/about.md":"chunks/about_HSnGV6J7.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/contact.md":"chunks/contact_FEQo9rIl.mjs","C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/terms.md":"chunks/terms__4K8FD-5.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.j1nkbyuu.js","/astro/hoisted.js?q=1":"_astro/hoisted.2ukJRgSl.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_slug_.irZrYa8S.css","/about.jpeg","/dante-preview.jpg","/favicon.svg","/hero.jpeg","/post-1.jpg","/post-10.jpg","/post-11.jpg","/post-12.jpg","/post-13.jpg","/post-14.jpg","/post-2.jpg","/post-3.jpg","/post-4.jpg","/post-5.jpg","/post-6.jpg","/post-7.jpg","/post-8.jpg","/post-9.jpg","/project-1.jpg","/project-2.jpg","/project-3.jpg","/project-4.jpg","/project-5.jpg","/project-6.jpg","/project-7.jpg","/_astro/hoisted.2ukJRgSl.js","/_astro/hoisted.j1nkbyuu.js"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
