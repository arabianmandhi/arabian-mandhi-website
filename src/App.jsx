import { useEffect, useState } from "react";
import "./App.css";

import mandhiPlatter from "./assets/mandhi_1_full_platter.png";
import lambMandhi from "./assets/mandhi_2_lamb.png";
import chickenMandhi from "./assets/mandhi_3_chicken.png";
import chickenEggs from "./assets/mandhi_4_chicken_eggs.png";


const slides = [
  {
    title: "Mutton Mandhi",
    subtitle: "Tender meat · Fragrant rice · Authentic flavour",
    image: lambMandhi,
  },
  {
    title: "Chicken Mandhi",
    subtitle: "Aromatic rice · Juicy chicken · Arabian tradition",
    image: chickenMandhi,
  },
  {
    title: "Kapsa",
    subtitle: "Rich spices · Fragrant rice · Made with care",
    image: mandhiPlatter,
  },
  {
    title: "Biryani",
    subtitle: "Traditional South Indian flavours · Made for sharing",
    image: chickenEggs,
  },
];

const specialities = [
  {
    number: "01",
    name: "Mandhi",
    description:
      "Authentic Arabian-style rice served with tender, flavourful meat.",
    className: "food-one",
  },
  {
    number: "02",
    name: "Kapsa",
    description:
      "Aromatic rice layered with rich spices and delicious flavours.",
    className: "food-two",
  },
  {
    number: "03",
    name: "Biryani",
    description:
      "Traditional biryani prepared for families, parties and celebrations.",
    className: "food-three",
  },
];

function App() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "menu",
        "catering",
        "gallery",
        "reviews",
        "contact",
      ];

      let current = "home";

      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (element) {
          const top = element.getBoundingClientRect().top;

          if (top <= 160) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setSlide(
      (current) =>
        (current - 1 + slides.length) % slides.length
    );
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="website">

      {/* ================= HEADER ================= */}

      <header
        className={`header ${
          scrolled ? "header-scrolled" : ""
        }`}
      >

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >

          <span className="logo-symbol">
            ✦
          </span>

          <div className="logo-text">

            <span className="arabic-brand">
              العربية مندي
            </span>

            <strong>
              ARABIAN MANDHI
            </strong>

            <small>
              CATERING SERVICES · MADURAI
            </small>

          </div>

        </a>


        <nav
          className={
            menuOpen
              ? "navigation show"
              : "navigation"
          }
        >

          <a
            href="#menu"
            className={
              activeSection === "menu"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Menu
          </a>

          <a
            href="#catering"
            className={
              activeSection === "catering"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Catering
          </a>

          <a
            href="#gallery"
            className={
              activeSection === "gallery"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Gallery
          </a>

          <a
            href="#reviews"
            className={
              activeSection === "reviews"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Reviews
          </a>

          <a
            href="#contact"
            className={
              activeSection === "contact"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Contact
          </a>

        </nav>


        <a
          href="https://wa.me/918778395065"
          target="_blank"
          rel="noreferrer"
          className="order-button"
        >
          Order Now →
        </a>


        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </header>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div
          className="hero-track"
          style={{
            transform:
              `translateX(-${slide * 100}%)`,
          }}
        >

          {slides.map((item, index) => (

            <div
              className={`hero-slide hero-photo-${index + 1}`}
              key={item.title}
            >

              <div className="hero-photo">
  <img
    src={item.image}
    alt={item.title}
  />
</div>

              <div className="hero-gradient"></div>


              <div className="hero-content">

                <div className="hero-arabic">
                  نكهة أصيلة
                </div>

                <div className="hero-kicker">
                  AUTHENTIC ARABIAN FLAVOURS
                </div>

                <h1>
                  Arabian
                  <br />
                  <em>Mandhi</em>
                </h1>

                <p className="hero-subtitle">
                  {item.subtitle}
                </p>


                <div className="hero-buttons">

                  <a
                    href="#menu"
                    className="primary-button"
                  >
                    Explore Menu
                    <span>→</span>
                  </a>

                  <a
                    href="https://wa.me/918778395065"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    WhatsApp Order
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>


        <div className="slider-controls">

          <button onClick={previousSlide}>
            ←
          </button>

          <div className="slider-dots">

            {slides.map((item, index) => (

              <button
                key={item.title}
                className={
                  slide === index
                    ? "dot active"
                    : "dot"
                }
                onClick={() => setSlide(index)}
              />

            ))}

          </div>

          <button onClick={nextSlide}>
            →
          </button>

        </div>


        <div className="hero-bottom">

          <span>PRE-BOOKING</span>

          <i></i>

          <span>PARTY ORDERS</span>

          <i></i>

          <span>TAKEAWAY</span>

          <i></i>

          <span>HOME DELIVERY</span>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="intro">

        <span className="label">
          THE ARABIAN EXPERIENCE
        </span>

        <h2>
          Made to be
          <br />
          <em>shared.</em>
        </h2>

        <p>
          Authentic Arabian flavours prepared with care
          for families, celebrations and special moments
          in Madurai.
        </p>

      </section>


      {/* ================= MENU ================= */}

      <section id="menu" className="menu">

        <div className="section-heading">

          <div>

            <span className="label">
              FROM OUR KITCHEN
            </span>

            <h2>
              Our <em>specialities</em>
            </h2>

          </div>

          <a href="#contact">
            Enquire for an order →
          </a>

        </div>


        <div className="menu-grid">

          {specialities.map((item) => (

            <article
              className="menu-card"
              key={item.name}
            >

              <div
                className={`menu-photo ${item.className}`}
              >

                <span>
                  FOOD PHOTO
                </span>

              </div>

              <div className="menu-info">

                <span className="menu-number">
                  {item.number}
                </span>

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= CATERING ================= */}

      <section id="catering" className="catering">

        <div className="catering-content">

          <span className="label">
            MADE FOR YOUR OCCASION
          </span>

          <h2>
            Your people.
            <br />
            Your occasion.
            <br />
            <em>Our food.</em>
          </h2>

          <p>
            From family gatherings to special events,
            we prepare food that brings everyone
            together.
          </p>

          <a
            href="https://wa.me/918778395065"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Enquire About Catering →
          </a>

        </div>


        <div className="occasion-list">

          <div>
            <span>01</span>
            <strong>Family Orders</strong>
          </div>

          <div>
            <span>02</span>
            <strong>Party Orders</strong>
          </div>

          <div>
            <span>03</span>
            <strong>Special Events</strong>
          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section className="services">

        <span className="label">
          HOW WE SERVE
        </span>

        <h2>
          Simple.
          <br />
          <em>Convenient.</em>
        </h2>


        <div className="services-grid">

          <div>
            <span>01</span>

            <h3>
              Pre-booking
            </h3>

            <p>
              Plan your order ahead of time.
            </p>
          </div>


          <div>
            <span>02</span>

            <h3>
              Party Orders
            </h3>

            <p>
              Food prepared for your gatherings.
            </p>
          </div>


          <div>
            <span>03</span>

            <h3>
              Takeaway
            </h3>

            <p>
              Order ahead and collect conveniently.
            </p>
          </div>


          <div>
            <span>04</span>

            <h3>
              Home Delivery
            </h3>

            <p>
              Enjoy your food at home.
            </p>
          </div>

        </div>

      </section>


      {/* ================= GALLERY ================= */}

      <section id="gallery" className="gallery">

        <div className="section-heading">

          <div>

            <span className="label">
              FOOD & MOMENTS
            </span>

            <h2>
              See the
              <br />
              <em>flavour.</em>
            </h2>

          </div>


          <div className="gallery-controls">

            <button>
              ←
            </button>

            <button>
              →
            </button>

          </div>

        </div>


        <div className="gallery-placeholder">

          <span>
            YOUR FOOD GALLERY WILL GO HERE
          </span>

          <h3>
            Beautiful food.
            <br />
            <em>Beautiful moments.</em>
          </h3>

        </div>

      </section>


      {/* ================= REVIEWS ================= */}

      <section id="reviews" className="reviews">

        <div>

          <span className="label">
            CUSTOMER LOVE
          </span>

          <h2>
            Rated with
            <br />
            <em>love.</em>
          </h2>

        </div>


        <div className="review-box">

          <strong>
            4.8
          </strong>

          <div className="stars">
            ★★★★★
          </div>

          <p>
            Customer rating
          </p>

          <a
  href="https://share.google/TJPZJjOxk1aPx3ErY"
  target="_blank"
  rel="noreferrer"
>
  View reviews on Google →
</a>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="location">

        <div className="location-content">

          <span className="label">
            FIND US
          </span>

          <h2>
            Come by.
            <br />
            <em>Order ahead.</em>
          </h2>


          <div className="contact-row">

            <span>
              ⌖
            </span>

            <div>

              <strong>
                Address
              </strong>

              <p>
                101, Pandian Street,
                <br />
                Thiyagi Balu, Kattaboman Nagar,
                <br />
                Sellur, Madurai - 625014
              </p>

            </div>

          </div>


          <div className="contact-row">

            <span>
              ☎
            </span>

            <div>

              <strong>
                Call / WhatsApp
              </strong>

              <p>
                +91 87783 95065
              </p>

            </div>

          </div>


          <div className="contact-buttons">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Arabian+Mandhi+Catering+Services+101+Pandian+Street+Madurai"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Get Directions →
            </a>

            <a
              href="tel:+918778395065"
              className="outline-button"
            >
              Call Now
            </a>

          </div>

        </div>


        <div className="map-placeholder">

          <span>
            ⌖
          </span>

          <strong>
            Madurai
          </strong>

          <small>
            101, Pandian Street · Sellur
          </small>

        </div>

      </section>


      {/* ================= SOCIAL ================= */}

      <section className="social">

        <div>

          <span className="label">
            FOLLOW THE FLAVOUR
          </span>

          <h2>
            We're on
            <br />
            <em>social.</em>
          </h2>

          <p>
            Follow us for food, updates and special offers.
          </p>

        </div>


        <div className="social-links">


          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/arabianmandhi_catering_service/"
            target="_blank"
            rel="noreferrer"
          >

            <span className="social-icon instagram-icon">
              ◎
            </span>

            <div>

              <strong>
                Instagram
              </strong>

              <small>
                @arabianmandhi_catering_service
              </small>

            </div>

            <b>
              →
            </b>

          </a>


          {/* FACEBOOK */}

          <a
            href="https://www.facebook.com/ArabianMandhiMadurai/"
            target="_blank"
            rel="noreferrer"
          >

            <span className="social-icon facebook-icon">
              f
            </span>

            <div>

              <strong>
                Facebook
              </strong>

              <small>
                Arabian Mandhi Madurai
              </small>

            </div>

            <b>
              →
            </b>

          </a>


          {/* X */}

          <a
            href="https://x.com/arabianmandhi"
            target="_blank"
            rel="noreferrer"
          >

            <span className="social-icon x-icon">
              𝕏
            </span>

            <div>

              <strong>
                X
              </strong>

              <small>
                @arabianmandhi
              </small>

            </div>

            <b>
              →
            </b>

          </a>


        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-logo">

          <strong>
            ARABIAN MANDHI
          </strong>

          <small>
            CATERING SERVICES · MADURAI
          </small>

        </div>


        <div className="footer-links">

          <a href="#menu">
            Menu
          </a>

          <a href="#catering">
            Catering
          </a>

          <a href="#gallery">
            Gallery
          </a>

          <a href="#reviews">
            Reviews
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <div className="copyright">
          © 2026 Arabian Mandhi Catering Services · Madurai
        </div>

      </footer>


      {/* ================= MOBILE BAR ================= */}

      <div className="mobile-actions">

        <a href="tel:+918778395065">
          ☎
          <span>
            Call
          </span>
        </a>

        <a
          href="https://wa.me/918778395065"
          target="_blank"
          rel="noreferrer"
        >
          ●
          <span>
            WhatsApp
          </span>
        </a>

        <a href="#menu">
          ≡
          <span>
            Menu
          </span>
        </a>

      </div>

    </div>
  );
}

export default App;