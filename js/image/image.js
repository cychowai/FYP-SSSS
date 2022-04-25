var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('myCanvas1');
var ctx = canvas.getContext('2d');

function handleImage(e){
    var reader = new FileReader();
	
    reader.onload = function(event){
		var img = new Image();
		
        img.onload = function(){
			//var canvas = ctx.canvas;
			canvas.width = 400;
			canvas.height = 300;
			
			var hRatio = canvas.width  / img.width;
			var vRatio =  canvas.height / img.height;
			var ratio  = Math.min ( hRatio, vRatio );
			var centerShift_x = ( canvas.width - img.width*ratio ) / 2;
			var centerShift_y = ( canvas.height - img.height*ratio ) / 2;
			ctx.clearRect(0,0,canvas.width, canvas.height);
			
			canvas.width = img.width * ratio;
			canvas.height = img.height * ratio;
			
			//ctx.drawImage(img, 0,0, img.width, img.height,centerShift_x,centerShift_y,img.width*ratio, img.height*ratio);
			ctx.drawImage(img, 0,0, img.width*ratio, img.height*ratio);
						
			var imgData = ctx.getImageData(0, 0, img.width, img.height);
			console.log(imgData);
        }
        img.src = event.target.result;
		console.log(img.src);
		imageLoader.src = img.src;
		imageLoader.width = img.width;
		imageLoader.height = img.height;
    }
	if (e.target.files[0]){
		reader.readAsDataURL(e.target.files[0]);
		console.log(e.target.files[0]);
	}	
}
