import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_MsMIaWQK.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<p><img src=\"/post-2.jpg\" alt=\"Macbook\"></p>\n<p><strong>Professionalism</strong> is the conduct, behavior and attitude of someone in a work or business environment. A person doesn’t have to work in a specific profession to demonstrate the important qualities and characteristics of a professional. Professionalism leads to workplace success, a strong professional reputation and a high level of work ethic and excellence.</p>\n<p>In a recent study on <strong>Career Readiness</strong> conducted by NACE (National Association of Colleges and Employers), employers who hire college graduates were asked which professional competencies were essential to workplace success. Professionalism/work ethic topped the list with 97.5% of respondents identifying it as either “absolutely essential” or “essential” for a new college hire’s success.</p>\n<p>Here are some tips to help you be more <em>Professional</em>:</p>\n<h2 id=\"be-more-productive\">Be more productive</h2>\n<p>Use your time productively at work. Focus on your job responsibilities and avoid getting pulled into social media, web browsing and phone activity while on the clock.</p>\n<h2 id=\"develop-a-professional-image\">Develop a professional image</h2>\n<p>Project a professional presence and dress appropriately for your industry and organization. A good rule of thumb is to dress in the position you aspire to have.</p>\n<h2 id=\"communicate-effectively\">Communicate effectively</h2>\n<p>Practice professional on-line, in person and interpersonal communication skills.</p>\n<h2 id=\"keep-your-promises\">Keep your promises</h2>\n<p>Don’t make promises you can’t hold</p>\n<h2 id=\"expectation-management\">Expectation management</h2>\n<p>Don’t make <strong>expected</strong> things <strong>unexpected</strong></p>\n<h2 id=\"owning-your-mistakes\">Owning your mistakes</h2>\n<p>Own up to your mistakes, and don’t blame others</p>";

				const frontmatter = {"title":"Guide to Professionalism","excerpt":"What exactly is professionalism, and its uses in the workplace. Being professional and understanding/using it correctly will be a huge factor in your future career.","publishDate":"Feb 11 2024","isFeatured":true,"tags":["Guide","Workplace"],"seo":{"image":{"src":"/post-2.jpg","alt":"Macbook"}}};
				const file = "C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-1.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![Macbook](/post-2.jpg)\r\n\r\n**Professionalism** is the conduct, behavior and attitude of someone in a work or business environment. A person doesn’t have to work in a specific profession to demonstrate the important qualities and characteristics of a professional. Professionalism leads to workplace success, a strong professional reputation and a high level of work ethic and excellence.\r\n\r\nIn a recent study on **Career Readiness** conducted by NACE (National Association of Colleges and Employers), employers who hire college graduates were asked which professional competencies were essential to workplace success. Professionalism/work ethic topped the list with 97.5% of respondents identifying it as either “absolutely essential” or “essential” for a new college hire’s success.\r\n\r\nHere are some tips to help you be more _Professional_:\r\n\r\n## Be more productive\r\n\r\nUse your time productively at work. Focus on your job responsibilities and avoid getting pulled into social media, web browsing and phone activity while on the clock.\r\n\r\n## Develop a professional image\r\n\r\nProject a professional presence and dress appropriately for your industry and organization. A good rule of thumb is to dress in the position you aspire to have.\r\n\r\n## Communicate effectively\r\n\r\nPractice professional on-line, in person and interpersonal communication skills.\r\n\r\n## Keep your promises\r\n\r\nDon't make promises you can't hold\r\n\r\n## Expectation management\r\n\r\nDon't make **expected** things **unexpected**\r\n\r\n## Owning your mistakes\r\n\r\nOwn up to your mistakes, and don't blame others\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"be-more-productive","text":"Be more productive"},{"depth":2,"slug":"develop-a-professional-image","text":"Develop a professional image"},{"depth":2,"slug":"communicate-effectively","text":"Communicate effectively"},{"depth":2,"slug":"keep-your-promises","text":"Keep your promises"},{"depth":2,"slug":"expectation-management","text":"Expectation management"},{"depth":2,"slug":"owning-your-mistakes","text":"Owning your mistakes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
