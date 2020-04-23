//--- Name: EniVerses/Vesion: 0.1.1a/Authors: AlexanderDV/Description: Main EniVerses script. ---
//--- Start of standard initialization
//Program info
var programInfo={
	"packet" : "eniVerses",
	"name" : "EniVerses",
	"version" : "0.1.1a",
	"authors" : "AlexanderDV"
}
programInfo.title= programInfo.name + " v" + programInfo.version + " by " + programInfo.authors
document.title=programInfo.title

// Universal local storage initialization
var storage = window.localStorage

// Messages language initialization by default value
var messagesLanguage='ru'
// Function for getting message by key
var getMsg=function(key, lang)
{
	return props.msgs[lang||messagesLanguage][key]
}
// End of standard initialization ---


byUniverses.value=universesConfig
var tabSym=tabulationSymbol.value="\t"
tabulationSymbol.oninput=function(){tabSym=tabulationSymbol.value}
var toJSON=function(text)
{
	var json={}
	var last
	for(var v in text.split("\n"))
	{
		if(!text.split("\n")[v].startsWith(tabSym))
			json[last=text.split("\n")[v]]=""
		else if(last)
			if(!json[last])
				json[last]=text.split("\n")[v].substr(1)
			else json[last]+="\n"+text.split("\n")[v].substr(1)
	}
	for(var v in json)
		if(json[v].split("\n").length>1)
		{
			json[v]=toJSON(json[v])
		}
		else
		{
			var vv=json[v]
			json[v]={}
			json[v][vv]={}
		}
	return json
}
var onChange=function()
{
	var json=toJSON(byUniverses.value)
	//console.log(json);
	var newJson={}
	for(var v in json)
	{
		for(var v2 in json[v])
		{
			if(!newJson[v2])
				newJson[v2]={}
			function ff(o,n){
				for(var v3v in o)
				{
					var v3=v3v.split("//")[0]
					if(!n[v3])
						n[v3]={}
					n[v3][v]={}
					if(!n[v3][""])
						n[v3][""]={}
					ff(o[v3v],n[v3][""])
				}
			}
			ff(json[v][v2], newJson[v2])
		}
	}
	byElements.value=""
	for(var v in newJson)
	{
		byElements.value+=("\n"+v).replace("\n","\n")
		function ff2(o,n,c){
			for(var v2 in n)
				if(v2.replace(/\s+/g,"")!="")
				{
					var v0=true, universes=""
					for(var v3 in n[v2])
						universes+=(v0==true||v3.replace(/\s+/g,"")==""?v0="":", ")+v3
					byElements.value+=("\n"+v2).replace("\n","\n"+tabSym+(c>1?tabSym:""))+": "+universes
					if(n[v2][""])
						ff2("",n[v2][""],c+1)
				}
		}
		ff2("",newJson[v],1)
	}
	byElements.value=byElements.value.substr(1)
}
onChange()
//console.log(toJSON(byUniverses.value))
