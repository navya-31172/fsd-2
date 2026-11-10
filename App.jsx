
import React from 'react';

function App() {
  return (
    <div>

      <header>
        <h2>🛡️ CYBER SAFE</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#crimes">Cyber Crimes</a>
          <a href="#safety">Safety Tips</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <h1>CYBER CRIME AWARENESS</h1>
        <h2>Stay Alert. Stay Safe. Stay Secure.</h2>
        <p>
          Protect yourself from online fraud,
          cyber attacks, fake calls and messages.
          Learn how to stay safe in the digital world.
        </p>
        <a href="#safety" className="btn">
          Explore Safety Tips
        </a>
      </section>

      <section id="crimes">
        <h1>Types of Cyber Crimes</h1>

        <div className="cards">
          <div className="card">
            <h2>📞 Phone Call Fraud</h2>
            <p>
              Fraudsters pretend to be bank officials
              and ask for OTP, PIN and personal details.
            </p>
          </div>

          <div className="card">
            <h2>💬 SMS Fraud</h2>
            <p>
              Fake messages contain harmful links
              to steal your personal information.
            </p>
          </div>

          <div className="card">
            <h2>📧 Email Phishing</h2>
            <p>
              Fake emails trick users into sharing
              passwords and banking details.
            </p>
          </div>

          <div className="card">
            <h2>💳 UPI Fraud</h2>
            <p>
              Scammers use fake QR codes and
              payment requests to steal money.
            </p>
          </div>

          <div className="card">
            <h2>📱 Social Media Fraud</h2>
            <p>
              Fake accounts and malicious links
              are used to cheat online users.
            </p>
          </div>

          <div className="card">
            <h2>🔐 Identity Theft</h2>
            <p>
              Criminals misuse personal information
              without permission.
            </p>
          </div>
        </div>
      </section>

      <section id="safety" className="safety">
        <h1>Online Safety Tips</h1>

        <div className="tips">
          <p>✔ Never share your OTP or ATM PIN.</p>
          <p>✔ Never click unknown links.</p>
          <p>✔ Use strong and unique passwords.</p>
          <p>✔ Enable two-factor authentication.</p>
          <p>✔ Avoid unknown applications.</p>
          <p>✔ Verify suspicious phone calls.</p>
          <p>✔ Keep your mobile software updated.</p>
          <p>✔ Never share your UPI PIN to receive money.</p>
        </div>
      </section>

      <section className="report">
        <h1>How to Report Cyber Crime?</h1>
        <p>
          If you become a victim of cybercrime,
          report it immediately.
        </p>

        <h2>Cyber Crime Helpline: 1930</h2>
        <h2>Emergency Number: 112</h2>

        <a
          href="https://cybercrime.gov.in/"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Report Cyber Crime
        </a>
      </section>

      <section id="contact">
        <h1>Contact & Support</h1>
        <p>Cyber Crime Helpline: 1930</p>
        <p>Emergency Contact: 112</p>
        <p>
          Official Website:
          <a href="https://cybercrime.gov.in/">
            cybercrime.gov.in
          </a>
        </p>
      </section>

      <footer>
        <h2>CYBER CRIME AWARENESS</h2>
        <p>
          Think Before You Click.
          Stay Alert and Stay Safe.
        </p>
        <p>© 2026 Cyber Safety Awareness Project</p>
      </footer>

    </div>
  );
}

export default App;
