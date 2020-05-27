/*--- Name: EniVerses/Vesion: 0.2.7a/Authors: AlexanderDV/Description: Properties EniVerses .js. ---*/
//Properties
var props	=	{}
props.syntax	=	{
	offset_	:	"\t",
	newLine_	:	"\n",
	ekran_	:	"\\",
	to_	:	" ~",
	of_	:	" .",
	in_	:	"/",
	type_	:	":",
	quotes_	:	"\"",
	regexp_	:	"/",
	regexps	:	{
		flags	:	{
			global	:	"g",
			ignoreCase	:	"i"
		},
	},

	inSyms	:	"$",
	snippets	:	{
		"!"	:	"\\c\\b\n\\c\t\\a"
	},
	localNameDepr	:	"---Value for deprecated localName mechanic---",
	parent	:	"{",
	parentElement	:	".",
	comment	:	"%",
	currentRealization	:	"_",
	tag	:	"[$]",
	tags	:	{
		del	:	"u",
		hide	:	"y"
	},
	otherType	:	"@",
	classificationonal	:	"%",
	toRedact	:	"?",
	synonymSplit	:	"/",
	isIn	:	":",
	isInSplit	:	";",
	enumeration	: ";",

	froms	:	{
		def	:	"",
		comment	:	"#",
		classificationonal	:	"%",
		link	:	"@",
		question	:	"?"
	}
}
props.colors	=	{
	froms	:	{
		def	:	"black",
		comment	:	"green",
		classificationonal	:	"blue",
		link	:	"red",
		question	:	"yellow"
	}
}
var removeFromResult	=	[props.syntax.tag.replace(props.syntax.inSyms,props.syntax.tags.hide),props.syntax.tag.replace(props.syntax.inSyms,props.syntax.tags.del)]
props.universesConfig	=	"Eniverse[y]"
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
add(`/Real world
	Verse[y]
		@Type
			Uni
		Original
			@Worlds
				Our	!=	Earth-2020
	Objects[y]
		%Elixirs
			%r-4[y]
				%Toxins
				%Radioactive
				%Narcotics
				%Bacteria
				%Virus
		%Artefacts
			%r-4[y]
				%Weapon
					%Guns
						%Automates
						%Pistols
					%Explosive
					%Nuclear
					%Tank
				%Vehicle
					%Car
					%Plane
					%Helicopter
					%Train
					%Ship
				%Drone
					%Quadrocopter
				%Videocamera
				%Display
				%Microphone
				%Dinamic
				%Rockets
				%Computer
				%Telephone
	Actions[y]
		%r-4[y]
			Granade by post
			%Bioweapon`)
add(`/Doctor Who`)
add(`/Final Fantasy`)
add(`/Charodey
	@Languages[y]
		English
	@Sources[y]
		%Serial`)
add(`/Charodei
	@Languages[y]
		Russian
	@Sources[y]
		%Film`)
add(`/Rick and Morty
	@Languages[y]
		English
	@Sources[y]
		%Multserial
			1
			2
			3
			4
	Objects[y]
		%Artefacts
			%r-5[y]
				%Portal Gun
	Verse[y]
		@Type
			Multi
		Original`)
add(`/Marvel
	@Sources[y]
		%Fiction
			%Comics
				Marvel
	Verse
		@Type
			Multi
		Original
	Creatures
		%Mind
			%r-5[y]
				%X-Man
					Ksavier
					Logan
				%Human
					Entony Stark
					Govard Stark
				%Zen-Hoberis
				%Klyntar
				%Kree
				%Inhuman
				%Chitauri
				%Flora Koloss
				%Titan_1
	Energies
		%r-5[y]
			+5	!=	Magical?
	Features
		%r-5[y]
			X-Man
				Action
					Mental
						Telepathy
							@Ksavier
					Regen
						Cell
							@Logan
	Materials
		%Metals
			Vibranium
			Adamantium
	Organizations
		Stark
			@Entony Stark
		X-Man
			@Ksavier
	Objects
		%Artefacts
			%r-4[y]
				%Tech
					%Stark's
						%Iron Man suits
							mark7
						%Thermonuclear Reactor
				Cerebro
			%r-7[y]
				%Gems
					%Infinity
						Space
						Soul
						Reality
						Time
						Power
						Mind
			%r-6[y]
				%Loki's
					Sceptre
				%Thor's
					Mjolnir`)
add(`/Men in black
	@Languages[y]
		English
	@Sources[y]
		%Film`)
add(`/Gamelit
	Users
		%r-6[y]
			gm	!=	Gamer's System`)
add(`/Gameworld
	Users
		%r-6[y]
			gm	!=	Gamer's System`)
add(`/SCP Foundation
	@Languages[y]
		English
	@Sources[y]
		%Statue
	Organizations	!=	g
		SCP	!=	Secure Containt Protect
	Objects
		%Artefacts
			%r-5[y]
				%SCP's`)
add(`/Ghost Busters
	@Languages[y]
		English
	@Sources[y]
		%Film
	Objects
		%Artefacts
			%r-4[y]
				%Ghost traps
	Creatures
		%r-4[y]
			%Ghost`)
add(`/Startrack
	@Languages[y]
		English
	@Sources[y]
		%Serial
	Creatures
		%Mind
			%r-5[y]
				%Human
				%Vulkan
	Energies
		%r-5[y]
			+4	!=	Psy?
	Users
		%r-5[y]
			e+4	!=	Psyonic`)
add(`/Terminator
	@Languages[y]
		English
	@Sources[y]
		%Film
	Objects
		%Artefacts
			%r-5[y]
				%Tech
					%Skynet's
						%AI
						%Drones
						%Terminators
							%1
							%800
							%850
							%1000
							%Ex
						Time-Machine
						%Cyborgs`)
add(`/Resident Evil
	@Languages[y]
		English
	@Sources[y]
		%Games
	Creatures
		%r-4[y]
			%Virused Zombie
	Features
		%r-5[y]
			Superability`)
add(`/Cat Leopold
	@Languages[y]
		Russian
	@Sources[y]
		%Multfilm
	Objects
		%Elixirs
			%r-4[y]
				Ozverin`)
add(`/My Little Pony`)
add(`/Winks`)
add(`/DC
	@Languages[y]
		English
	@Sources[y]
		%Comics
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	!=	Earth?
	Creatures
		%Mind
			%r-5[y]
				%Human
	Energies
		%r-5[y]
			+5	!=	Mana?
		sf	!=	Speedforce
	Emotions	!=	Lantern's
		Life	!=	of White
		Anger	!=	of Red, Atrocitus
		Greed	!=	of Orange
		Fear	!=	of Yellow, Sinestro
		Will	!=	of Green
		Hope	!=	of Light Blue
		Compassion	!=	of Blue, Indigo
		Love	!=	of Purple, Sapphire
		Death	!=	of Black
	Users
		%r-5[y]
			Metahuman
			sf	!=	Speedforceuser
			e+5	!=	Mage
	Objects
		%Artefacts
			%r-4[y]
				%Tech
					%Batman's
					%Luthor's
			%r-5[y]
				%Tech
					%Crypton's`)
add(`/Avatar
	@Languages[y]
		Japanese
	@Sources[y]
		%Multserial
	Energies
		%r-5[y]
			+5	!=	Mana?
	Elements
		%Basic
			Fire
			Water
			Earth
			Air
	Directions
		%Types[y]
			%Action
				Heal
	Features
		%r-5[y]
			Mage
				Fire
				Water
				Earth
				Air
			Avatar`)
add(`/Virworld`)
add(`/Lucifer
	@Languages[y]
		English
	@Sources[y]
		%Serial
			1.
			2.
			3.
			4.`)
add(`/Master and Margarita
	@Authors[y]
		Bulgakov
	@Languages[y]
		Russian
	@Sources[y]
		%Books`)
add(`/Alice in back side of mirror
	@Languages[y]
		Japanese
	@Sources[y]
		%Books`)
add(`/Voina i mir
	@Authors[y]
		Lev Tolstoy
	@Languages[y]
		Russian`)
add(`/Ottsy i deti
	@Authors[y]
		Turgenev
	@Languages[y]
		Russian
	@Sources[y]
		%Books`)
add(`/12 stuliev
	@Languages[y]
		Russian
	@Sources[y]
		%Books`)
add(`/Green Mile
	@Authors[y]
		Steven King
	@Languages[y]
		English
	@Sources[y]
		%Books`)
add(`/Pobeg is shoushenka
	@Authors[y]
		Steven King
	@Languages[y]
		English
	@Sources[y]
		%Books`)
add(`/451 Farengait
	@Authors[y]
		Rai bradberry
	@Languages[y]
		English
	@Sources[y]
		%Books`)
add(`/We
	@Languages[y]
		Russian
	@Sources[y]
		%Books`)
add(`/Oh divniy new world
	@Languages[y]
		English
	@Sources[y]
		%Books`)
add(`/1984
	@Authors[y]
		George Oruell
	@Languages[y]
		English
	@Sources[y]
		%Books`)
add(`/Skotniy Dvor
	@Languages[y]
		Russian
	@Sources[y]
		%Books`)
add(`/Solaris`)
add(`/Atlant raspravil plechi
	@Languages[y]
		English
	@Sources[y]
		%Books`)
add(`/Game of Thrones
	@Languages[y]
		English
	@Sources[y]
		%Books`)
add(`/Path of Dark Mage
	@Authors[y]
		Sergey Zloy
	@Languages[y]
		Russian
	@Sources[y]
		%Fanfics
	Verse
		@Type
			Uni
		Potteriana`)
add(`/Mage and his shadow`)
add(`/Sticks`)
add(`/Myths of Ktulhu
	@Authors[y]
		Govard Lovecraft
	@Languages[y]
		English
	@Sources[y]
		%Books`)
add(`/King's Battle
	@Languages[y]
		Japanese
	@Sources[y]
		%Ranobe`)
add(`/Hunger Games
	@Authors[y]
		Katlin
	@Languages[y]
		English
	@Sources[y]
		%Books`)
add(`/Dead souls
	@Authors[y]
		Nikolay Gogol
	@Languages[y]
		Russian
	@Sources[y]
		%Books`)
add(`/Pandora Box`)
add(`/Megabrain
	@Sources[y]
		%Film`)
add(`/Matrix
	@Languages[y]
		English
	@Sources[y]
		%Film`)
add(`/Fifth Element`)
add(`/trassa 60`)
add(`/Love Death Robots
	@Sources[y]
		%Serial`)
add(`/Black Mirror
	@Sources[y]
		%Serial`)
add(`/Memnoh Devil`)
add(`/Labirint Favna`)
add(`/Persi Jackson`)
add(`/Star Dust`)
add(`/Home of strange kid ms peregrin`)
add(`/Gravity Falls
	@Sources	!	%Fiction.%Multserial.Gravity Falls
	Objects
		%Artefacts
			%r-4[y]
				%Diaries
					@Stanford
					1
					2
					3
		%r-5[y]
			%Anomaly
				Sizing Lamp
	Creatures
		%Mind
			%r-6[y]
				%Demon
					Bill Cipher`)
add(`/Fineas and Ferb
	@Sources	!	%Fiction.%Mult.Fineas and Ferb`)
add(`/Infinity Story`)
add(`/Collectioner`)
add(`/Molchaniye Yagnyat`)
add(`/Wizard Parents`)

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
