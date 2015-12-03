// Prototype based object orientated language
// Add contains in Array.prototype
Array.prototype.contains = function (val)
{
	for(var i = 0; i < this.length; i++){
		if(this[i] == val){
			return true;
		}
	}
	return false;
}

person = {
	getFullName:function(){
		return this.firstName + this.lastName;
	},
	increaseAge:function(){
		this.age++;
	}
}

function extend(obj){
	function E(){};
	E.prototype = obj;
	return new E();
}

// Functional Programming
f = function(){
	console.log('Hello World');
}

f2 = function(i){
	return i % 2 == 0;
}

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
a.filter(f2)

a.filter(function(i){return i % 2 == 0})
a.map(function(i){return i * i; }).filter(function(i){return i % 2 == 0;})
a.map(function(i){return i * i; }).filter(function(i){return i % 2 == 0;}).reduce(function(total, currentvalue, index, array){
	// console.log('currentvalue is ' + currentvalue);
	// console.log('total is ' + total);
	return total += currentvalue;})

[1, 2, 3, 4, 5].reduce(function(total, currentvalue, index, array){
	console.log('Current value is ' + currentvalue);
	console.log('Total is ' + total);
	total += currentvalue;
})

// function arguments
function add(){
	var result = 0;
	for(var i = 0; i < arguments.length; i++){
		result += arguments[i];
	}
	return result;
}

// Closure
function f2(){
	var i = 0; 
	return function(){
		return ++i;
	}
}

function createIncrementer(){
	var i = 0; 
	return {
		increment:function(){
			return ++i;
		}
	};
}