$(document).ready(function(){
  $("input[type='button']").click (function (event) {

    var question1 = parseInt($("input[name='abb']:checked").val());
    var question2 = parseInt($("input[name='ques2']:checked").val());
    var question3 = parseInt($("input[name='ques3']:checked").val());
    var question4 = parseInt($("input[name='ques4']:checked").val());
    var question5 = parseInt($("input[name='ques5']:checked").val());
    var question6 = parseInt($("input[name='ques6']:checked").val());
    var question7 = parseInt($("input[name='ques7']:checked").val());
    var question8 = parseInt($("input[name='ques8']:checked").val());
    var question9 = parseInt($("input[name='ques9']:checked").val());
    var question10 = parseInt($("input[name='ques10']:checked").val());

      var total = question1 + question2 + question3 + question4 + question5 + question6 + question7 + question8 + question9 + question10
      alert(total);
      document.getElementById("output").innerHTML = "Hurrrayyyyy you have scored " + total+ "%";
      event.preventDefault();
  });
});
