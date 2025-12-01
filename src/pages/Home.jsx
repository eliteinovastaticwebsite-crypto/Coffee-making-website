import React, { useState } from 'react';
import './Home.css';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.email) {
      console.log('Form submitted:', formData);
      alert('Thank you for reaching out! We will contact you soon.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    }
  };
  const businessSolutions = [
    {
      id: 1,
      title: 'OFFICE',
      description: 'Our filter coffee machines for office and coffee beans are the perfect combo for any office, an essential. this is something that an office cannot do without.',
      image: '/images/office.jpg',
    },
    {
      id: 2,
      title: 'HOTELS',
      description: 'Hotels have a constant influx of people who drink a lot of filter coffee. We\'re there to take care of all your coffee requirements, the coffee vending machines for hotel, and have enough products to back you up.',
      image: '/images/hotel.jpg',
    },
    {
      id: 3,
      title: 'CONSUMER',
      description: 'The consumer-centric coffee is uplifting, easy to manage, and delicious. We have just the store for you with a best filter coffee in india, decoctions, and coffee powders.',
      image: '/images/consumer.jpg',
    }
  ];

  const coffeeMachines = [
    { id: 1, name: 'BLACK & WHITE CLASSIC', image: '/images/mach1.png' },
    { id: 2, name: 'MICROBAR', image: '/images/mach2.png' },
    { id: 3, name: 'PRONTOBAR', image: '/images/mach8.png' }
  ];

  const bestsellerCoffees = [
    { id: 1, name: 'STAR SELECTION', image: '/images/b1.png' },
    { id: 2, name: 'CAFE SUPREMO', image: '/images/b2.png' },
    { id: 3, name: 'AWAKE 80:20', image: '/images/b3.png' },
    { id: 4, name: 'AWAKE 70:30', image: '/images/b4.png' }
  ];

  const testimonials = [
    {
      id: 1,
      text: 'I\'ve been searching for the perfect coffee machine for my office and I was thrilled when I came across Coffee & Love. Superb quality coffee machine we use. Grateful to the team.',
      author: 'Vinay M Govilla',
      image: '/images/test1.png'
    },
    {
      id: 2,
      text: 'Coffee & Love\'s coffee maker machine for home has transformed my morning. Their prompt service, brewing delicious coffee effortlessly. I can\'t imagine starting my day without it.',
      author: 'Samuel Solomon',
      image: '/images/test1.png'
    },
    {
      id: 3,
      text: 'I recommend everyone to use this awesome coffee machine it is really good in performance and price as compared to the rest in coffee machines and making coffee which tastes great.',
      author: 'Maria Theresa',
      image: '/images/test2.png'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      date: { day: '29', month: '11' },
      title: 'Bean to Brew: The Process of Producing the Coffee',
      image: '/images/blog1.jpg'
    },
    {
      id: 2,
      date: { day: '14', month: '11' },
      title: 'The Vision of Love & Coffee',
      image: '/images/blog2.jpg'
    },
    {
      id: 3,
      date: { day: '12', month: '11' },
      title: 'Eco Friendly Coffee Packaging',
      image: '/images/blog3.jpg'
    },
    {
      id: 4,
      date: { day: '04', month: '11' },
      title: 'Health Benefits of Filter Coffee: Myth or Reality?',
      image: '/images/blog4.jpg'
    }
  ];
 return (
    <div className="homepage-container">
      {/* Single Banner Section */}
      <div className="single-banner-wrapper">
        <div className="single-banner-container">
          <img
            src="/images/banner2.jpg"
            alt="Coffee banner"
            className="single-banner-image"
          />
        </div>
      </div>

      {/* Products Section */}
      <section className="products-intro">
        <span className="section-label">LATEST PRODUCTS</span>
        <h2>OUR FINEST ARRAY OF COFFEE IS READY</h2>
        <p>
          Since we are with 30+ degree coffee making solutions, we've got something in store for everyone.
          Whether you're a coffee lover or you need coffee for a business purpose, we've got your back.
        </p>
      </section>

      {/* Coffee & Machines Grid */}
      <section className="product-showcase">
        <div className="product-card large-card">
          <img src="/images/p3.png" alt="Coffee" />
          <div className="card-overlay">
            <h3>COFFEE</h3>
            <p>
              Coffee products cover a whole universe of their own. You may want to do some independent 
              research of your own before you finalize which filter coffee products suit you and your 
              purposes best. Our products cover a whole range so that you can make the most out of your 
              coffee-buying experience.
            </p>
            <button className="view-products-btn">View Products</button>
          </div>
        </div>

        <div className="product-card large-card">
          <img src="/images/mach1.png" alt="Machines" />
          <div className="card-overlay">
            <h3>MACHINES</h3>
            <p>
              Filter Coffee Machine in India are great at giving you a cup of instant coffee, 
              especially since they require less maneuvering with little time involved in the making 
              of the filter coffee making machine. It's easy and fast. It works well for those who 
              have hectic schedules and need something quick to speed up the day.
            </p>
            <button className="view-products-btn">View Products</button>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="business-solutions">
        <span className="section-label">BUSINESS</span>
        <h2>WE HAVE COFFEE SOLUTIONS FOR YOU</h2>
        <p className="section-description">
          If you run a business, we have solutions to keep the momentum going for you with coffee. 
          Delivering both to corporate clients and end-use consumers, we have a multitude of coffee 
          solutions on offer.
        </p>
        <div className="solutions-grid">
          {businessSolutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              <div className="solution-image">
                <img src={solution.image} alt={solution.title} />
                <div className="solution-icon">{solution.icon}</div>
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coffee Machines Section */}
      <section className="machines-showcase">
        <h2>OUR COFFEE MACHINES</h2>
        <div className="machines-carousel">
          <button className="carousel-arrow left">‹</button>
          <div className="machines-grid-home">
            {coffeeMachines.map((machine) => (
              <div key={machine.id} className="machine-card-home">
                <img src={machine.image} alt={machine.name} />
                <h3>{machine.name}</h3>
              </div>
            ))}
          </div>
          <button className="carousel-arrow right">›</button>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="bestsellers-section">
        <h2>OUR BESTSELLERS COFFEES</h2>
        <div className="bestsellers-carousel">
          <button className="carousel-arrow left">‹</button>
          <div className="bestsellers-grid">
            {bestsellerCoffees.map((coffee) => (
              <div key={coffee.id} className="bestseller-card">
                <img src={coffee.image} alt={coffee.name} />
                <h3>{coffee.name}</h3>
              </div>
            ))}
          </div>
          <button className="carousel-arrow right">›</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <span className="section-label red">YOUR WORDS</span>
        <h2>WHAT OUR CLIENTS & CUSTOMERS HAVE TO SAY</h2>
        <p className="section-description">
          We value the honest opinion of our valued clients and customers. Every bit of insight from 
          them is a gem that helps us get stronger each day. We hope we can make things better for you always.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.author} />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <span className="section-label">OUR WRITING SPACE</span>
        <h2>A ZONE WHERE YOU CAN FIND OUT MORE ABOUT EVERYTHING COFFEE</h2>
        <p className="section-description">
          There are so many things going on in the world related to coffee. It's almost like a global 
          phenomenon. Out here, we share our thoughts and ideas on just that so that you can grow a little 
          with us too.
        </p>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-date">
                  <span className="day">{post.date.day}</span>
                  <span className="month">{post.date.month}</span>
                </div>
              </div>
              <h3>{post.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section-home">
        <span className="section-label">TRUE DELIGHT IN EVERY SIP</span>
        <h2>THE COFFEE SPEAKS FOR ITSELF</h2>
        <p className="section-description">
          As a part of the Culture that surrounds us, we could like to bring integrity to abode around 
          the world and facilitate social bonding and community amongst our global denizens.
        </p>
        
        <div className="contact-form-section">
          <div className="contact-icon"></div>
          <h3>Get in Touch</h3>
          <div className="home-contact-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
            <button onClick={handleSubmit} className="submit-contact-btn">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}