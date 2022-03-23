$(document).ready(function(){
    var count = 0
    var total = $('#slider li').length;

setInterval(function(){
    count ++
    count %= total

    $('#slider li').eq(count).addClass('show').siblings().removeClass('show')
},3000)

$('.tab h3').click(function(){
    $('.tab > div').removeClass('on');
    $(this).parent().addClass('on')
})


$('#trigger').click(function(){
    $('.popup').removeClass('d-none');
$('.popup button').click(function(){
    $('.popup').addClass('d-none');
})
})



})