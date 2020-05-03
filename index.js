//--- Name: EniVerses/Vesion: 0.1.9a/Authors: AlexanderDV/Description: Main EniVerses .js. ---
//--- Start of standard initialization
//Program info
var programInfo={
	Name : "EniVerses",
	Version : "0.1.9a",
	Authors : "AlexanderDV"
}

programInfo.Title= programInfo.Name + " v" + programInfo.Version + " by " + programInfo.Authors
document.title=programInfo.Title

// Universal local storage initialization
var storage = window.localStorage

// Messages Language initialization by default value
var messagesLanguage='ru'
// Function for getting message by key
var getMsg=function(key, lang)
{
	return props.msgs[lang||messagesLanguage][key]
}
// End of standard initialization ---
universesTextarea.value=universes.join("\n")

var json=parsePythonic(universesConfig)
json=json["Eniverse"]// TODO:
//for(var v2 in json)
//	for(var v in json[v2])
//{
//	var vv=json[v2][v]
//	delete json[v2][v]
//	json[v2][normalName(v.split(symbols.config.localNameDepr)[1]||v.split(symbols.config.localNameDepr)[0])]=vv
//}// TODO:
//console.log(json);

function ffr(par,cur){
	var n={}
	for(var v in par)
		n[v]=cur?ffr(par[v],cur[v]):par[v]
	if(cur)
		for(var v in cur)
			if(!n[v])
				if(v.split(symbols.config.localNameDepr)[1])
				{
					n[v]=ffr(n[normalName(v.split(symbols.config.localNameDepr)[0])],cur[v])
					delete n[normalName(v.split(symbols.config.localNameDepr)[0])]
				}
				else n[v]=cur[v]
		return n
}
//Parents
function pars(cjson,count){
	for(var v in cjson)
	{
		pars(cjson[v],1)
		var firstPart=v.split(symbols.config.parent)[0]
		var secondPart=v.split(symbols.config.parent)[1]
		if(secondPart&&firstPart.indexOf(symbols.config.comment)==-1)
		{
			var curPart=secondPart.split(symbols.config.parentSplit)[0]
			var par=json
			var curPartSplited=curPart.split(symbols.config.parentElement)
			for(var v2 in curPartSplited)
			{
				console.log(par,curPartSplited[v2],v);
				par=par[curPartSplited[v2]]
			}
			var newSecondPart=v.split(symbols.config.parent)[1].replace(new RegExp("$"+symbols.config.parentSplit,"g"),"").replace(new RegExp(symbols.config.parentSplit+symbols.config.parentSplit,"g"),symbols.config.parentSplit)
			var newName=count?v:v.split(symbols.config.parent)[0]+(newSecondPart?symbols.config.parent+newSecondPart:"")
			cjson[newName]=ffr(par,cjson[v])
			delete cjson[v]
		}
	}
}
pars(json)
function assembleSt(n,c){
	var r=""
	for(var v in n)
			r+="\n"+c+v+(Object.keys(n[v]).length>(n[v][""]?1:0)?assembleSt(n[v],c+"\t"):"")
	return r
}
byUniversesTextarea.value=assembleSt(json,"")
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
				var v3=v3v.split(symbols.config.comment)[0]
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
byCategoriesTextarea.value=""
var tags	=	{
	hide:	symbols.config.tag.replace(symbols.inSyms,symbols.config.tags.hide),
	del	:	symbols.config.tag.replace(symbols.inSyms,symbols.config.tags.del)
}
for(var v in newJson)
{
	byCategoriesTextarea.value+=symbols.newLine+v
	function ff2(o,n,c){
		var na	=	{}
		for(var v2 in n)
			if(v2.replace(/\s+/g,"")!="")
			{
				var first=normalName(v2.split(symbols.config.localNameDepr)[0])
				if(!na[first])
					na[first]=[]
				var v0=true, universes=""
				for(var v3 in n[v2])
					if(v3.replace(/\s+/g,"")!="")
						if(!v2.endsWith(tags.del))
							na[first].push(v3+(v2.split(symbols.config.localNameDepr)[1]?" "+symbols.config.localNameDepr+" "+v2.split(symbols.config.localNameDepr)[1]:""))
						else for(var vvv in na[first])
							if(na[first][vvv].startsWith(v3))
								na[first].splice(vvv)
			}
		for(var v2 in na)
		{
			byCategoriesTextarea.value+=(symbols.newLine+(!v2.endsWith(tags.hide)?v2:v2.substr(0,v2.length-tags.hide.length)).split(symbols.config.localNameDepr)[0].replace(/\s+$/g,"")).replace(symbols.newLine,symbols.newLine+c)+(!v2.endsWith(tags.hide)?symbols.isIn+" "+na[v2].join(symbols.isInSplit+" ").replace(/\s+/g," "):"")
			for(var v22 in n)
				if(v22.split(symbols.newLine)[0].replace(/\s+$/g,"")==v2)
					if(n[v22][""])
						ff2("",n[v22][""],c+symbols.tab)
		}
	}
	ff2("",newJson[v],symbols.tab)
}
byCategoriesTextarea.value=byCategoriesTextarea.value.replace(new RegExp("("+removeFromResult.join(")|(")+")"),"")
