//--- Name: EniVerses/Vesion: 0.2.0a/Authors: AlexanderDV/Description: Main EniVerses .js. ---
//--- Start of standard initialization
//Program info
var programInfo={
	Name : "EniVerses",
	Version : "0.2.0a",
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
universesTextarea.value=props.universes.join("\n")

var json=parsePythonic(props.universesConfig)
json=json["Eniverse"]// TODO:
//for(var v2 in json)
//	for(var v in json[v2])
//{
//	var vv=json[v2][v]
//	delete json[v2][v]
//	json[v2][normalName(v.split(props.config.localNameDepr)[1]||v.split(props.config.localNameDepr)[0])]=vv
//}// TODO:
//console.log(json);

function ffr(par,cur){
	var n={}
	if(par)
		for(var v in par)
			n[v]=ffr(par[v],cur?cur[v]:{})
	if(cur)
		for(var v in cur)
			if(!n[v])
				if(v.split(props.config.localNameDepr)[1])
				{
					n[v]=ffr(n[normalName(v.split(props.config.localNameDepr)[0])],cur[v])
					delete n[normalName(v.split(props.config.localNameDepr)[0])]
				}
				else n[v]=cur[v]
	//console.log(par,cur,n);
	return n
}
//console.log(json);
//Parents
function pars(curJson){
	var stack=[[0,curJson,0,Object.keys(curJson)]]
	var tm=new Date().getTime()
	var count={}
	for(;stack.length!=0&&stack[stack.length-1][0]<=stack[stack.length-1][3].length;)
	{
		if(stack[stack.length-1][0]==stack[stack.length-1][3].length)
		{
			stack.splice(stack.length-1,1)
			continue
		}
		if(new Date().getTime()-tm>3000)
			return
		v=stack[stack.length-1][3][stack[stack.length-1][0]]

		var firstPart=v.split(props.config.parent)[0],secondPart=v.split(props.config.parent)[1]
		if(secondPart&&firstPart.indexOf(props.config.comment)==-1)
		{
			var curPart=secondPart.split(replAllRegExp(props.config.parent))[0]
			var par=json
			var curPartSplited=curPart.split(replAllRegExp(props.config.parentElement))
			for(var v2 in curPartSplited)
				par=par[curPartSplited[v2]]
			var cjsonnewName=ffr(par,stack[stack.length-1][1][v])
			delete stack[stack.length-1][1][v]
			stack[stack.length-1][1][v=firstPart]=cjsonnewName
		}
		count[stack[0][0]]=(count[stack[0][0]]||0)+1
		if(count[stack[0][0]]>1000)
		{
			stack=[stack[0]]
			stack[0][0]++
			continue
		}
		//console.log(stack[0][0],stack[0][3][stack[0][0]],stack.length,stack[stack.length-1]?JSON.stringify(stack[stack.length-1][1]):"");
		stack[stack.length-1][0]++
		stack.push([0,stack[stack.length-1][1][v],0,Object.keys(stack[stack.length-1][1][v]?stack[stack.length-1][1][v]:{})])
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
				var v3=v3v.split(props.config.comment)[0]
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
function replAllRegExp(text, flags){
	return new RegExp("["+text.split("").join("][")+"]", flags)
}
byCategoriesTextarea.value=""
var tags	=	{
	hide:	props.config.tag.replace(replAllRegExp(props.config.inSyms),props.config.tags.hide),
	del	:	props.config.tag.replace(replAllRegExp(props.config.inSyms),props.config.tags.del)
}
for(var v in newJson)
{
	byCategoriesTextarea.value+=props.config.newLine+v
	function ff2(o,n,c){
		var na	=	{}
		for(var v2 in n)
			if(v2.replace(/\s+/g,"")!="")
			{
				var first=normalName(v2.split(props.config.localNameDepr)[0])
				if(!na[first])
					na[first]=[]
				var v0=true, universes=""
				for(var v3 in n[v2])
					if(v3.replace(/\s+/g,"")!="")
						if(!v2.endsWith(tags.del))
							na[first].push(v3+(v2.split(props.config.localNameDepr)[1]?" "+props.config.localNameDepr+" "+v2.split(props.config.localNameDepr)[1]:""))
						else for(var vvv in na[first])
							if(na[first][vvv].startsWith(v3))
								na[first].splice(vvv)
			}
		for(var v2 in na)
		{
			byCategoriesTextarea.value+=(props.config.newLine+(!v2.endsWith(tags.hide)?v2:v2.substr(0,v2.length-tags.hide.length)).split(props.config.localNameDepr)[0].replace(/\s+$/g,"")).replace(props.config.newLine,props.config.newLine+c)+(!v2.endsWith(tags.hide)?props.config.isIn+" "+na[v2].join(props.config.isInSplit+" ").replace(/\s+/g," "):"")
			for(var v22 in n)
				if(v22.split(props.config.newLine)[0].replace(/\s+$/g,"")==v2)
					if(n[v22][""])
						ff2("",n[v22][""],c+props.config.offset)
		}
	}
	ff2("",newJson[v],props.config.offset)
}
byCategoriesTextarea.value=byCategoriesTextarea.value.replace(new RegExp("("+removeFromResult.join(")|(")+")"),"")
