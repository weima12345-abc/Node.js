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
	  window.location.href='/person/delete1/'+index;

	} else {
	  swal("Your imaginary file is safe!");
	}
 });

});
//修改
Array.from( document.getElementsByClassName("i")).forEach(i=>i.onclick=function(){
	let index=	this.getAttribute("data-id");
	window.location.href='/person/update1/'+index;


	});
// //查询	
// 	function search(){
// 		window.location.href='/e';
// 	}