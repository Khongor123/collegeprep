import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_MsMIaWQK.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';

const html = "<p><img src=\"/post-14.jpg\" alt=\"cover\"></p>\n<h2 id=\"things-to-consider-first\">Things to consider <em>FIRST</em></h2>\n<ol>\n<li>Financial aid</li>\n<li>Size</li>\n<li>Major &#x26; Program - Check if the school offers the major &#x26; program associated with your chosen career</li>\n<li>School Type (All-boys, All-Girls, Mixed etc…)</li>\n</ol>\n<h2 id=\"things-to-consider-second\">Things to consider <em>SECOND</em></h2>\n<ol>\n<li>Diversity - Must be over 10%</li>\n<li>Setting - What kind of place the school is located in</li>\n<li>Testing Policy - Does the school require SAT, IELTS, TOELF, etc..</li>\n<li>Admission Profile</li>\n</ol>\n<h2 id=\"things-to-consider-third\">Things to consider <em>THIRD</em></h2>\n<ol>\n<li>Housing</li>\n<li>Retention &#x26; Graduation rates</li>\n<li>Activities</li>\n<li>Job placements - After graduation</li>\n</ol>\n<h2 id=\"smart-tips\">Smart Tips</h2>\n<p>Make your own <em><strong>CRITERIA</strong></em></p>\n<p>Find your <em><strong>SPIKE</strong></em></p>\n<p>No <em><strong>PUBLIC</strong></em> schools</p>\n<p><em><strong>REACH</strong></em> &#x26; <em><strong>MATCH</strong></em> schools</p>\n<p>Contact someone who attends or has attended the school</p>\n<p>Send <em><strong>EARLY DECISION</strong></em> application</p>";

				const frontmatter = {"title":"School Selection","excerpt":"How to decide which schools you should send your application to, and what things should you be researching?","publishDate":"Feb 12 2024","isFeatured":true,"tags":["Guide","College"],"seo":{"image":{"src":"post-14.jpg","alt":"cover"}}};
				const file = "C:/Users/Khongor/Desktop/CP-Astro/src/content/guide/post-2.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![cover](/post-14.jpg)\r\n\r\n## Things to consider _FIRST_\r\n\r\n1. Financial aid\r\n2. Size\r\n3. Major & Program - Check if the school offers the major & program associated with your chosen career\r\n4. School Type (All-boys, All-Girls, Mixed etc...)\r\n\r\n## Things to consider _SECOND_\r\n\r\n1. Diversity - Must be over 10%\r\n2. Setting - What kind of place the school is located in\r\n3. Testing Policy - Does the school require SAT, IELTS, TOELF, etc..\r\n4. Admission Profile\r\n\r\n## Things to consider _THIRD_\r\n\r\n1. Housing\r\n2. Retention & Graduation rates\r\n3. Activities\r\n4. Job placements - After graduation\r\n\r\n## Smart Tips\r\n\r\nMake your own _**CRITERIA**_\r\n\r\nFind your _**SPIKE**_\r\n\r\nNo _**PUBLIC**_ schools\r\n\r\n_**REACH**_ & _**MATCH**_ schools\r\n\r\nContact someone who attends or has attended the school\r\n\r\nSend _**EARLY DECISION**_ application\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"things-to-consider-first","text":"Things to consider FIRST"},{"depth":2,"slug":"things-to-consider-second","text":"Things to consider SECOND"},{"depth":2,"slug":"things-to-consider-third","text":"Things to consider THIRD"},{"depth":2,"slug":"smart-tips","text":"Smart Tips"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
