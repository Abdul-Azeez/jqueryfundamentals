function Regex() {

}

Regex.prototype.validate = function() {
	var number = document.getElementById("number");
	var result = document.getElementById("result");
	var submit = document.getElementById("submit");
	var regex = /(^\d+)|((^\d+).(^\d+))$/;
	var match = regex.test(number.value);
	result.value = match;
	if ((result).value == false) {
		submit.onclick="return false"
	}

}

var check = new Regex();
