import React from "react";
import { Link, useParams } from "react-router-dom";
import buybackImage from "../components/assets/img/project/buyback-x.webp";
import skuImage from "../components/assets/img/project/sku-optics.webp";
import "../styles/studio.css";

const studies = {
  buybackx: {
    number: "01", name: "BuyBackX", theme: "lime", category: "Commerce · UX/UI · Growth", title: "A clearer way to turn yesterday’s tech into tomorrow’s.", intro: "BuyBackX gives people a simple way to buy and sell pre-owned electronics. The digital experience has to build trust quickly, make value feel tangible, and keep a multi-step trade-in process moving.", image: buybackImage,
    role: "UX/UI design, ecommerce experience, campaign direction", year: "2024—2026", link: "https://buybackxstores.com/",
    challenge: ["Electronics resale asks customers to make several decisions before they can see a final offer: choose a device, answer condition questions, and understand what happens after checkout.", "The experience needed to support a wide product mix—from iPhones and tablets to laptops, watches, and game consoles—without making the first step feel complicated."],
    approach: ["We centered the experience around the customer’s intent: get a clear estimate, understand the next step, and feel confident sending in a device. Product selection and condition details are organized into a guided path.", "A flexible promotional system gives seasonal campaigns room to change while keeping the underlying product story consistent. The visual language balances energetic retail moments with the clarity needed for a high-consideration transaction."],
    outcomes: ["A more legible trade-in journey", "Product discovery across device families", "A reusable campaign and promotion system", "Clearer expectations from quote to checkout"],
    note: "The public work shown here describes the design direction and experience structure. No conversion uplift or sales metrics are claimed."
  },
  briefnest: {
    number: "02", name: "BriefNest", theme: "ink", category: "Product strategy · SaaS · AI", title: "Give every meeting a useful next chapter.", intro: "BriefNest is a meeting workspace built to turn recordings, transcripts, and handwritten notes into structured briefs, decisions, and visible follow-through. The goal is to make the useful parts of a conversation easy to find after the room clears.", image: null,
    role: "Product strategy, UX/UI, design system, web experience", year: "2025—2026", link: "https://main.dcsidei8z3ky4.amplifyapp.com/",
    challenge: ["Meeting tools often capture a lot of material but leave people to do the sorting themselves. The product needed to preserve the original conversation while making outcomes easy to scan and act on.", "BriefNest also brings together different capture modes—online meetings, in-person conversations, and scanned notes—so a clear information structure matters as much as transcription."],
    approach: ["We shaped the core workflow around a structured brief: context, discussion, decisions, and action items. Playback and transcript access sit beside the summary so people can verify details without losing their place.", "The product direction gives comments, follow-up actions, and meeting memory a shared home. It treats the brief as a working document people can revisit and refine, rather than a static AI summary."],
    outcomes: ["A consistent structure across capture sources", "A direct path from conversation to decisions", "Playback and source material kept close to the brief", "Follow-up actions visible after the meeting"],
    note: "BriefNest is an actively developing product. This case study describes the current product direction and interface work, not independently measured business results."
  },
  "sku-optics": {
    number: "03", name: "SKU Optics", theme: "lilac", category: "B2B · E-commerce · Web design", title: "Bring specialist optics into focus online.", intro: "SKU Optics needed a digital presence that could make a technical product range feel more approachable, while giving the brand a visual system built for credibility and easy exploration.", image: skuImage,
    role: "Brand-led web design, UX/UI, frontend experience", year: "2024—2025", link: "https://skuoptics.vercel.app/",
    challenge: ["For a specialist B2B catalog, a visitor needs to understand what the company offers before diving into individual products. The website has to balance technical detail with a strong first impression.", "The experience needed to feel specific to the optics category rather than like a generic catalog template, while remaining straightforward to navigate across screen sizes."],
    approach: ["We built the visual direction around precision, contrast, and product imagery. A restrained palette and clear hierarchy give the catalog and brand story room to speak without competing for attention.", "The page structure leads from the company’s positioning into product-focused content and clear next steps. Responsive layouts keep that rhythm intact on smaller screens."],
    outcomes: ["A category-specific visual identity", "A clearer route from brand introduction to products", "Responsive layouts for the core experience", "A more polished digital foundation for sales conversations"],
    note: "This case study focuses on the design and experience delivered. It does not claim quantified sales or conversion results."
  }
};

function Preview({ study }) {
  if (study.image) return <img className="case-hero-art" src={study.image} alt={`${study.name} website preview`} />;
  return <div className="briefnest-visual case-hero-art"><div className="bn-window"><div className="bn-topbar"><span className="bn-mark">b.</span><span>Tuesday product sync</span><i>•••</i></div><div className="bn-body"><aside><span className="bn-side-active">Overview</span><span>Transcript</span><span>Actions</span><span>Comments</span></aside><div className="bn-document"><div className="bn-eyebrow">MEETING BRIEF · 32 MIN</div><div className="bn-line-title">Make launch day<br/>feel effortless.</div><div className="bn-rule"/><div className="bn-label">THE DECISION</div><p>Ship the guided setup first.<br/>Keep advanced controls one step deeper.</p><div className="bn-action"><b>✓</b><span>Update the onboarding flow</span><small>Owner · Maya</small></div><div className="bn-action"><b>↗</b><span>Review support questions</span><small>Due · Thursday</small></div></div></div><div className="bn-audio"><span>▶</span><div><i/></div><small>08:14 / 32:06</small></div></div></div>;
}

export default function CaseStudy() {
  const { slug } = useParams();
  const study = studies[slug];
  if (!study) return <main className="case-study-page"><header className="case-study-header"><Link className="studio-brand" to="/"><span className="brand-symbol">G</span><span>GENXSMEDIA<small>DESIGN · BUILD · GROW</small></span></Link><Link className="case-back" to="/">← BACK TO HOME</Link></header><section className="case-story"><h1>Case study not found</h1><Link className="text-link" to="/">Back to the studio <span>↗</span></Link></section></main>;
  return (
    <main className="case-study-page">
      <header className="case-study-header"><Link className="studio-brand" to="/"><span className="brand-symbol">G</span><span>GENXSMEDIA<small>DESIGN · BUILD · GROW</small></span></Link><Link className="case-back" to="/">← BACK TO SELECTED WORK</Link></header>
      <section className="case-hero" data-theme={study.theme}>
        <div className="case-hero-content"><p className="case-eyebrow">{study.number} / SELECTED CASE STUDY · {study.category.toUpperCase()}</p><h1>{study.title}</h1><p className="case-intro">{study.intro}</p><div className="case-meta"><div><span>CLIENT / PRODUCT</span><b>{study.name}</b></div><div><span>ENGAGEMENT</span><b>{study.role}</b></div><div><span>PERIOD</span><b>{study.year}</b></div><div><span>LIVE EXPERIENCE</span><b><a href={study.link} target="_blank" rel="noreferrer">Visit project ↗</a></b></div></div></div><Preview study={study}/>
      </section>
      <section className="case-story">
        <div className="case-story-intro"><div className="story-label">THE OPPORTUNITY</div><div><h2>Useful by design.<br/>Clear at every step.</h2><p>{study.intro}</p></div></div>
        <div className="story-block"><div className="story-label">01 / THE CHALLENGE</div><div><h3>What needed to work better</h3>{study.challenge.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
        <div className="story-block"><div className="story-label">02 / THE APPROACH</div><div><h3>Designing the experience</h3>{study.approach.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
        <div className="story-outcome"><div className="story-label">03 / THE RESULT</div><div><h3>A stronger foundation for what comes next.</h3><ul>{study.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul><p className="case-result-note">{study.note}</p></div></div>
        <div className="case-next"><Link to="/">← Back to selected work</Link><a href={study.link} target="_blank" rel="noreferrer">View live project ↗</a></div>
      </section>
      <footer className="case-study-footer"><Link className="studio-brand" to="/"><span className="brand-symbol">G</span><span>GENXSMEDIA<small>DESIGN · BUILD · GROW</small></span></Link><a href="mailto:marketing@genxsmedia.com">Have a project? Let’s talk ↗</a></footer>
    </main>
  );
}
