import React, { useState } from "react";
import axios from "axios";
import { Notification } from "./notification";
const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { fullName, email, phone, message } = formData;

    const formDataToSend = {
      fullName,
      email,
      phone,
      message,
    };

    console.log(formDataToSend); // Ensure that this logs the correct values

    axios
      .post("http://localhost/core/sendEmail.php", formDataToSend,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (response.data.status === "success") {
          console.log("Form submitted successfully!");
          setIsModalOpen(true);
          setNotification("Thank you for reaching out! We'll get back to you soon.");
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            message: "",
          });
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        } else {
          console.error("Failed to submit form:", response.data.message);
          alert("Failed to send message, please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("An error occurred while sending the form. Please try again later.");
      });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white py-20 dark:bg-dark lg:py-[120px] px-4 md:px-14">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="mb-4 block text-base font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Got questions or need assistance? Our team is here to help you
                  find the perfect solution for your home, office, or children's
                  furniture needs. Reach out today for support!
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                <form onSubmit={handleSubmit}>
                  <ContactInputBox
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Thank you for reaching out! We'll get back to you soon.</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
        {notification && (
        <Notification message={notification} onClose={handleCloseNotification} />
      )}
    </>
  );
};

export default ContactForm;

const ContactTextArea = ({ row, placeholder, name, value, onChange }) => {
  return (
    <div className="mb-6">
      <textarea
        rows={row}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
      />
    </div>
  );
};

const ContactInputBox = ({ type, placeholder, name, value, onChange }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
      />
    </div>
  );
};
