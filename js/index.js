            $(document).on("keydown", ":input:not(#note)", function(e){
            if(e.which == 13 || e.which == 190) {
                e.preventDefault();
                $("#clr").text( $("#dst").val() );
                var i = $(":input").index(this);
                if(e.shiftKey)
                    $(":input").eq(i-1).focus();
                else
                    $(":input").eq(i+1).focus();
                }
            });
