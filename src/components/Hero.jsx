export default function Hero() {
  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-lg-6">
            <h1 className="title">
              Snap<span>Folio</span>
            </h1>

            <h3>Alexander Chen</h3>

            <p className="typing">
              I'm a <b>Creative Designer</b>
            </p>

            <p className="desc">
              Passionate about creating exceptional digital experiences that
              blend innovative design with functional development. Let's bring
              your vision to life.
            </p>

            <div className="buttons">
              <button className="btn btn-light">View My Work</button>
              <button className="btn btn-outline-light">Get In Touch</button>
            </div>

            <div className="hero-socials">
              <i className="bi bi-dribbble"></i>
              <i className="bi bi-behance"></i>
              <i className="bi bi-github"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 text-center">
            <div className="image-box">
              <img src="https://i.pravatar.cc/400" alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
