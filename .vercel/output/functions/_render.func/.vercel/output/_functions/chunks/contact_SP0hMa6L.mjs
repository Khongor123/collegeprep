import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BadD3_hS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Thank you for reaching out! Whether you have a question, a suggestion, or just want to share your thoughts, We’re all ears. Feel free to get in touch through any of the methods below:</p>\n<p><em>Email:</em>\r\nFeel free to drop us an email at <a href=\"mailto:khngrr@proton.me\">khngrr@proton.me</a>, and we’ll do our best to respond as soon as possible.</p>\n<p><em>Social Media:</em>\r\nConnect us on social media as well. Find us on <a href=\"https://instagram.com/collegeart.official\">Instagram</a>.</p>";

				const frontmatter = {"title":"Get in touch","seo":{"title":"Contact","description":"Get in touch through email or social media! Let me know how I can help."}};
				const file = "C:/Users/Khongor/Desktop/CP-Astro/src/content/pages/contact.md";
				const url = "/contact";
				function rawContent() {
					return "\r\nThank you for reaching out! Whether you have a question, a suggestion, or just want to share your thoughts, We're all ears. Feel free to get in touch through any of the methods below:\r\n\r\n_Email:_\r\nFeel free to drop us an email at [khngrr@proton.me](mailto:khngrr@proton.me), and we'll do our best to respond as soon as possible.\r\n\r\n_Social Media:_\r\nConnect us on social media as well. Find us on [Instagram](https://instagram.com/collegeart.official).\r\n";
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
