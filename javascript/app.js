$(document).ready(function(){
    $("#convert").on("click",function(e){
        e.preventDefault();

        var lang_one =$("#lang_one").val();
        var lang_two =$("#lang_two").val();
        var text =$("#speechToText").val();

        $.ajax({
            url: "process.php",
            type: "post",
            data: { lang_one: lang_one, lang_two: lang_two, text: text},
            success: function(status){
                text=$('#speechToText').val(status);
            },
        });
    });
});