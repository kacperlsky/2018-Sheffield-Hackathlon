(function ($) {
// custom css expression for a case-insensitive contains()
    jQuery.expr[':'].Contains = function(a,i,m){
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
    };

    var typingTimer;
    var doneTypingInterval = 350;

    $('#inputSearch').keyup(function(){
        clearInterval(typingTimer);
        if ($('#inputSearch').val()) {
            typingTimer = setInterval(function(){doneTyping($("#posts"))}, doneTypingInterval);
        }
        else {
            $("article").slideDown();
        }
    });

function doneTyping (list) {
    var form = $("#formSearch"),
        input = $("#inputSearch");

    clearInterval(typingTimer);
    var filter = input.val();
    console.log.list;
    $(list).find("article .searchable:not(:Contains(" + filter + "))").parent().slideUp();
    $(list).find("article .searchable:Contains(" + filter + ")").parent().slideDown();
}
}(jQuery));