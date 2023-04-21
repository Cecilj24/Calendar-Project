// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  $('.saveBtn').on('click', function(){
    var operate = $(this).siblings('.description').val();
   var time =  $(this).parent().attr('id');
   console.log(operate);
   console.log(time);

   localStorage.setItem(time ,  operate);

  })

  
  $('#currentDay').text(dayjs().format('MM-D-YYYY'));
});
