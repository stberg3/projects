function simplifyPage(){
				document.body.innerHTML = document.getElementsByClassName("article")[0].innerHTML;
}


function removeImages(){
				for(var i=0; i<document.getElementsByTagName("img").length;i++){
					document.getElementsByTagName("img")[i].parentElement.removeChild(document.getElementsByTagName("img")[i]);
				}
}

function hasNextPage(){
				next.classList.contains("disabled");
}
