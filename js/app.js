export class App{

	constructor(contact){
		this.__contacts__ = new Set();
		this.__contacts__.add(contact);
	}

	add(contact){
		this.__contacts__.add(contact);
	}

	edit(contact){
		//Fix to update the correct set
		var app = this;
		
		for(person of app.__contacts__){
			if(contact.firstName() == person.firstName() && 
				contact.lastName() == person.lastName()){
				app.__contacts__.delete(person);
				app.__contacts__.push(person);
			}
		}		
	}

	delete(contact){
		this.__contacts__.delete(contact);
	}
};