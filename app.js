function showMessage() {
	var name=document.getElementById("name").value;
	var city=document.getElementById("city").value;
    var msg="Hi "+name+"! Welcome to vodafone "+city+".";
	document.getElementById("p1").innerHTML =msg;
	document.getElementById('p1').style.display = "block";
}

function showDiv(){
	document.getElementById('form').style.display = "block";
}


