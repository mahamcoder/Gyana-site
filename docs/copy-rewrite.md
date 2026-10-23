# Page 1

Gyanasarathi.com Copy Rewrite: SEO and GEO
Gyanasarathi.com Copy Rewrite: SEO and
GEO
Oct 19, 2026 · @Gyan
Read this first
We rewrote the copy for all 39 blocks across the 7 pages of gyanasarathi.com. Each block
below shows a screenshot of the live section first, then the 1:1 replacement copy. Fix the
seven issues in this table before or alongside the copy. Today, Google can index only the
home page, and AI assistants such as ChatGPT, Claude and Perplexity can read none of
the site.

| # | Issue | What we found on 19 Oct 2026 | Fix |
| --- | --- | --- | --- |
| 1 | Inner pages<br>return 404 | /about, /analytics, /ai-lab,<br>/alpha, /research and /contact<br>return HTTP 404 when opened<br>directly, and so do /robots.txt<br>and /sitemap.xml. The pages<br>only load after a click from<br>Home. | Add the SPA fallback rule in the<br>Developer checklist, then<br>prerender every route. |
| 2 | The HTML is<br>empty | Home's HTML is 480 bytes:<br>one empty root div that<br>JavaScript fills in. Major AI<br>crawlers do not run JavaScript<br>(Vercel, Dec 2024), so they see<br>a blank page. | Prerender or server-render<br>each route so the copy in this<br>doc ships in the HTML. |
| 3 | No page<br>metadata | Every page's title tag is "gayan-<br>website". There is no meta<br>description, canonical, Open<br>Graph tag or JSON-LD. | Use the title and meta<br>description in each page's hero<br>block, plus the JSON-LD<br>section. |
| 4 | Brand spelled<br>three ways | Domain: gyanasarathi.com.<br>Copy: GyanSarathi and<br>GYANSARATHI. Email:<br>support@gayan-sarathi.com. | Use "Gyanasarathi" everywhere<br>and move email to an<br>@gyanasarathi.com address. |


---

# Page 2

| # | Issue | What we found on 19 Oct 2026 | Fix |
| --- | --- | --- | --- |
| 5 | Template<br>leftovers | The footer on all 7 pages reads<br>"Join us as we redefine global<br>payments". Home shows 8<br>testimonials with stock-style<br>names. | Replace the footer (Home,<br>block 9). Publish only real<br>quotes used with permission<br>(FTC rule, in force since 21 Oct<br>2024). |
| 6 | Conflicting<br>numbers | Capital: $2.5B+ and $4.2B.<br>Accuracy: 90%, 99% and<br>99.8%. About shows "+24.8%<br>Above Benchmark" and<br>"$14.2M Year to Date". | One verified figure per metric,<br>used the same way<br>everywhere. |
| 7 | Heading<br>structure | Home has 3 H1 tags<br>(wordmark, headline, footer<br>logo); every inner page has 2. | One H1 per page: the headline.<br>The wordmark and footer logo<br>become plain text. |

How to read each block:
Screenshot: the live block, captured 19 Oct 2026 at desktop width.
Table: Element (as it appears on screen), Live (current text), New (paste as written),
Why.
Keep in the New column means the live copy already works.
Length: new copy stays close to the live character count so the layout holds; the Why
column flags any line that runs longer.
[confirm] marks a number or fact only you can verify. Publish it once checked.
Page wrap-up: each page ends with its answer capsule (a 40 to 50 word passage
written for AI answers), then its schema and internal links.
Sitewide rules
Describe Gyanasarathi the same way on every page, in schema and on LinkedIn. Search
engines and AI models then file one set of facts under one name. Every description opens
with the first sentence below; longer versions, such as the answer capsules, add to it but
never reword it:

---

# Page 3

Gyanasarathi is an India-based financial modeling and agentic AI firm. It builds
institutional-grade commercial real estate underwriting, DCF and LP/GP waterfall
models, and AI agents that automate financial analysis for investment teams
worldwide.

| Topic | Use | Avoid |
| --- | --- | --- |
| Brand name | Gyanasarathi, typed this way in the<br>HTML; CSS sets any capitals | GyanSarathi, GYANSARATHI, Gyan<br>Sarathi |
| Founder | Gyan [surname], Founder | GP, which private equity readers<br>take to mean general partner |
| Nav label | About | About GP |
| Location | Hubs in India, clients worldwide | City names; "USA, Europe, Middle<br>East and Australia" |
| Email | One monitored address<br>@gyanasarathi.com [confirm] | support@gayan-sarathi.com |
| Private AI | "private AI model" first; "sovereign"<br>only as a descriptor | "Sovereign AI" alone, which<br>searchers use for national AI<br>infrastructure |
| Call to<br>action | Book a Strategy Call as the primary<br>CTA on every page; AI Lab and<br>Proprietary Alpha keep one named<br>secondary CTA each | Strategy Session, Strategic Call,<br>Consultation Call |
| Response<br>time | Two business hours [confirm], with<br>the time zone stated once on<br>Contact, for example IST, Monday to<br>Friday | "Two hours" on one line and "two<br>business hours" on the next |
| Claims | Defined, checkable facts | Guarantee, world-class,<br>transformative, superhuman,<br>bleeding edge |

Proof points the copy draws on. Each number appears in exactly one form across the site:

---

# Page 4

| Proof point | Source |
| --- | --- |
| 7+ years of institutional commercial real estate<br>underwriting | Founder background |
| 7 asset classes: industrial, office, retail, multifamily,<br>hospitality, medical office, mixed-use | Founder background |
| Argus Enterprise, Excel DCF and LP/GP waterfall<br>models | Founder background |
| MBA in Finance and Business Analytics | Founder background |
| 1,200+ engagements | Live site [confirm] |
| $2.5B+ in transactions underwritten | Live site [confirm]; replaces $4.2B |
| 5 AI product lines | Live AI Lab page |
| Client owns its model, outputs and IP | Live Proprietary Alpha page |

Keywords in each hero block were chosen by search intent, not measured volume.
Validate them in Google Search Console once the pages are indexable.
Home page (/)
Home carries the entity definition. Its H1 and first paragraph now name the two services
buyers search for: real estate financial modeling and agentic AI.

---

# Page 5

Home 1. Hero
Block: Hero: wordmark, headline, subheadline, two buttons, social proof and floating
badges.
SEO metadata
Primary keyword: CRE financial modeling and agentic AI
Secondary keywords: commercial real estate underwriting, agentic AI for finance,
LP/GP waterfall modeling, financial workflow automation
Title tag (52 characters): CRE Financial Modeling and Agentic AI | Gyanasarathi
Meta description (144 characters): Institutional-grade CRE underwriting, DCF and
waterfall models, plus AI agents that automate financial analysis. Book a 30-minute
strategy call.

---

# Page 6

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Wordmark (H1<br>today) | GYANSARATHI | GYANASARATHI | Matches the domain<br>and logo. Make it a<br>div, not an H1; 12<br>letters need about<br>8% smaller type.<br>Type it as<br>Gyanasarathi; CSS<br>sets the capitals. |
| Floating label<br>1 | AI Analytics Engine | Agentic AI Workflows | Names a service<br>buyers search for. |
| Floating label<br>2 | Global Market Reach | Underwriting Models | Swaps a vague claim<br>for the core service. |
| Badge title | Capital Optimized | Capital Modeled | Describes the work,<br>not an outcome we<br>cannot show. |
| Badge figure | $2.5B+ Analysis | $2.5B+ underwritten<br>[confirm] | Same figure as the<br>metrics bar; 4<br>characters longer, so<br>check the badge<br>width. |
| Badge chip | 99% | Remove the chip | The 99% has no<br>defined metric<br>behind it. |
| Headline (the<br>only H1) | Architecting Financial<br>Clarity. Engineering the<br>Future. | Real Estate Financial<br>Models. Accelerated by<br>Agentic AI. | Names both core<br>services and keeps<br>the two-sentence<br>rhythm; /analytics<br>owns the service<br>query. |


---

# Page 7

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Subheadline | Institutional grade<br>multi-industry financial<br>analysis and Agentic AI<br>product innovation for<br>global capital markets. | Institutional-grade CRE<br>and infrastructure<br>underwriting, DCF and<br>waterfall models, with<br>AI agents that<br>automate the work. | Names the models<br>buyers search for<br>and what the AI<br>does. |
| Button 1 | EXPLORE ANALYTICS | MODELING SERVICES | Descriptive anchor<br>text for /analytics,<br>same length. |
| Button 2 | EXPLORE AI | AGENTIC AI | Keyword anchor text<br>for /ai-lab, same<br>length. |
| Social proof<br>figure | 1200+ | 1,200+ [confirm] | A thousands<br>separator reads as a<br>counted number. |
| Social proof<br>label | ENGAGEMENTS.<br>TRUSTED<br>WORLDWIDE. | ENGAGEMENTS FOR<br>CLIENTS WORLDWIDE. | States the fact once,<br>without the vague<br>"trusted". |
| Side label 1 | SOVEREIGN AI<br>MODELS | PRIVATE AI MODELS | The term buyers use<br>(see Sitewide rules). |
| Side label 2 | MULTI-INDUSTRY<br>ANALYTICS | REAL ASSET<br>ANALYTICS | Points to the primary<br>niche. |
| Button 3 | SEE HOW IT WORKS | Keep | Clear as is. |

Home 2. Metrics bar
Block: Metrics bar: three KPI cards under the hero.

---

# Page 8

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Card 1<br>label | CAPITAL ANALYZED | CAPITAL MODELED | Matches the hero badge<br>wording. |
| Card 1<br>value | $4.2B Across<br>Institutional Portfolios | $2.5B+ in Transactions<br>Underwritten [confirm] | The site shows both<br>$2.5B+ and $4.2B; keep<br>one verified figure. |
| Card 2<br>label | MODEL RELIABILITY<br>SCORE | FOUNDER TRACK<br>RECORD | The years are the<br>founder's, so the label<br>says so. |
| Card 2<br>value | 99.8% Uptime and<br>Accuracy Guarantee | 7+ Years of CRE<br>Underwriting | A guarantee invites<br>liability; years of practice<br>can be checked. |
| Card 3<br>label | GLOBAL FOOTPRINT | DELIVERY MODEL | Introduces where and<br>how the work happens. |
| Card 3<br>value | Serving Clients in 4<br>Key Markets | India-Based Team,<br>Clients Worldwide | Follows the location rule. |


---

# Page 9

Home 3. The Strategic Advantage
Block: 3-column service grid with a metric in each card.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | WHAT WE DO | Keep | Clear as is. |
| H2, line 1 | The Strategic | Financial Modeling | Puts the core service<br>in an H2. |
| H2, line 2 | Advantage | Meets Agentic AI | Adds the second core<br>term; both lines still<br>fit the left column at<br>the current size. |


---

# Page 10

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Intro | We combine advanced<br>financial modeling with<br>next-gen AI to help<br>sovereign funds, REITs<br>and M&A teams move<br>faster and smarter than<br>the market. | We pair institutional-<br>grade financial models<br>with agentic AI, so<br>sovereign funds, PE<br>sponsors, REITs and<br>M&A teams underwrite<br>faster with a full audit<br>trail. | Names all four buyer<br>types and the<br>outcome. |
| Avatar<br>chip | GLOBAL PARTNERS | SPECIALIST-LED | An unverified<br>"partners" claim<br>becomes a delivery<br>fact. |
| Card 1<br>title | Multi-Industry Financial<br>Analytics | CRE and Multi-Industry<br>Modeling | Leads with the<br>primary niche. |
| Card 1<br>body | From energy<br>infrastructure to<br>investment banking, we<br>deliver DCF modeling,<br>LBO analysis, M and A<br>due diligence, and yield-<br>tracking dashboards<br>tailored to each sector's<br>unique financial<br>dynamics. | From commercial real<br>estate to energy<br>infrastructure, we build<br>DCF, LBO and LP/GP<br>waterfall models, M&A<br>due diligence packs and<br>yield dashboards. | Adds waterfall<br>models; "M&A" is how<br>people search. |
| Card 1<br>metric | 90% / MODEL PRECISION<br>RATE ACROSS<br>ENGAGEMENTS | 7 / ASSET CLASSES,<br>INDUSTRIAL TO MIXED-<br>USE | "Precision rate" is<br>undefined; asset<br>classes can be<br>counted. Drop the %<br>suffix. |
| Card 2<br>title | Agentic AI and Product<br>Development | Keep | Already leads with<br>the keyword. |


---

# Page 11

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Card 2<br>body | We build the tools your<br>team needs tomorrow.<br>From autonomous stock<br>analysis agents to secure<br>LLM fine-tuning and<br>enterprise API<br>infrastructure, we<br>engineer intelligence<br>directly into your financial<br>workflows. | We build AI agents that<br>read filings, parse leases<br>and loan documents,<br>and run valuation<br>checks. We also fine-<br>tune LLMs and build<br>secure APIs for your<br>workflows. | Concrete tasks are<br>what AI answers<br>quote. |
| Card 2<br>metric | $2.5B+ / CAPITAL<br>MODELED AND<br>OPTIMIZED | 5 / AI PRODUCT LINES,<br>FROM AGENTS TO APIS | $2.5B+ now lives in<br>the metrics bar; the<br>AI Lab lists five<br>products. |
| Card 3<br>badge | ENTERPRISE GRADE AI | PRIVATE BY DESIGN | Leads with the<br>buyer's main concern. |
| Card 3<br>title | Sovereign AI Training for<br>Investment Firms | Private AI Models for<br>Investment Firms | Matches the search<br>term. |
| Card 3<br>body | Your investment<br>philosophy is your<br>competitive advantage.<br>We encode it into a fully<br>private AI model that<br>screens thousands of<br>assets in seconds using<br>your unique analytical<br>DNA, not a generic<br>algorithm | We train a private AI<br>model on your past<br>deals, valuation rules<br>and risk limits. It screens<br>thousands of assets in<br>seconds, the way your<br>investment committee<br>would. | Clear cause and<br>effect; ends the<br>sentence properly. |
| Card 3<br>metric | 4.8/5, five stars,<br>GLOBALLY RECOGNIZED<br>AI | 100% / CLIENT-OWNED<br>MODELS AND OUTPUTS | The rating has no<br>source; ownership is a<br>stated policy. Remove<br>the star row. |


---

# Page 12

Home 4. Ticker
Block: Scrolling ticker (marquee) between sections.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Ticker<br>line 1 | GYANSARATHI: TRUSTED<br>BY CAPITAL MARKETS<br>GLOBALLY | GYANASARATHI:<br>FINANCIAL MODELING<br>AND AGENTIC AI | Repeats the entity<br>name next to both<br>core terms. |
| Ticker<br>line 2 | SERVING INSTITUTIONAL<br>CLIENTS ACROSS THE<br>USA AND EUROPE AND<br>THE MIDDLE EAST AND<br>AUSTRALIA | SERVING INSTITUTIONAL<br>INVESTORS WORLDWIDE<br>FROM INDIA | Follows the location<br>rule and reads in<br>one pass. |

Developer note: the ticker text repeats 6 times in the HTML. Ship one copy in the HTML
and create the repeats in the animation code, marked aria-hidden="true", so screen
readers read it once.

---

# Page 13

Home 5. Process
Block: 4-step process strip.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | HOW WE DELIVER<br>RESULTS | HOW AN ENGAGEMENT<br>RUNS | Says plainly what<br>follows. |
| H2 | Data That Drives<br>Decisions | Our Underwriting<br>Process | Matches how buyers<br>phrase the question. |
| Intro | Every engagement<br>turns data into clarity<br>and combining financial<br>modeling with custom<br>AI to reduce risk and<br>unlock value. | Every engagement<br>follows four steps that<br>pair analyst-built financial<br>models with custom AI to<br>reduce errors and review<br>time. | Fixes the grammar and<br>states the mechanism. |
| Step 1<br>title | Intelligent Data<br>Acquisition | Data Ingestion and<br>Cleanup | Names the actual task. |
| Step 1<br>body | We ingest filings,<br>earnings calls, macro<br>data & proprietary<br>datasets | We ingest rent rolls, T12s,<br>filings, earnings calls and<br>your own datasets. | Real estate inputs show<br>domain depth. |


---

# Page 14

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Step 2<br>title | Deep Financial<br>Modeling | Financial Modeling | The exact keyword. |
| Step 2<br>body | We build DCF, LBO and<br>comps with tailored<br>risk and KPI<br>frameworks. | We build DCF, LBO,<br>comps and waterfall<br>models with tailored risk<br>tests. | Adds waterfall models. |
| Step 3<br>title | Custom AI Processing | Agentic AI Review | Says what the AI does<br>in this step. |
| Step 3<br>body | LLMs and agents<br>analyze data to find<br>patterns, anomalies &<br>outputs | AI agents test every<br>assumption and flag<br>outliers, gaps and<br>anomalies. | A checkable action<br>instead of "outputs". |
| Step 4<br>title | Strategic Decision<br>Output | Decision-Ready Output | Shorter, same meaning. |
| Step 4<br>body | Boardroom-ready<br>insights via reports,<br>valuations & real<br>dashboard. | Investment committee<br>memos, valuations and<br>live dashboards. | Fixes "real dashboard"<br>and names the<br>deliverables. |


---

# Page 15

Home 6. Three disciplines
Block: Large-type statement: three lines with 3D icons, then one sentence.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Line 1 | Multi-Industry Analytics | Real Estate<br>Underwriting | Same length, so the icon<br>positions hold. |
| Line 2<br>(italic) | Agentic AI & Product Dev | Agentic AI &<br>Automation | Plain service name,<br>similar length. |
| Line 3<br>(italic) | Sovereign Wealth Models | Private AI Model<br>Training | "Sovereign Wealth<br>Models" reads as models<br>for sovereign wealth<br>funds; the new line uses<br>the sitewide term at a<br>similar length. |


---

# Page 16

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Body | Collaborating with global<br>pioneers to build financial<br>architectures and AI-<br>driven products that<br>redefine the boundaries of<br>what's possible in capital<br>markets. | Use the Home<br>answer capsule<br>below | The page's definition,<br>where AI answers look<br>for it. About twice the<br>live length; the block has<br>open space below the<br>text. |

Developer note: the three lines sit inside one H4 today. Make them one H2 so headings
run H1, then H2.
Home 7. Testimonials
Block: Social proof: two rows of scrolling quote cards (8 quotes).

---

# Page 17

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H2 | WHAT OUR CLIENTS<br>SAID | WHAT CLIENTS SAY | Present tense, shorter. |
| 8 quote<br>cards | Alexander Vance (Apex<br>Capital), Sarah Chen<br>(Global Tech Solutions),<br>Marcus Thorne<br>(Sovereign Wealth<br>Fund), Elena Rodriguez<br>(Arca Group), Julian<br>Kross (QuantEdge<br>Financial), Dr. Amara<br>Okoro (InvestCore),<br>Thomas Wright<br>(Bridgepoint), Sophia<br>Liang (Fintech<br>Innovators) | Replace with real client<br>quotes used with<br>written permission.<br>Hide the block until<br>you have at least three. | These read like template<br>placeholders. Invented<br>testimonials break the<br>FTC rule and lose<br>institutional readers on<br>sight. |

We have not written replacement quotes: they must come from clients, word for word.
Use this format for each card:
Quote: one or two sentences, up to 160 characters, ideally with one measurable result
Name and title: or role only, if the client prefers
Firm type: for example, "Real estate private equity sponsor, US"
Developer note: do not add Review or AggregateRating markup for these quotes. Google
does not show review stars for reviews a business publishes about itself.

---

# Page 18

Home 8. Closing call to action
Block: CTA banner: H2, one paragraph, two buttons.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H2 | Your Next Strategic<br>Advantage Starts Here | Bring Us Your Next<br>Underwriting Mandate | A specific next step<br>with the core keyword. |
| Body | Whether you need<br>precision financial<br>modeling, custom AI<br>models, or analytics<br>infrastructure,<br>GyanSarathi delivers<br>institutional intelligence.<br>Helping your team stay<br>ahead of the market with<br>scalable, data-driven<br>systems. | Need an acquisition<br>model, a fund waterfall,<br>a custom AI agent or a<br>private AI model trained<br>on your data?<br>Gyanasarathi scopes it<br>with you on a 30-minute<br>call. | Concrete deliverables;<br>fixes the sentence<br>fragment and the brand<br>spelling. |
| Button 1 | Schedule Your Strategy<br>Call | Book a Strategy Call | The primary CTA name<br>sitewide; the body<br>states the 30 minutes. |
| Button<br>2 | Explore the AI Lab | Keep | Good anchor text. |


---

# Page 19

Home 9. Footer (all 7 pages)
Block: Shared footer with a closing CTA. One change here fixes all 7 pages.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Badge | GET ✦ STARTED | Keep | Clear as is. |
| H2 | Join us as we redefine<br>global payments | Model the Deal. Automate the<br>Analysis. | Template copy<br>about payments,<br>replaced with<br>your two<br>services. |
| Body | Simplify payments.<br>Scale your business.<br>Transform how you<br>move money. | Underwriting models and<br>agentic AI for real estate and<br>capital markets. | Same length, on<br>topic. |


---

# Page 20

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Button | REQUEST A CALL | BOOK A STRATEGY CALL | The primary CTA<br>name sitewide;<br>the pill widens<br>by six<br>characters. |
| Footer logo<br>(H1 today) | GyanSarathi | Gyanasarathi | Brand spelling.<br>Make it a div so<br>each page keeps<br>one H1. |
| New line<br>under the<br>logo | (empty) | Gyanasarathi is an India-<br>based financial modeling and<br>agentic AI firm. | The fixed<br>opening<br>sentence of<br>every<br>description, on<br>every page. |
| Column<br>heading | Contacts | Contact | Singular,<br>standard. |
| Navigation<br>link | About GP | About | Matches the nav<br>rule. |
| Insights<br>column link | Proprietary Alpha | Move to the Solutions column;<br>add "Research Vault" (to<br>/research) here instead | It is a product,<br>not research;<br>the Vault then<br>gets a link on<br>every page. |
| Email | SUPPORT@GAYAN-<br>SARATHI.COM | contact@gyanasarathi.com<br>[confirm] | The email<br>domain differs<br>from the site's;<br>confirm which<br>mailbox you<br>monitor. |
| LinkedIn | LINKEDIN | Keep | Link it to the<br>company page<br>and list it in<br>schema. |


---

# Page 21

Home answer capsule
Question it answers: What does Gyanasarathi do?
Gyanasarathi is an India-based financial modeling and agentic AI firm. It builds
institutional-grade commercial real estate underwriting, DCF and LP/GP waterfall
models. It also deploys AI agents and private AI models that automate analysis for
private equity sponsors, REIT asset managers, sovereign funds and M&A teams
worldwide.
Where it goes: the Home 6 paragraph under the three large lines, and the Organization
description in JSON-LD. The footer line carries its first sentence on every page.
Home schema and internal links
Schema: Organization and WebSite (JSON-LD section).
Hero buttons: "Modeling Services" to /analytics, "Agentic AI" to /ai-lab.
Block 3 card titles: link "CRE and Multi-Industry Modeling" to /analytics, "Agentic AI
and Product Development" to /ai-lab, "Private AI Models for Investment Firms" to
/alpha.
Footer: add "Research Vault" to /research under Insights.
About page (/about)
About is where AI engines look for the people behind a firm. This page now names the
founder, the asset classes and the tools, and drops the performance claims.

---

# Page 22

About 1. Hero
Block: Page hero: eyebrow, two-tone H1, paragraph, one button.
SEO metadata
Primary keyword: about Gyanasarathi
Secondary keywords: CRE underwriting expert, financial modeling and AI consultant,
Argus Enterprise modeling
Title tag (50 characters): About Gyanasarathi | CRE Modeling Meets Agentic AI
Meta description (150 characters): Meet the founder behind Gyanasarathi: 7+ years of
institutional CRE underwriting, an MBA in finance and analytics, and AI built in-house.
Book a call.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | ABOUT GP | ABOUT GYANASARATHI | Names the entity; to<br>PE readers "GP"<br>means general<br>partner. |
| H1, line 1 | Where Financial<br>Mastery Meets | Where Financial Modeling<br>Meets | Swaps an adjective for<br>the keyword. |


---

# Page 23

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H1, line 2 | Algorithmic Precision | Agentic AI Engineering | Adds the second core<br>term. |
| Body | GyanSarathi sits at the<br>intersection of<br>institutional financial<br>analysis and advanced<br>algorithmic engineering.<br>It’s not just a consulting<br>firm. It’s a human-led<br>thinking machine. | Gyanasarathi is a modeling<br>desk and an AI lab under<br>one roof. Our analysts<br>underwrite real assets; our<br>engineers turn that<br>judgment into AI that<br>scales it. | Says what the firm is<br>in the first sentence. |
| Button | See What We Deliver | Keep | Clear as is. |

About 2. Executive overview
Block: Two columns: H2, paragraph and three bullets on the left; stat cards and chart on
the right.

---

# Page 24

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H2 | Executive Overview | Who Leads<br>Gyanasarathi | Answers the question<br>this section exists for. |
| Body | GP combines an MBA in<br>Finance and Business<br>Analytics with<br>executive experience in<br>scaling global<br>operations and<br>managing complex<br>KPOs. This blend of<br>financial expertise and<br>operational depth<br>enables GyanSarathi to<br>build custom AI<br>systems not generic<br>reports tailored to how<br>your institution thinks. | Use the About answer<br>capsule below | A definition AI answers<br>can lift whole; about<br>15% longer, which the<br>left column absorbs. |
| Bullet 1 | MBA in Finance and<br>Business Analytics<br>from a globally<br>recognized institution | MBA in Finance and<br>Business Analytics, Sri<br>Sri University [confirm] | A named school can be<br>checked; "globally<br>recognized" cannot.<br>Drop the name if you<br>prefer. |
| Bullet 2 | Executive track record<br>in scaling international<br>operations and<br>knowledge-intensive<br>business units | Executive track record<br>in scaling knowledge-<br>process outsourcing<br>(KPO) teams for global<br>clients | Spells out KPO once. |
| Bullet 3 | Deep practitioner<br>expertise spanning<br>financial modeling,<br>quantitative analysis,<br>and AI systems<br>architecture | Hands-on in Argus<br>Enterprise, Excel DCF<br>and LP/GP waterfall<br>models, and AI systems<br>design | Named tools are<br>entities AI engines<br>recognize. |


---

# Page 25

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Small card<br>label | ALPHA GENERATED | FOUNDER TRACK<br>RECORD | "Alpha" is an<br>investment-<br>performance claim. |
| Small card<br>value | +24.8% Above<br>Benchmark | 7+ Years of CRE<br>Underwriting | Return claims need<br>audited support; years<br>of practice can be<br>checked. |
| Chart<br>card label | PORTFOLIO GROWTH | CAPITAL MODELED | Matches the Home<br>metric. |
| Chart<br>card value | $14.2M / Year to Date | $2.5B+ / Underwritten<br>[confirm] | One figure sitewide,<br>same length as live. |

About 3. Philosophy
Block: Centered banner: eyebrow, two-line H2, paragraph.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | OUR PHILOSOPHY | Keep | Clear as is. |
| H2 | Data-Driven by Design.<br>AI-Accelerated by<br>Choice. | Keep | Memorable and<br>accurate. |


---

# Page 26

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Body | The future of finance<br>belongs not to those with<br>the most data, but to<br>those who turn it into<br>decisions fastest. At<br>GyanSarathi, we merge<br>financial modeling with<br>autonomous AI, making<br>every insight both<br>accurate and executable.<br>You’re not hiring analysts<br>or developers you’re<br>activating an institutional<br>intelligence system. | Investment teams rarely<br>lack data; they lack time<br>to turn it into a<br>defensible decision. At<br>Gyanasarathi, AI agents<br>take the repetitive work:<br>data entry, document<br>review and scenario runs.<br>Analysts build, check and<br>sign off every model. You<br>get one team that models<br>and automates. | States who does what;<br>fixes the run-on<br>sentence. |

About 4. Commitments
Block: 4-card grid with icons.

---

# Page 27

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | OUR COMMITMENT TO<br>EVERY CLIENT | Keep | Clear as is. |
| H2 | What You Can Always<br>Expect From Us | What Our Engagements<br>Cover | True for every<br>engagement type, and<br>shorter. |
| Card 1<br>title | Strategic Market<br>Research | Market and Submarket<br>Research | Real estate buyers<br>think in submarkets. |
| Card 1<br>body | Every engagement<br>begins with deep<br>research that maps<br>industry dynamics,<br>uncovers opportunities<br>and builds the<br>intelligence behind high-<br>value decisions. | Every engagement<br>starts with market<br>research on supply,<br>demand, rents and cap<br>rate comps, so each<br>model assumption rests<br>on evidence. | Names the inputs. |
| Card 2<br>title | Institutional Financial<br>Analytics | Institutional Financial<br>Modeling | The keyword. |
| Card 2<br>body | Our modeling includes<br>DCF, LBO frameworks,<br>comparable valuations,<br>and portfolio<br>diagnostics.IT built to<br>institutional standards<br>and delivered with<br>boardroom clarity. | DCF, LBO, comparable<br>valuations and portfolio<br>diagnostics, built to<br>institutional standards<br>and documented so<br>your investment<br>committee can audit<br>every input. | Fixes the ".IT" typo;<br>adds auditability. |
| Card 3<br>title | AI Automation and Agent<br>Deployment | Keep | Already keyword-led. |


---

# Page 28

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Card 3<br>body | We build autonomous AI<br>agents that eliminate<br>bottlenecks in analytical<br>workflows, automating<br>data extraction,<br>document parsing, and<br>reporting with precision<br>and speed. | We deploy AI agents<br>that extract data from<br>rent rolls, leases and<br>filings, parse<br>documents and draft<br>reports, cutting manual<br>hours in every analytical<br>cycle. | Specific documents<br>and a clear effect. |
| Card 4<br>title | 24/7 C-Suite Strategic<br>Support | Follow-the-Sun Model<br>Support | True for a team in India<br>serving other time<br>zones. |
| Card 4<br>body | Capital markets never<br>sleep, and neither do we.<br>We provide continuous<br>advisory, model upkeep<br>and intelligence updates<br>to keep your leadership<br>always informed. | With our team in India,<br>work moves while your<br>office is closed: model<br>updates, scenario<br>reruns and data<br>refreshes are ready<br>when your day starts. | Replaces a 24/7<br>promise with a real<br>time-zone benefit. |

About 5. Call to action
Block: CTA banner: two-line H2, paragraph, one button.

---

# Page 29

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H2 | Ready to Work With an<br>Analyst Who Also Builds<br>the AI? | Keep | States the<br>differentiator in the<br>buyer's words. |
| Body | Book a 30-minute<br>strategy call to discuss<br>your current mandate,<br>whether it is a valuation<br>project, an AI<br>deployment, or a full-<br>scale proprietary model<br>build. | Book a 30-minute<br>strategy call about your<br>current mandate: a<br>valuation, a fund<br>waterfall, an AI<br>deployment or a private<br>AI model build. | Tighter; adds the<br>waterfall use case. |
| Button | Book Your Strategy Call | Book a Strategy Call | The primary CTA name<br>sitewide. |

About answer capsule
Question it answers: Who is behind Gyanasarathi?
Gyanasarathi is led by founder Gyan [surname]. Gyan brings 7+ years of institutional
commercial real estate underwriting across industrial, office, retail, multifamily,
hospitality, medical office and mixed-use assets. Gyan also holds an MBA in Finance
and Business Analytics, builds AI systems and has scaled a knowledge-process
outsourcing firm.
Where it goes: the Executive overview paragraph (About 2), and the Person description in
JSON-LD.
About schema and internal links
Schema: AboutPage plus Person for the founder, linked to the Organization (JSON-LD
section).
Card links: "Institutional Financial Modeling" to /analytics, "AI Automation and Agent
Deployment" to /ai-lab.
Founder profile: link the founder's LinkedIn from About 2 and list it in the Person
sameAs.

---

# Page 30

Analytics Desk (/analytics)
This is the main commercial page. It now targets "real estate financial modeling services"
and names every model type a sponsor or REIT analyst would search for.
Analytics 1. Hero
Block: Page hero: eyebrow, two-tone H1, paragraph, two buttons.
SEO metadata
Primary keyword: real estate financial modeling services
Secondary keywords: DCF and LBO modeling, LP/GP waterfall model, development pro
forma, M&A due diligence support, REIT analysis
Title tag (54 characters): Real Estate Financial Modeling Services | Gyanasarathi
Meta description (145 characters): Acquisition, development and LP/GP waterfall
models, DCF and LBO valuation, and M&A due diligence, built to institutional
standards. Book a call.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | THE ANALYTICS DESK | Keep | Product name, clear. |


---

# Page 31

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H1, line 1 | We Speak the Language<br>of Capital | Real Estate Financial<br>Modeling, | The page's primary<br>keyword, at the same<br>length. |
| H1, line 2 | We Build the Tools to<br>Execute It. | Built to Institutional<br>Standards. | Keeps the confident<br>tone. |
| Body | The Analytics Desk<br>combines institutional<br>finance with AI<br>modeling, delivering<br>decision-driven analysis<br>across sectors like<br>energy valuations and<br>REIT diagnostics not just<br>reports. | The Analytics Desk<br>builds acquisition,<br>development and fund-<br>level models for real<br>estate and infrastructure<br>investors, with AI checks<br>on every input and<br>output. | Names the model types;<br>fixes the missing<br>punctuation. |
| Button 1 | View Our Service Suite | View Modeling Services | Descriptive anchor text. |
| Button 2 | Request a Consultation<br>Call | Book a Strategy Call | The primary CTA name<br>sitewide. |


---

# Page 32

Analytics 2. Core services
Block: 2x2 service card grid, each card with icon, title, paragraph and link.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | OUR CORE SERVICE<br>OFFERINGS | Keep | Clear as is. |
| H2 | What the Analytics<br>Desk Delivers | Our Financial Modeling<br>Services | The exact service<br>keyword. |
| Card 1<br>title | Advanced Valuation<br>Support | Valuation and DCF<br>Modeling | Names the method<br>buyers search for. |


---

# Page 33

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Card 1<br>body | We build financial<br>models for your biggest<br>decisions, including<br>DCF, LBO, comparable<br>analysis and intrinsic<br>valuation, all<br>institutional-grade and<br>stress-tested for real-<br>world scenarios. | DCF, LBO, comparable and<br>intrinsic valuation models<br>for acquisitions and<br>recapitalizations, stress-<br>tested across interest<br>rate, rent growth and exit<br>cap rate scenarios. | Names the scenario<br>variables institutional<br>readers check. |
| Card 2<br>title | M and A Due Diligence<br>and Risk Analysis | M&A Due Diligence and<br>Risk Analysis | "M&A" is the searched<br>form. |
| Card 2<br>body | Before any deal closes,<br>we perform thorough<br>due diligence assessing<br>financial health,<br>uncovering hidden risks<br>and protecting capital<br>in M&A and equity<br>transactions. | Before a deal closes, we<br>check financial<br>statements, rent rolls,<br>leases and debt terms,<br>then run downside cases,<br>so risks surface before<br>capital moves. | Lists what actually<br>gets checked. |
| Card 3<br>title | Asset Management and<br>Investor Relations | Asset Management and<br>Investor Reporting | Reporting is the<br>deliverable. |
| Card 3<br>body | We manage your<br>portfolio with<br>institutional discipline,<br>optimizing<br>performance, tracking<br>yield, and delivering<br>investor-ready<br>reporting and insights. | We support asset<br>managers with budget-<br>versus-actual tracking,<br>yield and covenant<br>monitoring, and quarterly<br>reports ready to send to<br>LPs. | "We manage your<br>portfolio" reads as<br>acting as asset<br>manager; describe the<br>support role unless<br>you do manage assets. |
| Card 4<br>title | Executive Reporting<br>and Market Intelligence | Executive Dashboards<br>and Market Intelligence | Names the product. |


---

# Page 34

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Card 4<br>body | Good decisions start<br>with great information.<br>We build dynamic C-<br>suite dashboards with<br>decision-grade KPIs<br>and market intelligence,<br>giving leadership a<br>single source of truth. | We build C-suite<br>dashboards that combine<br>portfolio KPIs with market<br>data, so leadership<br>reviews one source of<br>truth instead of scattered<br>spreadsheets. | Cause and effect, no<br>filler opener. |
| Card links<br>(4) | Learn More | Keep, and point each to its<br>own service section or<br>page | Gives each card a real<br>destination; ranking<br>each service needs its<br>own page. |

Analytics 3. Sectors
Image — Live Analytics Desk sector chips, 19 Oct 2026
Block: Eyebrow, H2 and a cloud of sector chips. Replace chips in order.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | SECTORS WE SERVE | Keep | Clear as is. |
| H2 | From Energy to<br>Investment Banking: We<br>Know Your Industry | From Real Estate to<br>Energy: The Sectors We<br>Model | Leads with the<br>primary niche. |
| Chip 1 | Energy, Oil & Gas | Real Estate Private<br>Equity | The core buyer comes<br>first. |
| Chip 2 | Infrastructure & Utilities | REITs and Listed Real<br>Estate | The plain search term<br>for REITs. |
| Chip 3 | Investment Banking:<br>Real Estate and<br>Infrastructure Groups | Multifamily, Hospitality<br>and Mixed-Use | Asset types buyers<br>search by name. |


---

# Page 35

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Chip 4 | Real Estate Investment<br>Trusts and Publicly<br>Traded Real Estate | Real Estate and<br>Infrastructure Banking | Keeps the banking-<br>group audience,<br>shorter. |
| Chip 5 | Hospitality, Leisure and<br>Property Management | Infrastructure and<br>Utilities | Moves down the<br>order, same scope. |
| Chip 6 | Banking and Mortgage<br>Services | Energy, Oil and Gas | Moves down the<br>order. |
| Chip 7 | Real Estate Financial<br>Analytics and<br>Acquisitions | Lending and Mortgage<br>Finance | The live chip is a<br>service, not a sector. |
| Chip 8<br>(new) | (none) | Corporate Finance:<br>Healthcare to<br>Manufacturing | Adds finance teams in<br>other industries, your<br>secondary focus. |

Analytics 4. Real Estate Financial Intelligence Suite
Image — Live Analytics Desk suite block, 19 Oct 2026
Block: Feature block: text and checklist on the left, 4-phase graphic on the right, 5-step
strip below.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | SPECIALIZED<br>CAPABILITY | Keep | Clear as is. |
| H2 | Real Estate Financial<br>Intelligence Suite for<br>institutional-grade<br>precision. | Real Estate Financial<br>Intelligence Suite: From<br>Underwriting to<br>Waterfall | Keeps the product name<br>and adds the two most<br>searched tasks. |


---

# Page 36

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Body | Real estate capital<br>transactions are<br>complex, so our Real<br>Estate Financial<br>Intelligence Suite<br>delivers institutional-<br>grade precision across<br>the deal lifecycle from<br>underwriting to<br>waterfall distributions<br>turning complexity into<br>closed deals. | Use the Analytics Desk<br>answer capsule below | About 50% longer; the<br>left column has spare<br>height beside the phase<br>graphic. |
| Bullet 1 | Complex acquisition<br>modeling and feasibility<br>analysis | Acquisition modeling<br>and feasibility analysis | "Complex" adds nothing. |
| Bullet 2 | Ground-up<br>development pro forma<br>and phased funding<br>analysis | Keep | Already precise. |
| Bullet 3 | CMulti-layer cash flow<br>structuring and<br>distribution modeling | Multi-tier cash flow<br>structuring and<br>distribution modeling | Fixes the "CMulti" typo. |
| Bullet 4 | LP and GP waterfall<br>structuring with<br>preferred return<br>frameworks | LP/GP waterfall models<br>with preferred return,<br>catch-up and promote<br>tiers | Names the tiers a<br>sponsor checks first. |
| Bullet 5 | Asset-level<br>underwriting for<br>individual properties<br>and portfolio<br>acquisitions | Keep | Already precise. |
| Phase<br>cards | Capital / Modeling / AI<br>Analysis / Investment<br>Output | Inputs / Modeling / AI<br>Review / Decision Pack | "Capital" was not a step;<br>these are short forms of<br>the strip names below. |


---

# Page 37

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Step strip | Data Ingestion /<br>Financial Modeling / AI-<br>Assisted Analysis / Risk<br>Optimization /<br>Investment Output | Data Ingestion /<br>Financial Modeling /<br>Agentic AI Review /<br>Scenario Testing /<br>Decision Pack | "Risk Optimization" is<br>vague; scenario testing<br>is the actual work. |

Analytics 5. Call to action
Image — Live Analytics Desk CTA, 19 Oct 2026
Block: CTA banner: two-line H2, paragraph, two buttons.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H2 | Every Complex Deal<br>Deserves a Sharper<br>Analytical Edge | Keep | Specific and on brand. |
| Body | Talk to our financial<br>modeling team about your<br>current mandate. We<br>match the right analytical<br>framework to your exact<br>challenge and deliver<br>results at the speed your<br>decisions require. | Talk to our financial<br>modeling team about<br>your current mandate.<br>On the first call we scope<br>the model, the timeline<br>and the review steps. | Tells the reader what<br>the call produces. |
| Button 1 | Schedule Strategic Call | Book a Strategy Call | The primary CTA name<br>sitewide. |
| Button<br>2 | Access your Client Portal | Keep only if a client<br>portal exists [confirm] | A button with no<br>portal behind it costs<br>trust. |

Analytics answer capsule
Question it answers: Who provides real estate financial modeling and waterfall analysis?

---

# Page 38

Gyanasarathi's Analytics Desk provides institutional real estate financial modeling. It
covers acquisition underwriting, development pro formas, DCF and LBO valuation,
and LP/GP waterfall models with preferred return, catch-up and promote tiers.
Analysts build every model, AI agents check every input, and each file is documented
for investment committee review.
Where it goes: the Suite paragraph (Analytics 4), and the Service description in JSON-LD.
Analytics schema and internal links
Schema: Service with an OfferCatalog of the four core services, plus BreadcrumbList
(JSON-LD section has the template).
Hero body: link "AI checks" to /ai-lab.
Suite bullet 4: link "LP/GP waterfall models" to the Energy and Infrastructure Valuation
Templates page in the Research Vault, once it exists.
CTA: both strategy call buttons go to /contact.
AI Lab (/ai-lab)
The AI Lab page now targets "agentic AI for financial services" and replaces claims like
"superhuman scale" with what each system reads, checks and delivers.
AI Lab 1. Hero
Image — Live AI Lab hero, 19 Oct 2026
Block: Page hero: eyebrow, two-tone H1, paragraph, two buttons.
SEO metadata
Primary keyword: agentic AI for financial services
Secondary keywords: AI agents for investment firms, fine-tuned financial LLM,
financial document AI, valuation API
Title tag (55 characters): Agentic AI for Financial Services | Gyanasarathi AI Lab
Meta description (146 characters): AI agents, fine-tuned financial LLMs and valuation
APIs for investment teams, deployed privately with full audit trails. Book a discovery
session.

---

# Page 39

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | THE AI LAB | Keep | Product name, clear. |
| H1, line 1 | We Do Not Just Use AI. | Agentic AI for Finance. | The primary keyword in<br>the H1, at the same<br>length. |
| H1, line 2 | We Build It. For You. | Built Around Your Data. | Keeps the "we build"<br>message. |
| Body | Where financial<br>knowledge becomes<br>machine intelligence. We<br>engineer proprietary AI<br>agents, autonomous<br>workflows, and<br>institutional APIs that<br>transform how<br>investment firms<br>analyze and execute at<br>superhuman scale. | The AI Lab builds AI<br>agents, fine-tuned<br>LLMs and valuation<br>APIs that automate<br>research, document<br>review and modeling for<br>investment firms. Every<br>output traces back to<br>its source. | Replaces "superhuman<br>scale" with what the<br>systems do. |
| Button 1 | Explore Our AI Products | Keep | Clear as is. |
| Button 2 | Request a Technical<br>Integration | Keep | Clear as is. |

AI Lab 2. Agentic workflows
Image — Live AI Lab intro section, 19 Oct 2026
Block: Centered H2, paragraph and four checklist tiles.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H2 | From Manual Analysis to<br>Machine-Driven<br>Autonomy | From Manual Analysis<br>to Agentic Workflows | Uses the term buyers<br>search. |


---

# Page 40

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Body | Most firms use off-the-<br>shelf AI and wonder why<br>outputs fail their thesis.<br>We take a different<br>approach: engineering<br>every system from the<br>ground up for financial<br>markets, creating<br>autonomous bridges<br>between raw data and<br>confident capital<br>allocation. Our systems<br>are designed to: | Use the AI Lab answer<br>capsule below | About 10% longer. Drop<br>the "designed to:" lead-in;<br>the tiles read on their<br>own. |
| Tile 1 | Ingest and normalize<br>multi-source financial<br>data automatically | Keep | Specific and accurate. |
| Tile 2 | Analyze market<br>dynamics and asset<br>fundamentals in real time | Keep | Specific and accurate. |
| Tile 3 | Generate deterministic<br>valuations calibrated to<br>institutional standards | Keep | "Deterministic" signals<br>repeatable results, which<br>institutions require. |
| Tile 4 | Dramatically reduce<br>human dependency<br>without compromising<br>accuracy | Cut manual hours<br>while analysts keep<br>final sign-off | Human review is a selling<br>point for institutions, not<br>a cost. |

AI Lab 3. Product suite
Image — Live AI Lab product cards, 19 Oct 2026
Block: 5-card product grid (3 cards, then 2), each with icon, title, paragraph and ability list.

---

# Page 41

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | WHAT WE HAVE BUILT | Keep | Clear as is. |
| H2 | Our Proprietary AI<br>Product Suite | Our AI Products for<br>Investment Teams | Names the audience. |
| Card 1<br>title | Agentic Stock Analysis<br>Engine | Keep | Specific, keyword-rich<br>product name. |
| Card 1<br>body | Our flagship product.<br>Fully autonomous AI<br>agents that ingest SEC<br>filings, earnings calls, and<br>macro feeds to produce<br>mathematically<br>grounded intrinsic<br>valuations--instantly. | Our flagship product. AI<br>agents read SEC filings,<br>earnings calls and<br>macro data, then<br>produce intrinsic<br>valuations with every<br>assumption sourced. | Swaps "instantly" for an<br>auditable promise. |
| Card 2<br>title | Technical Market<br>Intelligence Agents | Keep | Clear as is. |
| Card 2<br>body | Quantitative AI models<br>built for the technical<br>side of capital markets.<br>These agents identify<br>patterns, track<br>momentum shifts, and<br>auto-generate<br>interpretations with<br>institutional precision. | Quantitative agents for<br>technical analysis. They<br>detect trends and<br>momentum shifts and<br>write a plain-English<br>read of each signal for<br>your analysts. | Says what the analyst<br>receives. |
| Card 3<br>title | End-to-End AI<br>Automation Workflows | Keep | Clear as is. |
| Card 3<br>body | Remove the manual layer<br>from your operations.<br>Our autonomous<br>workflow systems handle<br>everything from<br>document ingestion to<br>financial structuring and<br>preliminary diagnostics. | Remove the manual<br>layer from operations.<br>Workflows take<br>documents in, extract<br>the data, build first-<br>pass financials and flag<br>issues for review. | Names each stage of<br>the workflow. |


---

# Page 42

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Card 4<br>title | Enterprise Financial API<br>Infrastructure | Valuation and Risk APIs | Plain product name;<br>"enterprise valuation"<br>would read as<br>enterprise value. |
| Card 4<br>body | Integrate our proprietary<br>valuation and risk models<br>directly into your<br>platforms via secure,<br>scalable APIs--giving<br>your tech stack<br>institutional-grade<br>analytical power. | Plug our valuation and<br>risk models into your<br>own platforms through<br>secure, versioned APIs,<br>so your systems call the<br>same logic your<br>analysts trust. | "Versioned" tells<br>engineers results stay<br>reproducible. |
| Card 5<br>title | Bespoke Financial LLM<br>Solutions | Fine-Tuned Financial<br>LLMs | The phrase buyers<br>search. |
| Card 5<br>body | Custom-tuned LLMs<br>fine-trained on financial<br>data. They parse,<br>interpret, and structure<br>outputs from due<br>diligence files,<br>underwriting documents,<br>and complex legal<br>covenants. We lock down<br>knowledge silos. | Language models fine-<br>tuned on financial<br>documents. They read<br>diligence files,<br>underwriting packages<br>and loan covenants and<br>return structured data<br>inside a private,<br>isolated environment. | Says where the data<br>stays instead of "lock<br>down knowledge silos". |
| Ability<br>lists | KEY ABILITIES and CORE<br>PILLARS lists | Keep | Short, specific and<br>scannable. |

AI Lab 4. Process
Image — Live AI Lab process strip, 19 Oct 2026
Block: 5-step process strip.

---

# Page 43

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | PROCESS | Keep | Clear as is. |
| H2 | How the AI Lab Operates | How the AI Lab Works | Plainer. |
| Steps | Data Ingestion / Model<br>Processing / AI Analysis<br>Layer / Optimization<br>Engine / Output Delivery | Data Ingestion / Model<br>Training / Agent<br>Analysis / Human<br>Review / Secure<br>Delivery | Shows where people<br>check the work; vague<br>engine names go. |

AI Lab 5. Why the AI Lab
Image — Live AI Lab differentiators, 19 Oct 2026
Block: Two columns: H2 and five proof tiles on the left, feature card on the right.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | WHY CHOOSE THE AI<br>LAB | Keep | Clear as is. |
| H2, line 1 | Not a generic AI tool | Not a Generic AI Tool. | Title case to match line<br>2. |
| H2, line 2 | Purpose-Built Financial<br>Intelligence. | Purpose-Built for<br>Financial Analysis. | Adds the keyword at<br>the same length. |
| Tile 1 | Architected exclusively<br>for the complexity of<br>financial markets, not<br>retrofitted from generic<br>AI tools | Built on underwriting<br>and valuation logic, not<br>retrofitted from a<br>general chatbot | Names the logic it is<br>built on. |
| Tile 2 | Designed to serve<br>institutional-scale<br>decision-making<br>environments with full<br>auditability | Every output traceable<br>to its source data, for a<br>full audit trail | States the audit trail<br>directly. |


---

# Page 44

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Tile 3 | Laser-focused on<br>automating the highest-<br>value analytical<br>workflows in investment<br>management | Focused on the<br>analytical work that<br>takes most of an<br>analyst's week | Plain and concrete. |
| Tile 4 | Deeply integrated with<br>our proprietary financial<br>modeling frameworks for<br>coherent output | Runs on the same<br>models our Analytics<br>Desk delivers to clients | Links the two desks for<br>readers and AI. |
| Tile 5 | Enterprise-grade<br>security, compliance<br>readiness, and horizontal<br>scalability built in from<br>day one | Private deployment and<br>isolated client data<br>from day one | Keeps only claims you<br>can show; add<br>certifications when you<br>have them. |
| Card<br>title | Institutional Autonomy | Human-Led, AI-Scaled | Says who decides. |
| Card<br>body | We merge deep capital<br>market understanding<br>with state-of-the-art<br>algorithmic precision. | Analysts set the logic<br>and sign off; AI agents<br>do the repetitive work<br>at scale. | The operating model in<br>one line. |

AI Lab 6. Call to action
Image — Live AI Lab CTA, 19 Oct 2026
Block: CTA banner: two-line H2, paragraph, two buttons.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H2 | Ready to Build Intelligence<br>Into Your Financial<br>Systems? | Keep | A clear ask. |


---

# Page 45

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Body | Whether you need a<br>custom AI agent, a fine-<br>tuned LLM, or fully<br>integrated API<br>infrastructure, the AI Lab is<br>ready. Book a technical<br>discovery session and let<br>us map out what is possible. | Whether you need a<br>custom AI agent, a fine-<br>tuned LLM or an API<br>integration, start with a<br>technical discovery<br>session. We map your<br>data, workflow and<br>success metrics first. | Tells the buyer what<br>the session covers. |
| Button 1 | Book a Technical Discovery<br>Session | Keep | Clear as is. |
| Button<br>2 | Access the Developer<br>Portal | Keep only if a developer<br>portal exists [confirm] | A button with no<br>portal behind it<br>costs trust. |

AI Lab answer capsule
Question it answers: Who builds agentic AI for financial services?
Gyanasarathi's AI Lab builds agentic AI for investment teams. Its AI agents read
filings, rent rolls and market data, run valuation and risk checks, and draft analysis for
analyst sign-off. It also delivers fine-tuned financial LLMs and valuation APIs,
deployed privately so client data stays isolated.
Where it goes: the AI Lab 2 paragraph, and the Service description in JSON-LD.
AI Lab schema and internal links
Schema: Service (name "Agentic AI Development", serviceType "Agentic AI for
financial services") with an OfferCatalog of the five products.
Card 5: link "Private model training" to /alpha.
Tile 4: link "Analytics Desk" to /analytics.
Hero button 1: jump to the product suite with an on-page anchor (#products).

---

# Page 46

Proprietary Alpha (/alpha)
Proprietary Alpha keeps its brand name but now pairs it with the plain search term,
"private AI model for investment firms". Absolute claims become checkable ones.
Alpha 1. Hero
Image — Live Proprietary Alpha hero, 19 Oct 2026
Block: Page hero: eyebrow, two-tone H1, paragraph, two buttons.
SEO metadata
Primary keyword: private AI model for investment firms
Secondary keywords: custom AI trained on proprietary data, AI asset screening,
investment decision AI
Title tag (53 characters): Private AI Models for Investment Firms | Gyanasarathi
Meta description (145 characters): Proprietary Alpha trains a private AI model on your
trades, valuation models and risk rules, isolated from other clients. Request a private
demo.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | PROPRIETARY ALPHA:<br>CUSTOM AI MODELS | Keep | Brand name plus<br>plain keyword. |
| H1, line 1 | Your Investment Strategy. | Keep | Strong opener. |
| H1, line 2 | Encoded Into a Sovereign<br>AI That Thinks Like You Do. | Encoded Into a Private AI<br>Model That Thinks Like<br>You. | "Private AI model" is<br>the search term. |
| Body | A secure, isolated AI<br>environment that<br>transforms your historical<br>trades, valuation<br>frameworks, and risk<br>parameters into a custom<br>model built on your<br>institutional logic. | We train a private AI<br>model on your historical<br>trades, valuation<br>frameworks and risk limits<br>in an isolated<br>environment. It then<br>applies your logic to every<br>new asset. | Leads with what we<br>do and why it<br>matters. |


---

# Page 47

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Buttons | Request a Private<br>Demonstration / Speak<br>Directly With an AI<br>Architect | Keep | Clear as is. |

Alpha 2. The concept
Image — Live Proprietary Alpha concept block, 19 Oct 2026
Block: Two columns: flow diagram on the left; eyebrow, H2, paragraph and four bullets on
the right.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Diagram,<br>top | SECURE CLIENT DATA<br>UPLOAD / Trades,<br>Models, Research | Keep | Clear as is. |
| Diagram,<br>middle line | Behavioral Pattern &<br>Logic Synthesis | Learns Your Decision<br>Logic | Plain words for the<br>same step. |
| Diagram,<br>bottom<br>label | SOVEREIGN<br>INTELLIGENCE OUTPUT | CLIENT-OWNED<br>MODEL OUTPUT | States ownership<br>plainly. |
| Eyebrow | THE CONCEPT | Keep | Clear as is. |
| H2 | Your Competitive Edge,<br>Encoded and Scaled | Keep | Strong and accurate. |


---

# Page 48

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Body | Your decision history<br>becomes your edge. We<br>train a private AI on your<br>trades, valuation models,<br>and risk rules to create a<br>sovereign system that<br>scales your analytical<br>logic across assets<br>without exposing your<br>methodology. | Use the Proprietary<br>Alpha answer capsule<br>below | A definition AI<br>answers can quote;<br>about a third longer,<br>and the column has<br>room beside the<br>diagram. |
| Bullet 1 | Private, sovereign AI<br>model trained on your<br>proprietary data | Private AI model; your<br>data trains no other<br>client's model | Answers the real<br>security question:<br>does my data train<br>anyone else's model? |
| Bullets 2 to<br>4 | Learns behavioral<br>patterns... / Scales your<br>firm's decision-making<br>logic... / Fully isolated<br>environment... | Keep | Specific and accurate. |

Alpha 3. Process
Image — Live Proprietary Alpha process, 19 Oct 2026
Block: 4-step process strip with icons.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | THE PROCESS | Keep | Clear as is. |
| H2, line 1 | From Your Data to Your<br>Sovereign AI | From Your Data to Your<br>Private AI Model | One term across the<br>page. |
| H2, line 2 | How Proprietary Alpha<br>Works | Keep | Matches "how does it<br>work" questions. |


---

# Page 49

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Step 1 | Secure Data Submission<br>/ Upload trades, models,<br>and risk frameworks via<br>our encrypted portal. | Keep [confirm the<br>encrypted portal is live] | Accurate if the portal<br>exists. |
| Step 2 | Isolated Environment<br>Setup / A fully private AI<br>training instance where<br>your data remains<br>exclusively yours. | Keep | Clear as is. |
| Step 3<br>title | Behavioral Model<br>Training | Training and Back-<br>Testing | Shows the model is<br>tested before it is<br>trusted. |
| Step 3<br>body | Our architects train a<br>bespoke AI on your data,<br>learning your firm's<br>exact evaluation<br>patterns. | We train the model on<br>your past decisions, then<br>test it on held-out deals<br>your team has already<br>scored. | Testing on held-out<br>deals is how model-risk<br>teams validate a model. |
| Step 4<br>title | Sovereign AI<br>Deployment | Private Model<br>Deployment | One term across the<br>page. |
| Step 4<br>body | Your private engine is<br>deployed, ready to scale<br>your analytical capacity. | It goes live in a<br>dedicated, isolated<br>environment and<br>screens new assets your<br>way. [confirm hosting<br>model] | Says where it runs and<br>what it does. |

Alpha 4. Differentiators
Image — Live Proprietary Alpha differentiator cards, 19 Oct 2026
Block: 6-card grid (two rows of three).

---

# Page 50

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | DIFFERENTIATORS | Keep | Clear as is. |
| H2 | Six Reasons Proprietary<br>Alpha Outperforms<br>Generic AI Tools | Six Reasons to Choose<br>a Private AI Model<br>Over Generic Tools | "Outperforms" is a<br>performance claim you<br>would need to prove. |
| Card 1<br>title | Complete Data Isolation<br>by Architecture | Keep | Clear and specific. |
| Card 1<br>body | Every client model lives in<br>its own secured compute<br>environment. There is no<br>shared infrastructure, no<br>co-mingled data, and no<br>risk of your analytical<br>frameworks being<br>exposed. | Each client model runs<br>in its own secured<br>compute environment,<br>with no shared<br>infrastructure and no<br>co-mingled data, so<br>your frameworks stay<br>yours. | Drops "no risk", an<br>absolute no security<br>team accepts. |
| Card 2<br>title | Deep Behavioral Pattern<br>Learning | Learns Your Decision<br>Weightings | Says what is learned. |
| Card 2<br>body | The model learns how your<br>firm thinks, internalizing<br>the subtle weightings and<br>thresholds embedded in<br>your investment decisions. | The model learns the<br>weightings and<br>thresholds behind<br>your past investment<br>decisions, including<br>the deals you passed<br>on. | Passed deals are<br>training data most<br>firms overlook. |
| Card 3<br>title | Institutional Knowledge at<br>Computational Scale | Keep | Clear as is. |
| Card 3<br>body | The subjective expertise<br>of your senior analysts is<br>translated into<br>reproducible intelligence<br>that scales across<br>thousands of<br>opportunities without<br>dilution. | Your senior analysts'<br>judgment becomes a<br>reproducible screen<br>that applies the same<br>standard to every<br>opportunity. | Plain and concrete. |


---

# Page 51

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Card 4<br>title | Sub-Second Asset<br>Screening at Massive<br>Scale | Asset Screening in<br>Seconds, Not Weeks<br>[confirm] | Plain speed claim;<br>confirm the typical<br>screening time. |
| Card 4<br>body | Apply your firm's exact<br>investment criteria to<br>thousands of assets<br>simultaneously. Analyze in<br>seconds what used to take<br>weeks. | Apply your exact<br>investment criteria to<br>thousands of assets at<br>once and get a ranked<br>shortlist in seconds. | Names the output: a<br>ranked shortlist. |
| Card 5<br>title | Full Sovereign Ownership<br>of Your Model | Full Ownership of Your<br>Model | Plainer. |
| Card 5<br>body | You own your trained<br>intelligence system<br>outright. We architect it,<br>but the model, outputs,<br>and intellectual property<br>belong entirely to you. | You own the trained<br>model outright. We<br>build it; the model, its<br>outputs and the<br>intellectual property<br>belong to you. | Same promise, fewer<br>words. |
| Card 6<br>title | Continuous Model<br>Learning and Improvement | Keep | Clear as is. |
| Card 6<br>body | As you make new<br>decisions, the model is<br>retrained to incorporate<br>them, ensuring your<br>sovereign AI evolves<br>alongside your<br>methodology. | Each new decision<br>feeds a scheduled<br>retraining cycle, so the<br>model keeps pace as<br>your methodology<br>evolves. | "Scheduled" sets a<br>realistic expectation. |

Alpha 5. ROI and who it is for
Image — Live Proprietary Alpha ROI and deployments, 19 Oct 2026
Block: Two columns: ROI card with checklist on the left; eyebrow, H2 and audience chips
on the right.

---

# Page 52

| Element | Live | New | Why |
| --- | --- | --- | --- |
| ROI title | The ROI Engine | Keep | Short and clear. |
| ROI<br>body | When your institutional<br>knowledge becomes<br>computational capital, the<br>return on intelligence is<br>transformational. | The return: analyst<br>hours saved, and your<br>best judgment applied<br>to every deal, not only<br>the ones your team has<br>time for. | Names where the return<br>comes from. |
| Check 1 | Faster asset screening<br>algorithms | Faster screening of<br>new opportunities | The benefit, not the<br>algorithm. |
| Check 2 | Improved decision<br>accuracy over time | Accuracy tracked<br>against your own<br>history | Measurable instead of<br>promised. |
| Check 3 | Absolute elimination of<br>repetitive research tasks | Fewer repetitive<br>research tasks | "Absolute elimination" is<br>not credible. |
| Check 4 | Scalable application of<br>institutional knowledge | One standard applied<br>by every analyst | A concrete outcome. |
| Eyebrow | DEPLOYMENTS | BUILT FOR | Use "Deployments" only<br>if these client types<br>already use it [confirm]. |
| H2 | Who Uses Proprietary<br>Alpha | Who Proprietary Alpha<br>Is For | Accurate before you can<br>name deployments. |
| Chips | Hedge Funds / Private<br>Equity Firms / Family<br>Offices / Institutional<br>Investors / Asset<br>Managers | Private Equity<br>Sponsors / Hedge<br>Funds / Family Offices /<br>Sovereign Wealth<br>Funds / REIT Asset<br>Managers | Matches the target<br>audience; "institutional<br>investors" is too broad<br>to rank for. |

Alpha 6. Call to action
Image — Live Proprietary Alpha CTA, 19 Oct 2026

---

# Page 53

Block: CTA banner: two-line H2, paragraph, two buttons.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H2 | Your Investment<br>Philosophy Deserves<br>More Than Spreadsheets | Keep | Strong and specific. |
| Body | Join a select group<br>answering the AI<br>imperative by encoding<br>their competitive edge<br>into a private, sovereign AI<br>model. Onboarding is<br>confidential and led by<br>our AI architects. | Encode your firm's<br>investment logic into a<br>private AI model you<br>own. Onboarding is<br>confidential, covered by<br>an NDA, and led by our AI<br>architects. | Direct; drops the<br>unverifiable "select<br>group". |
| Buttons | Begin Private Onboarding<br>/ Request an Architecture<br>Consultation | Keep | Clear as is. |

Proprietary Alpha answer capsule
Question it answers: What is Proprietary Alpha?
Proprietary Alpha is Gyanasarathi's private AI model service for investment firms. It
trains a model on a firm's past trades, valuation models and risk rules in an isolated
environment. The model then screens thousands of assets the way the firm would.
The client owns the model and its outputs.
Where it goes: the Concept paragraph (Alpha 2), and the Service description in JSON-LD.
Proprietary Alpha schema and internal links
Schema: Service ("Proprietary Alpha", serviceType "Private AI model training for
investment firms") with an audience listing the five client types.
Hero body: link "valuation frameworks" to /analytics.
CTA body: link "AI architects" to /about.
Card 1: link "secured compute environment" to /ai-lab, where the deployment model is
described.

---

# Page 54

Research and Insights (/research)
Research is the page AI assistants most want to cite. Today, no report, framework or
insight on it has its own URL, and the buttons open nothing. The copy below works best
once each piece is published at its own address.
Research 1. Hero
Image — Live Research hero, 19 Oct 2026
Block: Page hero: eyebrow, two-tone H1, paragraph, two buttons.
SEO metadata
Primary keyword: real estate and capital markets research
Secondary keywords: WACC model template, due diligence checklist, cap rate
analysis, LP capital flows, AI in investment banking
Title tag (55 characters): Real Estate and Capital Markets Research | Gyanasarathi
Meta description (151 characters): Macro reports, cap rate analysis and downloadable
modeling templates for capital allocators, plus research on AI in finance. Browse the
Research Vault.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | RESEARCH & INSIGHTS | RESEARCH AND<br>INSIGHTS | Matches the nav label. |
| H1, line 1 | Where Institutional<br>Research | Capital Markets<br>Research | The primary keyword<br>in the H1. |
| H1, line 2 | Becomes Strategic<br>Advantage. | for Real Estate Investors. | Names the audience. |


---

# Page 55

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Body | Not a general blog<br>structured frameworks,<br>macro deep dives and<br>intelligence reports for<br>institutional decision-<br>makers, designed to<br>inform decisions, protect<br>positions and identify<br>opportunities. | Not a general blog.<br>Structured frameworks,<br>macro deep dives and<br>research reports for<br>capital allocators, built<br>with the same methods<br>we use on client<br>mandates. | Fixes the run-on and<br>says why the research<br>is credible. |
| Buttons | Browse the Research<br>Vault / Download<br>Institutional Frameworks | Keep, once the<br>downloads work | A download button<br>that does nothing<br>costs trust. |

Research 2. Intelligence system
Image — Live Research intro section, 19 Oct 2026
Block: Centered H2, paragraph and four topic tiles.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H2 | This Is Not a Newsletter.<br>This Is an Intelligence<br>System. | Keep | Distinctive and clear. |


---

# Page 56

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Body | Our Research Vault is a<br>structured intelligence<br>system built for capital<br>allocators and senior<br>decision-makers. Every<br>report and analysis here<br>uses the same<br>methodologies deployed<br>in active client mandates.<br>We don't publish for<br>reach--we publish for<br>relevance. | Use the Research<br>answer capsule below | A definition AI answers<br>can quote, about 30%<br>longer. |
| Tiles | Structured Financial<br>Research / Decision<br>Frameworks / Macro<br>Market Intelligence /<br>Institutional Insights | Modeling Frameworks /<br>Macro Research / Real<br>Estate Analysis / AI in<br>Finance | Topic names people<br>search; each can<br>become a category<br>page. |

Research 3. Frameworks
Image — Live Research framework cards, 19 Oct 2026
Block: 5 download cards (3, then 2) with badge, title, paragraph and button.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | STANDARDIZED<br>ACCESS | DOWNLOADABLE<br>FRAMEWORKS | Says what the reader<br>gets. |
| H2 | Proprietary Frameworks<br>Deployed in Global<br>Mandates | Modeling Frameworks<br>Used on Live Mandates | Keyword first; "live<br>mandates" is the<br>proof point. |
| Side note | Proprietary structural<br>templates deployed in<br>active global mandates. | Templates for valuation,<br>diligence and reporting. | No longer repeats<br>the H2. |


---

# Page 57

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Card<br>badges | FRAME | XLSX [confirm; use PDF<br>for any PDF file] | Tells the reader the<br>file format. |
| Card 1<br>title | Capital Structure<br>Optimization Framework | WACC and Capital<br>Structure Model | "WACC model" is a<br>common search. |
| Card 1<br>body | XLSX-based model for<br>WACC forecasting,<br>capital stack analysis,<br>and optimal debt-to-<br>equity structuring. | Excel model for WACC,<br>capital stack analysis and<br>debt-to-equity sizing. | Shorter, same scope. |
| Card 2<br>title | Due Diligence<br>Standardization<br>Framework | 40-Point Due Diligence<br>Checklist | The number and the<br>format are the hook. |
| Card 2<br>body | A complete 40-point<br>diagnostic checklist to<br>standardize M&A, equity<br>placement, and due<br>diligence. | A standard checklist for<br>M&A, equity placement<br>and real estate due<br>diligence. | Adds the primary<br>niche. |
| Card 3<br>title | Energy and<br>Infrastructure Valuation<br>Templates | Keep | Already specific. |
| Card 3<br>body | Valuation templates for<br>long-duration energy<br>assets and<br>infrastructure, including<br>phased waterfall<br>distribution models. | Templates for long-<br>duration energy and<br>infrastructure assets, with<br>phased LP/GP waterfall<br>distributions. | Uses the searched<br>term "LP/GP<br>waterfall". |
| Card 4<br>title | Asset Management KPI<br>System | Asset Management KPI<br>Dashboard | Says what it is. |
| Card 4<br>body | Executive reporting<br>framework with pre-built<br>KPI dashboards and yield<br>tracking modules for<br>asset management<br>teams. | Pre-built KPI dashboards<br>with yield, occupancy and<br>budget-versus-actual<br>tracking for asset<br>managers. | Names the KPIs. |


---

# Page 58

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Card 5<br>title | Risk Assessment<br>Framework Architecture | Portfolio Stress-Test<br>Framework | A plain name for the<br>task. |
| Card 5<br>body | Probabilistic mapping<br>protocols and scenario<br>modeling tools to stress-<br>test portfolios and<br>quantify downside risk. | Scenario and probability<br>tools that stress-test a<br>portfolio and size its<br>downside risk. | Plainer. |
| Card<br>buttons | Download Framework | Keep, and give each<br>framework its own page<br>with the download | A page per template<br>can rank for its own<br>search, such as<br>"WACC model<br>template". |

Research 4. Macro research and AI in finance
Image — Live Research macro list and AI card, 19 Oct 2026
Block: Two columns: report list with dates on the left, dark topic card on the right.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H3 | Macro Market<br>Intelligence | Macro and Real Estate<br>Research | Adds the niche. |
| Subline | Depth equivalent to a<br>dedicated Wall Street<br>research desk,<br>structured specifically<br>for capital allocators. | Views on capital flows,<br>interest rates and cap<br>rates, written for<br>capital allocators. | Replaces an unprovable<br>comparison with the<br>topics covered. |


---

# Page 59

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Report<br>rows (5) | Global Capital Flow<br>Analysis: Structural<br>Shifts in Q1 2026 (Q1<br>2026) through LP Capital<br>Flows: Institutional<br>Allocation Shifts Across<br>Markets (SEP 2025) | Keep the titles, and<br>publish each as a full<br>article at its own URL | Strong titles, but they<br>open nothing. The<br>newest is dated Q1<br>2026, so add a fresh<br>piece or drop the dates. |
| Card title | At the Crossroads of AI &<br>Finance | Keep | Clear as is. |
| Card<br>subline | Forward-looking thought<br>leadership exploring the<br>bleeding edge of<br>intellectual automation. | Practical research on<br>where AI changes<br>financial analysis, and<br>where it does not. | Balanced claims read as<br>expertise. |
| Topic 3 | Algorithmic Research<br>Acceleration & Financial<br>Analysis | Using AI Agents to<br>Speed Up Financial<br>Research | Reads like a question<br>someone would ask. |
| Topics 1, 2,<br>4, 5 | How Generative AI Is<br>Reshaping Investment<br>Banking / Deterministic<br>Automation in M&A Due<br>Diligence / Large<br>Language Models in<br>Practical Financial<br>Modeling / The Future<br>Belongs to AI-<br>Augmented Analysts | Keep, each with its<br>own article page | Good, searchable titles. |

Research 5. Featured insights
Image — Live Research featured insights, 19 Oct 2026
Block: 3 article cards with category, title, summary and link.

---

# Page 60

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | LATEST INTELLIGENCE | LATEST RESEARCH | Plainer. |
| H2 | Featured Insights | Keep | Clear as is. |
| Card 1<br>summary | While standard<br>dashboards report what<br>happened, sovereign AI<br>agents dictate what to<br>do. Examining the shift<br>toward autonomous<br>financial intelligence. | Dashboards report<br>what happened; AI<br>agents recommend<br>what to do next. What<br>changes when analysis<br>becomes autonomous,<br>and what must stay<br>human. | "Recommend" keeps<br>people in charge, which<br>institutions expect. |
| Card 2 | Capital Constraints &<br>Financing Gaps in<br>European Real Estate,<br>with its summary | Keep | Specific and well<br>framed. |
| Card 3<br>summary | As trading velocity<br>increases, institutional<br>API architecture is<br>undergoing a structural<br>shift toward zero-trust<br>streaming to secure<br>massive surfaces. | As trading speeds rise,<br>institutional APIs are<br>moving to zero-trust<br>streaming to secure a<br>growing attack<br>surface. | Fixes "massive<br>surfaces". |
| Card links | Read Insight | Keep, linked to each<br>article's own URL | The link is what lets<br>crawlers reach the<br>article. |

Research 6. Subscribe
Image — Live Research subscribe banner, 19 Oct 2026
Block: CTA banner: two-line H2, paragraph, two buttons.

---

# Page 61

| Element | Live | New | Why |
| --- | --- | --- | --- |
| H2, line 1 | Stay at the Frontier of | Keep | Clear as is. |
| H2, line<br>2 | Institutional Intelligence | Real Estate and AI<br>Research | Says what readers<br>subscribe to. |
| Body | Subscribe to receive fresh<br>frameworks, macro<br>reports, and AI insights.<br>Designed exclusively for<br>institutional decision-<br>makers and capital<br>allocators. | Subscribe for new<br>frameworks, macro reports<br>and AI research, written<br>for institutional decision-<br>makers and capital<br>allocators. | One sentence, no<br>"exclusively". |
| Buttons | Subscribe to Research<br>Updates / Request Full<br>Research Access | Keep | Clear as is. |

Research answer capsule
Question it answers: Where can I find institutional real estate research and modeling
templates?
The Gyanasarathi Research Vault publishes macro reports, real estate cap rate and
capital flow analysis, and research on AI in finance for capital allocators. Downloads
include a WACC model, a due diligence checklist and infrastructure templates with
LP/GP waterfalls. Each piece uses the methods Gyanasarathi applies on live client
mandates.
Where it goes: the Research 2 paragraph, and the CollectionPage description in JSON-LD.
Research schema and internal links
Schema: CollectionPage with an ItemList of the articles. Each article page gets Article
markup with the founder as author and Gyanasarathi as publisher; each framework
page gets CreativeWork with its file format.
Framework cards: link each title to its own page, and the Card 3 "LP/GP waterfall"
mention to /analytics.

---

# Page 62

AI topics: link "Large Language Models in Practical Financial Modeling" to /ai-lab from
inside the article.
Footer: list the Research Vault under Insights (Home 9).
Contact (/contact)
Contact pages rank on the brand name. The work here is consistency: one response
promise, one CTA name, the right email domain and the location rule.
Contact 1. Hero
Image — Live Contact hero, 19 Oct 2026
Block: Page hero: eyebrow, three-line H1, paragraph.
SEO metadata
Primary keyword: contact Gyanasarathi
Secondary keywords: hire a financial modeling consultant, CRE underwriting support,
AI integration consultation
Title tag (58 characters): Contact Gyanasarathi | Book a Modeling or AI Strategy Call
Meta description (140 characters): Share your mandate and a specialist replies within
two business hours. Confidential by default, for modeling, due diligence and AI
projects.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Eyebrow | START A CONVERSATION | Keep | Clear as is. |
| H1 | Your Mandate Deserves a<br>Purpose-Built Response.<br>Not a Generic Reply. | Keep | On brand; the title tag<br>carries the keyword. |


---

# Page 63

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Body | At GyanSarathi, Every<br>inquiry goes to the right<br>specialist with responses<br>within two business hours<br>substantive not sales-<br>driven. | At Gyanasarathi, every<br>inquiry goes straight to<br>a specialist, with a<br>substantive reply<br>within two business<br>hours [confirm]. No<br>sales scripts. | Fixes the capitalization<br>and run-on; one<br>response promise<br>sitewide. |

Contact 2. Form and why us
Image — Live Contact form and reasons, 19 Oct 2026
Block: Two columns: inquiry form on the left; H2, paragraph, three reason cards and
contact card on the right.

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Form H2 | Schedule Your<br>Strategy Session | Book Your Strategy Call | Matches the<br>primary CTA<br>name. |
| Form intro | Share your mandate<br>and we’ll connect you<br>with the right<br>specialist within two<br>hours. All inquiries<br>are fully confidential. | Share your mandate and a<br>specialist will reply within two<br>business hours. Every inquiry<br>is confidential. | Matches the hero<br>promise exactly. |
| Email label | INSTITUTIONAL<br>EMAIL ADDRESS | WORK EMAIL | Shorter, standard<br>form label. |


---

# Page 64

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Other<br>labels | FIRST NAME / LAST<br>NAME /<br>ORGANIZATION OR<br>FUND NAME /<br>PRIMARY MANDATE<br>(SELECT ONE) /<br>DESCRIBE YOUR<br>CURRENT<br>CHALLENGE OR<br>OBJECTIVE | Keep | Clear as is. |
| Dropdown<br>options (7) | Multi-Industry<br>Valuation and<br>Financial Modeling /<br>M&A Due Diligence<br>and Risk Analysis /<br>Proprietary AI Model<br>Training / AI Lab<br>Products and API<br>Integration /<br>Research Access and<br>Frameworks /<br>Executive<br>Consultation and<br>Strategy / Other<br>Inquiry | Real Estate Financial Modeling<br>/ Valuation (DCF, LBO, Comps)<br>/ M&A Due Diligence / Agentic<br>AI and Automation (AI Lab) /<br>Private AI Model (Proprietary<br>Alpha) / Research and<br>Frameworks / Other | Mirrors the<br>service names, so<br>every lead arrives<br>tagged to a page. |
| Button | Send My Strategy<br>Request | Keep | Clear as is. |
| Right H2 | Why Serious<br>Institutions Choose<br>GyanSarathi | Why Investment Teams<br>Choose Gyanasarathi | Names the<br>audience; brand<br>spelling. |


---

# Page 65

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Right body | At GyanSarathi, you<br>speak directly with<br>the specialist doing<br>the work no sales<br>layers or<br>intermediaries. Every<br>engagement starts<br>with a direct, expert<br>level conversation. | Use the Contact answer<br>capsule below | About 75%<br>longer; the right<br>column is shorter<br>than the form, so<br>it absorbs the<br>two extra lines. |
| Card 1 title | 2-Hour Response<br>Commitment | Two-Business-Hour Response | Matches the<br>promise<br>everywhere else. |
| Card 1 body | Every inquiry gets a<br>direct, specialist<br>response within two<br>hours no automation,<br>no generic replies. | Every inquiry gets a direct<br>reply from a specialist within<br>two business hours. No auto-<br>responders. | Fixes the run-on. |
| Card 2 title | Institutional<br>Confidentiality by<br>Default | Keep | Clear as is. |
| Card 2 body | Every inquiry is<br>handled with strict<br>confidentiality, under<br>NDA principles from<br>the first conversation<br>and formalized before<br>any detailed<br>discussion. | Every inquiry is confidential<br>from the first message, and we<br>sign an NDA before any<br>detailed discussion. | Plainer and more<br>specific. |
| Card 3 | Mandate-Scoped<br>Onboarding Session,<br>with its paragraph | Keep | Clear and<br>specific. |
| Contact<br>card label | STRATEGIC<br>INQUIRIES | Keep | Clear as is. |
| Email | support@gayan-<br>sarathi.com | contact@gyanasarathi.com<br>[confirm] | Matches the site<br>domain. |


---

# Page 66

| Element | Live | New | Why |
| --- | --- | --- | --- |
| Location<br>line | Global operations<br>across USA, Europe,<br>Middle East &<br>Australia. Remote-<br>first infrastructure<br>operating 24/7. | Hybrid team with hubs in India,<br>serving clients worldwide<br>across time zones. | Follows the<br>location rule;<br>drops "24/7". |

Contact answer capsule
Question it answers: How do I engage Gyanasarathi?
To engage Gyanasarathi for financial modeling, due diligence, agentic AI or a private
AI model, share your mandate through the contact form or by email. A specialist
replies within two business hours, confidentiality applies from the first message, and
work starts after a scoped onboarding session.
Where it goes: the right-column paragraph (Contact 2), and the ContactPage description
in JSON-LD.
Contact schema and internal links
Schema: ContactPage, plus a contactPoint on the Organization (email, contactType
"sales", areaServed "Worldwide").
Dropdown: each option matches a service page, so the form can pre-select it when a
CTA on /analytics, /ai-lab or /alpha sends the visitor here.
Thank-you message: link to /research so new leads can read the frameworks while
they wait.
Schema (JSON-LD to paste)
Paste the first block into the head of every page: it tells search engines and AI models who
the firm is, what the site is and who leads it. Add the second block, adapted, on /analytics,
/ai-lab and /alpha. Replace every [bracketed] value first.
Sitewide block (Organization, WebSite, Person):

---

# Page 67

{
"@context": "https://schema.org",
"@graph": [
{
"@type": "Organization",
"@id": "https://gyanasarathi.com/#organization",
"name": "Gyanasarathi",
"url": "https://gyanasarathi.com/",
"logo": "https://gyanasarathi.com/[logo-file].png",
"description": "Gyanasarathi is an India-based financial modeling and
agentic AI firm. It builds institutional-grade commercial real estate
underwriting, DCF and LP/GP waterfall models. It also deploys AI agents and
private AI models that automate analysis for private equity sponsors, REIT
asset managers, sovereign funds and M&A teams worldwide.",
"email": "[confirmed-mailbox]@gyanasarathi.com",
"address": {
"@type": "PostalAddress",
"addressCountry": "IN"
},
"areaServed": "Worldwide",
"founder": {
"@id": "https://gyanasarathi.com/about#founder"
},
"knowsAbout": [
"Commercial real estate underwriting",
"Financial modeling",
"DCF valuation",
"LP/GP waterfall modeling",
"Agentic AI",
"LLM fine-tuning for finance"
],
"contactPoint": {
"@type": "ContactPoint",
"contactType": "sales",
"email": "[confirmed-mailbox]@gyanasarathi.com",
"areaServed": "Worldwide",
"availableLanguage": "English"
},
"sameAs": [
"https://www.linkedin.com/company/[company-handle]"
]
},
{

---

# Page 68

"@type": "WebSite",
"@id": "https://gyanasarathi.com/#website",
"url": "https://gyanasarathi.com/",
"name": "Gyanasarathi",
"inLanguage": "en",
"publisher": {
"@id": "https://gyanasarathi.com/#organization"
}
},
{
"@type": "Person",
"@id": "https://gyanasarathi.com/about#founder",
"name": "Gyan [surname]",
"jobTitle": "Founder",
"description": "Gyanasarathi is led by founder Gyan [surname]. Gyan
brings 7+ years of institutional commercial real estate underwriting across
industrial, office, retail, multifamily, hospitality, medical office and
mixed-use assets. Gyan also holds an MBA in Finance and Business Analytics,
builds AI systems and has scaled a knowledge-process outsourcing firm.",
"worksFor": {
"@id": "https://gyanasarathi.com/#organization"
},
"alumniOf": {
"@type": "CollegeOrUniversity",
"name": "[Sri Sri University, or delete alumniOf if About drops the
school]"
},
"knowsAbout": [
"Commercial real estate underwriting",
"Argus Enterprise",
"DCF and LP/GP waterfall modeling",
"Agentic AI"
],
"sameAs": [
"https://www.linkedin.com/in/[profile-handle]"
]
}
]
}
Service block for /analytics:

---

# Page 69

{
"@context": "https://schema.org",
"@type": "Service",
"@id": "https://gyanasarathi.com/analytics#service",
"name": "Real Estate Financial Modeling",
"serviceType": "Financial modeling and underwriting",
"description": "Gyanasarathi's Analytics Desk provides institutional real
estate financial modeling. It covers acquisition underwriting, development
pro formas, DCF and LBO valuation, and LP/GP waterfall models with preferred
return, catch-up and promote tiers. Analysts build every model, AI agents
check every input, and each file is documented for investment committee
review.",
"url": "https://gyanasarathi.com/analytics",
"provider": {
"@id": "https://gyanasarathi.com/#organization"
},
"areaServed": "Worldwide",
"hasOfferCatalog": {
"@type": "OfferCatalog",
"name": "Analytics Desk services",
"itemListElement": [
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Valuation and DCF Modeling"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "M&A Due Diligence and Risk Analysis"
}
},
{
"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Asset Management and Investor Reporting"
}
},
{

---

# Page 70

"@type": "Offer",
"itemOffered": {
"@type": "Service",
"name": "Executive Dashboards and Market Intelligence"
}
}
]
}
}
To adapt the Service block:
/ai-lab: name "Agentic AI Development", serviceType "Agentic AI for financial services",
the AI Lab capsule as description, and the five AI Lab products as offers.
/alpha: name "Proprietary Alpha", serviceType "Private AI model training for investment
firms", the Proprietary Alpha capsule as description, plus an audience of type
BusinessAudience listing the five client types.
Page block, one per inner page. Use @type AboutPage on /about, CollectionPage on
/research and ContactPage on /contact. Use WebPage on /analytics, /ai-lab and /alpha,
and add "mainEntity" pointing to that page's #service id. The description is that page's
answer capsule:
{
"@context": "https://schema.org",
"@type": "AboutPage",
"@id": "https://gyanasarathi.com/about#webpage",
"url": "https://gyanasarathi.com/about",
"name": "About Gyanasarathi | CRE Modeling Meets Agentic AI",
"description": "[this page's answer capsule]",
"isPartOf": {
"@id": "https://gyanasarathi.com/#website"
},
"about": {
"@id": "https://gyanasarathi.com/#organization"
}
}
BreadcrumbList, one per inner page (change position 2 to match the page):

---

# Page 71

{
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{
"@type": "ListItem",
"position": 1,
"name": "Home",
"item": "https://gyanasarathi.com/"
},
{
"@type": "ListItem",
"position": 2,
"name": "Analytics Desk",
"item": "https://gyanasarathi.com/analytics"
}
]
}
Validate every block in the Schema Markup Validator (validator.schema.org). Google's
Rich Results Test only reports the types it shows as rich results, such as Organization.
Leave Review and AggregateRating out entirely.
Developer checklist
Do items 1 to 4 before publishing the new copy; until then, crawlers cannot reach most of
it.
1. Stop the 404s now: add the SPA fallback below to the .htaccess file in public_html
(Hostinger runs LiteSpeed, which reads .htaccess). Every route then returns HTTP 200,
and Google can render it.
2. Prerender all 7 routes at build time with a maintained Vite prerender plugin, so each
page's HTML contains its copy. Output flat files (about.html), then swap the fallback
for the second .htaccess block below. Check with View Source, not DevTools.
3. Give each route its own title tag, meta description, canonical URL and Open Graph
tags, taken from its hero block.
4. Upload robots.txt and sitemap.xml (below), then submit the sitemap in Google
Search Console and Bing Webmaster Tools.

---

# Page 72

5. Add a 404.html page to the build; the second .htaccess block returns it with a real
404 status.
6. Add the JSON-LD from the Schema section.
7. Keep one H1 per page; the wordmark and footer logo become plain text.
8. Spell the brand "Gyanasarathi" in all copy, alt text and emails; switch the email
address once the mailbox is confirmed.
9. Replace the shared footer copy (Home 9); one change fixes all 7 pages.
10. Hide the testimonial block until real, permissioned quotes exist.
11. Ship one copy of the ticker text in the HTML; create the repeats in the animation
code, marked aria-hidden="true".
12. Point every button at a real destination or remove it: Learn More, Download
Framework, Read Insight, Access your Client Portal, Access the Developer Portal.
13. Publish each research report, AI topic and framework at its own URL, with Article or
CreativeWork markup.
14. Remove maximum-scale=1.0 and user-scalable=no from the viewport meta tag so
visitors can zoom.
15. Re-test: each URL returns 200 without a redirect, View Source shows the page's
copy, and the Schema Markup Validator reads the JSON-LD.
Item 1, .htaccess (now):
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
</IfModule>
Item 2, .htaccess after prerendering (replaces the block above):

---

# Page 73

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.+)$ /$1.html [L]
</IfModule>
ErrorDocument 404 /404.html
Item 4, robots.txt:
User-agent: *
Allow: /
Sitemap: https://gyanasarathi.com/sitemap.xml
Item 4, sitemap.xml:
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://gyanasarathi.com/</loc></url>
<url><loc>https://gyanasarathi.com/about</loc></url>
<url><loc>https://gyanasarathi.com/analytics</loc></url>
<url><loc>https://gyanasarathi.com/ai-lab</loc></url>
<url><loc>https://gyanasarathi.com/alpha</loc></url>
<url><loc>https://gyanasarathi.com/research</loc></url>
<url><loc>https://gyanasarathi.com/contact</loc></url>
</urlset>
Sources
The rise of the AI crawler, Vercel, 17 Dec 2024: the major AI crawlers tested do not
render JavaScript.
FTC finalizes rule on consumer reviews and testimonials, Goodwin, Sep 2024: the rule
bans fake or false testimonials and took effect 21 Oct 2024.
Site checks on 19 Oct 2026: the HTTP status of every route, the raw HTML of Home, and
the live headings and copy, read in the browser.