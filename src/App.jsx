import { useEffect, useState } from "react";
import "./App.css";

import mandhiPlatter from "./assets/mandhi_1_full_platter.png";
import lambMandhi from "./assets/mandhi_2_lamb.png";
import chickenMandhi from "./assets/mandhi_3_chicken.png";
import chickenEggs from "./assets/mandhi_4_chicken_eggs.png";
import arabianMandhiLogo from "./assets/arabian-mandhi-logo.png";

import bestMuttonMandhi from "./assets/best-mutton-mandhi-madurai.png";
import bestChickenMandhi from "./assets/best-chicken-mandhi-madurai.png";
import bestMuttonBiryani from "./assets/best-mutton-biryani-madurai.png";
import bestChickenBiryani from "./assets/best-chicken-biryani-madurai.png";

const WHATSAPP_NUMBER = "918778395065";
const PHONE_NUMBER = "+918778395065";

const slides = [
  {
    title: "Mutton Mandhi",
    subtitle:
      "Tender mutton · Fragrant rice · Authentic Arabian flavour in Madurai",
    image: lambMandhi,
  },
  {
    title: "Chicken Mandhi",
    subtitle:
      "Aromatic rice · Juicy chicken · Traditional Arabian mandhi in Madurai",
    image: chickenMandhi,
  },
  {
    title: "Kapsa",
    subtitle:
      "Rich spices · Fragrant rice · Delicious Arabian-style flavours in Madurai",
    image: mandhiPlatter,
  },
  {
    title: "Biryani",
    subtitle:
      "Traditional flavours · Freshly prepared · Delicious biryani in Madurai",
    image: chickenEggs,
  },
];

/* =========================================================
   MENU
========================================================= */

const specialities = [
  {
    number: "01",
    name: "Mandhi",
    dishes: [
      "Mutton Mandhi (Laham)",
      "Chicken Mandhi (Dajaj)",
      "Mixed Mandhi",
    ],
  },
  {
    number: "02",
    name: "Biryani",
    dishes: [
      "Mutton Biryani",
      "Chicken Biryani",
      "Hyderabad Biryani",
      "Ghee Rice",
    ],
  },
  {
    number: "03",
    name: "Kapsa",
    dishes: [
      "Mutton Kapsa (Laham)",
      "Chicken Kapsa (Dajaj)",
      "Mixed Kapsa",
    ],
  },
  {
    number: "04",
    name: "Bucket Mandhi",
    dishes: [
      "Bucket Mandhi - 5 Persons",
      "Bucket Mandhi - 10 Persons",
      "Bucket Mandhi - 15 Persons",
      "Bucket Mandhi - 20 Persons",
    ],
  },
  {
    number: "05",
    name: "Sides",
    dishes: [
      "Chicken 65 / Gravy",
      "Pepper Chicken",
      "Grill Chicken",
      "Mutton Gravy / Chukka",
      "Beshawar Mutton Gravy",
      "Prawns Fry / Gravy",
      "Fish Fry",
    ],
  },
];

/* =========================================================
   REVIEWS
========================================================= */

const reviews = [
  {
    initial: "P",
    name: "Priya S.",
    text:
      "Absolutely delicious mandhi! The rice was full of flavour and the chicken was perfectly cooked. Everyone loved it.",
  },
  {
    initial: "A",
    name: "Arun K.",
    text:
      "Amazing taste and generous portions. The food was fresh, flavourful and perfect for our family gathering.",
  },
  {
    initial: "S",
    name: "Sathya R.",
    text:
      "Loved the authentic Arabian flavours. The mandhi was delicious and the service was wonderful. Definitely ordering again!",
  },
  {
    initial: "M",
    name: "Mohammed A.",
    text:
      "Excellent food and great service. The mandhi was delicious and the portion size was really good. Highly recommended!",
  },
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* =======================================================
     SCROLL / ACTIVE NAVIGATION
  ======================================================= */

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

  /* =======================================================
     HERO AUTO SLIDER
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => {
        return (current + 1) % slides.length;
      });
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  /* =======================================================
     SLIDER CONTROLS
  ======================================================= */

  const nextSlide = () => {
    setSlide((current) => {
      return (current + 1) % slides.length;
    });
  };

  const previousSlide = () => {
    setSlide((current) => {
      return (current - 1 + slides.length) % slides.length;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="website">

      {/* ===================================================
          HEADER
      =================================================== */}

      <header
        className={
          scrolled
            ? "header header-scrolled"
            : "header"
        }
      >
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
          aria-label="Arabian Mandhi Catering Services in Madurai home"
        >
          <img
            src={arabianMandhiLogo}
            alt="Arabian Mandhi Catering Services in Madurai"
            className="logo-image"
          />
        </a>

        <nav
          className={
            menuOpen
              ? "navigation show"
              : "navigation"
          }
          aria-label="Main navigation"
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
          href={"https://wa.me/" + WHATSAPP_NUMBER}
          target="_blank"
          rel="noopener noreferrer"
          className="order-button"
          aria-label="Order Arabian Mandhi in Madurai on WhatsApp"
        >
          Order Now →
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </header>

      {/* ===================================================
          MAIN
      =================================================== */}

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          id="home"
          className="hero"
          aria-label="Mandhi, biryani and Arabian food in Madurai"
        >
          <div
            className="hero-track"
            style={{
              transform:
                "translateX(-" + slide * 100 + "%)",
            }}
          >
            {slides.map((item, index) => (
              <article
                className={
                  "hero-slide hero-photo-" + (index + 1)
                }
                key={item.title}
              >
                <div className="hero-photo">
                  <img
                    src={item.image}
                    alt={
                      item.title +
                      " in Madurai at Arabian Mandhi Catering Services"
                    }
                    loading={
                      index === 0
                        ? "eager"
                        : "lazy"
                    }
                  />
                </div>

                <div className="hero-gradient"></div>

                <div className="hero-content">

                  <div className="hero-halal">
                    HALAL
                  </div>

                  <div className="hero-arabic">
                    نكهة أصيلة
                  </div>

                  <div className="hero-kicker">
                    AUTHENTIC ARABIAN FOOD IN MADURAI
                  </div>

                  <h1>
                    Arabian
                    <br />
                    <em>Mandhi in Madurai</em>
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
                      href={"https://wa.me/" + WHATSAPP_NUMBER}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-button"
                      aria-label="Order Arabian food in Madurai through WhatsApp"
                    >
                      WhatsApp Order
                    </a>

                  </div>

                </div>
              </article>
            ))}
          </div>

          <div className="slider-controls">

            <button
              onClick={previousSlide}
              aria-label="Previous food image"
            >
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
                  aria-label={"Show " + item.title}
                  aria-current={
                    slide === index
                      ? "true"
                      : undefined
                  }
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next food image"
            >
              →
            </button>

          </div>

          <div className="hero-bottom">
            <span>1-DAY PRE-BOOKING</span>
            <i></i>
            <span>PARTY ORDERS</span>
            <i></i>
            <span>TAKEAWAY</span>
            <i></i>
            <span>HOME DELIVERY</span>
          </div>
        </section>

        {/* =================================================
            INTRO
        ================================================= */}

        <section className="intro">

          <span className="label">
            AUTHENTIC ARABIAN FOOD IN MADURAI
          </span>

          <h2>
            Made to be
            <br />
            <em>shared.</em>
          </h2>

          <p>
            Arabian Mandhi Catering Services brings authentic
            Arabian food to Madurai, specialising in chicken
            mandhi, mutton mandhi, kapsa, biryani and popular
            bucket food options for families and groups.
            Our bucket mandhi, bucket biryani and bucket
            chicken options are ideal for family meals,
            parties, celebrations and catering orders.
            Food is prepared fresh and orders require
            pre-booking at least one day ahead.
          </p>

        </section>

        {/* =================================================
            MENU
        ================================================= */}

        <section
          id="menu"
          className="menu"
          aria-labelledby="menu-title"
        >

          <div className="section-heading">

            <div>

              <span className="label">
                MANDHI & BIRYANI IN MADURAI
              </span>

              <h2 id="menu-title">
                Madurai{" "}
                <em>Mandhi & Biryani Menu</em>
              </h2>

            </div>

            <a href="#contact">
              Enquire for an order →
            </a>

          </div>

          <div className="menu-list">

            {specialities.map((category) => (
              <article
                className="menu-category"
                key={category.name}
              >

                <div className="menu-category-header">

                  <span className="menu-number">
                    {category.number}
                  </span>

                  <h3>
                    {category.name}
                  </h3>

                </div>

                <div className="dish-list">

                  {category.dishes.map((dish) => (
                    <div
                      className="dish-card"
                      key={dish}
                    >

                      <span className="dish-dot"></span>

                      <span className="dish-name">
                        {dish}
                      </span>

                      <span className="dish-arrow">
                        →
                      </span>

                    </div>
                  ))}

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* =================================================
            CATERING
        ================================================= */}

        <section
          id="catering"
          className="catering"
          aria-labelledby="catering-title"
        >

          <div className="catering-content">

            <span className="label">
              MANDHI & BUCKET CATERING IN MADURAI
            </span>

            <h2 id="catering-title">
              Your people.
              <br />
              Your occasion.
              <br />
              <em>Our food.</em>
            </h2>

            <p>
              Looking for mandhi catering in Madurai for a
              family gathering, birthday, celebration or
              special event? We prepare chicken mandhi,
              mutton mandhi, kapsa, biryani and generous
              bucket options for groups. Our bucket mandhi,
              bucket biryani and bucket chicken options are
              convenient for sharing with family and guests.
              Please pre-book your order at least one day
              in advance for fresh preparation and delivery.
            </p>

            <a
              href={"https://wa.me/" + WHATSAPP_NUMBER}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
              aria-label="Enquire about mandhi and bucket catering in Madurai"
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

        {/* =================================================
            SERVICES
        ================================================= */}

        <section className="services">

          <span className="label">
            HOW WE SERVE MADURAI
          </span>

          <h2>
            Fresh food.
            <br />
            <em>Made to order.</em>
          </h2>

          <div className="services-grid">

            <div>
              <span>01</span>

              <h3>
                1-Day Pre-Booking
              </h3>

              <p>
                Please place your mandhi, biryani or bucket
                food order at least one day in advance so we
                can prepare your Arabian food fresh.
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>
                Party Catering
              </h3>

              <p>
                Mandhi, kapsa, biryani and bucket options
                prepared for family gatherings, parties and
                special occasions in Madurai.
              </p>
            </div>

            <div>
              <span>03</span>

              <h3>
                Takeaway
              </h3>

              <p>
                Pre-order your favourite Arabian food,
                including mandhi, biryani and bucket
                options, and collect it at the arranged time.
              </p>
            </div>

            <div>
              <span>04</span>

              <h3>
                Home Delivery
              </h3>

              <p>
                Enjoy freshly prepared mandhi, biryani,
                bucket mandhi and bucket chicken delivered
                for your pre-booked family and catering orders.
              </p>
            </div>

          </div>

        </section>

        {/* =================================================
            GALLERY
        ================================================= */}

        <section
          id="gallery"
          className="gallery"
          aria-labelledby="gallery-title"
        >

          <div className="section-heading">

            <div>

              <span className="label">
                MANDHI, BIRYANI & ARABIAN FOOD IN MADURAI
              </span>

              <h2 id="gallery-title">
                Our best
                <br />
                <em>dishes.</em>
              </h2>

              <p className="gallery-intro">
                Discover delicious chicken mandhi, mutton
                mandhi, biryani and Arabian food in Madurai.
                From individual favourites to bucket mandhi,
                bucket biryani and bucket chicken for groups,
                Arabian Mandhi Catering Services prepares
                fresh food for family meals, parties and
                special occasions.
              </p>

            </div>

          </div>

          <div className="dish-gallery">

            {/* MUTTON MANDHI */}

            <article className="dish-gallery-card">

              <div className="dish-gallery-image">

                <img
                  src={bestMuttonMandhi}
                  alt="Mutton Mandhi in Madurai at Arabian Mandhi Catering Services"
                  loading="lazy"
                />

              </div>

              <div className="dish-gallery-info">

                <span className="dish-gallery-number">
                  01 · SIGNATURE
                </span>

                <h3>
                  Mutton Mandhi in Madurai
                </h3>

                <p>
                  Tender mutton served with fragrant Arabian
                  mandhi rice — a signature choice for mandhi
                  lovers in Madurai. Available for pre-booked
                  family, party and catering orders.
                </p>

              </div>

            </article>

            {/* CHICKEN MANDHI */}

            <article className="dish-gallery-card">

              <div className="dish-gallery-image">

                <img
                  src={bestChickenMandhi}
                  alt="Chicken Mandhi in Madurai at Arabian Mandhi Catering Services"
                  loading="lazy"
                />

              </div>

              <div className="dish-gallery-info">

                <span className="dish-gallery-number">
                  02 · SIGNATURE
                </span>

                <h3>
                  Chicken Mandhi in Madurai
                </h3>

                <p>
                  Juicy chicken served with aromatic Arabian
                  mandhi rice, freshly prepared for families,
                  parties and food lovers in Madurai.
                </p>

              </div>

            </article>

            {/* MUTTON BIRYANI */}

            <article className="dish-gallery-card">

              <div className="dish-gallery-image">

                <img
                  src={bestMuttonBiryani}
                  alt="Mutton Biryani in Madurai at Arabian Mandhi Catering Services"
                  loading="lazy"
                />

              </div>

              <div className="dish-gallery-info">

                <span className="dish-gallery-number">
                  03 · FAVOURITE
                </span>

                <h3>
                  Mutton Biryani in Madurai
                </h3>

                <p>
                  Delicious mutton biryani made with aromatic
                  spices, fragrant rice and tender mutton.
                  Perfect for family meals, parties and
                  special occasions in Madurai.
                </p>

              </div>

            </article>

            {/* CHICKEN BIRYANI */}

            <article className="dish-gallery-card">

              <div className="dish-gallery-image">

                <img
                  src={bestChickenBiryani}
                  alt="Chicken Biryani in Madurai at Arabian Mandhi Catering Services"
                  loading="lazy"
                />

              </div>

              <div className="dish-gallery-info">

                <span className="dish-gallery-number">
                  04 · FAVOURITE
                </span>

                <h3>
                  Chicken Biryani in Madurai
                </h3>

                <p>
                  Tasty chicken biryani prepared with fragrant
                  rice and traditional spices for a delicious
                  Madurai family meal or special occasion.
                </p>

              </div>

            </article>

          </div>

          <div className="gallery-bottom">

            <a
              href="#menu"
              className="view-all-dishes"
              aria-label="View the complete Arabian Mandhi menu in Madurai"
            >
              View All Dishes
              <span>→</span>
            </a>

          </div>

          <div className="gallery-order">

            <span className="gallery-order-label">
              HUNGRY ALREADY?
            </span>

            <h3>
              Order your favourite
              <br />
              <em>today.</em>
            </h3>

            <p>
              Enjoy delicious mandhi, biryani and bucket
              food in Madurai, freshly prepared for your
              pre-booked family, party or catering order.
            </p>

            <a
              href={"https://wa.me/" + WHATSAPP_NUMBER}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
              aria-label="Order mandhi, biryani and bucket food in Madurai on WhatsApp"
            >
              WhatsApp Order
              <span>→</span>
            </a>

          </div>

        </section>

        {/* =================================================
            REVIEWS
        ================================================= */}

        <section
          id="reviews"
          className="reviews"
          aria-labelledby="reviews-title"
        >

          <div className="reviews-heading">

            <span className="label">
              CUSTOMER REVIEWS
            </span>

            <h2 id="reviews-title">
              What our
              <br />
              <em>customers say.</em>
            </h2>

            <p className="reviews-intro">
              Good food is meant to be shared — and so are
              good experiences. Discover what customers say
              about our mandhi, biryani and Arabian food in
              Madurai.
            </p>

            <div className="reviews-rating">

              <strong>
                4.8
              </strong>

              <div>

                <div className="stars">
                  ★★★★★
                </div>

                <span>
                  Customer rating on Google
                </span>

              </div>

            </div>

          </div>

          <div className="reviews-content">

            {reviews.map((review) => (
              <article
                className="review-card"
                key={review.name}
              >

                <div className="review-card-top">

                  <div className="review-avatar">
                    {review.initial}
                  </div>

                  <div>

                    <strong>
                      {review.name}
                    </strong>

                    <span>
                      Google Review
                    </span>

                  </div>

                  <div className="review-google">
                    G
                  </div>

                </div>

                <div
                  className="review-stars"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>

                <p>
                  “{review.text}”
                </p>

              </article>
            ))}

            <div className="review-actions">

              <a
                href="https://share.google/YWEqUJgi0UmTC5CMS"
                target="_blank"
                rel="noopener noreferrer"
                className="write-review-button"
              >
                ✍ Write a Review on Google
              </a>

              <a
                href="https://share.google/YWEqUJgi0UmTC5CMS"
                target="_blank"
                rel="noopener noreferrer"
                className="view-reviews-button"
              >
                View All Reviews →
              </a>

            </div>

          </div>

        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="contact"
          className="location"
          aria-labelledby="contact-title"
        >

          <div className="location-content">

            <span className="label">
              FIND ARABIAN FOOD IN MADURAI
            </span>

            <h2 id="contact-title">
              Order ahead.
              <br />
              <em>Enjoy at home.</em>
            </h2>

            <div className="contact-row">

              <span aria-hidden="true">
                ⌖
              </span>

              <div>

                <strong>
                  Address
                </strong>

                <p>
                  101, Pandian Street,
                  <br />
                  Kattaboman Nagar, Opp Star Tution Center,
                  <br />
                  Sellur, Madurai - 625002
                </p>

              </div>

            </div>

            <div className="contact-row">

              <span aria-hidden="true">
                ☎
              </span>

              <div>

                <strong>
                  Call / WhatsApp
                </strong>

                <p>
                  +91 87783 95065, +91 94420 90704
                </p>

              </div>

            </div>

            <div className="contact-buttons">

              <a
                href="https://www.google.com/maps/search/?api=1&query=Arabian+Mandhi+Catering+Services+101+Pandian+Street+Madurai"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
              >
                View Location →
              </a>

              <a
                href={"tel:" + PHONE_NUMBER}
                className="outline-button"
              >
                Call Now
              </a>

            </div>

          </div>

          <div
            className="map-placeholder"
            aria-label="Arabian Mandhi Catering Services location in Sellur, Madurai"
          >

            <span aria-hidden="true">
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

        {/* =================================================
            SOCIAL
        ================================================= */}

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
              Follow Arabian Mandhi for food, mandhi,
              biryani, bucket specials, updates and
              special offers in Madurai.
            </p>

          </div>

          <div className="social-links">

            <a
              href="https://www.instagram.com/arabianmandhi_catering_service/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arabian Mandhi Catering Services on Instagram"
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

            <a
              href="https://www.facebook.com/ArabianMandhiMadurai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arabian Mandhi Madurai on Facebook"
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

            <a
              href="https://x.com/arabianmandhi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arabian Mandhi on X"
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

      </main>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="footer">

        <div className="copyright">
          © 2026 Arabian Mandhi Catering Services, Madurai ·
          Authentic Mandhi, Biryani & Arabian Food ·
          All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;

