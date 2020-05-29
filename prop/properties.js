/*--- Name: EniVerse/Vesion: 0.2.9a/Authors: AlexanderDV/Description: Properties EniVerse .js. ---*/
//Properties
var props	=	{}
props.syntax	=	{
	offset_	:	"\t",
	newLine_	:	"\n",
	ekran_	:	"\\",

	to_	:	"~",
	of_	:	".",
	in_	:	"/",
	at_	:	":",

	quotes_	:	"\"",
	regexp_	:	"/",
	regexps	:	{
		flags	:	{
			global	:	"g",
			multiline	:	"m",
			ignoreCase	:	"i"
		},
	},

	multiline	:	{
		start	:	"(",
		end	:	")",
	},
	type	:	{
		start	:	"<",
		end	:	">",
	},
	super	:	{
		start	:	"{",
		end	:	"}",
	},
	flag	:	{
		start	:	"[",
		end	:	"]",
	},

	snippets	:	{
		"!"	:	"\\c\\b\n\\c\t\\a"
	},
	flags	:	{
		del	:	"u",
		hide	:	"y"
	},

	synonym	:	"|",

	enumeration	: ";",

	froms	:	{
		comment	:	"#",
		classificationonal	:	"%",
		link	:	"@",
		question	:	"?"
	}
}
props.colors	=	{
	froms	:	{
		comment	:	"green",
		classificationonal	:	"blue",
		link	:	"red",
		question	:	"yellow",
	},
	fromsDef	:	"black",
}
var removeFromResult	=	[props.syntax.flag.start+props.syntax.flags.hide+props.syntax.flag.end, props.syntax.flag.start+props.syntax.flags.del+props.syntax.flag.end]
props.universesConfig	=	""
props.universes	=	[]
props.offsetSize	=	1
function add(adding){
	var res=""
	var aSpl=adding.split(props.syntax.newLine_)
	for(var v in aSpl)
	{
		var add=aSpl[v],rrr="1234567890"//"([\\t ]+|[\\t ])"
		for(var v2 in props.syntax.snippets)
			if(add.indexOf(v2)!==-1)
				add=props.syntax.snippets[v2].replace(/[\\][c]/g,add.match(/^(\t+|\t|)/)[0]).replace(/[\\][b]/g,normalName(add.split(v2)[0].substr(add.match(/^(\t+|\t|)/)[0].length),rrr)).replace(/[\\][a]/g,normalName(add.split(v2)[1],rrr))
		res+=props.syntax.newLine_+add
		if(v==0)
			props.universes.push(normalName(add,rrr))
	}
	adding=""
	for(var v in res.split(props.syntax.newLine_))
		adding+=props.syntax.newLine_+res.split(props.syntax.newLine_)[v].match(/^(\t+|\t|)/)[0]+normalName(res.split(props.syntax.newLine_)[v].substr(res.split(props.syntax.newLine_)[v].match(/^(\t+|\t|)/)[0].length))
	adding	=	(props.syntax.newLine_+adding.replace(new RegExp("["+props.syntax.offset_+"]","g"),props.syntax.offset_)).replace(new RegExp("["+props.syntax.newLine_+"]","g"),props.syntax.newLine_+multiplyStr(props.syntax.offset_,props.offsetSize))
	props.universesConfig+=	adding
}

props.msgs	=	{
	"ru-RU"	:	{
		"generate"	:	"Сгенерировать",
	},
	"en-US"	:	{
		"generate"	:	"Generate",
	},
}

// Universal local storage initialization
var storage = window.localStorage
function storageValue(key,val)
{
	var vals
	try {
	vals= JSON.parse(storage[programInfo.name])
	} catch (e) {

	}
	if(!vals)
		vals={}
	if(arguments.length>=2)
		vals[key]=val
	storage[programInfo.name]=JSON.stringify(vals)
	return vals[key]
}

// Messages language initialization by default value
props.msgsLang='ru-RU'
// Function for getting message by key
var getMsg=function(key, lang){
	return props.msgs[lang||messagesLanguage][key]
}
