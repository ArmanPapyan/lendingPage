$(function () {
$('#callback').click(function  () {
    $("#popup-container").css("display","flex");
});
$("#popup-container").click(function (e) {
    if (e.target === this) {
        $("#popup-container").css("display", "none");
    }
})
    $("#call-button").click(function () {
        var phone = $("#call-number").val();
       var name = $("#call-name").val();
        $.get("api.php",{"phone":phone},function (response) {
            // alert(response);
            $("#popup-container").css("display", "none");
        });
        $.get("api.php",{"name":name},function (response1) {
            $("#popup-container").css("display", "none");
        })
    });

});