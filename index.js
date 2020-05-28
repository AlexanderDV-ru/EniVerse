//--- Name: EniVerse/Vesion: 0.2.8a/Authors: AlexanderDV/Description: Main EniVerse .js. ---
var programInfo={
	Name : "EniVerse",
	Version : "0.2.8a",
	Authors : "AlexanderDV"
}
programInfo.Title= programInfo.Name + " v" + programInfo.Version + " by " + programInfo.Authors
document.title=programInfo.Title
// End of standard initialization ---
var inSyms="a-zA-Z0123456789. "
var flagRe=new RegExp("[\\"+props.syntax.flag.start+"]["+inSyms+"]{0,}[\\"+props.syntax.flag.end+"]","g")
var superRe=new RegExp("[\\"+props.syntax.super.start+"]["+inSyms+"]{0,}[\\"+props.syntax.super.end+"]","g")
class Element{
	constructor(path,where,children){
		this._val_path=[].concat(path)

		this.where	=	new Set(Array.isArray(where)?where:Object.keys(where instanceof Set?where.keys():where))
		this.children=	new Set(Array.isArray(children)?children:Object.keys(children instanceof Set?children.keys():children))
		this.flags	=	new Set(this.getName().match(flagRe)||[])
		this.supers	=	new Set(this.getName().match(superRe)||[])
	}

	getPathArr(){
		return [].concat(this._val_path)
	}
	getPathStr(){
		return this._val_path.join(props.syntax.of_)
	}

	getOffsetLength(){
		return this._val_path.length-1
	}
	getOffsetStr(){
		return multiplyStr(props.syntax.offset_,this._val_path.length-1)
	}

	getParent(){
		return [].concat(this._val_path).splice(0,this._val_path.length-1)
	}
	getParentStr(){
		return this.getParent().join(props.syntax.of_)
	}

	getName(){
		return this._val_path[this._val_path.length-1]||""
	}
	getContent(){
		return this.getName().replace(flagRe,"").replace(superRe,"")
	}

	getColor() {
		for(var v0 in props.syntax.froms)
			if(this.getContent().startsWith(props.syntax.froms[v0]))
				return props.colors.froms[v0]
		return props.colors.fromsDef
	}
}
function toLines(cfg){
	var linesOfCfg=[]
	var path=[]
	var last
	var lns=cfg.split("\n")
	for(var v=0;v<lns.length;v++){var vv=new RegExp("^["+props.syntax.offset_+"]{0,}")
		linesOfCfg[v]={}
		linesOfCfg[v].offset	=	lns[v].match(vv)[0]||""
		linesOfCfg[v].content	=	lns[v].replace(vv,"").split(props.syntax.parent)[0]


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
				if(lines[v1].getParentStr()+props.syntax.of_+lines[v1].getContent()==v0v)
					pi=v1
			//console.log(lines[v1],lines.length,lines[v].supers,pi,pi+1<lines.length?lines[pi+1]:"NN",pi<lines.length?lines[pi]:"NN");
			for(var v1=pi+1;v1<lines.length&&lines[v1].offset.length>lines[pi].offset.length;v1++)
			{
				var el=new Element(lines[v1].getParentArr(),lines[v1].where,lines[v1].children)
				el.offset=multiplyStr(props.syntax.offset_,lines[v1].offset.length-lines[pi].offset.length+lines[v].offset.length)
				linesOfCfg.push(el)
			}
			var el=new Element((lines[v].getParentStr()+props.syntax.of_+lines[v].getContent()).split(props.syntax.of_), lines[v].where,lines[v].children)
			el.offset=lines[v].offset+props.syntax.offset_
		}
	}
	return linesOfCfg
}
linesOfCfg=fromSupers(linesOfCfg)

function fromLinesToByPaths(linesOfCfg,whereFunc){
	var byPaths={}
	whereFunc=whereFunc||function(pathArr){return [pathArr,[]]}
	for(var elem of linesOfCfg){
		/*var pathArr=elem.getParent()
		var whereFuncResult=whereFunc(pathArr)
		var newPath=whereFuncResult[0]
		var newWhere=whereFuncResult[1]
		var old=byPaths[newPath.join(props.syntax.of_)]
		var where=old?old.where:elem.where
		var children=old?old.children:elem.children
		//console.log(where,children,newWhere,newPath);
		where.add(newWhere)
		{
			children.add(elem.getContent())
			var pathArr=elem.getPathArr()
			var whereFuncResult=whereFunc(pathArr)
			var newPath=whereFuncResult[0]
			var newWhere=whereFuncResult[1]
			var old=byPaths[newPath.join(props.syntax.of_)]
			var where=old?old.where:elem.where
			var children=old?old.children:elem.children
			//console.log(where,children,newWhere,newPath);
			where.add(newWhere)
			byPaths[newPath.join(props.syntax.of_)]=new Element(newPath,where,children)
		}
		byPaths[newPath.join(props.syntax.of_)]=new Element(newPath,where,children)
		//console.log(where,children,newWhere,newPath);*/
		byPaths[whereFunc(elem.getPathArr())[0].join(props.syntax.of_)]=new Element(whereFunc(elem.getPathArr())[0],whereFunc(elem.getPathArr())[1],{})
	}
	return byPaths
}
var toHide=[]
function generateHtmlTable(byPaths){
	var htmlOfTable=""
	var sortedByAlphabetPaths=Object.keys(byPaths).sort()
	for(var sbapsi=0;sbapsi<sortedByAlphabetPaths.length;sbapsi++)
	{
		var curPath=sortedByAlphabetPaths[sbapsi]
		var elem=byPaths[curPath]
		elem.links=[]
		if(byPaths[elem.parent+props.syntax.of_+"@Links"])
			for(var v0 of byPaths[elem.parent+props.syntax.of_+"@Links"].children)
			{
				try{
					if(!byPaths[v0].func)
						byPaths[v0].func=eval("("+v+")")
				}catch(e){}
				elem.links.push(byPaths[v0].func(linesOfCfg[v]))
			}
		elem.parentTree=[]
		for(var v=0;v<elem.getParent().length;v++)
			elem.parentTree[v]=(v==0?"":elem.parentTree[v-1]+props.syntax.of_)+elem.getParent()[v]

		elem.pathWithAdd	=	"htmlTable-val-path-"+elem.getPathStr()
		elem.parentWithAdd	=	"htmlTable-val-parent-"+elem.getParentStr()
		elem.parentTreeWithAdds=""
		for(var v=0;v<elem.parentTree.length;v++)
			elem.parentTreeWithAdds+=" htmlTable-val-parentTree-"+v+"-"+elem.parentTree[v]
		var htmlOfTds=""
		if(!elem.flags.has("noname"))
		{
			var htmlOfMain=""
			if(!elem.flags.has("nocontent"))
				htmlOfMain+=elem.getContent()
			if(!elem.flags.has("nohider"))
				htmlOfMain+="<input type=\"checkbox\""+(elem.getOffsetLength()==1?"":" checked")+" onchange=\"hiderAction('"+elem.getPathStr()+"',this.checked)\">"
			if(!elem.flags.has("nolinks"))
				for(var v=0;v<elem.links.length;v++)
					htmlOfMain+="<a ref=\""+elem.links[v].ref+"\">"+elem.links[v].text+"</a>"
			htmlOfTds+="<td><div style=\"margin-left:"+elem.getOffsetLength()*20+"px;\">"+htmlOfMain+"</div></td>"
		}
		if(!elem.flags.has("nowhere"))
		{
			var htmlOfWhere=""
			htmlOfWhere+=Array.from(elem.where).join(props.syntax.enumeration).replace(new RegExp("["+props.syntax.of_+"]["+props.syntax.in_+"]|["+props.syntax.in_+"]["+props.syntax.of_+"]","g"), props.syntax.of_)
			htmlOfTds+="<td><div>"+htmlOfWhere+"</div></td>"
		}
		htmlOfTable+="<tr id=\""+elem.pathWithAdd+"\" class=\"line "+elem.parentWithAdd+elem.parentTreeWithAdds+"\">"+htmlOfTds+"</tr>"
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
	//	console.log(linesOfCfg[v].getPathArr(),linesOfCfg[v].getContent(),linesOfCfg[v].where,linesOfCfg[v].children);
	var byPaths=fromLinesToByPaths(linesOfCfg,funcArea.value=="default"?undefined:((funcArea.value?custFn:undefined)||function(pathArr){
		var first=[],second=[]
		for(var pathEl of pathArr)
			(pathEl.indexOf(props.syntax.in_)!=-1?second:first).push(pathEl)
		return [first,second]
	}))
	//for(var v in byPaths)
	//	console.log(byPaths[v].getPathArr(),byPaths[v].getContent(),byPaths[v].where,byPaths[v].children);
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
	var es=document.getElementsByClassName('htmlTable-val-parentTree-'+(path.split(props.syntax.of_).length-1)+"-"+path)
	for(var v of es)
		v.style.display=(val==undefined?v.style.display=="none":val)?"":"none"
}
