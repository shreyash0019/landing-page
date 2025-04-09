const modeBtn = document.getElementById('modeBtn');

modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const style = document.createElement('style');
style.textContent = `
  /* Main dark mode */
  .dark-mode {
    background-color: #121212;
    color: #f1f1f1;
  }

  /* Navbar and Footer */
  .dark-mode .navbar,
  .dark-mode footer {
    background-color: #1f1f1f;
    color: #f1f1f1;
  }

  .dark-mode footer a,
  .dark-mode footer p {
    color: #f1f1f1;
  }

  /* Hero section */
  .dark-mode .hero {
    background-color: #121212;
    color: #f1f1f1;
  }

  /* About section */
  .dark-mode .about-overlay {
    background-color: #1f1f1f;
    color: #f1f1f1;
  }

  .dark-mode .about-content h2,
  .dark-mode .about-content p {
    color: #f1f1f1;
  }

  /* Product section */
  .dark-mode .products,
  .dark-mode .product-container {
    background-color: #1f1f1f;
    color: #f1f1f1;
  }

  .dark-mode .products h2 {
    color: #f1f1f1;
  }

  .dark-mode .product-card {
    background-color: #1e1e1e;
    color: #ffffff;
  }

  /* Contact section */
  .dark-mode .contact {
    background-color: #1f1f1f;
    color: #f1f1f1;
  }

  .dark-mode .contact h2,
  .dark-mode .contact p {
    color: #f1f1f1;
  }

  .dark-mode .contact input[type="email"] {
    background-color: #2a2a2a;
    color: #ffffff;
    border: 1px solid #555;
  }

  .dark-mode .contact button,
  .dark-mode .hero-btn,
  .dark-mode .buy-btn {
    background-color: #f1f1f1;
    color: #121212;
    border: none;
  }
`;
document.head.appendChild(style);
