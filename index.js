const footerParagraph = document.getElementById('footer-paragraph');
const currentDate = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentDate}.`;

const body = document.querySelector('body');
const darkModeInput = document.getElementById('dark-mode-input');

function updateTheme() {
  if (darkModeInput.checked) {
    body.style.backgroundColor = 'hsl(24, 10%, 10%)';
    body.style.color = 'hsl(20, 6%, 90%)';
  } else {
    body.style.backgroundColor = 'hsl(20, 6%, 90%)';
    body.style.color = 'hsl(24, 10%, 10%)';
  }
}

darkModeInput.addEventListener('input', () => updateTheme());
