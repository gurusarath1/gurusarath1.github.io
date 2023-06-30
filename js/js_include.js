$(document).ready(function() {
    // Return all the list elements
    console.log('Guru Sarath')
    var i = 0;
    var list_jQuery = jQuery("p")
    var list_$ = $("p")
    console.log("jQuery() = $() :" + (JSON.stringify(list_jQuery) == JSON.stringify(list_$)))
    
    // Select by tag name
    $('p').append('Appended text from jQuery');
    
    // Select by class name
    $('.div1').prepend('Div class');

    // Double Click event
    $('p').dblclick(
        function(eventObj) {
            console.log('Click detected ' + i);
            alert('Clicked !!! Guru Sarath ' + i);
            i += 1;

            // Stops event bubbling to the children
            eventObj.stopPropagation();
        }
    );

    // eventObj properties
    $('button').click(
        function(eventObj) {
        console.log("Event type: " + eventObj.type);  
        console.log("Button or key pressed: " + eventObj.which); 
        console.log("Target element (DOM element that caused the event): " + eventObj.target);  
        console.log("Mouse X coordinate: " + eventObj.pageX);  
        console.log("Mouse Y coordinate: " +eventObj.pageY);              
        }
    );

    // Multiple events for a single object
    $('.test-dev').on(
        {
            click: function() {
                console.log('click!');
            },
            mouseenter: function() {
                console.log('Enter!');
            },
            mouseleave: function() {
                console.log('Leave!');
            },
        }
    );

    // Hyperlink click
    $("#next-href").click(
        function(eventObj) {
            var isChecked = $('#mycheck').is(":checked")
            if (!isChecked) {

                // Pervent the default behaviour of the hyperlink
                eventObj.preventDefault();
                alert("Please check the terms and conditions to access the website!")
            }
        }
    );



    $('#add-button').click(
        function() {
            // Get text box value
            var todo_text = $('#todo-text-box').val();
            console.log('TODO Text = ' + todo_text);

            // Set text box value (clear)
            $('#todo-text-box').val('');

            if(todo_text != "")
            {
                $('.todo-list-div').append('<div class="todo-item">' + todo_text + '   ' + '<button class="delete-todo-item">Delete Item</button> </div>');
            } else {
                alert('Todo field is empty');
            }

            // Now that a new delete-todo-item button is created, add a event handler to it
            $('.delete-todo-item').click(
                function(eventObj) {
                    console.log('Delete clicked');

                    // Delete todo-item
                    // Get the parent of the buttona and remove it
                    // Removes the todo text and the button
                    $(eventObj.target).parent().remove();
                }
            );
        }
    );

    $('#delete-all-button').click(
        function() {

            // Remove a DOM element
            $('.todo-item').remove();
        }
    );


    /*
    Traversing UP the DOM tree
    parent()
    parents()
    parentUntil()

    Traversing DOWN the DOM tree
    children()
    find() // Finds the specific children

    Traversing SIDEWAYS the DOM tree
    siblings()
    next() prev()
    nextAll() prevAll()
    nextUntil() prevUntil()
    */


});

