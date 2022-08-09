window.addEventListener("load", function (event) {
  const pages = document.querySelectorAll(".page");
  document.querySelector("#changePage").onclick = ({ target }) => {
    target.parentElement.querySelector(".active").classList.remove("active");
    target.classList.add("active");
    document.querySelector(".showPage").classList = "page";
    pages.forEach((el) => {
      console.log(el.dataset.page , ("#" + target.href.split("#")[1]));
      if (el.dataset.page === ("#" + target.href.split("#")[1])) {
        el.classList="showPage";
      }
    });
  };
});
