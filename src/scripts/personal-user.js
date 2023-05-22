const USER = document.getElementById('user');
const PANEL_USER = document.querySelector('.panel-item__wrapper');

USER.addEventListener('mouseover', () => {
  PANEL_USER.classList.add('active');
});

USER.addEventListener('mouseout', () => {
  PANEL_USER.classList.remove('active');
});
