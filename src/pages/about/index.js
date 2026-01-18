import CompanyPreface from "./company-preface";
import FAQ from "./Faqs";

const AboutUs = () => {
  return (
    <>
      <CompanyPreface />
      <FAQ />
    
      <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d235992.87574918254!2d77.48321279999999!3d22.4520236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x396674786c0ff07b%3A0xfa47041325c50218!2sJaroli%20trade%20center%2C%20Fawara%20Chowk%2C%20Neemuch%2C%20Madhya%20Pradesh%20458441!3m2!1d24.4557488!2d74.8754304!5e0!3m2!1sen!2sin!4v1768449428413!5m2!1sen!2sin" height="450" width={"100%"} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
};

export default AboutUs;
