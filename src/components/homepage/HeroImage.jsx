import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from "../../assets/bg.jpg";

const HeroImage = () => {
   const form = useRef();
  const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      course: '',
    });
  
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
        service_id: 'service_0aapx05', // Replace with your service ID
        template_id: 'template_pml246k', // Replace with your template ID
        user_id: '0i1KgGg7cnQPaREia', // Replace with your public key
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
        } else {
          throw new Error('Failed to send the message');
        }
      } catch (error) {
        toast.error('Failed to send the message, please try again.');
        console.error('Error:', error);
      }
    };
  

  return (
    <div
      className="w-full h-[700px] flex justify-center items-center px-8 inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-7xl">
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
            Let's Learn from Experienced Professionals
          </h2>
        </div>

        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
          <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-2xl shadow-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>

            <div className="mb-4">
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

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
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

            <div className="mb-4">
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

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default HeroImage;
