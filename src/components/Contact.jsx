const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2>Contact</h2>

        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
