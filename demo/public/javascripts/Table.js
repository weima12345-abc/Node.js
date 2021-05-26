window.onload=function() {
	var ups=document.getElementsByClassName("upBtn");//升序按钮集合
	var downs=document.getElementsByClassName("downBtn");//降序按钮集合

	//注册升序排列处理程序
	for(var i=0,len=ups.length;i<len;i++)
		ups[i].onclick=ascOrder;

	//注册降序排列处理程序
	for(var i=0,len=downs.length;i<len;i++)
		downs[i].onclick=desOrder;
}

function ascOrder() {
	var col=this.parentNode.cellIndex;//需要排序的列序号

	var  tbody=document.getElementsByTagName("tbody");
	for(var i=0,len=tbody[0].children.length,trs=tbody[0].children;i<len-1;i++)
		for(var j=i+1;j<len;j++) {
			var x=Number(trs[i].children[col].innerText),y=Number(trs[j].children[col].innerText);
			if(x>y) {
				var t=trs[i].innerHTML;
				trs[i].innerHTML=trs[j].innerHTML;
				trs[j].innerHTML=t;
			}
		}
}

function desOrder() {
	var col=this.parentNode.cellIndex;//需要排序的列序号

	var  tbody=document.getElementsByTagName("tbody");
	for(var i=0,len=tbody[0].children.length,trs=tbody[0].children;i<len-1;i++)
		for(var j=i+1;j<len;j++) {
			var x=Number(trs[i].children[col].innerText),y=Number(trs[j].children[col].innerText);
			if(x<y) {
				var t=trs[i].innerHTML;
				trs[i].innerHTML=trs[j].innerHTML;
				trs[j].innerHTML=t;
			}
		}
}
//删除
Array.from( document.getElementsByClassName("o")).forEach(i=>i.onclick=function(){
	
	swal({
	title: "Are you sure?",
	text: "Once deleted, you will not be able to recover this imaginary file!",
	icon: "warning",
	buttons:true,
	function(){
		if(buttons==true){
				
		}
	},

	dangerMode: true
  })
 

 
  
  .then((buttons) => {
	if (buttons==true){
		
	  swal("Poof! Your imaginary file has been deleted!", {
		icon: "success",
		function(){
			if(icon=="success"){
					
			} 
		}
	  }
	  ); 
	  let index=	this.getAttribute("data-id");
	  window.location.href='/delete/'+index;

	} else {
	  swal("Your imaginary file is safe!");
	}
 });

});
//修改
Array.from( document.getElementsByClassName("i")).forEach(i=>i.onclick=function(){
	let index=	this.getAttribute("data-id");
	window.location.href='/update/'+index;
	});
	function search(){
		window.location.href='/e';
	}

	