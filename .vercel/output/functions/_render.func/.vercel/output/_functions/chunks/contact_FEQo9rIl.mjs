import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_MsMIaWQK.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<p>Thank you for reaching out! Whether you have a question, a suggestion, or just want to share your thoughts, I’m all ears. Feel free to get in touch through any of the methods below:</p>\n<p><em>Email:</em>\r\nFeel free to drop me an email at <a href=\"mailto:khngrr@proton.me\">khngrr@proton.me</a>, and I’ll do my best to respond as soon as possible.</p>\n<p><em>Social Media:</em>\r\nConnect with me on social media as well. Find me on <a href=\"https://instagram.com/khngrrrr\">Instagram</a> or <a href=\"https://www.linkedin.com/\">LinkedIn</a>.</p>";

				const frontmatter = {"title":"Get in touch","seo":{"title":"Contact","description":"Get in touch through email or social media! Let me know how I can help."}};
				const file = "C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/contact.md";
				const url = "/contact";
				function rawContent() {
					return "\r\nThank you for reaching out! Whether you have a question, a suggestion, or just want to share your thoughts, I'm all ears. Feel free to get in touch through any of the methods below:\r\n\r\n_Email:_\r\nFeel free to drop me an email at [khngrr@proton.me](mailto:khngrr@proton.me), and I'll do my best to respond as soon as possible.\r\n\r\n_Social Media:_\r\nConnect with me on social media as well. Find me on [Instagram](https://instagram.com/khngrrrr) or [LinkedIn](https://www.linkedin.com/).\r\n";
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
