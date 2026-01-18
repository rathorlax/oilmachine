import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "अनिल इंजीनियर कौन-कौन से उत्पाद पेश करता है?",
      answer:
        "हम घरेलू और व्यावसायिक उपयोग दोनों के लिए तेल निष्कर्षण और पीसने वाली मशीनों के निर्माण और आपूर्ति में विशेषज्ञता रखते हैं।",
    },
    {
      question: "अनिल इंजीनियर के उत्पाद कहाँ उपलब्ध हैं?",
      answer:
        'हमारे उत्पादों का विपणन "क्लासिक" ब्रांड नाम के तहत किया जाता है और ये नीमच (मध्य प्रदेश) में बिक्री काउंटर के साथ-साथ अन्य वितरण चैनलों के माध्यम से उपलब्ध हैं।',
    },
   
    {
      question: "क्या आप उत्पादों की डिलीवरी सीधे ग्राहकों तक करते हैं?",
      answer:
        "फिलहाल, हम खुदरा और थोक साझेदारों के माध्यम से वितरण पर ध्यान केंद्रित कर रहे हैं। खरीदारी के विकल्पों के बारे में अधिक जानकारी के लिए हमसे संपर्क करें।",
    },
    {
      question: "क्या यह वेबसाइट अनिल इंजीनियर से संबद्ध है?",
      answer:
        "यह वेबसाइट अनिल इंजीनियर के उत्पादों और सेवाओं को प्रदर्शित करने के लिए समर्पित एक सूचनात्मक मंच है। ",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 text-justify">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div
              className="text-lg font-medium cursor-pointer hover:text-blue-600"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
