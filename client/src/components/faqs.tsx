import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Does XCon Technologies cover all stages of the SDLC?",
      answer: "Absolutely; this is our core service. We've built a strong team of 750+ IT professionals – consultants, architects, developers, data scientists, security, DevOps, and QA engineers – to take charge of everything from requirements elicitation and software design to coding, deployment, and support."
    },
    {
      question: "Can you speed up the delivery of projects?",
      answer: "Yes, depending on the project size, we might be able to get your MVP delivered in 2 weeks – 4 months. Subsequently, we can ensure releases of new functionality every 2–6 weeks. Get in touch, and we'll work out a way to meet your needs."
    },
    {
      question: "What's the cost for XCon Technologies' development services?",
      answer: "Software development costs for a medium/large application may range from $50K to $1M. The total amount mainly depends on the number and complexity of software features, the number of platforms supported (web, mobile, desktop), and the type of development (custom, low-code, or platform-based). The UI design uniqueness and complexity, the number of integrations with other software systems, as well as availability, security, and performance requirements also play an important part. You can request free project cost calculation from XCon Technologies or find more details about software development costs."
    },
    {
      question: "How do you control the quality of the software you deliver?",
      answer: "We take a shift-left approach to QA, follow international coding standards, and maintain a quality management system at the level required by ISO 9001."
    },
    {
      question: "Who owns the code?",
      answer: "Before the cooperation starts, we sign a Master Service Agreement (MSA) that guarantees you retain legal ownership of all intellectual properties, including the code developed throughout our partnership."
    },
    {
      question: "What's your post-launch policy?",
      answer: "During the first 1–3 months after the software launch, our team: Answers your and users' questions, resolves user issues (if any). Manages incidents, configuration changes, and updates. After 3 months, upon agreement, we're ready to offer continuous maintenance and evolution of your software, as well as L1–L3 support (if required). We know how to nurture long-term partnerships and keep our clients happy in the long run: ~62% of our revenue is coming from customers we serve for more than 2 years."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Common <span className="text-primary">Questions</span> Answered
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about XCon Technologies' development services and processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 pt-0">
                    <div className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}