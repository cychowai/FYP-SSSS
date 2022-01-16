var fileUpT = function (me) {
	base64Image({
		width: 400,
		ratio:  0.8,
		file: me,
		callback: function (imageUrl){
			
			if (imageUrl) {
				//document.getElementById("secret-input").value = imageUrl;
				var key = imageUrl;
				var noOfShares = document.getElementsByClassName("noOfShares")[0].value;
				var threshold = document.getElementsByClassName("threshold")[0].value;
			}
			
			console.log("secret : ", key);
			
			//splitSecret()
			var shareCount = parseInt(noOfShares);
			var threshold = parseInt(threshold);

			if (threshold > shareCount) {
				alert('Required shares must be lower or equal to the number of shares');
				return;
			}

			var shares = secrets.share(secrets.str2hex(key), shareCount, threshold);

			var shareString = "";

			for(var i = 0; i < shares.length; i++) {
				shareString += "Share " + parseInt(i+1) + "/" + shares.length + ": " + shares[i] + "\n";
			}

			document.getElementById("shares").value = shareString;
			checkUpdate();
		},
	});
};