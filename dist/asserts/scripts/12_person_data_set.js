jQuery(document).ready(function($) {
    $(".base-edit").click(function(){
        $('#base-edit-modal').modal('show');
        $(".modal-body").html("<div class='row'><input type='text' class='col-xs-8 col-xs-offset-2' id='edit-msg'></div>");
    });
});