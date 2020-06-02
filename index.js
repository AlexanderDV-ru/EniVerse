//--- Name: EniVerse/Vesion: 0.3.0a/Authors: AlexanderDV/Description: Main EniVerse .js. ---
var programInfo={
	Name : "EniVerse",
	Version : "0.3.0a",
	Authors : "AlexanderDV"
}
programInfo.Title= programInfo.Name + " v" + programInfo.Version + " by " + programInfo.Authors
document.title=programInfo.Title
// End of standard initialization ---
var inSyms="a-zA-Z0123456789. "
var flagRe=new RegExp("[\\"+props.syntax.flag.start+"](["+inSyms+"]{0,})[\\"+props.syntax.flag.end+"]","g")
var superRe=new RegExp("[\\"+props.syntax.super.start+"](["+inSyms+"]{0,})[\\"+props.syntax.super.end+"]","g")
class Element{
	constructor(path,where,children){
		if(!Array.isArray(path))
			return console.error("'Path' must be an array!");
		this.path=[].concat(path)

		this.where	=	new Set(Array.isArray(where)?where:(where instanceof Set?where:Object.keys(where)))
		this.children=	new Set(Array.isArray(children)?children:(children instanceof Set?children:Object.keys(children)))


		this.parentArr=[].concat(this.path).splice(0,this.path.length-1)
		this.parentStr=this.parentArr.join(props.syntax.of_)

		this.pathArr=[].concat(this.path)
		this.pathStr=this.path.join(props.syntax.of_)

		this.offsetLength=this.path.length-1
		this.offsetStr=multiplyStr(props.syntax.offset_,this.path.length-1)

		this.name=this.path[this.path.length-1]||""
		this.content=this.name.replace(flagRe,"").replace(superRe,"")

		this.flags	=	new Set(this.name.match(flagRe)||[])
		this.supers	=	new Set(this.name.match(superRe)||[])
	}
}
function colorOf(value) {
	for(var v0 in props.syntax.froms)
		if(value.startsWith(props.syntax.froms[v0]))
			return v0
	return ""
}
function toLines(cfg){
	var linesOfCfg=[]
	var path=[]
	var last
	var lns=cfg.split("\n")
	for(var v=0;v<lns.length;v++){var vv=new RegExp("^["+props.syntax.offset_+"]{0,}")
		linesOfCfg[v]={}
		linesOfCfg[v].offset	=	lns[v].match(vv)[0]||""
		linesOfCfg[v].content	=	lns[v].replace(vv,"").split(props.syntax.parentArr)[0]


		for(var v1=0;v1<20&&linesOfCfg[v].offset.length<path.length;v1++){
			path.pop()
			last=path[path.length-1]
		}
		for(var v1=0;v1<20&&linesOfCfg[v].offset.length>path.length;v1++)
			path.push(v1==0?last:"")
		last=linesOfCfg[v].content

		var el=new Element(path.concat(linesOfCfg[v].content),{},{})
		el.offset=linesOfCfg[v].offset
		linesOfCfg[v]=el
	}
	return linesOfCfg
}
var linesOfCfg=toLines(props.universesConfig)
function fromSupers(lines){
	var linesOfCfg=[]
	for(var v=0;v<lines.length;v++)
	{
		linesOfCfg.push(lines[v])
		for(var v0v of lines[v].supers)
		{
			var pi
			for(var v1=0;v1<lines.length;v1++)
				if(lines[v1].parentStr+props.syntax.of_+lines[v1].content==v0v)
					pi=v1
			//console.log(lines[v1],lines.length,lines[v].supers,pi,pi+1<lines.length?lines[pi+1]:"NN",pi<lines.length?lines[pi]:"NN");
			for(var v1=pi+1;v1<lines.length&&lines[v1].offset.length>lines[pi].offset.length;v1++)
			{
				var el=new Element(lines[v1].getParentArr(),lines[v1].where,lines[v1].children)
				el.offset=multiplyStr(props.syntax.offset_,lines[v1].offset.length-lines[pi].offset.length+lines[v].offset.length)
				linesOfCfg.push(el)
			}
			var el=new Element((lines[v].parentStr+props.syntax.of_+lines[v].content).split(props.syntax.of_), lines[v].where,lines[v].children)
			el.offset=lines[v].offset+props.syntax.offset_
		}
	}
	return linesOfCfg
}
linesOfCfg=fromSupers(linesOfCfg)

function fromLinesToByPaths(linesOfCfg,whereFuncName){
	var byPaths={}
	var whereFunc
	switch (whereFuncName) {
		case "n":
			whereFunc=function(pathArr){
				var first=[],second=[]
				for(var pathEl of pathArr)
					first.push(pathEl.replace(/([avsbpc]\/[ \t]|^\/)/g,""))
				return [first,second]
			}
			break;
		case "r":
			whereFunc=function(pathArr){
				var first=[],second=[]
				for(var pathEl of pathArr)
					first.push(pathEl.replace(/[avsbpc]\/[ \t]/g,""))
				return [first,second]
			}
			break;
		case "f":
			whereFunc=function(pathArr){
				var first=[],second=[]
				for(var pathEl of pathArr)
					first.push(pathEl.replace(/([avsbpc]\/[ \t]|^\/)/g,"").replace(/\//g,""))
				return [first,second]
			}
			break;
		case "0":
			whereFunc=function(pathArr){
				return [pathArr,[]]
			}
			break;
		case "1":
			whereFunc=function(pathArr){
				var first=[],second=[]
				for(var pathEl of pathArr)
					((pathEl.match(new RegExp("([^avsbpc\\\\]/|^/)[ \t]{0,1}","g"))||[]).length>0&&(pathEl.match(/"/g)||[]).length<2?second:first).push(pathEl)
				return [first,second]
			}
			break;
		case "2":
			whereFunc=function(pathArr){
				var first=[],second=[]
				for(var pathEl of pathArr)
					((pathEl.match(new RegExp("([^vsbpc\\\\]/|^/)[ \t]{0,1}","g"))||[]).length>0&&(pathEl.match(/"/g)||[]).length<2?second:first).push(pathEl)
				return [first,second]
			}
			break;
		case "3":
			whereFunc=function(pathArr){
				var first=[],second=[]
				for(var pathEl of pathArr)
					((pathEl.match(new RegExp("([^sbpc\\\\]/|^/)[ \t]{0,1}","g"))||[]).length>0&&(pathEl.match(/"/g)||[]).length<2?second:first).push(pathEl)
				return [first,second]
			}
			break;
		case "4":
			whereFunc=function(pathArr){
				var first=[],second=[]
				for(var pathEl of pathArr)
					((pathEl.match(new RegExp("([^bpc\\\\]/|^/)[ \t]{0,1}","g"))||[]).length>0&&(pathEl.match(/"/g)||[]).length<2?second:first).push(pathEl)
				return [first,second]
			}
			break;
		case "5":
			whereFunc=function(pathArr){
				var first=[],second=[]
				for(var pathEl of pathArr)
					((pathEl.match(new RegExp("([^pc\\\\]/|^/)[ \t]{0,1}","g"))||[]).length>0&&(pathEl.match(/"/g)||[]).length<2?second:first).push(pathEl)
				return [first,second]
			}
			break;
		case "6":
			whereFunc=function(pathArr){
				var first=[],second=[]
				for(var pathEl of pathArr)
					((pathEl.match(new RegExp("([^c\\\\]/|^/)[ \t]{0,1}","g"))||[]).length>0&&(pathEl.match(/"/g)||[]).length<2?second:first).push(pathEl)
				return [first,second]
			}
			break;
		case "m":
			whereFunc=function(pathArr){
				var first=[],second=[]
				for(var pathEl of pathArr)
					((pathEl.match(new RegExp("([^\\\\]/|^/)[ \t]{0,1}","g"))||[]).length>0&&(pathEl.match(/"/g)||[]).length<2?second:first).push(pathEl)
				return [first,second]
			}
			break;
		default:
			console.error(whereFuncName+" not a function name, trying to eval");
			try{
				whereFunc=eval(whereFuncName)
			}catch(e){}
	}
	for(var elem of linesOfCfg){
		var where=[whereFunc(elem.pathArr)[1]]
		if(byPaths[whereFunc(elem.pathArr)[0].join(props.syntax.of_)])
			for(var v of byPaths[whereFunc(elem.pathArr)[0].join(props.syntax.of_)].where)
				where.push(v)
		if(elem)
			for(var v of elem.where)
				where.push(v)
		var children=[]
		if(byPaths[whereFunc(elem.pathArr)[0].join(props.syntax.of_)])
			for(var v of byPaths[whereFunc(elem.pathArr)[0].join(props.syntax.of_)].children)
				children.push(v)
		if(elem)
			for(var v of elem.children)
				children.push(v)
		byPaths[whereFunc(elem.pathArr)[0].join(props.syntax.of_)]=new Element(whereFunc(elem.pathArr)[0],where,children)
		var parentStr=byPaths[whereFunc(elem.pathArr)[0].join(props.syntax.of_)].parentStr
		var parentArr=byPaths[whereFunc(elem.pathArr)[0].join(props.syntax.of_)].parentArr
		var parentChildren=[]
		if(byPaths[parentStr])
			for(var v of byPaths[parentStr].children)
				parentChildren.push(v)
		if(elem.parentStr.startsWith("Eniverse[nowhere]./My hero academy.Features.%r-5.%Abilities.%/Quirk"))
			console.log("@@@",elem.parentStr);
		parentChildren.push(whereFunc(elem.pathArr)[0].join(props.syntax.of_))
		byPaths[parentStr]=new Element(byPaths[parentStr]?byPaths[parentStr].path:parentArr,byPaths[parentStr]?byPaths[parentStr].where:[],parentChildren)
	}
	return byPaths
}
var checkeds=JSON.parse(storageValue("checkeds")||"{}")
var toHide=[]
function generateHtmlTable(byPaths){
	var htmlOfTable=""
	var sortedByAlphabetPaths=Object.keys(byPaths).sort()
	var genFn=function(htmls,name,elem,add){
		return "<div "+add+" class=\"str "+colorOf(htmls[name])+" "+name+(elem.flags.has("["+name+"]")?" flag":" notflag")+(elem.flags.has("[no"+name+"]")?" flagno":" notflagno")+"\">"+htmls[name]+"</div>"
	}
	for(var sbapsi=0;sbapsi<sortedByAlphabetPaths.length;sbapsi++)
	{
		var curPath=sortedByAlphabetPaths[sbapsi]
		var elem=byPaths[curPath]
		if(!elem.name)
			continue
		elem.links=[]
		var lfn="@LinkFuncs[nolinkfuncs][children]"
		//console.log(curPath,byPaths[elem.parentStr+props.syntax.of_+lfn],elem.parentStr+props.syntax.of_+lfn);
		if(byPaths[elem.parentStr+props.syntax.of_+lfn])
		{
			console.log("!!!",byPaths[elem.parentStr+props.syntax.of_+lfn], byPaths[elem.parentStr+props.syntax.of_+lfn].children);
			for(var v0 of byPaths[elem.parentStr+props.syntax.of_+lfn].children)
			{
				try{
					if(!byPaths[v0].func)
						byPaths[v0].func=eval("("+v+")")
				}catch(e){}
				if(byPaths[v0].func)
					elem.links.push(byPaths[v0].func(linesOfCfg[v]))
			}
		}
		var lsn="@Links"
		if(byPaths[elem.pathStr+props.syntax.of_+lsn])
			for(var v0 of byPaths[elem.pathStr+props.syntax.of_+lsn].children)
			{
				try{
					if(!byPaths[v0].val)
						byPaths[v0].val=eval("("+v+")")
				}catch(e){}
				if(byPaths[v0].val)
					elem.links.push(byPaths[v0].val)
			}
		elem.parentTree=[]
		for(var v=0;v<elem.parentArr.length;v++)
			elem.parentTree[v]=(v==0?"":elem.parentTree[v-1]+props.syntax.of_)+elem.parentArr[v]

		elem.pathWithAdd	=	"htmlTable-val-path-"+elem.pathStr.replace(/ /g,"[space]").replace(/"/g,"[quote]")
		elem.parentWithAdd	=	"htmlTable-val-parent-"+elem.parentStr.replace(/ /g,"[space]").replace(/"/g,"[quote]")
		elem.parentTreeWithAdds=""
		for(var v=0;v<elem.parentTree.length;v++)
			elem.parentTreeWithAdds+=" htmlTable-val-parentTree-"+0+"-"+elem.parentTree[v].replace(/ /g,"[space]").replace(/"/g,"[quote]")
		var htmls={}
		htmls.tds=""
		htmls.main=""
		htmls.content=elem.content
		htmls.main+=genFn(htmls,"content",elem,"")
		htmls.minimalizer="<input id=\""+elem.pathWithAdd+"-check"+"\"  type=\"checkbox\""+(elem.offsetLength!=1&&!byPaths[elem.parentStr].flags.has("[minimalize]")&&!checkeds[elem.pathStr]?" checked":"")+" onchange=\"hiderAction('"+elem.pathStr.replace(/ /g,"[space]").replace(/"/g,"[quote]")+"',this.checked)\">"
		htmls.main+=genFn(htmls,"minimalizer",elem,"")
		htmls.links=""
		for(var v=0;v<elem.links.length;v++)
			htmls.links+="<a ref=\""+elem.links[v].ref+"\">"+elem.links[v].text+"</a>"
		htmls.main+=genFn(htmls,"links",elem,"")
		htmls.tds+="<td>"+genFn(htmls,"main",elem,"style=\"margin-left:"+elem.offsetLength*20+"px;\"")+"</td>"
		htmls.where=""
		for(var v of elem.where)
			if(v&&v.length!=0)
				htmls.where+="<span class=\"str "+colorOf(v.join(props.syntax.of_))+"\">"+v.join(props.syntax.of_).replace(new RegExp("["+props.syntax.of_+"]["+props.syntax.in_+"]|["+props.syntax.in_+"]["+props.syntax.of_+"]","g"), props.syntax.of_)+"</span>"+props.syntax.enumeration+" "
		htmls.tds+="<td>"+genFn(htmls,"where",elem,"")+"</td>"
		htmls.flags=""
		for(var v of elem.flags)
			if(v&&v.length!=0)
				htmls.flags+="<span>"+v+"</span>"+props.syntax.enumeration+" "
		htmls.tds+="<td>"+genFn(htmls,"flags",elem,"")+"</td>"
		htmls.children=""
		for(var v of elem.children)
			if(v&&v.length!=0)
				htmls.children+="<span class=\"child\">"+v+"</span>"+props.syntax.enumeration+" "
		htmls.tds+="<td>"+genFn(htmls,"children",elem,"")+"</td>"
		htmlOfTable+="<tr style=\""+(elem.offsetLength>1||elem.flags.has("[hidecurrent]")||byPaths[elem.parentStr].flags.has("[hidechildren]")||byPaths[elem.parentStr].flags.has("[minimalize]")?"display: none":"")+"\" id=\""+elem.pathWithAdd+"\" class=\"line "+elem.parentWithAdd+elem.parentTreeWithAdds+"\">"+htmls.tds+"</tr>"
	}
	return htmlOfTable
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
	//for(var v in linesOfCfg)
	//	console.log(linesOfCfg[v].pathArr,linesOfCfg[v].content,linesOfCfg[v].where,linesOfCfg[v].children);
	var byPaths=fromLinesToByPaths(linesOfCfg,funcArea.value)
	//for(var v in byPaths)
	//	console.log(byPaths[v].pathArr,byPaths[v].content,byPaths[v].where,byPaths[v].children);
	var htmlLook=generateHtmlTable(byPaths)
	universesByDiv.innerHTML=htmlLook
	//for(var v=0;v<toHide.length;v++)
	//	hiderAction(toHide[v],false)
}
genButton.onclick()

function hideShowByClassName(className, val){
	var es=document.getElementsByClassName('line-content')
	for(var v of es)
		v.style.display=(val==undefined?v.style.display=="none":val)?"":"none"
}
function hiderAction(path,val){
	var es=document.getElementsByClassName('htmlTable-val-parentTree-'+(1?0:path.split(props.syntax.of_).length-1)+"-"+path)
	if(val==undefined)
		val=document.getElementById("htmlTable-val-path-"+path+"-check").checked?true:false
	for(var v of es){
		var sh=true
		var p=""
		for(var pc of v.id.replace("htmlTable-val-path-","").split(props.syntax.of_)){
			if(!p)
				p=pc
			else p+=props.syntax.of_+pc
			if(p!=v.id.replace("htmlTable-val-path-",""))
				if(document.getElementById("htmlTable-val-path-"+p+"-check"))
					if(!document.getElementById("htmlTable-val-path-"+p+"-check").checked)
						sh=false
			//console.log(p);
		}
		v.style.display=val&&sh?"":"none"
		//storageValue(v.id+"-hiden",v.style.display=="none")
	}
	checkeds[path]=!val
	storageValue("checkeds",JSON.stringify(checkeds))
}
