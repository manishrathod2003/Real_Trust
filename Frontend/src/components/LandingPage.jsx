import React, { useState, useEffect } from "react";

// ⭐ IMPORTANT: Replace with your deployed backend URL
const API_URL = "https://real-trust-backend-6k06.onrender.com/api";


const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [newsletter, setNewsletter] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
    fetchClients();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${API_URL}/projects`);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await fetch(`${API_URL}/clients`);
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (
      !contactForm.fullName ||
      !contactForm.email ||
      !contactForm.mobile ||
      !contactForm.city
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Thank you! We will contact you soon.");
        setContactForm({ fullName: "", email: "", mobile: "", city: "" });
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleNewsletterSubmit = async () => {
    if (!newsletter) {
      alert("Please enter email address");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletter }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Successfully subscribed to newsletter!");
        setNewsletter("");
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white text-gray-800 sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/images/logo.svg"
              alt="Real Trust Logo"
              className="w-40 h-10 object-contain"
            />
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600 transition">
                HOME
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600 transition">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 transition">
                ABOUT PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-blue-600 transition"
              >
                TESTIMONIALS
              </a>
            </li>
          </ul>
          <button className="bg-orange-600 px-6 py-2 rounded text-sm font-semibold hover:bg-orange-700 transition text-white">
            CONTACT
          </button>
        </nav>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src="/images/hero.svg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/0"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Consultation,
              <br />
              Design,
              <br />& Marketing
            </h1>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-600 via-slate-700 to-slate-900 p-8  shadow-2xl text-white max-w-xs mr-24 ml-auto w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Get a Free
              <br />
              Consultation
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={contactForm.fullName}
                onChange={(e) =>
                  setContactForm({ ...contactForm, fullName: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/70 focus:outline-none focus:border-white text-white"
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/70 focus:outline-none focus:border-white text-white"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={contactForm.mobile}
                onChange={(e) =>
                  setContactForm({ ...contactForm, mobile: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/70 focus:outline-none focus:border-white text-white"
              />
              <input
                type="text"
                placeholder="Area, City"
                value={contactForm.city}
                onChange={(e) =>
                  setContactForm({ ...contactForm, city: e.target.value })
                }
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/70 focus:outline-none focus:border-white text-white"
              />

              <button
                onClick={handleContactSubmit}
                disabled={loading}
                className="w-full bg-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Get Quick Quote"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-gray-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute top-12 left-20 w-16 h-16 bg-blue-100 rounded-full opacity-60"></div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6 relative">
            <h2 className="text-5xl font-bold text-blue-600 leading-tight">
              Not Your Average Realtor
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Real estate is a very specialized profession. Many claim to be
              experts when in reality they are inexperienced at making your
              experience truly exceptional. It's not uncommon for a home
              transaction to become costly and stressful.
            </p>
          </div>

          <div className="relative h-[500px]">
            <div className="absolute top-0 right-20 w-72 h-72 bg-blue-50 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute bottom-20 left-0 w-64 h-64 bg-orange-50 rounded-full opacity-40 blur-2xl"></div>

            <div className="absolute top-8 right-2/3 w-6 h-6 bg-blue-500 rounded-full shadow-lg z-20"></div>
            <div className="absolute top-1/2 left-1/8 w-5 h-5 bg-orange-500 rounded-full shadow-lg z-20"></div>

            <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full overflow-hidden shadow-2xl border-8 border-white z-10 bg-white">
              <img
                src="/images/Ellipse 11.svg"
                alt="Professional Realtor"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-7 right-9 w-56 h-56 rounded-full overflow-hidden shadow-2xl border-8 border-white z-20 bg-white">
              <img
                src="/images/Ellipse 12.svg"
                alt="Happy Couple"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-6 right-12 w-48 h-48 rounded-full overflow-hidden shadow-2xl border-8 border-white z-20 bg-white">
              <img
                src="/images/Ellipse 13.svg"
                alt="Celebrating Success"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="services" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-xl transition-shadow ">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <img
                src="/images/home.svg"
                >
                </img>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Potential ROI
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you are looking to purchase an investment property or
                need advice on capitalizing on your current property's equity
                through various methods, we can help create a strategy plan.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-xl transition-shadow ">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <img
                src="/images/paintbrush-2.svg"
                >
                </img>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Design</h3>
              <p className="text-gray-600 leading-relaxed">
                In the real world good design cannot survive without great
                design. Here we bring you only the most amazing products all
                time.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-xl transition-shadow ">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <img
                src="/images/circle-dollar-sign.svg"
                >
                </img>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide marketing and branding services to help you reach
                broader target audience and help you fully realize.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Collage Section */}
<section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
  <div className="container mx-auto px-4 relative z-10">
    <div className="flex justify-center items-center gap-8 flex-wrap max-w-6xl mx-auto">
      {/* First Image - Top Left */}
      <div className="relative group self-start mt-0">
        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-l-[8px] border-b-[8px] border-orange-500"></div>
        <img
          src="/images/pexels-brett-sayles-2881232.svg"
          alt="Real estate consultation"
          className="w-48 h-36 object-cover shadow-2xl transform transition duration-300 group-hover:scale-105 -mt-8"
        />
        <div className="absolute -top-10 -right-12 w-8 h-8 bg-blue-600"></div>
      </div>

      {/* Second Image - Center (Larger) */}
      <div className="relative group">
        <div className="absolute -top-2 -right-10 w-16 h-16 border-t-[10px] border-r-[10px] border-blue-600"></div>
        <img
          src="/images/pexels-andres-ayrton-6578391.svg"
          alt="Property viewing"
          className="w-90 h-64 object-cover shadow-2xl transform transition duration-300 group-hover:scale-105 mt-8"
        />
      </div>

      {/* Third Image - Bottom Right */}
      <div className="relative group self-end mb-0">
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-[6px] border-r-[6px] border-orange-500"></div>
        <img
          src="/images/pexels-fauxels-3182834.svg"
          alt="Client consultation"
          className="w-48 h-36 object-cover shadow-2xl transform transition duration-300 group-hover:scale-105 "
        />
      </div>
    </div>
  </div>
</section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-5xl font-bold text-blue-600 mb-6">About Us</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-10 rounded-lg"></div>
          <p className="text-gray-600 leading-relaxed text-xl mb-10">
            Fifteen years of experience in real estate, excellent customer
            service and a commitment to work hard, listen and follow through. We
            provide quality service to build relationships with clients and more
            importantly, maintain those relationships by communicating
            effectively.
          </p>
          <button className="text-blue-600 font-bold hover:underline text-lg flex items-center gap-2 border-2 rounded p-2 mx-auto transition hover:gap-4      ">
            LEARN MORE <span>→</span>
          </button>
        </div>
      </section>

      {/* Our Projects Section - FETCHES FROM BACKEND */}
      <section
        id="projects"
        className="py-20 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4 rounded-lg"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We know what buyers are looking for and suggest improvements to your
            home to help you get top dollar for the sale of your home.
          </p>

          {projects.length === 0 ? (
            <p className="text-center text-gray-500">Loading projects...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={`${API_URL.replace("/api", "")}/${project.image}`}
                      alt={project.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-blue-600 font-bold text-lg mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition w-full font-semibold">
                      READ MORE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

       
        </div>
      </section>

      {/* Happy Clients Section - FETCHES FROM BACKEND */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
            Happy Clients
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-lg"></div>

          {clients.length === 0 ? (
            <p className="text-center text-gray-500">Loading clients...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {clients.map((client) => (
                <div
                  key={client._id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center transform hover:-translate-y-2"
                >
                  <div className="relative mx-auto w-24 h-24 mb-4">
                    <img
                      src={`${API_URL.replace("/api", "")}/${client.image}`}
                      alt={client.name}
                      className="w-full h-full rounded-full object-cover border-4 border-blue-100 shadow-lg"
                      onError={(e) => {
                        e.target.src =
                          "https://randomuser.me/api/portraits/men/32.jpg";
                      }}
                    />
                    <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-0 hover:opacity-100 transition-opacity"></div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-4">
                    {client.description}
                  </p>
                  <h4 className="text-blue-600 font-bold text-lg">
                    {client.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{client.designation}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24 bg-cover "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/Rectangle.svg')",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Learn more about our listing process, as well as our
            <br className="hidden md:block" />
            additional staging and design work.
          </h2>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg">
            LEARN MORE →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white ">
        <div className="container mx-auto">
          {/* Top Section - Navigation Links and Subscribe in same line */}
          <div className="bg-blue-600 px-6 py-10  mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-8">
                <a
                  href="#"
                  className="font-semibold hover:text-blue-200 transition"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="font-semibold hover:text-blue-200 transition"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="font-semibold hover:text-blue-200 transition"
                >
                  Projects
                </a>
                <a
                  href="#testimonials"
                  className="font-semibold hover:text-blue-200 transition"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="font-semibold hover:text-blue-200 transition"
                >
                  Contact
                </a>
              </div>

              {/* Subscribe Section */}
              <div className="flex items-center gap-3">
                <span className="font-semibold whitespace-nowrap">
                  Subscribe Us
                </span>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={newsletter}
                  onChange={(e) => setNewsletter(e.target.value)}
                  className="px-4 py-2 bg-white text-gray-700 placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 w-64"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  disabled={loading}
                  className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-blue-50 transition whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Loading..." : "Subscribe"}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between px-20 items-center pb-9 gap-4 ">
            <p className="text-gray-400 text-sm">© All Rights Reserved 2023</p>

            <div className="flex items-center gap-2">
                <img
              src="/images/logo.svg"
              alt="Real Trust Logo"
              className="w-40 h-10  object-contain brightness-0 invert"
            />
              
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-blue-400 hover:text-white transition"
              >
                 <img
                src="/images/Twitter.svg"
                >
                </img>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-pink-500 hover:text-white transition"
              >
                 <img
                src="/images/Instagram.svg"
                >
                </img>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-blue-600 hover:text-white transition"
              >
                 <img
                src="/images/Facebook.svg"
                >
                </img>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center  hover:bg-blue-600 transition"
              >
                 <img
                src="/images/Linkedin.svg"
                >
                </img>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
