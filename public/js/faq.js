$(document).ready(function () {
    $(".faq-answers__answer").on("click", function () {
        $(this)
            .children("p")
            .toggle("normal");
        $(this)
            .find(".faq-arrow")
            .toggleClass("active");
    });
});