import "../styles/Contact.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send Message");
  const [isSending, setIsSending] = useState(false);

  // Update message with appointment date
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      message: prev.message.includes("📅 Appointment Date:")
        ? prev.message.replace(
            /📅 Appointment Date:.*/g,
            `📅 Appointment Date: ${date.toDateString()}`
          )
        : `${prev.message}📅 Appointment Date: ${date.toDateString()}\n\n\n`,
    }));
  }, [date]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText("Sending...");

    emailjs
      .send(
        "service_dmkbjwf",
        "template_3z5eeq8",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "NuKnc-hkHUxr1EKl7"
      )
      .then(
        () => {
          setButtonText("Message Sent ✅");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => {
            setButtonText("Send Message");
            setIsSending(false);
          }, 4000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setButtonText("Error ❌ Try Again");
          setTimeout(() => {
            setButtonText("Send Message");
            setIsSending(false);
          }, 4000);
        }
      );
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.h2
        className="contact__title"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="contact__subtitle"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Schedule an appointment or send us a message
      </motion.p>

      <div className="contact__content">
        {/* Contact Form */}
        <motion.form
          className="contact__form"
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <button type="submit" disabled={isSending}>
            {buttonText}
          </button>
        </motion.form>

        {/* Calendar */}
        <motion.div
          className="contact__calendar"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Calendar onChange={setDate} value={date} />
          <p className="selected-date">
            📅 Selected Date: {date.toDateString()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;