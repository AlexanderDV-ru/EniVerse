//--- Name: EniVerses/Vesion: 0.1.4a/Authors: AlexanderDV/Description: Main EniVerses .js. ---
//--- Start of standard initialization
//Program info
var programInfo={
	"packet" : "eniVerses",
	"name" : "EniVerses",
	"version" : "0.1.4a",
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
var onChange=function()
{
	var json=parsePythonic(byUniverses.value)
	function ffr(par,cur){
		var n={}
		for(var v in par)
			n[v]=cur?ffr(par[v],cur[v]):par[v]
		if(cur)
			for(var v in cur)
				if(!n[v])
					if(v.split("=")[1])
					{
						n[v]=ffr(n[v.split("=")[0].replace(/\s+/g," ")],cur[v])
						delete n[v.split("=")[0].replace(/\s+/g," ")]
					}
					else n[v]=cur[v]
		return n
	}
	for(var v in json)
		if(v.split("(")[1])
			json[v]=ffr(json[v.split("(")[1]],json[v])
	function assembleSt(n,c){
		var r=""
		for(var v in n)
			r+="\n"+c+v+(Object.keys(n[v]).length>(n[v][""]?1:0)?assembleSt(n[v],c+"\t"):"")
		return r
	}
	byUniverses.value=assembleSt(json,"")
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
			var na={}
			for(var v2 in n)
				if(v2.replace(/\s+/g,"")!="")
				{
					if(!na[v2.split("=")[0].replace(/\s+$/g,"")])
						na[v2.split("=")[0].replace(/\s+$/g,"")]=[]
					var v0=true, universes=""
					for(var v3 in n[v2])
						if(v3.replace(/\s+/g,"")!="")
							if(v2.split("=")[1]?v2.split("=")[1].replace(/\s+/g,"")!="[delete]":true)
								na[v2.split("=")[0].replace(/\s+$/g,"")].push(v3+(v2.split("=")[1]?" = "+v2.split("=")[1]:""))
							else for(var vvv in na[v2.split("=")[0].replace(/\s+$/g,"")])
								if(na[v2.split("=")[0].replace(/\s+$/g,"")][vvv].startsWith(v3))
									na[v2.split("=")[0].replace(/\s+$/g,"")].splice(vvv)
				}
			for(var v2 in na)
			{
				byElements.value+=("\n"+(!v2.endsWith("[no")?v2:v2.substr(0,v2.length-"[no".length)).split("=")[0].replace(/\s+$/g,"")).replace("\n","\n"+c)+(!v2.endsWith("[no")?": "+na[v2].join("; ").replace(/\s+/g," "):"")
				for(var v22 in n)
					if(v22.split("=")[0].replace(/\s+$/g,"")==v2)
						if(n[v22][""])
							ff2("",n[v22][""],c+"\t")
			}
		}
		ff2("",newJson[v],"\t")
	}
	byElements.value=byElements.value.substr(1)
}
onChange()
