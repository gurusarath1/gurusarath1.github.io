$(document).ready(function() {
    console.log('Guru Sarath github io JS run success')

    $(".first-title").click(
        function(eventObj) {
            var siblings = $(eventObj.target).siblings()
            siblings.slideToggle();
        }
    );

    $(".card-title").click(
        function(eventObj) {
            var siblings = $(eventObj.target).siblings()
            siblings.slideToggle();
        }
    );

    $('.image-card-1').on(
        {
            mouseenter: function(eventObj) {
                $(eventObj.target).children(".image-card-1-body").children(".image-card-1-body-title").css({opacity: 1});
            },
            mouseleave: function(eventObj) {
                $(eventObj.target).children(".image-card-1-body").children(".image-card-1-body-title").css({opacity: 0.5});
            },
        }
    );


});

