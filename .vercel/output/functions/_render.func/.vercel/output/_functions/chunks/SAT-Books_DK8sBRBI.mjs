import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_MsMIaWQK.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<p><img src=\"/post-2.jpg\" alt=\"cover\"></p>";

				const frontmatter = {"title":"Books to prepare for the SAT","description":"Complete list of books you can use to prepare fully for the SAT","publishDate":"Feb 12 2024","isFeatured":true,"tags":["Resource","Book","SAT"],"seo":{"image":{"src":"/post-2.jpg","alt":"cover"}}};
				const file = "C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/SAT-Books.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![cover](/post-2.jpg)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
