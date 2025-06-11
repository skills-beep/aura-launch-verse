
import { useState } from 'react';
import { ArrowDown } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "When will the TechNova Pro be available?",
      answer: "The TechNova Pro will be available for pre-order in 30 days, with shipping beginning 60 days after the pre-order launch. Early access customers will receive their devices first."
    },
    {
      question: "What makes the TechNova Pro different from other devices?",
      answer: "Our device features cutting-edge AI processing, revolutionary battery technology that lasts for days, military-grade security, and 6G connectivity. The neural engine provides intelligent automation and learning capabilities that adapt to your usage patterns."
    },
    {
      question: "Is there a warranty included?",
      answer: "Yes! All TechNova Pro devices come with a comprehensive 2-year warranty covering hardware defects and manufacturing issues. Pro and Ultimate plans include extended warranty options and premium support."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your plan at any time. The price difference will be calculated and you'll only pay the additional cost. Downgrades are also available with prorated refunds."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and cryptocurrency payments. Monthly payment plans are available for all configurations with 0% APR financing."
    },
    {
      question: "Is international shipping available?",
      answer: "Yes, we ship worldwide! International shipping is free for orders over $200. Delivery times vary by location but typically range from 5-14 business days. All international orders include customs handling."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about TechNova Pro.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <ArrowDown 
                  className={`w-6 h-6 text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
