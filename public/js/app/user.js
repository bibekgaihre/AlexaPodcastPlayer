class User {
  login() {
    var email = $("input[name='email']").val();
    var password = $("input[name='pass']").val();
    let data = { email, password };
    $.ajax({
      url: "/api/v1/user/login",
      method: "POST",
      data
    })
      .done(function(data) {
        console.log(data);
        window.location.replace("/");
      })
      .fail(function(err) {
        $("#msg").html(err.responseJSON.message);
        $("#msg").show();
      });
  }
}
