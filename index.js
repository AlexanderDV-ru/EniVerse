//--- Name: EniVerses/Vesion: 0.2.2a/Authors: AlexanderDV/Description: Main EniVerses .js. ---
var programInfo={
	Name : "EniVerses",
	Version : "0.2.2a",
	Authors : "AlexanderDV"
}
programInfo.Title= programInfo.Name + " v" + programInfo.Version + " by " + programInfo.Authors
document.title=programInfo.Title
// End of standard initialization ---


universesTextarea.value=props.universes.join("\n")

var json=parsePythonic(props.universesConfig)
json=json["Eniverse"]// TODO:
console.log(json);
function mergeWithReplace(){
	var merged={}
	for(var argNum in arguments)
		if(Object.keys(merged).length==0)
			merged=makeClone(arguments[argNum])||{}
		else if(arguments[argNum])
		{
			var stack=[[0,arguments[argNum],Object.keys(arguments[argNum])]]
			var tm=new Date().getTime()
			for(;stack.length!=0&&stack[stack.length-1][0]<stack[stack.length-1][2].length;)
			{
				if(new Date().getTime()-tm>1000)
				{
					console.error("Time out");
					return
				}
				var v=stack[stack.length-1][2][stack[stack.length-1][0]]
				stack[stack.length-1][0]++
				{
					var c=merged
					for(var v2 in stack)
					{
						var cv=stack[v2][2][stack[v2][0]-1]
						if(typeof stack[v2][1][cv]!="object")
							c[cv]=stack[v2][1][cv]
						else if(!c[cv])
							c[cv]={}
						c=c[cv]
					}
				}
				if(typeof stack[stack.length-1][1][v]=="object")
					stack.push([0,stack[stack.length-1][1][v],Object.keys(stack[stack.length-1][1][v])])
				for(;stack.length!=0&&stack[stack.length-1][0]==stack[stack.length-1][2].length;)
					stack.pop()
			}
		}
	return merged
}
//Parents
function pars(curJson){
	var stack=[[0,curJson,Object.keys(curJson)]]
	var tm=new Date().getTime()
	var count={}
	console.log(stack[0]);
	for(;stack.length!=0&&stack[stack.length-1][0]<stack[stack.length-1][2].length;)
	{
		if(new Date().getTime()-tm>1000)
		{
			console.error("Time out");
			return
		}
		v=stack[stack.length-1][2][stack[stack.length-1][0]]+""

		var firstPart=v.split(props.config.parent)[0],secondPart=v.split(props.config.parent)[1]
		//if(v.indexOf(props.config.parent)!=-1)
		//console.log("z1",stack[0][0],stack[stack.length-1][0],v,firstPart,secondPart);
		if(secondPart&&firstPart.indexOf(props.config.comment)==-1)
		{
			var curPart=secondPart.split(replAllRegExp(props.config.parent))[0]
			var par=json
			var curPartSplited=curPart.split(replAllRegExp(props.config.parentElement))
			for(var v2 in curPartSplited)
				par=par[curPartSplited[v2]]
			var cjsonnewName=mergeWithReplace(par,stack[stack.length-1][1][v])
			delete stack[stack.length-1][1][v]
			stack[stack.length-1][1][v=firstPart]=cjsonnewName
		}
		count[stack[0][0]]=(count[stack[0][0]]||0)+1
		//console.log("b0",stack.length,stack[stack.length-1][0],stack[stack.length-1][2].length);
		//console.log(count[stack[0][0]],stack[0][0]);
		if(count[stack[0][0]]>20000||stack[0][0]==3&&stack.length==1)// TODO:
		{
			console.log("x ",count[stack[0][0]],stack[0][0],stack.length);
			//console.error("Count out",count,stack[0][2][stack[0][0]],JSON.stringify(stack));
			stack=[stack[0]]
			stack[0][0]++
			continue
		}
		//console.log(stack[0][0],stack[0][2][stack[0][0]],stack.length,stack[stack.length-1]?JSON.stringify(stack[stack.length-1][1]):"");
		var tup=[0,stack[stack.length-1][1][v],Object.keys(typeof stack[stack.length-1][1][v]=="object"?stack[stack.length-1][1][v]:{})]
		//console.log("a ",JSON.stringify(tup[2]),tup[0]);
		stack[stack.length-1][0]++
		stack.push(tup)
		//console.log("b1",stack.length,stack[stack.length-1][0],stack[stack.length-1][2].length);
		for(;stack.length!=0&&stack[stack.length-1][0]==stack[stack.length-1][2].length;)
			stack.pop()
		//console.log("b2",stack.length,stack[stack.length-1][0],stack[stack.length-1][2].length);
		//console.log("b3",stack.length,stack[stack.length-1][0],stack[stack.length-1][2].length);
		//while(stack.length!=0&&stack[stack.length-1][0]==stack[stack.length-1][2].length)
		//	stack.pop()
		//console.log(v,JSON.stringify(tup))
		//console.log(JSON.stringify(stack));
		//console.log("b4",stack.length,stack[stack.length-1][0],stack[stack.length-1][2].length);
		//console.log("z2",stack[0][0],stack[stack.length-1][0],v,firstPart,secondPart);
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
				var first=normalName(v2)
				if(!na[first])
					na[first]=[]
				var v0=true, universes=""
				for(var v3 in n[v2])
					if(v3.replace(/\s+/g,"")!="")
						if(!v2.endsWith(tags.del))
							na[first].push(v3)
						else for(var vvv in na[first])
							if(na[first][vvv].startsWith(v3))
								na[first].splice(vvv)
			}
		for(var v2 in na)
		{
			byCategoriesTextarea.value+=(props.config.newLine+(!v2.endsWith(tags.hide)?v2:v2.substr(0,v2.length-tags.hide.length)).replace(/\s+$/g,"")).replace(props.config.newLine,props.config.newLine+c)+(!v2.endsWith(tags.hide)?props.config.isIn+" "+na[v2].join(props.config.isInSplit+" ").replace(/\s+/g," "):"")
			for(var v22 in n)
				if(v22.split(props.config.newLine)[0].replace(/\s+$/g,"")==v2)
					if(n[v22][""])
						ff2("",n[v22][""],c+props.config.offset)
		}
	}
	ff2("",newJson[v],props.config.offset)
}
byCategoriesTextarea.value=byCategoriesTextarea.value.replace(new RegExp("("+removeFromResult.join(")|(")+")"),"")
