function passvalues()
{
	var username=document.getElementById("txt").value;
	localStorage.setItem("textvalue",username);
	return false;

}

document.getElementById("result").innerHTML=localStorage.getItem("textvalue");