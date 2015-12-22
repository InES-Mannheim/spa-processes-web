(function() {
    var $;

    $ = jQuery;
    
    $.showSuccessMessage = function(message){
        $.bootstrapGrowl(message, {
                            type: "success", //danger, info, success
                            align: "right",
                            width: "auto",
                            offset: {from: 'top', amount: 13}
                           }
                        );  
        return this;
    };
 
    $.showErrorMessage = function(message){
         $.bootstrapGrowl(message, {
                                type: "danger", //danger, info, success
                                align: "right",
                                width: "auto",
                                offset: {from: 'top', amount: 13}
                               }
                        );
        return this;
    };

}).call(this);