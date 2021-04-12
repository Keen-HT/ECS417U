$( document ).ready(function() {

$("#clear-button").on("click",function(){
	$("#username").val('');
	$("#password").val('');
});

$("#clear-button2").on("click",function(){
	$("#title").val('');
	$("#body").val('');
});

//Assessment Criteria 2
$('form[name="login"]').on("submit",function(e){
		$(".invalid-feedback").remove();
		$(".required").each(function(index){
			$(this).removeClass("is-invalid");
			if (String($( this ).val()).length === 0) {
        		$(this).after('<div class="invalid-feedback">Please provide a valid '+$(this).attr('id')+'.</div>');
        		$(this).addClass("is-invalid");
        		e.preventDefault();
			}
		});    
		$(".invalid-feedback").show();  
});



});