function cookPanel() {
  var openCookiesPanel = document.getElementById('cook-panel');
  var acceptCook = document.getElementById('accept-cook');
  var openCookDesc = document.getElementById('open-cook-desc');
  var cookDesc = document.getElementById('cook-desc');
  var closeCookDesc = document.getElementById('close-cook-desc');
  var closeCookOverlay = document.getElementById('close-cook-overlay');

  if (!openCookiesPanel) return;

  var isShowCook = localStorage.getItem('cook');

  if (!isShowCook) {
    openCookiesPanel.classList.add('active');
  } else {
    openCookiesPanel.classList.remove('active');
  }

  acceptCook.addEventListener('click', function() {
    localStorage.setItem('cook', 'true');
    openCookiesPanel.classList.remove('active');
  });

  openCookDesc.addEventListener('click', function() {
    cookDesc.classList.add('active');
  });

  closeCookDesc.addEventListener('click', function() {
    cookDesc.classList.remove('active');
  });

  closeCookOverlay.addEventListener('click', function() {
    cookDesc.classList.remove('active');
  });
}


cookPanel();
