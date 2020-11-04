let txtColor = $('#nav').children();
$(txtColor).css('color', 'white');
$('#nav').css('background-color', '#145');
$('li:contains("An even list item")').css('background-color', '#ccc');
$('li:contains("An odd list item")').css('background-color', '#aaa');
$('#myInput').attr('placeholder', 'Ian');