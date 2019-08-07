function fun() {
  a = document.forms["a"]["tx1"].value;
  b = document.forms["a"]["tx2"].value;
  if (a == "" || b == "") {
    alert("The Fealds are empty");
    return false;
  } else if (a == "admin" && b == "admin123") {
    return true;
  } else {
    alert("Wrong Id or Password");
    return false;
  }

}
