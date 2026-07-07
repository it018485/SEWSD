document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('toggleTheme');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var root = document.documentElement;
    var isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? '' : 'dark');
  });
});