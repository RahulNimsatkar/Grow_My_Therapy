"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What kinds of concerns can we work on together?", answer: "I work with adults navigating anxiety, panic, trauma and its lasting effects, chronic stress, professional burnout, perfectionism, and the pressure to keep everything together." },
  { question: "What is your approach to therapy?", answer: "My approach is warm, collaborative, and grounded. I draw on cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, adapting the work to your needs and pace." },
  { question: "Do you offer in-person and online sessions?", answer: "The practice offers in-person therapy in Santa Monica and secure telehealth sessions for clients located in California. Please confirm current availability during an initial conversation." },
  { question: "Will therapy be tailored to me?", answer: "Yes. Therapy is collaborative rather than one-size-fits-all. Sessions create space to understand what you are experiencing, identify what may be keeping you stuck, and explore practical ways to move forward at a pace that feels manageable." },
];

export default function FAQAccordion() {
  const [active, setActive] = useState<number | null>(0);
  return <div className="faq-list">
    {faqs.map((faq, index) => {
      const expanded = active === index;
      const panelId = `faq-panel-${index}`;
      return <div className={`faq-item ${expanded ? "is-open" : ""}`} key={faq.question}>
        <button className="faq-question" type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setActive(expanded ? null : index)}>
          <span>{faq.question}</span><span className="faq-icon"><ChevronDown size={18} /></span>
        </button>
        <div className="faq-answer" id={panelId} hidden={!expanded}><p>{faq.answer}</p></div>
      </div>;
    })}
  </div>;
}
