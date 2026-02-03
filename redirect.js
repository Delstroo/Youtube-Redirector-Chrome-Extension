(() => {
  function redirectIfWatch() {
    const url = new URL(location.href);

    // Only act on /watch
    if (url.pathname !== "/watch") return;

    const v = url.searchParams.get("v");
    if (!v) return;

    location.replace(`https://www.yout-ube.com/watch?v=${v}`);
  }

  // Run once
  redirectIfWatch();

  // Watch for SPA navigation
  let lastHref = location.href;
  const observer = new MutationObserver(() => {
    if (location.href !== lastHref) {
      lastHref = location.href;
      redirectIfWatch();
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
