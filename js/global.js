// Execute the following code when the page is loaded
$(function () {
    $('.event h3 a').click(function(e) {
        e.preventDefault();
        $(this).closest('.event').find('p').show();
    });
});
