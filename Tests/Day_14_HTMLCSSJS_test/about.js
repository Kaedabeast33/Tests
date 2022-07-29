console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("thanks for joining the Army Brigades but for Cats aka. ABCs your application was added succesfully")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);