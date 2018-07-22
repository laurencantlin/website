$(window).resize(function(){location.reload();});


function clickLiItem() {
  console.log("hi")
  $(".ref-list").hide();  
  $(".testimonial-panel").show();

  $(".back-btn").attr("href", "./recommendationsm.html");

  $(".testimonial-panel").show();
}
if ($(window).width() <=992) {
    $(".testimonial-panel").hide();
    $(".list-group-item").removeClass("active")
  $("a.list-group-item").click(clickLiItem)
} 
if ($(window).width()>= 992) {
   $(".back-btn-to-refs").hide();
} 


// $(".btn-view-rec").click(clickRecBtn)
