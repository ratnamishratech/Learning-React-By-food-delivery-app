const Contact = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center py-10">
      <h1 className="font-bold text-5xl mb-10">Contact Us</h1>

      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-2xl shadow-lg">
        <div className="w-80 mb-6">
          <img
            src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg"
            alt="contact"
          />
        </div>

        <form className="flex flex-col w-80 space-y-4"
          onSubmit={(e) => {
            e.preventDefault(); // stop page refresh
            alert("Message sent!");
          }} >
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type Your Message Here"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
