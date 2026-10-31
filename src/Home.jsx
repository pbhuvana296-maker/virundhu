import React, { useEffect, useMemo, useState } from "react";
import "./style.css";

const slides = [
  {
    title: "Every Bite Tells a Story.",
    subtitle: "Authentic South Indian flavours, delivered fresh to your doorstep.",
    tag: "WELCOME TO VIRUNDHU",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "A Feast Full of Flavours.",
    subtitle: "Experience the richness of traditional Indian meals.",
    tag: "TRADITIONAL MEALS",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Biryani Worth Celebrating.",
    subtitle: "Aromatic rice, rich spices and unforgettable taste.",
    tag: "BIRYANI SPECIALS",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Crispy. Golden. Delicious.",
    subtitle: "Enjoy authentic South Indian dosa varieties.",
    tag: "DOSA SPECIALS",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Good Food. Happy Moments.",
    subtitle: "Make every meal a celebration with VIRUNDHU.",
    tag: "MADE WITH LOVE",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1800&q=90",
  },
];

const categories = [
  { name: "All", icon: "🍽️" },
  { name: "Meals", icon: "🍛" },
  { name: "Biryani", icon: "🍚" },
  { name: "Dosa", icon: "🥞" },
  { name: "Pizza", icon: "🍕" },
  { name: "Burger", icon: "🍔" },
  { name: "Parotta", icon: "🫓" },
  { name: "Desserts", icon: "🍰" },
  { name: "Drinks", icon: "🥤" },
];

const foods = [
  {
    id: 1,
    name: "Traditional South Indian Meals",
    category: "Meals",
    price: 120,
    rating: 4.8,
    reviews: 245,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=90",
    description: "Rice, sambar, rasam, poriyal and traditional sides.",
  },
  {
    id: 2,
    name: "Chicken Dum Biryani",
    category: "Biryani",
    price: 220,
    rating: 4.9,
    reviews: 382,
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=90",
    description: "Aromatic rice with delicious chicken and spices.",
  },
  {
    id: 3,
    name: "Idli",
    category: "Idli",
    price: 90,
    rating: 4.7,
    reviews: 156,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=90",
description: "Soft steamed idlis served with coconut chutney and sambar.",  },
  {
    id: 4,
    name: "Paneer Pizza",
    category: "Pizza",
    price: 199,
    rating: 4.6,
    reviews: 128,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=90",
    description: "Freshly baked pizza topped with paneer and cheese.",
  },
  {
    id: 5,
    name: "Classic Chicken Burger",
    category: "Burger",
    price: 149,
    rating: 4.7,
    reviews: 194,
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=90",
    description: "Juicy chicken patty with fresh vegetables.",
  },
  {
    id: 6,
    name: "Flaky Kerala Parotta",
    category: "Parotta",
    price: 60,
    rating: 4.5,
    reviews: 95,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=900&q=90",
    description: "Soft and flaky layered parotta.",
  },
  {
    id: 7,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 110,
    rating: 4.8,
    reviews: 110,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=90",
    description: "Rich chocolate brownie for sweet cravings.",
  },
  {
    id: 8,
    name: "Fresh Lime Juice",
    category: "Drinks",
    price: 50,
    rating: 4.5,
    reviews: 67,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=90",
    description: "Refreshing fresh lime drink.",
  },
  {
    id: 9,
    name: "Ghee Roast Dosa",
    category: "Dosa",
    price: 110,
    rating: 4.8,
    reviews: 178,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=90",
    description: "Crispy dosa roasted with aromatic ghee.",
  },
  {
    id: 10,
    name: "Mutton Biryani",
    category: "Biryani",
    price: 280,
    rating: 4.9,
    reviews: 215,
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=90",
    description: "Tender mutton cooked with fragrant spices.",
  },
  {
    id: 11,
    name: "Veg Burger",
    category: "Burger",
    price: 119,
    rating: 4.4,
    reviews: 84,
    type: "Veg",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=90",
    description: "Delicious vegetable patty with fresh lettuce.",
  },
  {
    id: 12,
    name: "Chicken Pizza",
    category: "Pizza",
    price: 249,
    rating: 4.8,
    reviews: 165,
    type: "Non-Veg",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=90",
    description: "Cheesy pizza with spicy chicken toppings.",
  },
];

const initialReviews = [
  {
    name: "Priya S.",
    place: "Madurai",
    rating: 5,
    comment: "Amazing food! The meals tasted just like homemade food.",
  },
  {
    name: "Arun Kumar",
    place: "Chennai",
    rating: 5,
    comment: "Loved the biryani. Great taste and good portion size!",
  },
  {
    name: "Kavya R.",
    place: "Coimbatore",
    rating: 4,
    comment: "The dosa was crispy and delicious. Will order again.",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [foodType, setFoodType] = useState("All");

  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const [toast, setToast] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [orderId, setOrderId] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [review, setReview] = useState({
    name: "",
    comment: "",
    rating: "5",
  });

  const [userReviews, setUserReviews] = useState(initialReviews);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      const matchesCategory =
        category === "All" || food.category === category;

      const matchesSearch =
        food.name.toLowerCase().includes(search.toLowerCase()) ||
        food.category.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        foodType === "All" || food.type === foodType;

      return matchesCategory && matchesSearch && matchesType;
    });
  }, [category, search, foodType]);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const delivery = subtotal === 0 ? 0 : subtotal >= 499 ? 0 : 30;
  const total = Math.max(0, subtotal + delivery - discount);

  const cartCount = cart.reduce(
    (count, item) => count + item.quantity,
    0
  );

  const addToCart = (food) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === food.id);

      if (existing) {
        return current.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...food, quantity: 1 }];
    });

    setToast(`${food.name} added to cart!`);
  };

  const changeQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
    setToast("Item removed from cart");
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const applyCoupon = () => {
    if (!subtotal) {
      setCouponMessage("Add food items before applying a coupon.");
      return;
    }

    const code = coupon.trim().toUpperCase();

    if (code === "VIRUNDHU10") {
      const amount = Math.round(subtotal * 0.1);
      setDiscount(amount);
      setCouponMessage(`Coupon applied! You saved ₹${amount}.`);
    } else if (code === "WELCOME50") {
      const amount = Math.min(50, subtotal);
      setDiscount(amount);
      setCouponMessage(`Coupon applied! You saved ₹${amount}.`);
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
    }
  };

  const placeOrder = (event) => {
    event.preventDefault();

    if (!cart.length) {
      setToast("Your cart is empty!");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(customer.phone)) {
      setToast("Enter a valid 10-digit mobile number.");
      return;
    }

    if (!customer.address.trim()) {
      setToast("Please enter your delivery address.");
      return;
    }

    setOrderId("VRD" + Date.now().toString().slice(-7));
    setCheckoutOpen(false);
    setCartOpen(false);
    setSuccessOpen(true);
    setCart([]);
    setCoupon("");
    setDiscount(0);
    setCouponMessage("");
  };

  const submitReview = (event) => {
    event.preventDefault();

    if (!review.name.trim() || !review.comment.trim()) {
      setToast("Please enter your name and review.");
      return;
    }

    setUserReviews((current) => [
      {
        name: review.name,
        place: "Customer",
        rating: Number(review.rating),
        comment: review.comment,
      },
      ...current,
    ]);

    setReview({ name: "", comment: "", rating: "5" });
    setToast("Thank you for your review!");
  };

  const smoothScrollTo = (targetId, duration = 1150) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + window.scrollY - 78;
    const distance = targetY - startY;
    const startTime = performance.now();

    const animateScroll = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollToMenu = () => smoothScrollTo("menu", 1050);
  const scrollDownOneSection = () => smoothScrollTo("about", 900);

  const closeAllPopups = () => {
    setCartOpen(false);
    setCheckoutOpen(false);
    setLoginOpen(false);
    setSuccessOpen(false);
  };
    return (
    <div className="virundhu">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          VIRUNDHU
          <small>FOOD & FLAVOURS</small>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#menu">Menu</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="nav-actions">
          <button className="nav-btn" onClick={() => setLoginOpen(true)}>
            👤 Login
          </button>
          <button className="cart-btn" onClick={() => setCartOpen(true)}>
            🛒 Cart <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </nav>

      {/* CAROUSEL */}
      <section
        className="hero"
        id="home"
        style={{ "--hero-image": `url("${slides[slide].image}")` }}
      >
        <button
          className="hero-arrow hero-prev"
          onClick={() => setSlide((slide - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <div className="hero-content" key={slide}>
          <span className="hero-tag">{slides[slide].tag}</span>
          <h1>{slides[slide].title}</h1>
          <p>{slides[slide].subtitle}</p>

          <div style={{ marginTop: 30 }}>
            <button className="primary-btn" onClick={scrollToMenu}>
              Explore Menu →
            </button>
            <button className="outline-btn" onClick={() => setCartOpen(true)}>
              View Cart
            </button>
          </div>
        </div>

        <button
          className="hero-arrow hero-next"
          onClick={() => setSlide((slide + 1) % slides.length)}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="hero-dots">
          {slides.map((item, index) => (
            <button
              key={item.tag}
              className={slide === index ? "active" : ""}
              onClick={() => setSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="hero-scroll-down"
          onClick={scrollDownOneSection}
          aria-label="Scroll to About section"
          title="Discover VIRUNDHU"
        >
          <span>↓</span>
        </button>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-photo reveal">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=90"
              alt="Warm and inviting restaurant dining space"
              loading="lazy"
            />
            <div className="about-photo-note">
              <strong>Freshly made. Lovingly served.</strong>
              <span>Authentic flavours, every day.</span>
            </div>
          </div>

          <div className="about-copy reveal">
            <span className="about-kicker">OUR STORY</span>
            <h2>A Little Taste of Tradition, A Lot of Love.</h2>
            <p>
              At VIRUNDHU, every dish celebrates the warmth of a traditional
              feast. From comforting South Indian meals to flavour-packed
              biryani, we bring fresh ingredients and homestyle goodness
              together in every order.
            </p>
            <p>
              Good food brings people together. That's the feeling we want
              every time you open a VIRUNDHU meal.
            </p>
            <button className="primary-btn" onClick={scrollToMenu}>
              Explore Our Menu →
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section" id="categories">
        <div className="container">
          <div className="section-heading reveal">
            <span>EXPLORE OUR MENU</span>
            <h2>What Are You Craving Today?</h2>
            <p>Discover delicious dishes made with love.</p>
          </div>

          <div className="category-grid">
            {categories.map((item) => (
              <button
                key={item.name}
                className={`category-card reveal ${
                  category === item.name ? "selected" : ""
                }`}
                onClick={() => {
                  setCategory(item.name);
                  scrollToMenu();
                }}
              >
                <span className="emoji">{item.icon}</span>
                <strong>{item.name}</strong>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD MENU */}
      <section
        className="section"
        id="menu"
        style={{ background: "#FFF3E8" }}
      >
        <div className="container">
          <div className="section-heading reveal">
            <span>FRESH FROM OUR KITCHEN</span>
            <h2>Our Delicious Menu</h2>
            <p>Choose your favourites and order now.</p>
          </div>

          <div className="menu-tools reveal">
            <input
              className="search-box"
              type="search"
              placeholder="🔍 Search food or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="filter-select"
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
            >
              <option value="All">All Foods</option>
              <option value="Veg">🟢 Vegetarian</option>
              <option value="Non-Veg">🔴 Non-Vegetarian</option>
            </select>
          </div>

          <div className="food-grid">
            {filteredFoods.length ? (
              filteredFoods.map((food) => (
                <article className="food-card reveal" key={food.id}>
                  <div className="food-image-wrap">
                    <img
                      className="food-image"
                      src={food.image}
                      alt={food.name}
                      loading="lazy"
                    />

                    <button
                      className="favorite"
                      onClick={() => toggleFavorite(food.id)}
                      aria-label="Add to favourites"
                    >
                      {favorites.includes(food.id) ? "♥" : "♡"}
                    </button>
                  </div>

                  <div className="food-info">
                    <h3>{food.name}</h3>
                    <div className="food-description">
                      {food.description}
                    </div>

                    <div className="food-meta">
                      <span>⭐ {food.rating} ({food.reviews} reviews)</span>
                      <span>
                        {food.type === "Veg" ? "🟢 Veg" : "🔴 Non-Veg"}
                      </span>
                    </div>

                    <div className="food-bottom">
                      <span className="food-price">₹{food.price}</span>
                      <button
                        className="add-btn"
                        onClick={() => addToCart(food)}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="empty-state">
                <h3>No food found 😕</h3>
                <p>Try another search or category.</p>
                <button
                  className="add-btn"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                    setFoodType("All");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="section">
        <div className="container">
          <div className="offer reveal">
            <div>
              <span
                style={{
                  color: "#F6C36A",
                  letterSpacing: 3,
                  fontSize: 12,
                }}
              >
                SPECIAL OFFER
              </span>
              <h2>Good Food, Great Savings!</h2>
              <p>Get 10% off your order with our special coupon.</p>
              <button
                className="primary-btn"
                onClick={() => {
                  scrollToMenu();
                  setToast("Use VIRUNDHU10 at checkout!");
                }}
              >
                Order Now →
              </button>
            </div>

            <div className="offer-code">VIRUNDHU10</div>
          </div>
        </div>
      </section>
            {/* STATISTICS */}
      <section className="stats-section">
        <div className="stats-container">

          <div className="stat-item reveal">
            <h2>4.9<span>/5</span></h2>
            <p>Average Rating</p>
          </div>

          <div className="stat-item reveal">
            <h2>2.5K<span>+</span></h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-item reveal">
            <h2>98<span>%</span></h2>
            <p>Would Recommend</p>
          </div>

          <div className="stat-item reveal">
            <h2>Fresh</h2>
            <p>Every Single Day</p>
          </div>

        </div>
      </section>

      {/* REVIEWS */}
      <section
        className="section"
        id="reviews"
        style={{ background: "#FFF3E8" }}
      >
        <div className="container">
          <div className="section-heading review-heading reveal">
  <div>
    <span>CUSTOMER LOVE</span>
    <h2>What people <span>say.</span></h2>
  </div>

  <p>
    Every bite tells a story. Here are some of our
    customers' favorite moments.
  </p>
</div>

          <div className="reviews-grid">
            {userReviews.map((item, index) => (
              <div className="review-card reveal" key={`${item.name}-${index}`}>
                <div className="stars">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
                <p>"{item.comment}"</p>
                <strong>{item.name}</strong>
                <div style={{ color: "#999", fontSize: 12 }}>
                  {item.place}
                </div>
              </div>
            ))}
          </div>

          <form className="review-form reveal" onSubmit={submitReview}>
            <h3>Share Your Experience</h3>

            <label>Your Name</label>
            <input
              className="field"
              value={review.name}
              onChange={(e) =>
                setReview({ ...review, name: e.target.value })
              }
              placeholder="Enter your name"
              required
            />

            <label>Your Rating</label>
            <select
              className="field"
              value={review.rating}
              onChange={(e) =>
                setReview({ ...review, rating: e.target.value })
              }
            >
              <option value="5">★★★★★ - Excellent</option>
              <option value="4">★★★★ - Very Good</option>
              <option value="3">★★★ - Good</option>
              <option value="2">★★ - Average</option>
              <option value="1">★ - Poor</option>
            </select>

            <label>Your Review</label>
            <textarea
              className="field"
              rows="3"
              value={review.comment}
              onChange={(e) =>
                setReview({ ...review, comment: e.target.value })
              }
              placeholder="Tell us about your experience..."
              required
            />

            <button className="full-btn" type="submit">
              Submit Review
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-heading reveal">
            <span>GET IN TOUCH</span>
            <h2>We'd Love to Hear From You</h2>
            <p>Questions or feedback? Send us a message.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info reveal">
              <h3>Let's Talk About Food!</h3>
              <p>We're here to help you with your orders and questions.</p>
              <p>📍 Madurai, Tamil Nadu, India</p>
              <p>📞 +91 96594 92652</p>
              <p>✉️ virundhu@hotel.com</p>
              <p>🕒 Everyday: 9:00 AM – 10:00 PM</p>
            </div>

            <form
              className="contact-form reveal"
              onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();
                setToast("Thank you! Your message has been received.");
              }}
            >
              <label>Your Name</label>
              <input className="field" required placeholder="Enter your name" />

              <label>Email Address</label>
              <input
                className="field"
                type="email"
                required
                placeholder="Enter your email"
              />

              <label>Message</label>
              <textarea
                className="field"
                rows="4"
                required
                placeholder="Write your message..."
              />

              <button className="full-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
            {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="reveal">
            <div className="logo">VIRUNDHU</div>
            <p>
              Bringing authentic flavours and delicious moments to your
              doorstep. Every meal is a celebration.
            </p>
          </div>

          <div className="reveal">
            <h3>Quick Links</h3>
            <p><a href="#home">Home</a></p>
            <p><a href="#menu">Our Menu</a></p>
            <p><a href="#reviews">Reviews</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>

          <div className="reveal">
            <h3>Follow Us</h3>
            <p>Instagram · Facebook · YouTube</p>
            <p>Made with ❤️ for food lovers.</p>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} VIRUNDHU. All Rights Reserved.
        </div>
      </footer>

      {/* CART */}
      {cartOpen && (
        <div className="overlay" onClick={() => setCartOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setCartOpen(false)}>
              ×
            </button>

            <h2>Your Shopping Cart 🛒</h2>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div style={{ fontSize: 50 }}>🍽️</div>
                <h3>Your cart is empty</h3>
                <p>Add your favourite dishes to get started.</p>
                <button
                  className="full-btn"
                  onClick={() => {
                    setCartOpen(false);
                    scrollToMenu();
                  }}
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="cart-item-info">
                      <strong>{item.name}</strong>
                      <small>₹{item.price} each</small>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>

                    <div className="qty-control">
                      <button onClick={() => changeQuantity(item.id, -1)}>
                        −
                      </button>
                      <strong>{item.quantity}</strong>
                      <button onClick={() => changeQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </div>
                ))}

                <div className="coupon-row">
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Coupon code"
                  />
                  <button onClick={applyCoupon}>Apply</button>
                </div>

                {couponMessage && (
                  <p className="coupon-message">{couponMessage}</p>
                )}

                <div style={{ marginTop: 20 }}>
                  <div className="bill-row">
                    <span>Subtotal</span>
                    <strong>₹{subtotal}</strong>
                  </div>

                  <div className="bill-row">
                    <span>Delivery Charge</span>
                    <strong>{delivery === 0 ? "FREE" : `₹${delivery}`}</strong>
                  </div>

                  <div className="bill-row">
                    <span>Discount</span>
                    <strong>- ₹{discount}</strong>
                  </div>

                  <div className="bill-row bill-total">
                    <span>Total</span>
                    <strong>₹{total}</strong>
                  </div>
                </div>

                <button
                  className="full-btn"
                  onClick={() => {
                    setCartOpen(false);
                    setCheckoutOpen(true);
                  }}
                >
                  Proceed to Checkout →
                </button>

                <p style={{ fontSize: 11, color: "#999", textAlign: "center" }}>
                  Free delivery on orders above ₹499.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* CHECKOUT */}
      {checkoutOpen && (
        <div className="overlay" onClick={() => setCheckoutOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setCheckoutOpen(false)}>
              ×
            </button>

            <h2>Complete Your Order</h2>
            <p style={{ color: "#777", fontSize: 13 }}>
              Enter your delivery details below.
            </p>

            <form className="checkout-form" onSubmit={placeOrder}>
              <label>Full Name</label>
              <input
                className="field"
                required
                value={customer.name}
                onChange={(e) =>
                  setCustomer({ ...customer, name: e.target.value })
                }
                placeholder="Your name"
              />

              <label>Mobile Number</label>
              <input
                className="field"
                required
                inputMode="numeric"
                maxLength="10"
                value={customer.phone}
                onChange={(e) =>
                  setCustomer({
                    ...customer,
                    phone: e.target.value.replace(/\D/g, ""),
                  })
                }
                placeholder="10-digit mobile number"
              />

              <label>Delivery Address</label>
              <textarea
                className="field"
                rows="3"
                required
                value={customer.address}
                onChange={(e) =>
                  setCustomer({ ...customer, address: e.target.value })
                }
                placeholder="Enter your full address"
              />

              <label>Payment Method</label>
              <select className="field">
                <option>Cash on Delivery</option>
                <option>Demo Online Payment</option>
              </select>

              <div className="bill-row bill-total">
                <span>Payable Amount</span>
                <strong>₹{total}</strong>
              </div>

              <button className="full-btn" type="submit">
                Place Order · ₹{total}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ORDER SUCCESS */}
      {successOpen && (
        <div className="overlay" onClick={() => setSuccessOpen(false)}>
          <div
            className="modal success-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSuccessOpen(false)}>
              ×
            </button>

            <div className="success-icon">✓</div>
            <h2>Order Placed Successfully!</h2>
            <p>
              Thank you, {customer.name}! Your order has been received.
              We appreciate your choice of VIRUNDHU.
            </p>

            <div
              style={{
                background: "#FFF3E8",
                padding: 16,
                borderRadius: 12,
              }}
            >
              <strong>Order ID: {orderId}</strong>
              <p style={{ marginBottom: 0 }}>
                Thank you for ordering with us ❤️
              </p>
            </div>

            <button className="full-btn" onClick={() => setSuccessOpen(false)}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* LOGIN DEMO */}
      {loginOpen && (
        <div className="overlay" onClick={() => setLoginOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setLoginOpen(false)}>
              ×
            </button>

            <h2>Welcome to VIRUNDHU</h2>
            <p style={{ color: "#777", fontSize: 13 }}>
              Login UI demo for our food ordering website.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoginOpen(false);
                setToast("Login demo submitted successfully!");
              }}
            >
              <label>Email Address</label>
              <input
                className="field"
                type="email"
                required
                placeholder="Enter your email"
              />

              <label>Password</label>
              <input
                className="field"
                type="password"
                required
                placeholder="Enter your password"
              />

              <button className="full-btn" type="submit">
                Login
              </button>
            </form>

            <p style={{ textAlign: "center", fontSize: 11, color: "#999" }}>
              Demo login only. Real authentication needs a backend.
            </p>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}