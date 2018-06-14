
const expect = require('chai').expect
const translator = require('..').default 

describe('#translator', function(){

	it('Si la palabra termina en ar se le quitan esos dos caracteres', function(){
		const translation = translator("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la palabra inicia con Z, se le aumenta pe al final', function(){
		const translation = translator("Zorro")
		const translation2 = translator("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})

	it('Si la palabra tiene 10 o mas letras se debe partir a la mitad y unir con - en el medio', function(){
		const translation = translator("abecedario")
		expect(translation).to.equal("abece - dario")
	})

	it('Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function(){
		const translation = translator("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})