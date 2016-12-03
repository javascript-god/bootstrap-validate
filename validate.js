
// TODO: Refactor selector


function getElement (selector, context = document) {
	return context.querySelector(selector);
}

function addEvents (el, evt, handler) {
	el.addEventListener(evt, handler);
}
		
function validateForm(selector) {
	
	function getTextInputFields(form){
		var inputs = Array.from(form.querySelectorAll('input'));
		return inputs.filter(function(input){
			return textInputTypes.indexOf(input.type) > -1;
		})
	}

	function onformSubmit(e) {
		e.preventDefault();
		for(var counter = 0, valid = 0; counter < textInputFields.length; counter++) {
			if(textInputFields[counter].value.length >= 6) {
				valid++;
			}
		}

		if(valid === textInputFields.length) {
			alert('valid!');
			this.submit();
		}
		else {
			console.log('invalid!'); 
		}
	}

	var textInputTypes = ['email', 'password', 'text', 'tel', 'url'];
	var form = getElement(selector);	
	var textInputFields = getTextInputFields(form);
	console.log(textInputFields);
	addEvents(form, 'submit', onformSubmit);
}

validateForm('#login');
