import { useState } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import { socialMedia } from "@/data"; // Assuming socialMedia data is imported
import MagicButton from "./MagicButton";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm("service_6tcd9ot", "template_r19c85y", e.target as HTMLFormElement, "kKhUhSDJi4VC3h5Cp")
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg w-72 text-white bg-transparent border border-slate-800 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg w-72 text-white bg-transparent border border-slate-800 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 rounded-lg w-72 text-white bg-transparent border border-slate-800 backdrop-blur-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <MagicButton
            title="Send Message"
            icon={<FaLocationArrow />}
            position="right"
          />
        </form>

        {status && <p className="mt-4 text-center text-white">{status}</p>}

        {/* Download Resume Button */}
        <a href="/ANDERSON MITAMBO MWANGI RESUME.pdf" download>
          <MagicButton
            title="Download Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Anderson Mwangi
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url} // Linking to the social media profile
              target="_blank" // Open link in new tab
              rel="noopener noreferrer" // Security best practice for external links
            >
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt={`${info.name} icon`} width={20} height={20} />
              </div>
            </a>
          ))}
          <a
          href="tel:+254700071699" // Replace with your actual phone number
          className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          aria-label="Call Me"
        >
          <FaPhone size={20} color="#fff" /> {/* Use FaPhoneAlt icon */}
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
