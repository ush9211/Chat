$(function(){

    $('.submit').click(function(){
        
        if($('#username').val()==""){
            alert("이름을 입력하세요.");
            $('#username').focus();
            return;
        }
        $('#loginform').submit();
    })

    
});