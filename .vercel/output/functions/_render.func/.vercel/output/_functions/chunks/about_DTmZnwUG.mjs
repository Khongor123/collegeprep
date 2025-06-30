import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BadD3_hS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>In this modern world, the rapid development of technology has trailed a multitude of positive benefits, the most beneficial one being free access to endless resources and knowledge.</p>\n<p>But with this development, one might think that applying to foreign colleges and universities might just get a bit easier, right?</p>\n<p>It did not.</p>\n<p>In fact, the college application process has become even more complicated, holding back students with immense potentials. Many successful applicants have capitalized on this growing issue and started selling courses to help other students achieve what they did. But oftentimes, these courses are overly expensive and make students lose hope just because of that.</p>\n<p>We present to you, CollegeArt, a complete <em><strong>free</strong></em> website aimed at providing every student with equal opportunities, packing all of the information covered by the college prep programs into a single <em><strong>central hub</strong></em>.</p>\n<p>We believe that everyone deserves to be educated equally, as so our purpose, and we plan to debunk the entire college application process, making it easier for everyone.</p>\n<p>Thank you, and good luck on your journey.</p>";

				const frontmatter = {"title":"Manifesto","seo":{"title":"About Us","description":"Learn more about the group behind the website and embark on a journey of inspiration and shared experiences."}};
				const file = "C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "\r\nIn this modern world, the rapid development of technology has trailed a multitude of positive benefits, the most beneficial one being free access to endless resources and knowledge. \r\n\r\nBut with this development, one might think that applying to foreign colleges and universities might just get a bit easier, right?\r\n\r\nIt did not.\r\n\r\nIn fact, the college application process has become even more complicated, holding back students with immense potentials. Many successful applicants have capitalized on this growing issue and started selling courses to help other students achieve what they did. But oftentimes, these courses are overly expensive and make students lose hope just because of that.\r\n\r\nWe present to you, CollegeArt, a complete _**free**_ website aimed at providing every student with equal opportunities, packing all of the information covered by the college prep programs into a single _**central hub**_.\r\n\r\nWe believe that everyone deserves to be educated equally, as so our purpose, and we plan to debunk the entire college application process, making it easier for everyone.\r\n\r\nThank you, and good luck on your journey.";
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
