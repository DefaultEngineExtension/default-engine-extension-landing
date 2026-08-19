window.SITE = {
  url: "https://defaultsearch.online",
  email: "setdefaultsearchhelp@gmail.com",
  chromeStoreUrl: "",
};

document.addEventListener("DOMContentLoaded", () => {
  const { email, chromeStoreUrl } = window.SITE;

  document.querySelectorAll("[data-email]").forEach((el) => {
    el.textContent = email;
    if (el.tagName === "A") el.setAttribute("href", `mailto:${email}`);
  });

  document.querySelectorAll("[data-store-cta]").forEach((el) => {
    if (chromeStoreUrl) {
      el.setAttribute("href", chromeStoreUrl);
      el.textContent = "Add to Chrome";
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
      return;
    }

    el.setAttribute("href", "#");
    el.textContent = "Coming soon";
    el.classList.add("is-disabled");
    el.setAttribute("aria-disabled", "true");
    el.addEventListener("click", (event) => event.preventDefault());
  });
});
