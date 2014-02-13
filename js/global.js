// Execute the following code when the page is loaded
$(function () {
    $('.event h3 a').click(function(e) {
        e.preventDefault();
        $(this).closest('.event').find('p').show();
    });

    $.getJSON(
        "/data.json",
        function(data) {
            $.each(data,function(i, item) {
                // Create a new div to contain our markup for the event
                var el = $('<div></div>').addClass('event');

                // Create HTML elements to go in the .event
                var title = $('<h3></h3>').html(item.title);
                var desc = $('<p></p>').html(item.description);
                // … plus a bunch more

                // Parse the Date
                var date = new Date(item.entry_date);
                var dateNum = date.getDate();
                var dateID = "feb" + dateNum;

                // Build up the .event object
                el.append(title);
                el.append(desc);

                // Add it to the proper date in the calendar
                $('#' + dateID).append(el);
            });
        }
    );
});
