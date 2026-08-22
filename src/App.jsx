import { useEffect, useState } from "react";
import "./App.css";

import mandhiPlatter from "./assets/mandhi_1_full_platter.png";
import lambMandhi from "./assets/mandhi_2_lamb.png";
import chickenMandhi from "./assets/mandhi_3_chicken.png";
import chickenEggs from "./assets/mandhi_4_chicken_eggs.png";

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
      "Aromatic rice · Juicy chicken · Traditional Arabian mandhi",
    image: chickenMandhi,
  },
  {
    title: "Kapsa",
    subtitle:
      "Rich spices · Fragrant rice · Delicious Arabian-style flavours",
    image: mandhiPlatter,
  },
  {
    title: "Biryani",
    subtitle:
      "Traditional flavours · Freshly prepared · Perfect for sharing",
    image: chickenEggs,
  },
];

/* ================= FULL MENU ================= */

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
    name: "Kapsa",
    dishes: [
      "Mutton Kapsa (Laham)",
      "Chicken Kapsa (Dajaj)",
      "Mixed Kapsa",
    ],
  },
  {
    number: "03",
    name: "Briyani",
    dishes: [
      "Mutton Briyani",
      "Chicken Briyani",
      "Hyderabad Briyani",
      "Ghee Rice",
    ],
  },
  {
    number: "04",
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
      (current) => (current - 1 + slides.length) % slides.length
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
          aria-label="Arabian Mandhi Catering Services Madurai home"
        >
          <span className="logo-symbol">✦</span>

          <div className="logo-text">
            <span className="arabic-brand">
              العربية مندي
            </span>

            <strong>ARABIAN MANDHI</strong>

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
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="order-button"
          aria-label="Order Arabian Mandhi on WhatsApp"
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

      {/* ================= HERO ================= */}

      <main>

        <section
          id="home"
          className="hero"
          aria-label="Arabian Mandhi Catering Services in Madurai"
        >
          <div
            className="hero-track"
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
          >
            {slides.map((item, index) => (
              <article
                className={`hero-slide hero-photo-${index + 1}`}
                key={item.title}
              >
                <div className="hero-photo">
                  <img
                    src={item.image}
                    alt={`${item.title} at Arabian Mandhi Catering Services in Madurai`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                <div className="hero-gradient"></div>

                <div className="hero-content">

                  <div className="hero-arabic">
                    نكهة أصيلة
                  </div>

                  <div className="hero-kicker">
                    AUTHENTIC ARABIAN FLAVOURS IN MADURAI
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
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-button"
                      aria-label="Order Arabian Mandhi through WhatsApp"
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
                  aria-label={`Show ${item.title}`}
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
            AUTHENTIC ARABIAN FOOD IN MADURAI
          </span>

          <h2>
            Made to be
            <br />
            <em>shared.</em>
          </h2>

          <p>
            Arabian Mandhi Catering Services brings
            authentic Arabian flavours to Madurai.
            Enjoy delicious mandhi, kapsa and biryani
            prepared with care for families,
            celebrations, parties and special occasions.
          </p>

        </section>

        {/* ================= MENU ================= */}

        <section
          id="menu"
          className="menu"
          aria-labelledby="menu-title"
        >
          <div className="section-heading">

            <div>

              <span className="label">
                FROM OUR KITCHEN
              </span>

              <h2 id="menu-title">
                Our <em>menu</em>
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

        {/* ================= CATERING ================= */}

        <section
          id="catering"
          className="catering"
          aria-labelledby="catering-title"
        >

          <div className="catering-content">

            <span className="label">
              MADURAI CATERING SERVICES
            </span>

            <h2 id="catering-title">
              Your people.
              <br />
              Your occasion.
              <br />
              <em>Our food.</em>
            </h2>

            <p>
              Planning a family gathering, birthday,
              celebration or special event in Madurai?
              Our Arabian mandhi catering is prepared
              for sharing, with generous portions and
              authentic flavours.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
              aria-label="Enquire about Arabian Mandhi catering"
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
            HOW WE SERVE MADURAI
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
                Plan your Arabian mandhi order
                ahead of time.
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>
                Party Orders
              </h3>

              <p>
                Fresh food prepared for family
                gatherings and parties.
              </p>
            </div>

            <div>
              <span>03</span>

              <h3>
                Takeaway
              </h3>

              <p>
                Order ahead and collect your food
                conveniently.
              </p>
            </div>

            <div>
              <span>04</span>

              <h3>
                Home Delivery
              </h3>

              <p>
                Enjoy authentic Arabian food
                from the comfort of your home.
              </p>
            </div>

          </div>

        </section>

        {/* ================= GALLERY / BEST DISHES ================= */}

<section
  id="gallery"
  className="gallery"
  aria-labelledby="gallery-title"
>
  <div className="section-heading">

    <div>
      <span className="label">
        FOOD & FLAVOURS IN MADURAI
      </span>

      <h2 id="gallery-title">
        Our best
        <br />
        <em>dishes.</em>
      </h2>

      <p className="gallery-intro">
        From the best mandhi in Madurai to tasty biryani,
        explore some of our signature Arabian dishes,
        freshly prepared for you.
      </p>
    </div>

    <div className="gallery-controls">
      <button
        aria-label="Previous dish"
        type="button"
      >
        ←
      </button>

      <button
        aria-label="Next dish"
        type="button"
      >
        →
      </button>
    </div>

  </div>


  {/* ================= FEATURED DISHES ================= */}

  <div className="dish-gallery">

    {/* MUTTON MANDHI */}

    <article className="dish-gallery-card">

      <div className="dish-gallery-image">
        <span>
          FOOD IMAGE
        </span>
      </div>

      <div className="dish-gallery-info">

        <span className="dish-gallery-number">
          01 · SIGNATURE
        </span>

        <h3>
          Mutton Mandhi
        </h3>

        <p>
          Authentic Arabian mandhi with tender mutton
          and fragrant rice — a favourite for mandhi
          lovers in Madurai.
        </p>

      </div>

    </article>


    {/* CHICKEN MANDHI */}

    <article className="dish-gallery-card">

      <div className="dish-gallery-image dish-gallery-image-2">
        <span>
          FOOD IMAGE
        </span>
      </div>

      <div className="dish-gallery-info">

        <span className="dish-gallery-number">
          02 · SIGNATURE
        </span>

        <h3>
          Chicken Mandhi
        </h3>

        <p>
          Juicy chicken served with aromatic Arabian
          mandhi rice, prepared fresh in Madurai.
        </p>

      </div>

    </article>


    {/* MUTTON BIRYANI */}

    <article className="dish-gallery-card">

      <div className="dish-gallery-image dish-gallery-image-3">
        <span>
          FOOD IMAGE
        </span>
      </div>

      <div className="dish-gallery-info">

        <span className="dish-gallery-number">
          03 · FAVOURITE
        </span>

        <h3>
          Mutton Biryani
        </h3>

        <p>
          Rich and flavourful mutton biryani made
          with aromatic spices and tender mutton.
        </p>

      </div>

    </article>


    {/* CHICKEN BIRYANI */}

    <article className="dish-gallery-card">

      <div className="dish-gallery-image dish-gallery-image-4">
        <span>
          FOOD IMAGE
        </span>
      </div>

      <div className="dish-gallery-info">

        <span className="dish-gallery-number">
          04 · FAVOURITE
        </span>

        <h3>
          Chicken Biryani
        </h3>

        <p>
          Tasty chicken biryani prepared with fragrant
          rice and delicious traditional spices.
        </p>

      </div>

    </article>

  </div>


  {/* ================= VIEW ALL ================= */}

  <div className="gallery-bottom">

    <button
      type="button"
      className="view-all-dishes"
    >
      View All Dishes
      <span>→</span>
    </button>

  </div>


  {/* ================= ORDER CTA ================= */}

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
      Enjoy authentic Arabian mandhi and tasty
      biryani in Madurai.
    </p>

    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="primary-button"
      aria-label="Order Arabian Mandhi on WhatsApp"
    >
      WhatsApp Order
      <span>→</span>
    </a>

  </div>

</section>

        {/* ================= REVIEWS ================= */}

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
              Good food is meant to be shared —
              and so are good experiences.
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

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="location"
          aria-labelledby="contact-title"
        >

          <div className="location-content">

            <span className="label">
              FIND ARABIAN MANDHI IN MADURAI
            </span>

            <h2 id="contact-title">
              Come by.
              <br />
              <em>Order ahead.</em>
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
                  Thiyagi Balu, Kattaboman Nagar,
                  <br />
                  Sellur, Madurai - 625014
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
                  +91 87783 95065
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
                Get Directions →
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="outline-button"
              >
                Call Now
              </a>

            </div>

          </div>

          <div
            className="map-placeholder"
            aria-label="Arabian Mandhi location in Sellur, Madurai"
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
              Follow Arabian Mandhi for food,
              updates and special offers in Madurai.
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

        <div className="copyright">
          © 2026 Arabian Mandhi Catering Services ·
          Madurai
        </div>

      </footer>

      {/* ================= MOBILE BAR ================= */}

      <div className="mobile-actions">

        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call Arabian Mandhi"
        >
          ☎
          <span>
            Call
          </span>
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Arabian Mandhi"
        >
          ●
          <span>
            WhatsApp
          </span>
        </a>

        <a
          href="#menu"
          aria-label="View Arabian Mandhi menu"
        >
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