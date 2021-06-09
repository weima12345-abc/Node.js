//修改
Array.from( document.getElementsByClassName("i")).forEach(i=>i.onclick=function(){
	let index=	this.getAttribute("data-id");
	window.location.href='/manage_p_b/update/'+index;
})
