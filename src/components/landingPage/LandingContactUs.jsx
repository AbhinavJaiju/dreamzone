import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0aapx05', 'template_q1mxj1c', form.current, {
        publicKey: '0i1KgGg7cnQPaREia',
      })
      .then(
        () => {
          toast.success('Your message has been sent successfully!');
          form.current.reset(); // Clears the form after success
        },
        (error) => {
          toast.error('Failed to send the message, please try again.');
        }
      );
  }; // Added missing closing brace for sendEmail function

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
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-6 w-full flex flex-col"
        >
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-700 font-medium mb-1">Select a Course</label>
              <select
                name="course"
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
            className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition mx-auto"
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