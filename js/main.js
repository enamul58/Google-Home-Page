const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    let enterValue = searchInput.value;
    window.location.href =
      "https://www.google.com/search?q=" +
      enterValue +
      "&rlz=1C1BNSD_enBD1017BD1017&oq=" +
      enterValue +
      "&aqs=chrome..69i57j69i59l2j0i433i512j0i512j0i433i512l2j0i131i433i512j0i433i512j0i512.5114j0j15&sourceid=chrome&ie=UTF-8";
  }
});
