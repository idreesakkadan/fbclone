$(document).ready(function(){
    $("#signup-form").validate({
        fname:{
            required:true,
            minlength:4
        }
    })
})