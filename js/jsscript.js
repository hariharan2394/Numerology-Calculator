function store(){
	var firstName,lastName,dob;
	var Fflag=Lflag=Dflag=0;
	firstName=document.getElementById('first').value;
	lastName=document.getElementById('last').value;
	dob=document.getElementById('dob').value;
	localStorage.setItem("firstName",firstName);
	localStorage.setItem("lastName",lastName);
	localStorage.setItem("dob",dob);
	if(firstName!=null && firstName!=""){
		Fflag=1;
	}
	else{
		document.getElementById('errorFirst').innerHTML="Please enter the First Name";
	}

	if(lastName!=null && lastName!=""){
		Lflag=1;
		
	}
	else{
		document.getElementById('errorLast').innerHTML="Please enter the Last Name";
	}
	if(dob!=null && dob!=""){
		Dflag=1;
	}
	else{
		document.getElementById('errorDob').innerHTML="Please enter the DOB";
		
	}
	if(Fflag==1 && Lflag==1 && Dflag==1)
	{
		return true;
	}
	else{
		return false;
	}
}
function get(){
	var first=localStorage.getItem("firstName");
	var last=localStorage.getItem("lastName");
	var dob=localStorage.getItem("dob");
	
	document.getElementById('dispFirstName').innerHTML=first;
	document.getElementById('dispLastName').innerHTML=last;
	document.getElementById('dispDob').innerHTML=dob;

	var name=first.concat(last);
	var finalName=name.replace(/[\W_]/g,"");
	var finalName=finalName.toLowerCase();
	var nameArray=finalName.split("");
	var nameSum=0;

	for (var i = 0; i < nameArray.length; i++) {
		
		if(nameArray[i]==='a' || nameArray[i]==='j' || nameArray[i]==='s')
		{
			nameArray[i]=1;
		}
		else if(nameArray[i]==='b' || nameArray[i]==='k' || nameArray[i]==='t')
		{
			nameArray[i]=2;
		}
		else if(nameArray[i]==='c' || nameArray[i]==='l' || nameArray[i]==='u')
		{
			nameArray[i]=3;
		}
		else if(nameArray[i]==='d' || nameArray[i]==='m' || nameArray[i]==='v')
		{
			nameArray[i]=4;
		}
		else if(nameArray[i]==='e' || nameArray[i]==='n' || nameArray[i]==='w')
		{
			nameArray[i]=5;
		}
		else if(nameArray[i]==='f' || nameArray[i]==='o' || nameArray[i]==='x')
		{
			nameArray[i]=6;
		}
		else if(nameArray[i]==='g' || nameArray[i]==='p' || nameArray[i]==='y')
		{
			nameArray[i]=7;
		}
		else if(nameArray[i]==='h' || nameArray[i]==='q' || nameArray[i]==='z')
		{
			nameArray[i]=8;
		}
		else if(nameArray[i]==='i' || nameArray[i]==='r')
		{
			nameArray[i]=9;
		}
	}
	
	for(var j=0;j<nameArray.length;j++){
		nameSum=nameSum+nameArray[j];
	}
	
	if(getLength(nameSum)!=1)
	{
		var subNameSum,arraySum;
		while(true){
			subNameSum=0,arraySum=0;
			arraySum=nameSum.toString().split("").map(function(t){return parseInt(t)});
			for(var k=0;k<arraySum.length;k++){
				subNameSum=subNameSum+arraySum[k];
			}
			nameSum=subNameSum;
			if(getLength(nameSum)===1){
				break;
			}
		}
		
	}
	document.getElementById('dispNameNo').innerHTML=nameSum;

	var dobArray=dob.split("-");
	var dobDateArray=dobArray[2].toString().split("").map(function(t){return parseInt(t)});
	var dobNo=dobDateArray[0]+dobDateArray[1];
	document.getElementById('dispDobNo').innerHTML=dobNo;

	if(nameSum!=4 && nameSum!=7 && nameSum!=8){
		document.getElementById('dispResultPass').innerHTML="Your Name is Acceptable!";
	}
	else
	{
		document.getElementById('dispResultFail').innerHTML="Your Name is Incorrect!";
	}
}
function getLength(number){
	return number.toString().length;
}
