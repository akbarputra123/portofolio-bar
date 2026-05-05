import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* TEXT */}
        <div className="footer-text">
          <h2>AKBAR</h2>
          <p>Fullstack Developer</p>
        </div>

        {/* SOCIAL ICON */}
        <div className="footer-social">

          {/* INSTAGRAM */}
          <div className="social-wrapper">
            <a href="#">
              <div className="social-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17" cy="7" r="1.5"/>
                </svg>
              </div>
            </a>
            <span className="tooltip">Instagram</span>
          </div>

          {/* GITHUB */}
          <div className="social-wrapper">
            <a href="#">
              <div className="social-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 0 0-3 19c.5.1.7-.2.7-.5v-2
                  c-3 .6-3.6-1.2-3.6-1.2-.5-1.2-1.3-1.5-1.3-1.5-1-.7.1-.7.1-.7
                  1.1.1 1.7 1.1 1.7 1.1 1 .1.8-1 .8-1
                  .5-.9 1.3-1.2 2.4-1.2.8 0 1.5.3 2 .8
                  1.7-.2 3.5-.8 3.5-3.5 0-.8-.3-1.5-.8-2
                  .1-.2.4-1-.1-2 0 0-.7-.2-2.2.8
                  -.6-.2-1.2-.3-1.8-.3s-1.2.1-1.8.3
                  C8.7 5.3 8 5.5 8 5.5c-.5 1-.2 1.8-.1 2
                  -.5.5-.8 1.2-.8 2 0 2.7 1.8 3.3 3.5 3.5
                  .3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>
                </svg>
              </div>
            </a>
            <span className="tooltip">GitHub</span>
          </div>

          {/* WHATSAPP */}
          <div className="social-wrapper">
            <a href="#">
              <div className="social-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 12a8 8 0 1 1-2.3-5.7"/>
                </svg>
              </div>
            </a>
            <span className="tooltip">WhatsApp</span>
          </div>

          {/* FACEBOOK */}
          <div className="social-wrapper">
            <a href="#">
              <div className="social-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
            </a>
            <span className="tooltip">Facebook</span>
          </div>

        </div>
      </div>

 

    </footer>
  );
}