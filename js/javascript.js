var x = 1000;
		var y = 900;
		// Variables//====
		alert("You have a virus Al.");
		console.log(x + y);
		alert("NYCDA Lesson 5 tarea.");
		// an alert shows up, las variables x & y se suman.

		var today = new Date();
        // Create a new date object
		var hourNow = today.getHours();
		// find the current hour

	    if (hourNow > 18) {
	    	greeting = 'Good Evening Al';
	    } else if (hourNow > 12) {
	    	greeting = 'Good afternoon Al';
        } else if (hourNow > 0) {
        	greeting = 'Good morning Al';
        } else {
        	greeting = 'Welcome';
        }
document.write(greeting);
		// Display the appropriate greeting based on the current time

		var string = "Hola ";
		// stringone is a text string, x and y are number data
		var carrier = ["att", "tmobile", "verizon"];
		var internet = ["1gb", "2gb", "5gb"];
		var plan = [carrier, internet];
		// two arrays nested inside of a multi-dimensional array
		if(x>y) {
			console.log("x is greater than y");
		} else if (x===y){
			console.log("x equals y");
		} else {
			console.log("x is less than y");
		}
		// testing and a logic statement 
		function greeting(name) {
			alert(stringone + name);
		}
		function addition(inputnumber) {
			console.log(x + y + inputnumber);
		}
		function getfood(smallnumber) {
			if (smallnumber>10) {
				console.log("Pick a number between 0 and 10");
			} else {
				console.log("You will have a " + food[smallnumber]);	
			}
		}
		// three functions that require input