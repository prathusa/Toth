const tl = gsap.timeline()
function indexIntro(){
tl
.from('.background-pattern', {
	opacity: 0,
		duration: 1.3,
		ease: "power1",
})
.to('.left-panel', 
	{
		
		autoAlpha:1,
		duration: 1,
		y: -25, 
		ease: "power3",
		delay:0.3
	}, "-=1.1")

.from('.button-pattern', 
	{
		autoAlpha:0,
		duration: 1,
		y: -50,
		ease: "power2",
	}, "-=.9")

.from('.button', 
	{
		autoAlpha:0,
		duration: 1,
		x: 50,
		ease: "power2",
	}, "-=.9");
}
function indexOutro(){
tl
.add(function(){
	//document.querySelector(".button").style.color = "var(--accent)"
})
.to(".button",{
	position:"relative",
	left: "0em",
	ease: "circ",
	duration:1
})

.to(".button-pattern", {
	position:'absolute',
	height: "62%",
	ease: "circ",	
	duration: 1
})
.to(".button-pattern", {
	width:"100%",

})

}




if(window.location.pathname == "/"){
	indexIntro()


}
else
{
	var len1 = document.querySelectorAll(".article-main")[0].offsetHeight;
	var len2 = document.querySelectorAll(".article-main")[1].offsetHeight;
	for(let i = 120; i<len1 + len2; i = i+120){
		
		let num = document.createElement("P")
		num.innerHTML= i/24
		if(i>len1)
		document.querySelectorAll(".line-num")[1].appendChild(num)
		else
		document.querySelectorAll(".line-num")[0].appendChild(num)	
	}
document.querySelector(".line-num p").style.paddingTop = document.querySelector(".instructions").offsetHeight +  document.querySelector(".article-intro").offsetHeight + 120 + "px"

document.getElementById("next").addEventListener("click", () => {
	//if index is less than 20
	var fullQuery = window.location.search
	var query = fullQuery.split("=")[0]
	var queryValue = parseInt(fullQuery.split("=")[1])
	var newQuery = queryValue + 1
	
	if(queryValue<19 && query == "?index"){ 

		window.location.href = `?index=${newQuery}`;
	}	
	
	else{ 
	if(queryValue == 19) {
		var newQuery =0
	}
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `get-article?load=${newQuery}`)

    if(xhr.readyState == 1){
    	document.querySelector("main").style.display= "none"
		document.querySelector(".loader-container").style.display= "inherit"
    }
    xhr.onerror = function(){
    console.log('Request Error...');
    }
      
    xhr.send();
	window.location.href = `get-article?load=${newQuery}`
	}


})

document.getElementById("back").addEventListener("click", () => {
history.back()
})


}










