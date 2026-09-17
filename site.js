(function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('nav-principal');

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        burger.focus();
      }
    });
  }

  // Confirmation d'envoi (Netlify Forms redirige avec ?devis=envoye)
  if (window.location.search.indexOf('devis=envoye') > -1) {
    var note = document.querySelector('.form__note');
    if (note) {
      note.textContent =
        'Merci, votre demande a bien été envoyée. Julien Vasseur vous recontacte sous 48h.';
      note.style.color = '#0F3FA8';
      note.style.fontWeight = '700';
    }
  }
})();
