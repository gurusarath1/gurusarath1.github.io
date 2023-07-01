$(document).ready(function() {
    console.log('Guru Sarath github io JS run success')

    // Close all the cards 
    var siblings = $(".card-title").siblings();
    siblings.slideToggle();

    $(".first-title").click(
        function(eventObj) {
            //var siblings = $(eventObj.target).siblings()
            //siblings.slideToggle();
        }
    );

    $(".card-title").on(
        {
            click: function(eventObj) {
                var siblings = $(eventObj.target).siblings();
                siblings.slideToggle();
            },
            mouseenter: function(eventObj) {
                var siblings = $(eventObj.target).css({"text-shadow": "1px 1px 10px #fff"});
            },
            mouseleave: function(eventObj) {
                var siblings = $(eventObj.target).css({"text-shadow": "0px 0px 0px #fff"});
            }
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

