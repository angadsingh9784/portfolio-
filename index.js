
$('#filter-items li').click(function(){ 
    $('#filter-items li').removeClass('active');
   var ab =  $(this).find('a').attr('data');
   $(this).addClass('active');
   $('.content').hide();

   $(ab).fadeIn()

   console.log(ab);
    
 
});