numItems=document.getElementsByClassName('playCount').length;
count=0;
while (count<numItems) {
	tempItemLength=document.getElementsByClassName('playCount')[count].innerHTML.substr(12,document.getElementsByClassName('playCount')[0].innerHTML.length-1);
	eval("item"+count.toString()+"=tempItemLength");
	count++;
}
count=0;
totalCount=0;
list=[];
itemOrder=[];
while (totalCount<numItems) {
	count=0;
	itemLarger=false;
	listLength=list.length;
	while (count<=listLength && itemLarger==false) {
		if (eval("parseInt(item"+totalCount+")>list[count]")==true){
			list.splice(count,0,eval("parseInt(item"+totalCount+")"));
			itemOrder.splice(count,0,totalCount);
			itemLarger=true;
		}
		count++;
	}
	if (itemLarger==false) {
		list.push(eval("parseInt(item"+totalCount+")"));
		itemOrder.splice(count,0,totalCount);
	}
	totalCount++;
}

//console.log(list);
//console.log(itemOrder);

myDiv=document.createElement("DIV");
myDiv.setAttribute("id","orderedDiv");
document.body.append(myDiv);

count=0;
while (count<numItems) {
	itm=document.getElementsByClassName("sound-details")[itemOrder[count]];
	cln=itm.cloneNode(true);
	document.getElementById("orderedDiv").append(cln);
	document.getElementsByClassName("sound-details")[itemOrder[count]].style.display='none';
	count++;
}