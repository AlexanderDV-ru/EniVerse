//--- Name: UtilityFunctions/Vesion: 0.0.5a/Authors: AlexanderDV/Description: Utility functions .js. ---
// String&number functions
function multiplyStr(a, b){
	var result = ""
	for (; a.length * b > result.length;)
		result += a[result.length % a.length]
	return result
}
function withoutAnySpace(t){
	return t.replace(/(\s+)|(\s+)/g,"")
}
function normalName(t){
	return t.replace(/(^\s+)|(\s+$)|(^\s+$)|(^\s)|(\s$)|(^\s$)/g,"").replace(/(\s+)|(\s+)/g," ")
}
// Pythonic config to JS object convert
function parsePythonic(pythonic){
	var json={},stack=[json]
	pythonic=pythonic.split("\n")
	for(var v=0;v<pythonic.length;v++)
	{
		var tabs=pythonic[v].match(/\t+/)?pythonic[v].match(/\t+/)[0].length:0, sub=pythonic[v].substr(tabs)

		if(tabs<stack.length-1)
			stack=stack.splice(0,tabs+1)
		if(!stack[stack.length-1])
			stack[stack.length-1]={}
		stack[stack.length-1][sub]={}
		if(tabs==stack.length-1)
			stack[stack.length]=stack[stack.length-1][sub]

		if(tabs>stack.length-1)
			stack[stack.length]=stack[stack.length-1][sub]
		//console.log(stack,json, tabs);
		//if(prompt()=="exit")
		//return
	}
	return json
}

function fromUpperCase(str){
	return (str + "")[0].toUpperCase() + (str + "").substring(1)
}
function objectToJson(object){
	return JSON.stringify(object).replace(/{/g, "{\n\t").replace(/\[/g, "[\n\t").replace(/,/g, ",\n\t").replace(/:/g, " : ").replace(/}/g, "\n}").replace(/]/g, "\n]")
}
function makeClone(orig){
	if ("object" !== typeof orig)
		return orig
	let clone = (orig instanceof Array) ? [] : {} // Создаем новый пустой
	// объект или массив
	for ( let prop in orig)
		// Перебираем все свойства копируемого объекта
		if (orig.hasOwnProperty(prop))
			if ("object" !== typeof orig[prop])
				clone[prop] = orig[prop]
			else clone[prop] = makeClone(orig[prop]) // Делаем клон свойства
	return clone
}
function inOneExemplare(array){
	var object={}
	for(var v in array)
		object[array[v]]=0
	var inOneArray=[]
	for(var v in object)
		inOneArray.push(v)
	return inOneArray
}
