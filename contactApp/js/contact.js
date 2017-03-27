export class Contact{

	constructor(firstName, lastName, phoneNumber, email){
		this.__firstName__= firstName;
		this.__lastName__= lastName;
		this.__phoneNumber__= phoneNumber;
		this.__email__= email;
	}

	get firstName(){
		return this.__firstName__;
	}

	set firstName(first){
		this.__firstName__ = first;
	}

	get lastName(){
		return this.__lastName__;
	}

	set lastName(last){
		this.__lastName__ = last;
	}

	get phoneNumber(){
		return this.__phoneNumber__;
	}

	set phoneNumber(number){
		this.__phoneNumber__ = number;
	}

	get email(){
		return this.__email__;
	}

	set email(address){
		this.__email__ = address;
	}
};



