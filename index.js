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


//Other method
function toLines(cfg){
	var linesOfCfg=[]
	var path=[]
	var last
	var lns=cfg.split("\n")
	for(var v=0;v<lns.length;v++){var vv=new RegExp("^["+props.syntax.offset+"]{0,}")
		linesOfCfg[v]={
			offset:lns[v].match(vv)[0]||"",
			content:lns[v].replace(vv,"").split(props.syntax.parent)[0],
			parents:lns[v].replace(vv,"").split(props.syntax.parent)[1]?lns[v].replace(vv,"").split(props.syntax.parent)[1].split(props.syntax.enumeration):[],
		}


		for(var v1=0;v1<20&&linesOfCfg[v].offset.length<path.length;v1++){
			path.pop()
			last=path[path.length-1]
		}
		for(var v1=0;v1<20&&linesOfCfg[v].offset.length>path.length;v1++)
			path.push(v1==0?last:"")
		last=linesOfCfg[v].content



		linesOfCfg[v].path=path,
		linesOfCfg[v].pathStr=path.join(props.syntax.path)
	}
	return linesOfCfg
}
var linesOfCfg=toLines(props.universesConfig)
function fromParents(lines){
	var linesOfCfg=[]
	for(var v=0;v<lines.length;v++)
	{
		linesOfCfg.push(lines[v])
		for(var v0=0;v0<lines[v].parents.length;v0++)
		{
			var pi
			for(var v1=0;v1<lines.length;v1++)
				if(lines[v1].pathStr+props.syntax.parentElement+lines[v1].content==lines[v].parents[v0])
					pi=v1
			console.log(lines[v1],lines.length,lines[v].parents,pi,pi+1<lines.length?lines[pi+1]:"NN",pi<lines.length?lines[pi]:"NN");
			for(var v1=pi+1;v1<lines.length&&lines[v1].offset.length>lines[pi].offset.length;v1++)
				linesOfCfg.push({
					offset:multiplyStr(props.syntax.offset,lines[v1].offset.length-lines[pi].offset.length+lines[v].offset.length),
					content:lines[v1].content,
					parents:lines[v1].parents,
					path:lines[v1].path,
					pathStr:lines[v1].pathStr
				})
			linesOfCfg.push({
				offset:lines[v].offset+props.syntax.offset,
				content:"",
				parents:[],
				path:(lines[v].pathStr+props.syntax.parentElement+lines[v].content).split(props.syntax.parentElement),
				pathStr:(lines[v].pathStr+"."+lines[v].content)
			})
		}
	}
	return linesOfCfg
}
linesOfCfg=fromParents(linesOfCfg)
function mergeSame(lines,lvl){
	var linesOfCfg=[]
	for(var v=0;v<lines.length;v++)
		for(var v1=v+1;v1<lines.length;v1++)
		{
			linesOfCfg.push(lines[v])
			if(lines[v].content==lines[v1].content)
				for(;v1<lines.length&&lines[v].offset.length<lines[v1].offset.length;v1++)
				{
					linesOfCfg.splice(v,0,lines[v1])
				}
		}
	return linesOfCfg
}
//linesOfCfg=mergeSame(linesOfCfg)
for(var v=0;v<linesOfCfg.length;v++)
	console.log(linesOfCfg[v].offset+linesOfCfg[v].content/*,0,linesOfCfg[v].pathStr*/);

//End of other method

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

		var firstPart=v.split(props.syntax.parent)[0],secondPart=v.split(props.syntax.parent)[1]
		//if(v.indexOf(props.syntax.parent)!=-1)
		//console.log("z1",stack[0][0],stack[stack.length-1][0],v,firstPart,secondPart);
		if(secondPart&&firstPart.indexOf(props.syntax.comment)==-1)
		{
			var curPart=secondPart.split(replAllRegExp(props.syntax.parent))[0]
			var par=json
			var curPartSplited=curPart.split(replAllRegExp(props.syntax.parentElement))
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
				var v3=v3v.split(props.syntax.comment)[0]
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
	hide:	props.syntax.tag.replace(replAllRegExp(props.syntax.inSyms),props.syntax.tags.hide),
	del	:	props.syntax.tag.replace(replAllRegExp(props.syntax.inSyms),props.syntax.tags.del)
}
for(var v in newJson)
{
	byCategoriesTextarea.value+=props.syntax.newLine+v
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
			byCategoriesTextarea.value+=(props.syntax.newLine+(!v2.endsWith(tags.hide)?v2:v2.substr(0,v2.length-tags.hide.length)).replace(/\s+$/g,"")).replace(props.syntax.newLine,props.syntax.newLine+c)+(!v2.endsWith(tags.hide)?props.syntax.isIn+" "+na[v2].join(props.syntax.isInSplit+" ").replace(/\s+/g," "):"")
			for(var v22 in n)
				if(v22.split(props.syntax.newLine)[0].replace(/\s+$/g,"")==v2)
					if(n[v22][""])
						ff2("",n[v22][""],c+props.syntax.offset)
		}
	}
	ff2("",newJson[v],props.syntax.offset)
}
byCategoriesTextarea.value=byCategoriesTextarea.value.replace(new RegExp("("+removeFromResult.join(")|(")+")"),"")
