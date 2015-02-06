function Urluser()
{
  this.person = prompt("Please enter your URL", "http://")
}
  
Urluser.prototype.validate = function(e) {
                    switch(e && e.trim()) {
                        case "":
                        case 0:
                        case "0":
                        case null:
                        case false:
                        case typeof this == "undefined":
                            return true;
                                default : return false;
                    }
                }

var windowObjectReference;
var strWindowFeatures = "menubar=no,location=no,resizable=no,scrollbars=no,status=no,toolbar=no, width=400px height=450px";

Urluser.prototype.openRequestedPopup=  function() {
  if (this.validate(this.person)== true) {
    while (true) {
    alert("Please you inputed an empty string")
    return;
  }
  }
  windowObjectReference = window.open(this.person, "Openurl", strWindowFeatures);

}

object1= new Urluser()
object1.openRequestedPopup()