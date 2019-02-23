$(document).ready(function(){
  $("input[type='button']").click (function (event) {

    var question1 = parseInt($("input[name='abb']:checked").val());
      var question2 = parseInt($("input[name='ques2']:checked").val());
      var total = question1 + question2;
      alert(total);
      document.getElementById("output").innerHTML = total;
      event.preventDefault();
  });
});
