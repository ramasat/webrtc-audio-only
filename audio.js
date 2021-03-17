function gotStream(myStream)
{
	console.log("Got the Stream");
    stream = myStream;
	
	localAudio = document.getElementById("localAudio");
	try 
	{
		localAudio.srcObject = stream;		
		console.log('Assigned to srcObject');
	}
	catch (error)
	{
		console.log(error);
		localAudio.src = URL.createObjectURL(stream);
		console.log('Assigned to src');
	}
	console.log('Local Audio Streaming');
}

function handleAudio() 
{
	console.log("START!!");
	//getting local video stream 
    navigator.mediaDevices.getUserMedia({ audio: true })
	  .then(gotStream)
	  .catch(function (err) { 
	   console.log(err.name + ": " + err.message);         
      });
}

var localAudio;
var stream;
