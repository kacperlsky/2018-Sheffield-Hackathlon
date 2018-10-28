// Useful functions for reunite.me


/*** HTML output ***/

function displayPosts(arrFromDatabase, containerElement) {
	
	var arrLength = arrFromDatabase.length;
	for (var i = 0; i < arrLength; i++) {
		
		var post = document.createElement("table");
		var objPost = arrFromDatabase[i];
		$.each(objPost, function(key, value) {
			
			var field = document.createElement("tr");
			var fieldName = document.createElement("th");
			var fieldValue = document.createElement("td");
			
			fieldName.innerText = key;
			fieldValue.innerText = value;
			
			field.appendChild(fieldName);
			field.appendChild(fieldValue);
			post.appendChild(field);
		});
		containerElement.appendChild(post);
	}
} 

function showPopup(popupElement, blurElement) {
	
	popupElement.style["z-index"] = "1";
	popupElement.style["opacity"] = "1";
	if (blurElement) {
		blurElement.style.filter += " blur(1rem)";
	}
}

function hidePopup(popupElement, blurElement) {
	
	popupElement.style["z-index"] = "-1";
	popupElement.style["opacity"] = "0";
	if (blurElement) {
		var blurFilter = /\s*blur\s*\(.*?\)/gi;
		blurElement.style.filter = blurElement.style.filter.replace(blurFilter, "");
	}
}

function togglePopup(popupElement, blurElement) {
	
	var popupVisible = (parseInt(popupElement.style.opacity)) ? true : false;
	
	if (popupVisible) {
		hidePopup(popupElement, blurElement);
	}
	else {
		showPopup(popupElement, blurElement);				
	}
}


/*** Form data handling ***/

function parseDate(str, outputAsArray) {
	// Output: string in the format "YYYY-MM-DD" (default) or array in the format [year, month, day]
	
	// Split string into an array of numbers
	var arr = str.match(/\d+/g);
	// Check to see that a possible date has been found
	if (arr.length == 3) {
		// If the first number is over 31, assume it's the year; else assume the last number is the year
		var year = arr[0] > 31 ? arr.shift() : arr.pop();
		// If the year has been given as a two-digit number, add the century digits
		if (year < 100) {
			var todaysDate = new Date();
			var nearestCentury = Math.floor((todaysDate.getFullYear() - year) / 100);
			year = String(nearestCentury) + String(year);
		}
		// If the new second number is over 12, assume it's the day; else assume the first number is the day
		var day = arr[1] > 12 ? arr.pop() : arr.shift();
		if (day.length < 2) day = "0"+ day;
		// That just leaves the month...
		var month = arr.pop();
		if (month.length < 2) month = "0"+ month;
		
		// Date validation rules to go here
		if (day > 0 && day <= 31 && month > 0 && month <= 12) {
			if (outputAsArray) {
				return [+year, +month, +day];
			}
			else {
				return year +"-"+ month +"-"+ day;
			}
		}
		else return null;
	}
	else return null;
}

function isEmailAddress(str) { // Output: boolean

	// Trim string, test for email format x@x.xx
	return /[\w\.]+@[\w\.]+\.\w{2,}/.test(str.replace(/^\s+|\s+$/g, ""));
}

function isEmpty(value) { // Output: boolean
	return (value === "" || value === null || value === undefined);
}

function isCompletedForm(formElement) { // Output: boolean
	
	for (var name in formElement) {
		if (isEmpty(formElement[name].value)) return false;
	}
	return true;
} 
