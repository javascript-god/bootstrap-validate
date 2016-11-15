

var inputFields = document.querySelectorAll('input:not(.form-check-input)');
		
function validateForm() {

	for(var counter = 0, valid = 0; counter < inputFields.length; counter++) {
		if(inputFields[counter].value.length >= 6) {
			valid++;
		}
	}

	if(valid === inputFields.length) {
		console.log('valid!')
	}
	else {
		console.log('invalid!');
	}

}

var buttonSubmit = document.querySelector('.btn');
buttonSubmit.addEventListener("click", validateForm);