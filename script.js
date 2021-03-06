$(document).ready(function(){
    $("#signup-form").validate({
        rules:{ 
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            password:{
                minlength:6
            },
            day:{
                required:true
            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"enter firstname",
                minlength:"atleast4"
            }
        }
    })
})