/* eslint-disable @next/next/no-img-element */
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, Compass, HeartHandshake, Leaf, MessageCircle, ShieldCheck, Sprout, Waves } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import FAQAccordion from "@/components/FAQAccordion";

const images = {
  portrait: "https://i.ibb.co/sd8NkPXc/Dr-Maya-Reynolds.png",
  approach: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1500&q=85",
};
const specialties = [
  { number: "01", title: "Anxiety & panic", copy: "Find a little more room between you and the constant worry, racing thoughts, or tension that can make it hard to feel at ease.", tag: "Clarity · Practical tools" },
  { number: "02", title: "Trauma & past experiences", copy: "Explore the impact of difficult experiences with care, attention to safety, and a pace that respects where you are right now.", tag: "Safety · Stabilization" },
  { number: "03", title: "Burnout & perfectionism", copy: "Step back from relentless pressure and begin building ways of living and working that feel more sustainable and connected to you.", tag: "Balance · Self-understanding" },
];

export default function HomePage() {
  return <main id="top">
    <SiteHeader />
    <section className="hero section-shell">
      <div className="hero-grid wrap">
        <div className="hero-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> Therapy for adults · Santa Monica, California</p>
          <h1>Therapy for anxiety &amp; trauma in <em>Santa Monica, CA.</em></h1>
          <p className="hero-intro">Make room for a life that feels like yours. You may look like you&apos;re handling everything, while inside you feel anxious, overwhelmed, or emotionally exhausted. Therapy can be a place to slow down, understand what you&apos;re carrying, and find a steadier way forward.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Schedule a free consultation <ArrowUpRight size={17} /></a><a className="text-link" href="#approach">Explore my approach <ArrowDownRight size={16} /></a></div>
          <div className="hero-note"><span className="note-icon"><Sprout size={18} /></span><span><strong>A space to be fully human.</strong><small>Warm, collaborative, and grounded care.</small></span></div>
        </div>
        <div className="hero-visual" aria-label="Portrait of Dr. Maya Reynolds">
          <div className="hero-image-frame"><img className="hero-portrait" src={images.portrait} alt="Portrait of Dr. Maya Reynolds" /><div className="portrait-caption"><span className="caption-line" /><span><strong>Dr. Maya Reynolds, PsyD</strong><small>Therapy for adults · Santa Monica</small></span></div></div>
          <div className="hero-stamp" aria-hidden="true"><span className="stamp-ring">A GENTLER WAY FORWARD ·</span><Leaf size={28} strokeWidth={1.3} /></div>
          <div className="hero-side-note"><span>01 / 03</span><span className="side-note-line" /><span>Begin where you are</span></div>
        </div>
      </div>
      <div className="hero-bottom wrap"><span>For adults navigating</span><div><span>Anxiety</span><i /><span>Trauma</span><i /><span>Burnout</span><i /><span>Perfectionism</span></div><a href="#services" aria-label="Scroll to services"><ArrowDownRight size={20} /></a></div>
    </section>

    <section className="intro-section section-pad" id="about">
      <div className="wrap intro-grid">
        <div className="intro-visual-card" aria-label="A gentle reminder about starting therapy"><span className="quote-ornament">“</span><p>You don&apos;t have to arrive with everything <em>figured out.</em></p><div className="quote-detail"><span className="quote-line" /><span>Every step begins where you are.</span></div><span className="intro-visual-label">A GENTLER WAY FORWARD</span><span className="intro-visual-circle" aria-hidden="true" /></div>
        <div className="intro-copy"><p className="eyebrow">A place to begin</p><h2>You don&apos;t have to keep holding it all <em>together.</em></h2><p>Many thoughtful, capable people get used to pushing through. From the outside, life may look fine. Inside, there can be constant worry, tension, or the exhaustion of trying to do everything right.</p><p>Our work begins with understanding your experience—not judging it. Together, we can make sense of what feels difficult and explore what helps you feel safer, more connected, and more like yourself.</p><a className="underlined-link" href="#approach">Get to know my approach <ArrowUpRight size={16} /></a><div className="signature-row"><span className="signature-mark">M.</span><span><strong>Dr. Maya Reynolds, PsyD</strong><small>Therapy in Santa Monica &amp; across California</small></span></div></div>
      </div>
    </section>

    <section className="services-section section-pad" id="services"><div className="wrap">
      <div className="section-heading section-heading-row"><div><p className="eyebrow">How I can help</p><h2>Support for what you&apos;re <em>carrying.</em></h2></div><p className="heading-aside">You don&apos;t need to have the perfect words or a clear plan before reaching out. We can start with what feels most present for you.</p></div>
      <div className="service-cards">{specialties.map((item, index) => <article className={`service-card service-card-${index + 1}`} key={item.number}><div className="service-card-top"><span className="service-number">{item.number}</span><span className="service-arrow"><ArrowUpRight size={20} /></span></div><div className="service-icon-wrap" aria-hidden="true">{index === 0 ? <Waves size={26} strokeWidth={1.4} /> : index === 1 ? <ShieldCheck size={26} strokeWidth={1.4} /> : <Sprout size={26} strokeWidth={1.4} />}</div><h3>{item.title}</h3><p>{item.copy}</p><span className="service-tag">{item.tag}</span></article>)}</div>
      <div className="services-bottom"><span>Care that meets you where you are.</span><a href="#contact">Let&apos;s start a conversation <ArrowRight size={16} /></a></div>
    </div></section>

    <section className="focus-section section-pad" id="focus-areas"><div className="wrap focus-grid"><div className="focus-intro"><p className="eyebrow">Areas of focus</p><h2>There may be more than one thing weighing on <em>you.</em></h2><p>These experiences can overlap. We can begin with whatever feels most present, without needing to have it all neatly figured out.</p></div><div className="focus-tags" aria-label="Areas of focus"><span>Anxiety</span><span>Panic</span><span>Trauma</span><span>Chronic stress</span><span>Professional burnout</span><span>Perfectionism</span><span>Emotional exhaustion</span><span>High internal pressure</span></div></div></section>

    <section className="approach-section" id="approach"><div className="approach-photo"><img src={images.approach} alt="Peaceful natural landscape" loading="lazy" /><div className="photo-caption">Slow down. Take stock. Begin again.</div></div><div className="approach-panel"><p className="eyebrow eyebrow-light">My approach</p><h2>There is no one-size-fits-all way to <em>heal.</em></h2><p className="approach-lead">Therapy should feel like a place where you can be honest, feel respected, and take things one step at a time.</p><p>I bring together evidence-based methods and a collaborative relationship. We make room for practical tools, reflection, and attention to how stress and difficult experiences can show up in the body.</p><div className="method-list"><div><span className="method-check"><Check size={15} /></span><span><strong>Cognitive-behavioral therapy (CBT)</strong><small>Understand patterns and practice useful new responses.</small></span></div><div><span className="method-check"><Check size={15} /></span><span><strong>EMDR</strong><small>Work with distressing memories at a considered pace.</small></span></div><div><span className="method-check"><Check size={15} /></span><span><strong>Mindfulness &amp; body-oriented techniques</strong><small>Build awareness of what is happening in mind and body.</small></span></div></div><a className="button button-light" href="#faqs">Questions about therapy? <ArrowUpRight size={17} /></a></div></section>

    <section className="values-strip"><div className="wrap values-inner"><div><span className="value-icon"><HeartHandshake size={21} /></span><span><strong>Collaborative care</strong><small>Your voice stays part of the process.</small></span></div><div><span className="value-icon"><Compass size={21} /></span><span><strong>Steady, thoughtful pacing</strong><small>Space for safety and stabilization.</small></span></div><div><span className="value-icon"><MessageCircle size={21} /></span><span><strong>Honest conversation</strong><small>Curiosity, not judgment.</small></span></div></div></section>

    <section className="office-section section-pad" id="office">
      <div className="wrap">
        <div className="office-heading"><div><p className="eyebrow"><span className="eyebrow-dot" /> A place to feel at ease</p><h2>A room to settle in.<br /><em>Space to be yourself.</em></h2></div><p>Natural light, warm wood, soft textures, and comfortable seating give the space a grounded, lived-in feel. Here&apos;s a look around before you arrive.</p></div>
        <div className="office-gallery">
          <figure className="office-feature-photo"><img src="/office-lounge-main.jpeg" alt="The therapy office with a grey sofa, lounge chair, tall sunlit windows, brick columns, and a warm wood floor" loading="lazy" /><div className="photo-index">01 <span>/ THE SPACE</span></div><figcaption><span className="caption-kicker">THE CONVERSATION ROOM</span><strong>Soft light. Open space.</strong><small>A welcoming setting to pause and talk.</small></figcaption></figure>
          <div className="office-side-column">
            <figure className="office-secondary-photo"><img src="/office-lounge-alt.jpeg" alt="A second angle of the same therapy office, showing the sofa, bookshelves, plants, and natural light" loading="lazy" /><figcaption><span>02</span> Another view of the same space</figcaption></figure>
            <div className="office-note-card"><div className="office-note-mark"><Leaf size={22} strokeWidth={1.4} /></div><p className="office-note-label">A SMALL NOTE ABOUT THE SPACE</p><h3>You can arrive exactly as you are.</h3><p>No need to have the right words ready. The room is here for honest conversation, at your pace.</p><div className="office-qualities"><span><i /> Natural light</span><span><i /> Comfortable seating</span><span><i /> A quieter pace</span></div></div>
          </div>
        </div>
        <div className="office-footerline"><span><strong>IN PERSON</strong> · Santa Monica, California</span><span>Two perspectives. One calm place to begin.</span><a href="#contact">Ask about a first visit <ArrowUpRight size={15} /></a></div>
      </div>
    </section>

    <section className="faq-section section-pad" id="faqs"><div className="wrap faq-grid"><div className="faq-intro"><p className="eyebrow">A few helpful answers</p><h2>Good questions are a place to <em>start.</em></h2><p>It&apos;s understandable to have questions before beginning therapy. Here are a few common starting points.</p><a href="#contact" className="underlined-link">Still wondering about something? <ArrowUpRight size={16} /></a><div className="faq-deco"><span>One step at a time</span><Sprout size={23} /></div></div><FAQAccordion /></div></section>

    <section className="contact-section" id="contact"><div className="contact-orb contact-orb-one" aria-hidden="true" /><div className="contact-orb contact-orb-two" aria-hidden="true" /><div className="wrap contact-inner"><p className="eyebrow eyebrow-light">When you feel ready</p><h2>You don&apos;t have to figure it all out <em>today.</em></h2><p>A free 15-minute consultation can be a chance to share what brings you here, ask questions, and decide whether working together feels like the right fit.</p><div className="contact-actions"><a className="button button-light" href="#faqs">Explore common questions <ArrowUpRight size={17} /></a><span><span className="contact-dot" /> Santa Monica, CA · In-person &amp; telehealth</span></div><p className="contact-note">Connect the practice&apos;s approved booking link before launch.</p></div></section>

    <footer className="site-footer"><div className="wrap footer-main"><div className="footer-brand"><a className="brand brand-footer" href="#top"><span className="brand-mark">m<span>.</span></span><span className="brand-copy"><strong>Dr. Maya Reynolds</strong><small>Psychology · Santa Monica</small></span></a><p>Thoughtful, collaborative therapy for adults navigating anxiety, trauma, and burnout.</p></div><div className="footer-nav"><strong>Explore</strong><a href="#approach">My approach</a><a href="#services">Services</a><a href="#office">Our office</a><a href="#faqs">FAQs</a></div><div className="footer-location"><strong>Practice location</strong><p>Santa Monica, California</p><p>In-person appointments and telehealth for clients located in California.</p><a href="#contact" className="footer-link">Take a first step <ArrowUpRight size={15} /></a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD · Website concept</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
