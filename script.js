let count = 0; // Variable to track toggle state

function more() {
  const projectContainer = document.getElementById("container");
  const moreButton = document.getElementById("more");

  if (count === 0) {
    // Show more projects
    projectContainer.style.display = "flex";
    moreButton.innerHTML = "See Less";
    count = 1; // Update toggle state
  } else {
    // Hide the extra projects
    projectContainer.style.display = "none";
    moreButton.innerHTML = "More Projects...";
    count = 0; // Reset toggle state
  }
}

  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
  }

function readMore(url) {
  window.location.href = url;
}
