import './site-config_Dd6ooKtg.mjs';

function slugify(input) {
  if (!input) return "";
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

export { slugify as a, getPostsByTag as b, getAllTags as g, sortItemsByDateDesc as s };
