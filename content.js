//alert("Hi from read-it");

// var firstHref = $("a[href^='http']").eq(0).attr("href");

// console.log(firstHref);

//console.log($("#testc").html());


alert("Hi from read-it");

InboxSDK.load(1, 'sdk_dibyadas_b332aae32c').then(function(sdk){

  // the SDK has been loaded, now do something with it!
  sdk.Compose.registerComposeViewHandler(function(composeView){

    // a compose view has come into existence, do something with it!
    //var send = document.querySelector('div.editable[role="textbox"][aria-label="Message Body"]');
    //console.log(send);
    // send.innerHTML = '';
    // var sendHandler = function() {
    // 	console.log("clicked send!");
    // 	var msg;
    // 	console.log()
    // };
    //send.addEventListener('click', sendHandler, false);
    composeView.on('presending', function(event){
    	var msg = composeView.getBodyElement().innerHTML;
    	composeView.getBodyElement().innerHTML = '';
        // this.insertHTMLIntoBodyAtCursor("<head><meta http-equiv='Content-Security-Policy' content='img-src  https://016ff7a5.ngrok.io/image'> </meta></head>"+"<br>"+msg+"<img src='https://016ff7a5.ngrok.io/image' />");
        this.insertHTMLIntoBodyAtCursor(msg+"<img crossorigin='anonymous' src='https://6bfe7dc6.ngrok.io/image?v="+Math.random()+"' />");
  	});

	});
});