//$("h1").css("color", "red")
$("h1").addClass("title")

$("p").text("Some text")

$("a").attr("href", "https://www.bing.com")

$("body").keydown(function(event) {
    $("h1").text(event.key)
})

$("h1").on("mousedown", function() {
    $("h1").css("color", "purple")
})

$("button").on("click", function(){
    $("h1").animate({opacity: 0.5}).animate({opacity: 1})
    $("p").slideToggle()
})
