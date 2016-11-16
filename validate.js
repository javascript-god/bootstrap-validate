
// TODO: Refactor selector
function getInputFields(form){
	return form.querySelectorAll('input:not(.form-check-input)');
}

function getElement (selector, context = document) {
	return context.querySelector(selector);
}

function addEvents (el, evt, handler) {
	el.addEventListener(evt, handler);
}
		
function validateForm(selector) {

	function onformSubmit(e) {
		e.preventDefault();
		for(var counter = 0, valid = 0; counter < inputFields.length; counter++) {
			if(inputFields[counter].value.length >= 6) {
				valid++;
			}
		}

		if(valid === inputFields.length) {
			alert('valid!');
			this.submit();
		}
		else {
			console.log('invalid!'); 
		}
	}

	var form = getElement(selector);	
	var inputFields = getInputFields(form);
	console.log(getElement('#exampleInputPassword1', form));
	addEvents(form, 'submit', onformSubmit);
}

validateForm('#login');
