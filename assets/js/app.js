let btn_search = document.querySelector("i");

btn_search.addEventListener("click", () => {
    if (btn_search.parentElement.classList.contains("active")) {
        btn_search.parentElement.querySelector("input").focus();
    }
    btn_search.parentElement.classList.toggle("active");
});
