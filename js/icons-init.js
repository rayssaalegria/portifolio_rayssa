/**
 * Injeta SVGs do bundle MUI em elementos [data-mui-icon].
 */
(function () {
  function injectIcons() {
    if (!window.MUI_ICONS) return;
    document.querySelectorAll('[data-mui-icon]').forEach(function (el) {
      var name = el.getAttribute('data-mui-icon');
      var svg = window.MUI_ICONS[name];
      if (svg) el.innerHTML = svg;
    });
  }

  function boot() {
    injectIcons();
    document.dispatchEvent(new CustomEvent('mui-icons-ready'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  window.refreshMuiIcons = injectIcons;
})();
