//--- Name: EniVerses/Vesion: 0.2.7a/Authors: AlexanderDV/Description: Main EniVerses .js. ---
var programInfo={
	Name : "EniVerses",
	Version : "0.2.7a",
	Authors : "AlexanderDV"
}
programInfo.Title= programInfo.Name + " v" + programInfo.Version + " by " + programInfo.Authors
document.title=programInfo.Title
// End of standard initialization ---


//Other method
function toLines(cfg){
	var linesOfCfg=[]
	var path=[]
	var last
	var lns=cfg.split("\n")
	for(var v=0;v<lns.length;v++){var vv=new RegExp("^["+props.syntax.offset_+"]{0,}")
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
		linesOfCfg[v].pathStr=path.join(props.syntax.of_)
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
					offset:multiplyStr(props.syntax.offset_,lines[v1].offset.length-lines[pi].offset.length+lines[v].offset.length),
					content:lines[v1].content,
					parents:lines[v1].parents,
					path:lines[v1].path,
					pathStr:lines[v1].pathStr
				})
			linesOfCfg.push({
				offset:lines[v].offset+props.syntax.offset_,
				content:"",
				parents:[],
				path:(lines[v].pathStr+props.syntax.parentElement+lines[v].content).split(props.syntax.parentElement),
				pathStr:(lines[v].pathStr+props.syntax.of_+lines[v].content)
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

function byPath(path,st){
	var lll=document.getElementsByClassName(path)
	for(var v=0;v<lll.length;v++)
	{
		lll[v].style.display=st!=undefined?st:st=(lll[v].style.display=="none"?"":"none")
		byPath(lll[v].id,st)
	}
}
function bpsf(linesOfCfg,fnc){
	var byPaths={}
	fnc=fnc||function(ph){return [ph,""]}
	function addOmn(ph){
		ph=fnc(ph)
		if(!byPaths[ph[0]])
			byPaths[ph[0]]={}
		byPaths[ph[0]][ph[1]]=""
	}
	for(var v=0;v<linesOfCfg.length;v++)
	{
		addOmn(linesOfCfg[v].pathStr)
		addOmn(linesOfCfg[v].pathStr+props.syntax.of_+linesOfCfg[v].content)
	}
	return byPaths
}
function toText(byPaths){
	var text=""
	var lins=Object.keys(byPaths)
	lins.sort()
	console.log(lins);
	var consByDivText=""
	for(var vi=0;vi<lins.length;vi++)
	{
		v=lins[vi]
		var vv=v.split(props.syntax.of_)
		consByDivText+="<tr><td><div style=\"margin-left:"+(vv.length-1)*20+"px\">"+vv[vv.length-1]+"</div></td>";
		consByDivText+="<td>"+v+"</td>";
		consByDivText+="<td>"+/*Object.keys(byPaths[v]).join(props.syntax.enumeration)+*/"</td></tr>";
		text+=multiplyStr(props.syntax.offset_,vv.length-1)+vv[vv.length-1]+props.syntax.to_+Object.keys(byPaths[v]).join(props.syntax.enumeration)/*v.substr(0,v.length-vv[vv.length-1].length-props.syntax.of_.length)*/+props.syntax.newLine_
	}
	consByDiv.innerHTML=consByDivText
	return text
}
function ratas(text){
	var t=text.split(props.syntax.of_)
	var ts=[]
	for(var v=0;v<t.length;v++)
		ts[v]=t[v].split(props.syntax.to_)[0]
	return ts.join(props.syntax.of_).replace(/\s{0,}/g,"")
}
function toHtmlLok(linesOfCfg){
	var t='<input type="checkbox" onclick="this.childNodes[0].style.display=this.checked?\\"\\"":\\"none\\">',t2="</input>"
	var result=""
	for(var v=0;v<linesOfCfg.length;v++)
	{
		var ttt
		for(var v0 in props.syntax.froms)
			if(linesOfCfg[v].content.startsWith(props.syntax.froms[v0]))
				ttt=props.colors.froms[v0]
		var cont=linesOfCfg[v].content.split(props.syntax.to_)[0]||""
		var at=linesOfCfg[v].content.split(props.syntax.to_)[1]||""
		//console.log(linesOfCfg[v].offset+linesOfCfg[v].content/*,0,linesOfCfg[v].pathStr*/);
		result+="<tr id=\"cfgr-path-"+ratas(linesOfCfg[v].pathStr+props.syntax.of_+cont)+"\" class=\"line type-"+ttt+"  cfgr-path-"+ratas(linesOfCfg[v].pathStr)+"\" onclick=\"byPath('cfgr-path-"+ratas(linesOfCfg[v].pathStr+props.syntax.of_+cont)+"')\" style=\"color:"+  ttt+"\">"
		result+="<td style=\"max-width:50%;\"><div style=\"margin-left:"+linesOfCfg[v].offset.length*20+"px;\">"+ cont+"</div></td>"
		result+="<td style=\"max-width:50%;right:0px;\"><div>"+(cont.endsWith("[y]")?"":at)+"</div></td></tr>"
		//console.log(linesOfCfg[v]);
	}
	return result
}
function setElementsTextTranslates(lang){
	for(var v in props.msgs[lang||props.msgsLang])
		for(var v2 in document.getElementsByClassName("$"+v+"$"))
			document.getElementsByClassName("$"+v+"$")[v2].innerText=props.msgs[lang||props.msgsLang][v]
}
setElementsTextTranslates()
genButton.onclick=function(){
	var custFn
	try {
		custFn=new Function("ph",funcArea.value)
	} catch (e) {}
	var t1=bpsf(linesOfCfg,funcArea.value=="default"?undefined:((funcArea.value?custFn:undefined)||function(ph){
		var w=[],wo=[]
		for(var v=0;v<ph.split(props.syntax.of_).length;v++)
			(ph.split(props.syntax.of_)[v].split(props.syntax.in_).length>1?w:wo).push(ph.split(props.syntax.of_)[v])
		return [wo.join(props.syntax.of_),w.join(props.syntax.of_)]
	}))
	console.log(t1);
	var t2=toText(t1)
	console.log(t2);
	var t3=toLines(t2)
	console.log(t3);
	var t4=toHtmlLok(t3)
	console.log(t4);
	universesByDiv.innerHTML=t4
}
genButton.onclick()
function what(){
	var sortedByPaths=[],counter=0
	var oldTime=new Date().getTime()
	for(var v=1;counter<linesOfCfg.length&&new Date().getTime()-oldTime<5000;v++)
		for(var v0 in byPaths)
			if(v0.split(props.syntax.of_).length==v)
			{
				for(var v1=0;v1<sortedByPaths.length;v1++)
					if(sortedByPaths[v1].pathStr+props.syntax.of_+sortedByPaths[v1].content==v0)
					{
						sortedByPaths.splice(v1+1,0,...Object.values(byPaths[v0]))
						counter++
						break
					}
				//delete byPaths[v0]
			}
	for(var v=0;v<sortedByPaths.length;v++)
		console.log(sortedByPaths[v]);
}
//what()


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
}/*
pars(json)
function assembleSt(n,c){
	var r=""
	for(var v in n)
			r+="\n"+c+v+(Object.keys(n[v]).length>(n[v][""]?1:0)?assembleSt(n[v],c+"\t"):"")
	return r
}
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
var bycat=""
var tags	=	{
	hide:	props.syntax.tag.replace(replAllRegExp(props.syntax.inSyms),props.syntax.tags.hide),
	del	:	props.syntax.tag.replace(replAllRegExp(props.syntax.inSyms),props.syntax.tags.del)
}
for(var v in newJson)
{
	bycat+=props.syntax.newLine_+v
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
			bycat+=(props.syntax.newLine_+(!v2.endsWith(tags.hide)?v2:v2.substr(0,v2.length-tags.hide.length)).replace(/\s+$/g,"")).replace(props.syntax.newLine_,props.syntax.newLine_+c)+(!v2.endsWith(tags.hide)?props.syntax.isIn+" "+na[v2].join(props.syntax.isInSplit+" ").replace(/\s+/g," "):"")
			for(var v22 in n)
				if(v22.split(props.syntax.newLine_)[0].replace(/\s+$/g,"")==v2)
					if(n[v22][""])
						ff2("",n[v22][""],c+props.syntax.offset_)
		}
	}
	ff2("",newJson[v],props.syntax.offset_)
}
universesByDiv.innerHTML=bycat.replace(new RegExp("("+removeFromResult.join(")|(")+")"),"")*/
