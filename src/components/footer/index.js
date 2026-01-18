import { colors } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2E2A47] text-white py-12">
      <div className="container mx-auto px-6 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            The Quality inspires trust -<b style={{ fontFamily: 'Times New Roman', fontStyle: 'italic' }}> ANIL ENGINEER </b>. ISO 9001:2015 CERTIFIED CO.
          </h2>
          <p className="text-xl mt-4 text-gray-300">
            गुणवत्ता के प्रति हमारा समर्पण यह सुनिश्चित करता है कि आपको बेहतरीन उत्पाद मिलें — शुद्ध तेलों से लेकर पौष्टिक शुद्ध खाद्य मसाले|
          </p>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-xl flex justify-between items-center">
          <div className="space-y-4 text-white text-justify">
            <h3 className="text-2xl font-semibold">उद्देश्य:</h3>
            <p className="text-lg">
            “हमारा उद्देश्य पैसा कमाना नहीं, बल्कि आपकी सेहत की पूरी तरह से रक्षा करना है। आप स्वस्थ रहेंगे, तभी आपका परिवार खुशहाल रहेगा।”
           </p>  <p className="text-lg">
            नोट:
कंपनी के उत्पादों के विपणन एवं वितरण को सुदृढ़ करने हेतु विभिन्न प्रतिनिधित्व क्षेत्रों में डीलर एवं डिस्ट्रीब्यूटर की नियुक्ति की जानी प्रस्तावित है। संबंधित क्षेत्रों में योग्य एवं सक्षम व्यक्तियों/फर्मों का चयन कर उन्हें अधिकृत किया जाएगा।
            </p>
          </div>
          <div className="hidden lg:block">
          
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-400">Products</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/product/Groundnut%20Oil"
                  className="hover:text-yellow-300"
                >
                 Oil Maker Machine
                </a>
              </li>
              <li>
                <a
                  href="/product/Mustard%20Oil"
                  className="hover:text-yellow-300"
                >
                 Grinders
                </a>
              </li>
             
            
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="hover:text-yellow-300 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-yellow-300 transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-yellow-300 transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-yellow-400">
              Contact Us
            </h3>
            <p className="text-lg">
              <a href="tel:9425106083" className="font-bold">
                +91 9425 106 083, 7909 530 084
              </a>
            </p>
            <p className="text-lg">
              <a
                href="mailto: anilenginerr67@gmail.com"
                className="font-bold"
              >
                anilengineer67@gmail.com
              </a>
            </p>
            <p className="text-lg">
              <a
                href="https://maps.app.goo.gl/BLuXPBWtam6wP6g99"
                className="font-bold"
                target="_blank"
              >
                Office: No. 1, 1st Floor, Jaroli Trade Center , Madhya Pradesh, India
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 ml-4">
            <h3 className="text-xl font-semibold text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/share/17xtZt2oiy/"
                className="text-yellow-400 hover:text-white transition duration-300"
                target="_blank"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/anil_engineer/"
                className="text-yellow-400 hover:text-white transition duration-300"
                target="_blank"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="http://wa.me/9425106083"
                className="text-yellow-400 hover:text-white transition duration-300"
                target="_blank"
              >
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-400">
          <p className="text-lg font-medium">
            © {new Date(Date.now()).getFullYear()} ANIL ENGINEER.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
