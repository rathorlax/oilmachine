import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "4b201734-0437-440e-a65c-b48b579020e5",
        ...formData,
      }),
    });

    if (response.ok) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      setFormData({ name: "", email: "", mobile: "", message: "" });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center p-4">
      <div className="bg-yellow-300 shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-green-600 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-green-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3 outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-green-600 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-green-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3 outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-green-600 font-medium mb-1"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border-green-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3 outline-none"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-green-600 font-medium mb-1"
            >
              Message for distributorship or products
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-green-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-3 resize-none overflow-hidden outline-none"
              rows="5"
              placeholder="Enter your message(if you are join as a Distributorship or customer )"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;


