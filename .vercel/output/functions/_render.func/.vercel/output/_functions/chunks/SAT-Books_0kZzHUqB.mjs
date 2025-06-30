import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BadD3_hS.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p><img src=\"/post-2.jpg\" alt=\"cover\"></p>\n<h2 id=\"princeton-review-digital-sat-premium-prep-2024\">Princeton Review Digital SAT Premium Prep, 2024</h2>\n<p>The College Board is changing the SAT. The Princeton Review has taken all the information the College Board has provided for the Digital SAT and created an experience to show you how the digital test looks and feels on test day. This will show you a select number of questions in the format of the new test.</p>\n<p><a href=\"https://assets.super.so/3eb1e50b-3997-4395-807b-5f599d5c28c9/files/78638b5f-3bf6-4b6e-8fb7-6391a7e1ea03.pdf\">Download</a></p>\n<h2 id=\"the-college-panda-sat-math-advnaced-guide--workbook-2nd-edition\">The College Panda SAT Math Advnaced Guide &#x26; Workbook, 2nd edition</h2>\n<p>The key to SAT Math is not any one trick but a mastery of the material. The SAT repeats the same concepts over and over again and once you have a full understanding of what’s tested, acing the math section is quite straightforward.</p>\n<p>This book brings together everything you need to know for the math section. Unlike most other test prep books, this one is truly geared towards the student aiming for the perfect score. It leaves no stones unturned.</p>\n<p><a href=\"https://assets.super.so/3eb1e50b-3997-4395-807b-5f599d5c28c9/files/81c32cc3-1623-4936-b2c5-57fbf2c939ae.pdf\">Download</a></p>\n<h2 id=\"kaplan-digital-sat-total-prep-2023\">Kaplan Digital SAT Total Prep 2023</h2>\n<p><a href=\"https://assets.super.so/3eb1e50b-3997-4395-807b-5f599d5c28c9/files/168e845e-166d-4c72-99db-c501e32990e2.pdf\">Download</a></p>\n<h2 id=\"the-complete-guide-to-sat-reading-by-erica-meltzer\">The Complete Guide to SAT Reading, by Erica Meltzer</h2>\n<p><a href=\"https://drive.google.com/file/d/1JYoVRMq_ALEjFPTAgZQaOPuj0DeXrpdq/view\">Download</a></p>\n<h2 id=\"the-ultimate-guide-to-sat-grammar-by-erica-meltzer\">The Ultimate Guide to SAT Grammar, by Erica Meltzer</h2>\n<p><a href=\"https://drive.google.com/file/d/1jPl2bKOqVCQEtLqbbF0lZT177-x_EA2H/view\">Download</a></p>";

				const frontmatter = {"title":"Books to prepare for the SAT","excerpt":"Complete list of books you can use to prepare fully for the SAT","publishDate":"Feb 12 2024","isFeatured":true,"tags":["Resource","Book","SAT","Exams"],"seo":{"image":{"src":"/post-2.jpg","alt":"cover"}}};
				const file = "C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/SAT-Books.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![cover](/post-2.jpg)\r\n\r\n## Princeton Review Digital SAT Premium Prep, 2024\r\n\r\nThe College Board is changing the SAT. The Princeton Review has taken all the information the College Board has provided for the Digital SAT and created an experience to show you how the digital test looks and feels on test day. This will show you a select number of questions in the format of the new test.\r\n\r\n[Download](https://assets.super.so/3eb1e50b-3997-4395-807b-5f599d5c28c9/files/78638b5f-3bf6-4b6e-8fb7-6391a7e1ea03.pdf)\r\n\r\n## The College Panda SAT Math Advnaced Guide & Workbook, 2nd edition\r\n\r\nThe key to SAT Math is not any one trick but a mastery of the material. The SAT repeats the same concepts over and over again and once you have a full understanding of what's tested, acing the math section is quite straightforward.\r\n\r\nThis book brings together everything you need to know for the math section. Unlike most other test prep books, this one is truly geared towards the student aiming for the perfect score. It leaves no stones unturned.\r\n\r\n[Download](https://assets.super.so/3eb1e50b-3997-4395-807b-5f599d5c28c9/files/81c32cc3-1623-4936-b2c5-57fbf2c939ae.pdf)\r\n\r\n## Kaplan Digital SAT Total Prep 2023\r\n\r\n[Download](https://assets.super.so/3eb1e50b-3997-4395-807b-5f599d5c28c9/files/168e845e-166d-4c72-99db-c501e32990e2.pdf)\r\n\r\n## The Complete Guide to SAT Reading, by Erica Meltzer\r\n\r\n[Download](https://drive.google.com/file/d/1JYoVRMq_ALEjFPTAgZQaOPuj0DeXrpdq/view)\r\n\r\n## The Ultimate Guide to SAT Grammar, by Erica Meltzer\r\n\r\n[Download](https://drive.google.com/file/d/1jPl2bKOqVCQEtLqbbF0lZT177-x_EA2H/view)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"princeton-review-digital-sat-premium-prep-2024","text":"Princeton Review Digital SAT Premium Prep, 2024"},{"depth":2,"slug":"the-college-panda-sat-math-advnaced-guide--workbook-2nd-edition","text":"The College Panda SAT Math Advnaced Guide & Workbook, 2nd edition"},{"depth":2,"slug":"kaplan-digital-sat-total-prep-2023","text":"Kaplan Digital SAT Total Prep 2023"},{"depth":2,"slug":"the-complete-guide-to-sat-reading-by-erica-meltzer","text":"The Complete Guide to SAT Reading, by Erica Meltzer"},{"depth":2,"slug":"the-ultimate-guide-to-sat-grammar-by-erica-meltzer","text":"The Ultimate Guide to SAT Grammar, by Erica Meltzer"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
