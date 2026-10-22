import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/studio.css";
import buybackImage from "../components/assets/img/project/buyback-x.webp";
import skuImage from "../components/assets/img/project/sku-optics.webp";

const studies = [
  {
    number: "01",
    slug: "buybackx",
    name: "BuyBackX",
    category: "Commerce · UX/UI · Growth",
    title: "Make every device feel like a fresh start.",
    copy: "A clearer trade-in journey for people ready to turn the tech they own into the tech they want next.",
    image: buybackImage,
    theme: "lime",
    link: "https://buybackxstores.com/",
    deliverables: ["Trade-in experience", "Commerce design", "Campaign system"],
  },
  {
    number: "02",
    slug: "briefnest",
    name: "BriefNest",
    category: "Product strategy · SaaS · AI",
    title: "Meetings deserve a better afterlife.",
    copy: "A meeting workspace that turns recordings and notes into structured briefs, decisions and visible follow-through.",
    image: null,
    theme: "ink",
    link: "https://main.dcsidei8z3ky4.amplifyapp.com/",
    deliverables: ["Product direction", "Interface system", "Workflow design"],
  },
  {
    number: "03",
    slug: "sku-optics",
    name: "SKU Optics",
    category: "B2B · E-commerce · Web design",
    title: "Make specialist products easier to discover.",
    copy: "A sharper digital storefront for an optics business, designed to bring technical products and a confident brand into focus.",
    image: skuImage,
    theme: "lilac",
    link: "https://skuoptics.vercel.app/",
    deliverables: ["Brand-led web design", "Product storytelling", "Responsive experience"],
  },
];

function BriefNestVisual() {
  return (
    <div className="briefnest-visual" aria-label="BriefNest meeting brief interface preview">
      <div className="bn-window">
        <div className="bn-topbar"><span className="bn-mark">b.</span><span>Tuesday product sync</span><i>•••</i></div>
        <div className="bn-body">
          <aside><span className="bn-side-active">Overview</span><span>Transcript</span><span>Actions</span><span>Comments</span></aside>
          <div className="bn-document"><div className="bn-eyebrow">MEETING BRIEF · 32 MIN</div><div className="bn-line bn-line-title">Make launch day<br />feel effortless.</div><div className="bn-rule"/><div className="bn-label">THE DECISION</div><p>Ship the guided setup first.<br/>Keep advanced controls one step deeper.</p><div className="bn-action"><b>✓</b><span>Update the onboarding flow</span><small>Owner · Maya</small></div><div className="bn-action"><b>↗</b><span>Review support questions</span><small>Due · Thursday</small></div></div>
        </div>
        <div className="bn-audio"><span>▶</span><div><i/></div><small>08:14 / 32:06</small></div>
      </div>
      <div className="bn-float-note"><span>Decision captured</span><b>Ready for review <i>↗</i></b></div>
    </div>
  );
}

function HeroObject() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const THREE = window.THREE;
    const canvas = canvasRef.current;
    if (!THREE || !canvas) return undefined;
    let renderer;
    let frame;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch (error) {
      return undefined;
    }
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    if (THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;
    else if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 8;
    const group = new THREE.Group();
    scene.add(group);
    scene.add(new THREE.AmbientLight(0x9db5ff, 1.7));
    const key = new THREE.PointLight(0x6c9cff, 30, 20);
    key.position.set(3, 3, 5);
    scene.add(key);
    const fill = new THREE.PointLight(0x6cffe6, 18, 18);
    fill.position.set(-4, -2, 3);
    scene.add(fill);
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 4), new THREE.MeshPhysicalMaterial({ color: 0x94b9ff, metalness: 0.42, roughness: 0.16, transmission: 0.28, thickness: 1.4, clearcoat: 1, clearcoatRoughness: 0.12, emissive: 0x152d73, emissiveIntensity: 0.34 }));
    group.add(core);
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.86, 2), new THREE.MeshBasicMaterial({ color: 0x9fbcff, wireframe: true, transparent: true, opacity: 0.24 }));
    group.add(shell);
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.27, 0.008, 8, 220), new THREE.MeshBasicMaterial({ color: 0x8eb2ff, transparent: true, opacity: 0.7 }));
    ringA.rotation.set(0.8, 0.25, 0.18);
    group.add(ringA);
    const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.57, 0.004, 8, 220), new THREE.MeshBasicMaterial({ color: 0x61e5d5, transparent: true, opacity: 0.52 }));
    ringB.rotation.set(1.28, -0.42, 0.5);
    group.add(ringB);
    const starsGeometry = new THREE.BufferGeometry();
    const stars = new Float32Array(510);
    for (let i = 0; i < stars.length; i += 3) {
      stars[i] = (Math.random() - 0.5) * 10;
      stars[i + 1] = (Math.random() - 0.5) * 8;
      stars[i + 2] = (Math.random() - 0.5) * 5;
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(stars, 3));
    const dust = new THREE.Points(starsGeometry, new THREE.PointsMaterial({ color: 0x8caeff, size: 0.018, transparent: true, opacity: 0.72 }));
    scene.add(dust);
    const resize = () => {
      if (!canvas.clientWidth || !canvas.clientHeight) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    };
    window.addEventListener("resize", resize);
    let pointerX = 0;
    let pointerY = 0;
    const onMove = (event) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 0.28;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 0.2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    const animate = () => {
      if (!reducedMotion) frame = window.requestAnimationFrame(animate);
      group.rotation.y += 0.0027;
      group.rotation.x += (pointerY - group.rotation.x) * 0.018;
      group.rotation.z += (pointerX - group.rotation.z) * 0.018;
      shell.rotation.y -= 0.0011;
      ringA.rotation.z += 0.0015;
      ringB.rotation.y -= 0.001;
      dust.rotation.y += 0.00015;
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => material.dispose());
      });
      renderer.dispose();
    };
  }, []);
  return <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />;
}

function useMotion() {
  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap) return undefined;
    const ScrollTrigger = window.ScrollTrigger;
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced && ScrollTrigger) document.documentElement.classList.add("gsap-ready");
    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.from(".hero-kicker, .hero-title, .hero-lede, .hero-actions", { y: 28, opacity: 0, duration: 0.9, stagger: 0.14, ease: "power3.out", delay: 0.16 });
        gsap.from(".hero-orbit", { scale: 0.78, opacity: 0, duration: 1.4, ease: "power3.out", delay: 0.28 });
        gsap.utils.toArray("[data-reveal]").forEach((el) => gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 84%", once: true } }));
        const layer = document.querySelector(".studio-color-layer");
        gsap.utils.toArray(".studio-section[data-bg]").forEach((section) => {
          gsap.to(layer, { backgroundColor: section.dataset.bg, ease: "none", scrollTrigger: { trigger: section, start: "top 68%", end: "top 28%", scrub: 0.65 } });
        });
        gsap.utils.toArray(".case-visual").forEach((visual) => gsap.fromTo(visual, { y: 30, scale: 0.97 }, { y: 0, scale: 1, ease: "none", scrollTrigger: { trigger: visual, start: "top bottom", end: "bottom top", scrub: 0.8 } }));
      }
    });
    return () => {
      ctx.revert();
      document.documentElement.classList.remove("gsap-ready");
    };
  }, []);
}

function StudioHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="studio-header">
      <Link to="/" className="studio-brand" aria-label="Genxsmedia home"><span className="brand-symbol">G</span><span>GENXSMEDIA<small>DESIGN · BUILD · GROW</small></span></Link>
      <button className="mobile-menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? "×" : "☰"}</button>
      <nav className={open ? "studio-nav is-open" : "studio-nav"}>
        <a href="#work" onClick={() => setOpen(false)}>Selected work</a><a href="#studio" onClick={() => setOpen(false)}>Studio</a><a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Start a project <span>↗</span></a>
      </nav>
    </header>
  );
}

function CaseSection({ study }) {
  return (
    <section className={`studio-section case-section case-${study.theme}`} id={`case-${study.slug}`} data-bg={study.theme === "lime" ? "#c9f36c" : study.theme === "ink" ? "#12151b" : "#ddd0ff"}>
      <div className="case-inner">
        <div className="case-copy" data-reveal>
          <div className="case-topline"><span>{study.number} / 03</span><span>{study.category}</span></div>
          <p className="case-brand">{study.name}</p><h2>{study.title}</h2><p className="case-description">{study.copy}</p>
          <ul className="case-deliverables">{study.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          <Link className="text-link" to={`/case-studies/${study.slug}`}>Explore the case study <span>↗</span></Link>
        </div>
        <div className="case-visual" data-reveal>
          {study.image ? <img src={study.image} alt={`${study.name} project preview`} /> : <BriefNestVisual />}
          <a href={study.link} target="_blank" rel="noreferrer" className="visual-caption">Visit live project <span>↗</span></a>
        </div>
      </div>
      <span className="case-watermark" aria-hidden="true">{study.number}</span>
    </section>
  );
}

export default function StudioHome() {
  useMotion();
  return (
    <div className="studio-site" id="top">
      <div className="studio-color-layer" aria-hidden="true" />
      <StudioHeader />
      <main>
        <section className="studio-section hero-section" data-bg="#0b0f17">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="hero-kicker"><span className="status-dot" /> INDEPENDENT DIGITAL STUDIO · ISLAMABAD / EVERYWHERE</p>
            <h1 className="hero-title">Make it<br/><em>mean</em> something.</h1>
            <p className="hero-lede">We shape brands and digital products people can feel, understand, and choose with confidence.</p>
            <div className="hero-actions"><a className="button-primary" href="#work">Explore selected work <span>↓</span></a><a className="button-quiet" href="#studio">Meet the studio <span>↘</span></a></div>
            <div className="hero-footer"><span>STRATEGY · DESIGN · TECHNOLOGY</span><span>SCROLL TO EXPLORE ↓</span></div>
          </div>
          <div className="hero-art"><div className="hero-orbit"><HeroObject /><span className="orbit-label orbit-label-one">IDEAS IN MOTION</span><span className="orbit-label orbit-label-two">BUILT WITH INTENT</span></div><div className="hero-coordinate">33° 41' 12.0"N<br/>73° 03' 12.0"E</div></div>
        </section>
        <section className="studio-section intro-section" id="work" data-bg="#f3f0e8">
          <div className="intro-wrap">
            <div className="section-index" data-reveal><span>01 — SELECTED WORK</span><span>2022—2026</span></div>
            <h2 data-reveal>Digital work with<br/><span>a point of view.</span></h2>
            <div className="intro-bottom" data-reveal><p>From first idea to final interaction, we connect sharp thinking with expressive design and solid engineering.</p><span>THREE STORIES. ONE CREATIVE PARTNER.</span></div>
          </div>
        </section>
        {studies.map((study) => <CaseSection key={study.slug} study={study} />)}
        <section className="studio-section studio-section-about" id="studio" data-bg="#f3f0e8">
          <div className="about-wrap"><div className="section-index" data-reveal><span>02 — THE STUDIO</span><span>THINK · IDEATE · ELEVATE</span></div><div className="about-grid"><h2 data-reveal>Small studio.<br/><em>Full spectrum.</em></h2><div className="about-copy" data-reveal><p>Genxsmedia is an independent design and development studio led by Muddassir Hassan. For more than 15 years, we’ve helped ambitious teams turn complex ideas into clear digital experiences.</p><p>We bring product thinking, visual identity, UX/UI, frontend development, and AI workflows together under one roof.</p><a href="https://genxsmedia.com/work" target="_blank" rel="noreferrer" className="text-link">See more of our work <span>↗</span></a></div></div><div className="service-strip" data-reveal><span>01 / BRAND & DIGITAL STRATEGY</span><span>02 / PRODUCT & UX/UI DESIGN</span><span>03 / WEB DEVELOPMENT</span><span>04 / AI & AUTOMATION</span></div></div>
        </section>
        <section className="studio-section contact-section" id="contact" data-bg="#0b0f17">
          <div className="contact-inner"><p className="hero-kicker" data-reveal><span className="status-dot" /> HAVE A GOOD ONE IN MIND?</p><h2 data-reveal>Let’s make the<br/><em>next thing</em> count.</h2><div className="contact-bottom" data-reveal><p>Have a product, brand, or ambitious idea that needs a better digital home? Let’s make a plan.</p><a href="mailto:marketing@genxsmedia.com" className="button-primary">Tell us about it <span>↗</span></a></div><footer className="studio-footer"><a className="studio-brand" href="#top"><span className="brand-symbol">G</span><span>GENXSMEDIA<small>DESIGN · BUILD · GROW</small></span></a><span>© {new Date().getFullYear()} GENXSMEDIA SOLUTIONS</span><div><a href="https://www.linkedin.com/company/genxsmedia-solutions" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://x.com/genxsmedia" target="_blank" rel="noreferrer">X ↗</a></div></footer></div>
        </section>
      </main>
    </div>
  );
}
