function submit_btn(n,m){
    console.log(n,m);
   var reslut= Math.floor(Math.random()*(m-n+1)+n);
	d3.select(".input").text(reslut);
}

