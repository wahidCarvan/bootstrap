   // CAROUSEL BUTTON
        $(function () {
            $(".carousel").carousel({ interval: 2000, pause: "false" });
            $("#carouselButton").click(function () {
                if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                    $(".carousel").carousel("pause");
                    $("#carouselButton").children("i").removeClass("fa-pause");
                    $("#carouselButton").children("i").addClass("fa-play");
                } else {
                    $(".carousel").carousel("cycle");
                    $("#carouselButton").children("i").removeClass("fa-play");
                    $("#carouselButton").children("i").addClass("fa-pause");
                }
            });
        });


// WORKING ON TASK 2
        // id reserveButton
        // id loginButton
// start the function after page has loaded
    // $(function () {
        //select the button
    $("#reserveButton").click(function() {
         //  display the modal
    $("#reserveModal").modal("show");
      //select the button
       });
     $("#loginButton").click(function(){
//         //  display the modal
    $("#loginModal").modal();
   
   });
// });
   
  
//      $(function () {
//         //select the button
//      $("#loginButton").click(function(){
//         //  display the modal
//     $("#loginModal").modal();
//     });
  
// });





