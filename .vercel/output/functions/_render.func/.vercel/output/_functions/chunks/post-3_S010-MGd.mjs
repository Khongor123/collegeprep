import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_MsMIaWQK.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<p><img src=\"/post-2.jpg\" alt=\"cover\"></p>\n<ul>\n<li>\n<p>A little over 2 hours long; assesses the same skills as the longer SAT by using and adaptive format</p>\n</li>\n<li>\n<p>Note that the test is adaptive by section, not by question</p>\n</li>\n<li>\n<p>Reading &#x26; Writing passages are no longer than 150 words. Each passage has just one question accompanying it.</p>\n</li>\n<li>\n<p>A greater variety of reading genres be represented. Along with the current SAT reading genres, the test will also include humanities, drama, and poetry excerpts.</p>\n</li>\n<li>\n<p>First 15 questions or so are devoted to Reading</p>\n</li>\n<li>\n<p>Remainders are devoted to Writing</p>\n</li>\n<li>\n<p>Each text 50-150 words</p>\n</li>\n</ul>\n<h2 id=\"expected-topics\">Expected Topics:</h2>\n<ul>\n<li>\n<p>Fiction (prose fiction, poetry, drama)</p>\n</li>\n<li>\n<p>Humanities (art, literature, music)</p>\n</li>\n<li>\n<p>Social Science (history, politics, sociology)</p>\n</li>\n<li>\n<p>Natural Science (biology, physics, astronomy)</p>\n</li>\n</ul>";

				const frontmatter = {"title":"Preparing for the SAT - Reading and Writing","description":"What to expect and how to prepare for the SAT's Reading and Writing section","publishDate":"Feb 12 2024","isFeatured":true,"tags":["College","Exam","SAT"],"seo":{"image":{"src":"post-2.jpg","alt":"cover"}}};
				const file = "C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-3.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![cover](/post-2.jpg)\r\n\r\n- A little over 2 hours long; assesses the same skills as the longer SAT by using and adaptive format\r\n\r\n- Note that the test is adaptive by section, not by question\r\n\r\n- Reading & Writing passages are no longer than 150 words. Each passage has just one question accompanying it.\r\n\r\n- A greater variety of reading genres be represented. Along with the current SAT reading genres, the test will also include humanities, drama, and poetry excerpts.\r\n\r\n- First 15 questions or so are devoted to Reading\r\n\r\n- Remainders are devoted to Writing\r\n\r\n- Each text 50-150 words\r\n\r\n## Expected Topics:\r\n\r\n- Fiction (prose fiction, poetry, drama)\r\n\r\n- Humanities (art, literature, music)\r\n\r\n- Social Science (history, politics, sociology)\r\n\r\n- Natural Science (biology, physics, astronomy)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"expected-topics","text":"Expected Topics:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
