$(document).ready(function () {
    var theForm = $("#form");
    theForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying item!");
    });

    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You clicked on " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.toggle(100);
    });
});
