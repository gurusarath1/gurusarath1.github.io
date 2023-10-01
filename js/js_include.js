// Reference: https://www.youtube.com/watch?v=woE-wZXiY-Q
function loadHtml(id, filename) {
    console.log(`id = ${id}, file = ${filename} `)

    let xhttp;
    let element = document.getElementById(id);
    let file = filename;

    if(file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4) {
                if(this.status == 200) {element.innerHTML = this.responseText;}
                if(this.status == 404) {element.innerHTML = "Not Fount :(";}
            }
        }
        xhttp.open("GET", `${file}`, true);
        xhttp.send();
        return;
    }

}

function hide_about_cards(card) {
    obj = $(".about-card")
    obj.hide();
}

function hide_all_cards(card) {
    obj = $(".card-title").siblings();
    obj.slideUp();
}


$(document).ready(function() {
    console.log('Guru Sarath github io JS run started');

    $('#navbar').load("navbar.html", hide_all_cards);
    $("#projects-ai-ml-dl").load("card_projects.html", hide_all_cards);
    $("#papers-reimp").load("card_papers.html", hide_all_cards);
    $("#blog-posts-list").load("card_blog.html", hide_all_cards);
    $("#about-page").load("card_about.html", hide_about_cards);
	
	$.get('pages/test_read.txt', function(data) {
		console.log(data)
	});

    // Delegated event
    $(document).on("click", ".card-title",  function(eventObj) {
        var siblings = $(eventObj.target).siblings();
        siblings.slideToggle();
    });

    $(document).on("click", "#about-link",  function(eventObj) {
        $(".about-card").slideDown();
        $(".about-card").children().slideDown();
    });

    $(document).on("click", "#home-link",  function(eventObj) {
        $(".about-card").slideUp();
    });


    console.log('Guru Sarath github io JS run SUCESS');
});



