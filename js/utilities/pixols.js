setTimeout(funcChangeSpan,1000);
var span1=document.querySelector(".pixoHeader-tagline");
var activeText=0,count=0,words=new Array("Passion","Creativity", "Innovation", "Coding", "Photos", "Fun");
function funcChangeSpan(){
	if(activeText>=5) activeText=0;
	else activeText++;
	count=0;
	setTimeout(func1,500);
}

function func1(){
	span1.style.color="#000000";
	span1.style.backgroundColor="white";
	setTimeout(func2,500);
}

function func2(){
	span1.innerHTML="";
	span1.style.backgroundColor="#000000";
	span1.style.color="white";
	setTimeout(func3,500);
}

function func3(){
	count++;
	span1.innerHTML=words[activeText].substring(0,count);
	if(count<=words[activeText].length)
		setTimeout(func3,100);
	else
		setTimeout(funcChangeSpan,1000);
}