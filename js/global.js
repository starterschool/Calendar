// Execute the following code when the page is loaded
$(function () {
    $('.event h3 a').click(function(e) {
        e.preventDefault();
        $(this).closest('.event').find('p').show();
    });

    $.getJSON(
        "/data.json",
        function(data) {
            $.each(data,function(i,item) {
                console.log(i, item);
            });
        }
    );
});
