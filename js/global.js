// Execute the following code when the page is loaded
$(function () {
    // $('event h3 a').click(function(e) {
    //     e.preventDefault();
    //     $(this).closest('.event').find('p').show();
    // });

    $('.calendar').on('click', '.event h3 a', function(e) {
        e.preventDefault();
        $(this).closest('.event').find('p').show();
    });

    $.getJSON(
        "/data.json",
        function (events) {
            // console.log(events);

            $('.cell').addClass('empty');

            // loop through every element
            $(events).each(function(i, theEvent) {

                // pull out the values
                var title = theEvent.title;
                var description = theEvent.description;
                var start_time = theEvent.event_time;

                // create a new event element

                var newEvent = $('<div>').addClass('event');

                // add values to new element

                var titleEl = $('<h3>').html('<a href="#">' + title + '</a>');
                newEvent.append(titleEl);
                newEvent.append($('<p>').html('lkajsdfl kajsdlkfjasldk faslkdjfalksdjf alskd'));

                // populate the proper cell with my new element

                var eventDate = new Date(theEvent.entry_date);

                // TODO: Use variable month name, not "feb"
                var dateID = "feb" + eventDate.getDate();

                // $('.wrap').append(newEvent);

                $('#' + dateID)
                    .append(newEvent)
                    .removeClass('empty');
            });


            // map it to dates
        }
    );
});
