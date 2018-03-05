$(function(){
    console.log('Hello, world!');
    $('h1').hide();

    $("li:eq(0)").addClass("podvuceno");
    $('li').addClass('uppercase');
    $('li:nth-child(2)').addClass('active');
    var n = ($('li').length - 1) / 2;
    $('li:eq('+ n +')').addClass('redbg');
    
});