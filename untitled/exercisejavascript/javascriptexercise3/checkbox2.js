// <script>
function checkBox() {


}

checkBox.prototype.SetAllCheckBoxes= function(FormName, FieldName, CheckValue)
{
  if(!document.forms[FormName])
    return;
  var objCheckBoxes = document.forms[FormName].elements[FieldName];
  if(!objCheckBoxes)
    return;
  var countCheckBoxes = objCheckBoxes.length;
  if(!countCheckBoxes)
    objCheckBoxes.checked = CheckValue;
  else
    // set the check value for all check boxes
    for(var i = 0; i < countCheckBoxes; i++)
      objCheckBoxes[i].checked = CheckValue;
}


function chkcontrol(j) {
var total=0;
for(var i=0; i < document.myForm.myCheckbox.length; i++){
if(document.myForm.myCheckbox[i].checked){
total =total +1;}
if(total > 3){
alert("Please Select only three")
document.myForm.myCheckbox[j].checked = false;
return false;
}
}
} 

var checkbox1 = new checkBox();