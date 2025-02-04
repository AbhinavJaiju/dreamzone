import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";

const LandingContactUs = () => {
  const navigate = useNavigate();
  const form = useRef();

  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
  });

  // Check if all fields are filled
  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      service_id: 'service_s307akn', // Replace with your service ID
      template_id: 'template_pu09p3u', // Replace with your template ID
      user_id: 'g5ureZ6yfN45OjC3q', // Replace with your public key
      template_params: {
        name: formData.name,
        phoneNumber: formData.phone,
        email: formData.email,
        course: formData.course,
      },
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Your message has been sent successfully!');
        setFormData({ name: '', phone: '', email: '', course: '' }); // Reset form data
        form.current.reset(); // Reset the form
        setTimeout(()=>navigate("/"),2000)
      } else {
        throw new Error('Failed to send the message');
      }
    } catch (error) {
      toast.error('Failed to send the message, please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">
      <div className="w-full text-center pt-20 mb-5">
        <h1 className="w-full text-5xl font-extrabold">
          Need guidance about designing courses? <br />
          Get in touch with our experts now
        </h1>
      </div>
      <div className="w-full text-center pt-5 mb-5">
        <span className="w-full text-xl">
          We have education experts available 24/7 to assist you with more
          information on choosing the right online course for you.
        </span>
      </div>
      <div className="w-full py-6 px-4">
        <form ref={form} onSubmit={sendEmail} className="bg-white p-6 w-full flex flex-col">
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-700 font-medium mb-1">PhoneNumber</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                maxLength="10"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-700 font-medium mb-1">Select a Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a Course</option>
                <option value="Fashion Designing">Fashion Designing</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Animation & Graphics Design">Animation & Graphics Design</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-medium transition mx-auto ${isFormValid ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
            disabled={!isFormValid}
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer /> {/* Added ToastContainer to display notifications */}
    </div>
  );
};

export default LandingContactUs;
