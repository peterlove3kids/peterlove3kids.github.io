//document ready
let name = $("#name").val();
let gender = $("input[name='radio_gender_f']:checked").val()
let games = []
let note = $("#text_note").val();
$(function(){
    //文字框賦值
    $("#name").val('劉彼得');
    //文字框取值
    console.log("name is: " + name);
    //下拉選單賦值
    $("#sel_bdy").val('1984')
    console.log("bdy is: " + bdy);
    //radio賦值
$("input[name='radio_gender_f'][value='f']").prop("checked", true);
//radio取值

console.log("gender is: " + gender);
//checkbox賦值
$("#check_games_1").prop("checked", true);
$("input[name='check_games'][value='1']").prop("checked", true);
//checkbox取值

$.map($("input[name='check_games']:checked"), function (el) {
   games.push($(el).val())
//textarea賦值
$("#text_note").val('Hi!劉彼得');
//textarea取值

console.log("note is: " + note);
})
console.log("games is: " + games);
 })
 $("#send").click(function(e){ send(e); });
 function send(event)
{
    //很重要
   event.preventDefault();
   console.log("name is: " + name);
   console.log("bd is: " + bdy + "-" + bdm + "-" + bdd);
   console.log("gender is: " + gender);
   console.log("games is: " + games);
   console.log("note is: " + note);
}
