import "./App.css";

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">
          <img
            src="/images/amts-logo.png"
            alt="AMTS Properties"
            className="logo-image"
          />
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="#buy">Buy</a>
          <a href="#sell">Sell</a>
          <a href="#my-story">My Story</a>
          <a href="#experience">The Experience</a>
          <a href="#areas">Featured Areas</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="tagline">Real Estate with Heart. Results with Care.</p>

            <h1>Find Your Next Home with Confidence</h1>

            <p className="hero-text">
              Helping buyers and sellers across Pierce County and the South Sound
              navigate real estate with clear guidance, honest support, and smart strategy.
            </p>

            <div className="hero-buttons">
              <a href="#buy" className="btn primary">Start Buying</a>
              <a href="#sell" className="btn secondary">Prepare to Sell</a>
            </div>
          </div>
        </div>
      </section>

      <section className="my-story" id="my-story">
        <div className="story-image">
          <img src="/images/jackie-rath.jpg" alt="Jackie Rath" />
        </div>

        <div className="story-text">
          <p className="section-label">Meet Jackie Rath</p>
          <h2>Real Estate with Heart. Results with Care.</h2>

          <p>
            I'm Jackie Rath, a Pierce County neighbor, homeowner, mom, and REALTOR®
            who believes real estate should feel less overwhelming and more empowering.
          </p>

          <p>
            Whether you're buying your first home, relocating, upsizing, downsizing,
            or preparing to sell, my goal is to provide honest guidance, clear
            communication, and support that respects your goals and your season of life.
          </p>

          <p>
            I serve clients throughout Pierce County, Thurston County, and the South
            Sound with a focus on helping people make confident decisions from first
            consultation to closing day.
          </p>

          <a href="#contact" className="btn primary">Connect With Jackie</a>
        </div>
      </section>

      <section className="cards">
        <div className="card" id="buy">
          <h2>Buying a Home</h2>
          <p>Get guidance from first showing to final keys.</p>
          <a href="#contact">Learn More</a>
        </div>

        <div className="card" id="sell">
          <h2>Selling a Home</h2>
          <p>Prepare, price, and market your home with strategy.</p>
          <a href="#contact">Get Started</a>
        </div>

        <div className="card">
          <h2>Local Support</h2>
          <p>Serving Pierce County, Thurston County, and the South Sound.</p>
          <a href="#contact">Connect</a>
        </div>
      </section>

      <section className="experience" id="experience">
        <p className="section-label">The Experience</p>
        <h2>What It's Like To Work With Me</h2>

        <div className="experience-grid">
          <div>
            <h3>Clear Guidance</h3>
            <p>Step-by-step support so you always know what comes next.</p>
          </div>

          <div>
            <h3>Honest Advice</h3>
            <p>Realistic conversations that help you make confident decisions.</p>
          </div>

          <div>
            <h3>Strategy for Today's Market</h3>
            <p>Thoughtful pricing, offer, and negotiation support.</p>
          </div>

          <div>
            <h3>Respect for Your Time</h3>
            <p>A process built around your goals, schedule, and season of life.</p>
          </div>

          <div>
            <h3>Advocacy You Can Trust</h3>
            <p>Support focused on protecting your interests from start to finish.</p>
          </div>
        </div>
      </section>

      <section className="areas" id="areas">
        <p className="section-label">Featured Areas</p>
        <h2>Serving the South Sound</h2>

        <div className="area-grid">
          <span>Puyallup</span>
          <span>Bonney Lake</span>
          <span>Sumner</span>
          <span>Lake Tapps</span>
          <span>Tacoma</span>
          <span>Graham</span>
          <span>Yelm</span>
          <span>Spanaway</span>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <p className="section-label">Moments That Matter</p>
        <h2>Kind Words From Clients</h2>

        <div className="testimonial-card">
          <p>
            “Jackie made the process feel clear, supported, and less stressful
            from start to finish.”
          </p>
          <strong>— Happy Client</strong>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Ready to take the next step?</h2>
        <p>Let's talk about your goals and create a plan that fits your season of life.</p>
        <a href="mailto:jackierath.bestchoice@gmail.com" className="btn primary">
          Contact Jackie
        </a>
      </section>
    </div>
  );
}

export default App;