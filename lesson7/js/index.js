//document ready
$(function(){
    //文字框賦值
    $("#name").val('劉彼得');
    //文字框取值
    let name = $("#name").val();
    console.log("name is: " + name);
    //下拉選單賦值
    $("#sel_bdy").val('1984')
    console.log("bdy is: " + bdy);
    //radio賦值
$("input[name='radio_gender_f'][value='f']").prop("checked", true);
//radio取值
let gender = $("input[name='radio_gender_f']:checked").val()
console.log("gender is: " + gender);
//checkbox賦值
$("#check_games_1").prop("checked", true);
$("input[name='check_games'][value='1']").prop("checked", true);
//checkbox取值
let games = []
$.map($("input[name='check_games']:checked"), function (el) {
   games.push($(el).val())
})
console.log("games is: " + games);
 })
 