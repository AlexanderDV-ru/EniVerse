/*--- Name: EniVerses/Vesion: 0.2.2a/Authors: AlexanderDV/Description: Properties EniVerses .js. ---*/
//Properties
var props	=	{}
props.config	:	{
	inSyms	:	"$",
	offset	:	"\t",
	newLine	:	"\n",
	snippets	:	{
		"!"	:	"\\c\\b\n\\c\t=\\a",
		"№"	:	"\\c\\b\n\\c\t\\a"
	},
	localNameDepr	:	"---Value for deprecated localName mechanic---",
	parent	:	"{",
	parentElement	:	".",
	comment	:	"/*",
	currentRealization	:	"_",
	tag	:	"[$]",
	tags	:	{
		del	:	"u",
		hide	:	"y"
	},
	otherType	:	"@",
	classificationonal	:	"#",
	toRedact	:	"?",
	synonymSplit	:	"/",
	isIn	:	":",
	isInSplit	:	";"
}
var removeFromResult	=	[props.config.tag.replace(props.config.inSyms,props.config.tags.hide),props.config.tag.replace(props.config.inSyms,props.config.tags.del)]
props.universesConfig	=	"Eniverse"
props.universes	=	[]
props.offset	=	1
function add(adding){
	var res=""
	var aSpl=adding.split(props.config.newLine)
	for(var v in aSpl)
	{
		var add=aSpl[v],rrr="1234567890"//"([\\t ]+|[\\t ])"
		for(var v2 in props.config.snippets)
			if(add.indexOf(v2)!=-1)
				add=props.config.snippets[v2].replace(/[\\][c]/g,add.match(/^(\t+|\t|)/)[0]).replace(/[\\][b]/g,normalName(add.split(v2)[0].substr(add.match(/^(\t+|\t|)/)[0].length),rrr)).replace(/[\\][a]/g,normalName(add.split(v2)[1],rrr))
		res+=props.config.newLine+add
		if(v==0)
			props.universes.push(normalName(add,rrr))
	}
	adding=""
	for(var v in res.split(props.config.newLine))
		adding+=props.config.newLine+res.split(props.config.newLine)[v].match(/^(\t+|\t|)/)[0]+normalName(res.split(props.config.newLine)[v].substr(res.split(props.config.newLine)[v].match(/^(\t+|\t|)/)[0].length))
	adding	=	(props.config.newLine+adding.replace(new RegExp("["+props.config.offset+"]","g"),props.config.offset)).replace(new RegExp("["+props.config.newLine+"]","g"),props.config.newLine+multiplyStr(props.config.offset,props.offset))
	props.universesConfig+=	adding
}
add(`Myverse
	@Sources[y]
		#Fiction
			#Fanfics
				Myverse
	/*Classification
	/*Entity without shell, how names
	Without	!	w
		-2	!	Unthing
		-1	!	Unbody, Spirit
		+0	!	Unlife
		+1	!	Undead
		+2	!	Unentity
		+3	!	Unperson
		+4	!	Unmind
		+5	!	Unmage
		/*not equal to muggle, nomage
		+6	!	Unimmortal, Mortal
		+7	!	Ungod
	Shells	!	h
		-5	!	Magical Body	/*chakras, nadyas
		-4	!	Informatic Body	/*Infostructure
		-3	!	Feeling Body?
		-2	!	Ether Body
		-1	!	Matter Body
		+0	!	Core, lifing
		+1	!	Vital, living
		+2	!	Astral, spirital
		+3	!	Person, feeling
		+4	!	Mind, logical
		+5	!	Magical, creativity
		+6	!	Immortal, immortality function
		+7	!	God, Real-turning
		-	!	Body
		+	!	Soul/Aura
		0	!	Core
		1	!	Matteral
		2	!	Etheral
		3	!	Emotional
		4	!	Psyhical
		5	!	Magical
		6	!	Immortal
		7	!	Divinal
		/*Index of energy equals to index of shell that used this energy (not have, use)
	Reality	!	r
		-7	!	7	Count shells
		-6	!	6	Count shells
		-5	!	5	Count shells
		-4	!	4	Count shells
		-3	!	3	Count shells
		-2	!	2	Count shells
		-1	!	1	Count shells
		-0	!	0	Count Shells
		+0	!	0	Full Shells
		+1	!	1	Full shells
		+2	!	2	Full shells
		+3	!	3	Full shells
		+4	!	4	Full shells
		+5	!	5	Full shells
		+6	!	5	Full shells
		+7	!	7	Full shells
		/*
		0	!	0	Half Shells
		1	!	1	Half Shells
		2	!	2	Half Shells
		3	!	3	Half Shells
		4	!	4	Half Shells
		5	!	5	Half Shells
		6	!	6	Half Shells
		7	!	7	Half Shells
		8	!	8	Half Shells
		9	!	9	Half Shells
		10	!	10	Half Shells
		11	!	11	Half Shells
		12	!	12	Half Shells
		13	!	13	Half Shells
		14	!	14	Half Shells
	Energies	!	e
		#r-5[y]
			-5	!	Mrana?
			-4	!	Psy?
			-3	!	Ema?
			-2	!	Spirita?
			-1	!	Prana
			+0	!	Force
			+1	!	Ki
			+2	!	Reatsu
			+3	!	Emana
			+4	!	Esperi
			+5	!	Mana
			+1+2	!	Ki+Reatsu
			+3+5	!	Emana+Mana
		#r-7[y]
			+7	!	Ba-Hion
	Levels	!	l
		0.0	!	Nomage
			@l=G
			@l=O
			@d=Not Demon
		0.3
		0.5
		0.7
		1.0	!	Weak
			@l=F
			@d=Lower Demon
		1.3
		1.5
		1.7
		2.0	!	Simple
			@l=E
			@d=Low Demon
		2.3
		2.5
		2.7
		3.0	!	Normal
			@l=D
			@d=Medium Demon
		3.3
		3.5
		3.7
		4.0	!	High
			@l=C
			@d=High Demon
		4.3
		4.5
		4.7
		5.0	!	Higher
			@l=B
			@d=Higher Demon
		5.3
		5.5
		5.7
		6.0	!	Arch
			@l=A
			@d=Arch demon
		6.3
		6.5
		6.7
		7.0	!	God
			@l=S
			@d=God	Demon
		7.3
		7.5	!	Demiurg
			@l=X
			@d=Demiurg
		7.7
	/*Splitting
	Lvlsplitting
		#l0.0
		#l1.0
		#l2.0
		#l3.0
		#l4.0
		#l5.0
		#l6.0
		#l7.0
	Splitting
		#Categories
		#r-0[y]
		#r-1[y]
		#r-2[y]
		#r-3[y]
		#r-4[y]
		#r-5[y]
		#r-6[y]
		#r-7[y]
	Users	!	u
		#Categories
			tc	!	Tech
			bi	!	Bio
			en	!	Energy/*Rudazov's magic
			te	!	Tech&Energy/*Technomagic of badchoice
			bt	!	Bio&Tech
			be	!	Bio&Energy
			fl	!	All paths
		#r-0[y]
		#r-1[y]
		#r-2[y]
		#r-3[y]
		#r-4[y]
		#r-5[y]
			e+1	!	Kiuser
			e+2	!	Reatser
			e+3	!	Emotic
			e+4	!	Psyhic
			e+5	!	Mage
				Black
				Gray
				White
			e+1+2	!	Shinobi
			e+3+5	!	Wizard
				Black
				Gray
				White
		#r-6[y]
			Immortal
				Dark	!	Demon_0
				Neutral	!	Immortal
				Light	!	Angel_0
		#r-7[y]
			e+7	!	God_1
				Dark
				Neutral	!	Beastgod
				Light
	Objects	!	o
		#Artefacts
			#Categories
			#r-0[y]
			#r-1[y]
			#r-2[y]
			#r-3[y]
			#r-4[y]
			#r-5[y]
				#Wands
				#Rods
				#Staffs
				#Grimoires
				#Spheres
			#r-6[y]
			#r-7[y]
	Creatures	!	c
		#Categories
		#r-0[y]
		#r-1[y]
		#r-2[y]
		#r-3[y]
		#r-4[y]
		#r-5[y]
		#r-6
			#Demon
				Control
				Anti
			#Immortal
				Control
				Anti
			#Angel_0
				Control
				Anti
		#r-7
			#God_1
				Control
				Anti
		#n	!	Dimensions
			#Matteral
				#w+1
					#Undead
						Control
						Anti
				#bt	!	Bio
					#Homuncul
					#Kadavr
						Control
						Anti
						Create
					#Animal
						Talk
						Control
						Anti
						Familiar
					#Bestia
						Control
						Anti
					#Flora
						Control
						Anti
					#Chimera
						Control
						Anti
						Create
				#tc	!	Tech
					#Robot
				#en
					#Emotions	!	Emotional
					#Elements	!	Elemental
						Control
						Anti
						Create
					#Materials	!	Holem
						Control
						Anti
					#Automate
						Control
						Anti
					#Marionette
						Control
						Anti
					#Energies	!	Energal
						Dev?
						Jinn?
						Holem?
					#Doppel
						Control
						Anti
						Material
						Plotniye
						Magical
						Full
						Energed
						Illusor
				#Vampire
					Control
					Anti
			#Matteral-Etheral
				#w-1	!	Ghost
					Control
					Anti
			#Etheral
				#w-1	!	Loa
					Control
					Anti
			#Etheral-Mental
				#w-1	!	Phantom
					Control
					Anti
					Create
					Enter
			#Mental	!	Ment
		#Mind
			#Categories
			#r-0[y]
			#r-1[y]
			#r-2[y]
			#r-3[y]
			#r-4[y]
			#r-5[y]
			#r-6[y]
			#r-7[y]
	Forms	!	f
		#Atack
			GodHand
			Ball
			Lightning
			Lightnings tree
			Ray
			Hammer
			Flare
			Wave?
			Storm?
			Tornado?
			Explosion?
			Protuberanets?
		#Protect
			Shield
			Cupola
			Cocoon
			Armor
			Aura
			Protection
		#WF
			Fist
			Lash
			Sword
			Blade
			Torch
			Hammer
		#Weapon
			Cannonball
			Press
			Arrow
			Spear
			Shuriken
			Bullet
			Ram
			Needle
			Screw
		#Crate
			Crate
			Fetters
			Net
			Shackles
		#Misc
			Chain
			Funnel
			Field
			Tentacle
			Mirror
			Thread
			Clone
			Thing
			Wings
			Limb
			Cloak
	Emotions	!	i
		Sad
		Apathy
		Pain
		/*
		Pride	!	Pride of Gold?
		Pathos	!	Pathos of Gray?
		/*DC Lantern's
		Life
		Anger
		Greed
		Fear
		Will
		Hope
		Compassion
		Love
		Death
		/*Love and peace
		Peace
	Materials	!	m
		#Categories
		#r-0[y]
		#r-1[y]
		#r-2[y]
		#r-3[y]
		#r-4[y]
		#r-5[y]
		#r-6[y]
		#r-7[y]
	Elements	!	n
		#Basic
			Fire
			Water
			Earth
			Air
			Ice
			Electrizity
		#First
			Dark
			Light
			Chaos
			Order
			Death
			Life
		#Misc
			Blood
			Mirror
			Shadow
			Picture
			Void
			Twilight
			Ethervoid
			Explosion
			Crystall
			Acid
			Bludfire/Hellfire/Cursed Fire/Fiendfyre
			Phoenix
			Avadakedavra
			Magnetism
			Rock
			Plasma
			Metal
			Lava
			Boil
			Heat
			Tree
			Sand
			Photo
		#Process
			Desecration
			Grace
			Desintegration
			Unemboding
			Thirst
		#Plasma
			w+1	!	Undead
			w-1	!	Spirit
			tc	!	Tech
			bi	!	Bio
			en	!	Energy
		#Other
			#Variable
				Name
				Word
				Number
				Vector
			#Motion
				Normal
				Planing
				Levitation
				Teleport
				Gravity
				Quantum
				Archimeds law
				Magic
				Shupaltsa
				Mob
				Force
				Vector
					Direction
					Module
					Full
			Time
				Tempoflucation
				Back
				Petlya
				Stop
				No
				Prerivanye
				Vicherkivanye
				Jump
			Space
				Portal
					Dimension
					Linked
					World
					Domen	!	Anklav
					Normal
				Zip
				Pocket
				Dense
				Bubble
	PropAndShell
		0	!	Start, Input
		1	!	m,	Materials
		2	!	c,	Creatures
		3	!	i,	Emotions
		4	!	f,	Forms
		5	!	m,	Elements
		6	!	e,	Energies
		7	!	t,	Task
	/*	Every of Forms/Creatures can be every of Elements/Energies/Materials/Emotions
	Directions	!	d
		#Logies
			Magical
				Number	!	Arithmancy
				Word	!	Lexomancy
				Name
				Element	!	Elementaly
			Real
				Number	!	Math
				Word	!	Linguistics
				Matter	!	Chemistry
				World	!	Physics
				Creature!	Biology
					Rasteniye
					Animal
					Bactery
					Virus
					Simple
					Mushroom
				Razum	!	Neurology
				Emotion	!	Psyhology
				Health	!	Medicine
				Care	!	Gigiene
				Timeline!	History
				Star	!	Astronomy
				People	!	Sociology
				Space	!	Geometry
					2d	!	Planemetry
					3d	!	Stereometry
				Meteo	!	Meteorology
				Enocomy
				Progamming
				Disign
		#Mancy
			Control
			Resistance
			Heal
			Regen of energy
			Logy
			Create
			Remove
			Power
				Up
				Down
		#Creatures
		#Materials
		/*Types of actions for ability
		#Languages[y]
			Word
			Number
			Gesture
			Spell
			Ritual
			Rune
			Construct
			Weaving
			Image
			Picture
			Will
			Schema
			Technique
			Fuin
			Seal
			Mudra
		/*Types of ability using
		#Types[y]
			Action	!	Straight
				Vampire
				Absorption
				Heal
				Sealing
				Illusion
					#Feel Type
						Tactile
						Visual
						Kinetical
						Audial
						Emotional
						Mental
						Smell
						Vkus
						Temperature
						Time
					Optic
					Holo
					Genjutsu
					Emo
					Mental
					Dense	/*Not equals tactile
					Dimension
					Reality
				Materialization
					Creating
					Removing
				Flying
					Walking
					Planing
					Levitation
					Teleport
					Wings
					Reactive
					Gravity
					Archimeds law
					Magic
					Shupaltsa
					Mob
					Force
					Vector
				Invisible
					Illusion
					Delumionation
					Space
					Sokritiye
				Otvod glaz
					Standard
					Other think
					All ok
					this is not matter
					Slepoye pyatno
					Zabinaniye
				Otdeleniye
					Emotional
					Bakullumist
				Versusmagic
					Razveivaniye
					Finita
					Time
					Space
					Mirror
					Vector
					Shield
					Prisvoyeniye
					Razrusheniye
					Unenerging
					Eating
					Nonmaterial
					Otoyti
					zapechativaniye
					kletka
					stop
					neutalizing
					material
					teleport
					turning
					Razrivaniye
					Deactivation
					Kontrspell
					Antimagic
					Resist
					Impossible
					Derealising
					Razvoplosheniye
					Fire
					Ice
					Make to illusion
					Razdavit
					Magagasitel
					Magazakuporivatel
					Obolochka
					Gravitation
					Antimagic
					Levitation
					Shupaltsa
					Field
					Vector
				Capacity Change
					#Space
						Bubble
						Pocket
						Dense
						Skladka
					Sealing
					#Transformation
						#Form
							Size
						Figure
				Teleport
					Hyper
					Time
					Space zip
					Space change
					Space cut
					Space connection
					Superspeed
					Apparation
					Photon
					Body select
					Nonmaterial
					Disintegration and assembling
					Obmen
					Twilight
					Vector
				Invincibility
					Pseudo	!	Other life form
						tc	!	Robot
						w+1	!	Undead
						w-1	!	Spirit
					bt	!	Bio
					Soul in body
					Regen
					Filactery
					Reincarnation
					Meta
					Soul/Mental copy
					Soul in world
					Mye
				Regen
					Bio
					Stvolovie kletki
					Konechnosti
					From pieces
					From kletok
					From chastits
					By Soul
					From universe
				Curse
				Vow
					Contract
					Shellar
					Private
					Big Forces
				Bless
				Summon
					Teleport
					Zov
					Request
				Atack
				Protection
				Transformation
					Forms
					Figure
					Material
					Structure
				Name
				Jokes
				Physical
				/*Technomage of Rudazov
				Warlock
				Apostol
				Hooly
				Love
				Music
				Domestic
					Other
					Kulinary
					Building
				Meteo
					Weather
					Klimat
					Kataklism
				Volt
					Size
						Bigger
						Equals
						Smaller
					Voodoo
					Volt
				Estestvennaya
				Mental
					Empathy
					Telepathy
					Protection
					Battle
					Work
					Control
					Penetration
					Create
					Remove
					Connect
					Merge
					Memory
				Soul
				Clairvoyance
					True prophecy
					Type
						Probability
						Vision
						Feeling
					Active
						Active
						Passive
						Changing
					Time
						Past
						Present
						Future
				Metamorph
					Totem
					Changing
					Turning
					Partial
				Yoga
				Bolotnaya
				Mesta
				Alchemy
					Astral
					Physical
					Full
			#Object
				Artefact
				Elixir
					Potion
					Putting
			#Saving
	Verse	!	v
		@Type
			Meta
		Rudazov
		Dozory
		Bad Choice
		...All
		Original
			Laws
				В метавселенной возможно все, от самых разных миров до изменения межмировой геометрии на определенном участке, но невозможно нарушить логику, а следовательно нельзя:
					1.	Сохранение		m-n-e	-	Любое изменение материи, энергии, эфира.
						Ни что (вообще) не может быть уничтожено, сумма всего в метавселенной никогда не меняется, более реальные могут лишь моментально изменить менее реальное в такую форму, что покажется уничтожение, но закон сохранения действует. По этой причине нельзя изменить атман, нет ничего более реального, просто некому будет на него так действовать. Нельзя иллюзию сделать реальной (воплощение делает реальный объект похожий на иллюзию), но для более реальных менее реальные являются иллюзиями просто разного качества, поэтому более реальные могут так сделать. Объекты одного уровня не могут друг на друга так действовать. Сумма всего в метавселенной не меняется со временем, всегда постоянна
						Rud:	Закон сохранения материи-энергии. Они не могут ни возникнуть из ниоткуда, ни исчезнуть вникуда, лишь изменять состояния.
							->	Вечного генератора не может существовать.
					2.	Конвергентность	s-t-u	-	Любое изменение пространства, времени, контента.
						Существует только настоящее. Нельзя изменить прошлое или будущее, можно лишь изменить настоящее и подождать пока будущее или прошлое настанет, чтобы это произошло время должно иметь определенную скорость: чтобы наступило прошлое скорость должна быть отрицательной, а чтобы наступило будущее - положительной.
							->	В любой момент пронстранства-времени существует лишь один объект.
						Rud:	Закон однонаправленности временного потока. Переместиться в прошлое, как-либо его изменить совершенно невозможно. Даже если божественное чудо откатит целую планету к предыдущей версии — это будет не возвращением в прошлое, а изменением настоящего.
							->	Машины времени не может сущестовать
								/*Но никто не запрещает откатить изменения
								/*Ускорить/замедлить процессы
								/*Или использовать маховики времени
					3.	Преобразуемость	r-e-f	-	Любое изменение реальности, энергии, информации.
						->
						Rud:	Закон бессмертия Атмана. Душа есть абсолютное начало, неподвластное окончательному уничтожению, но лишь изменению внешних оболочек и регулярным реинкарнациям.
							->	Любая вещь с реальность <1% нереальна (Точнее виртуальна)
								->	Любая виртуальная вещь, информация имеет реальноть > 0% но < 1%
							->	Любая вещь имеет реальность >1% и <100%, кроме атмана и информации
							->	Атман неунитожим, несоздаваем, нереален. Он не может существовать, а значит не существует. Нельзя уничтожить то, чего нет.
								->	Души с более чем 7 (8 включая 0-ядро) оболочками разных уровней не может существовать.
									/*Так как реальность не может дойти до 8, реальность в 8 при конвертации в проценты будет больше 100%, а даже достижение 100% невозможно.
									/*Восьмой уровень реальности равен нулевому, это атман. А две оболочки с одним уровнем уже не в условии.
									->	Демиурги не уходят от богов на качественно иной уровень, у бога 8 у демиурга 8.5 не 9.
							->	В шкале реальности атман 100% 0%, она замкнута
					1,2
						->	Вечного двигателя также не может сущестовать.
					2,3
					3,1
					1,2,3
				Материя, энергия и эфир взаимосвязаны. Изменяя любой из них с достаточной силой - поменяем остальные.
					Если силы не хватает, то изменится лишь 1. Сам изменяемый, а потом вернется к исходному.
					Алхимия рудазова меняет эфирное тело, а за ним меняется и обычное.
					Инфоструктуры Ясинского - ментальное тело, меняем ментальное тело/инфоструктуру с дост. силой - меняем предмет.
				Магия не нарушает законы вселенной. Всё, что она делает, согласуется не только с Законами Творца, но и с физическими (метафизическими) законами данного конкретного мира. Контроль реальности, который позволяет эти законы нарушать, магам недоступен — это удел сущностей более высокого порядка
				у каждого мира есть атман, создавая домен вы становитесь миром, мир может быть живым. Тело мира - материя, душа - эфир.
			Reality
				#Zero
					#Zero
						0	!	Core
				#Virtuality
					#One
						0.01-0.99	!	Info
				#Potentiality
					#Wild
						1-2	!	Chaos
					#Quiet
						3	!	Limbo
				#Reality
					#Pre
						4-5	!	cold ether
						5-10	!	energies
						10-15	!	Solid ether
						15-20	!	w-1,	Spirits
						20-25	!	Pseudo Matter
						25-30	!	Alchemy Matter
					#Normal
						30-40	!	r-2,	Matter
						40-50	!	r-3
						50-60	!	r-4
					#Post
						60-70	!	r-4/r-5
						70-80	!	r-5/r-6
						80-90	!	r-6/r-7
					#Super
						90-95	!	r-7
						95-99	!	Xtonics
					#Higher
						99	!	First Ether
				#Full
					#Full
						100	!	Core
			World
				Elements
					#Basic
						Fire
						Water
						Air
						Earth
						Electrizity
						Ice
					#First
						Dark
						Light
					#Misc
						Void
			Ether
				Cold	!	Other
				Dense	!	Negative Shells, except matteral shells
				Suble	!	Positive Shells
				Soft	!	Negative Energy, except e-7
				Hot	!	Positive Energy, except e+7
				First	!	e+7, First elements
					e+7
					#Elements
						#First
			mtv	!	Meta-Verse
				mlv	!	Multi-Verse
					uns	!	Uni-Space
						b
						d
						f
						g
						h
						j
						k
						q
					unv	!	Uni-Verse
						s	!	-Space
							m	!	Normal
								x	!	Length
								y	!	Height
								z	!	Depth
							w	!	Hyper
							n	!	Dimension
								a	!	Ether
								i	!	Info/*hyper equals etheral?
								o	!	Tropy
						v	!	-Verse
							/*Content
							r	!	Reality
							e	!	Energy
							f	!	Forms, Info, Structure
								Types
									Full-Realized-Types		Matter	!	222
										Matter	!	312
										Energy	!	231
										Ether	!	123
									Half-Realized-Types		Ether
										Chaos	!	120
										Limbo	!	110
										Ether	!	122
									Non-Realized-Types		Info
										Info	!	002
										Structure
										Types
								Structure
								Info
						t	!	-Time
					unt	!	Uni-Time
				Chaos
				Limbo
	Actions	!	b
		#Categories
			#Resistance
				#Elements
					#Other
						Physical
							Damage
								Kolushiy
								Rezhuskiy
								Drobyashiy
								Rubyaskiy
			Empathy
			Avatar
			Zhrets
			Feeling
				#Types[y]
					Vision
					Obonyanie
					Vkus
					Sluh
					Tactile
					Feeling
				#Usloviya
					Night
				#Users
					Demon
					Angel
					Other
					Mage
				#Energies
				#Elements
				#Emotions
				#Creatures
				#Materials
			Berserk
			Yasnovidenie
			переход в эфирное состояниие
			переход по четвертому измерению
			другие операции с четвертым измерением?
			эфирное изменение размеров/формы?
			эфирные ускоренные перемещения?
			фильтрация запахов и других частиц в воздухе
			сокрытие магии
			манипуляции реальностью
			сокрытие ауры
			фальшивая аура
			работа с ноосферой
			ускоренные/замедленные ВП
			изпользование химического
			использование биологического
			использование радиации
			использование порталов в опасные места
			звукогаситель
			иллюзия потери магии противником, не тобой
			брокировка магических узлов
			работа с душами
			антимагия
			использование магии существа против него самого
			аутоиммунные атаки (в т.ч. на магию и разум и прочее)
			духовная сила
			использование биотварей (кадавров?)
			ускорение сознания
			атака по пране
			святые вещи
			демонические вещи?
			скрытие излучения невидимого спектра
			Fake Spell
		#r-0[y]
		#r-1[y]
		#r-2[y]
		#r-3[y]
		#r-4[y]
		#r-5[y]
			#l5.0
		#r-6[y]
		#r-7[y]
	Space	!	s
		w	!	Hyper
			~0	!	Dot, Core
			<1	!	Hyper
			~1	!	Normal
			>1	!	Hypo
		n	!	Dimension
			~0.0 ~0.0	!	Core
			~1.0 ~0.0	!	Matteral
			~1.5 ~0.0	!	Matteral-Etheral
				@Ghost
			~2.0 ~0.0	!	Etheral
				@Loa
			~2.0 ~1.5	!	Etheral-Mental
				@Phantom
			~2.0 ~2.0	!	Mental
		Limbo
		Chaos
	Features	!	t
		#r-4[y]
			Poltergeist
			#w+1	!	Undead
				Ghoul
				Zombie
				Einherjar
				Draugr
				Lich
			#w-1	!	Spirit
				Brownie
				Boggart
				Ghost
				Loa
				Embodied
		#r-5[y]
			Obsessed
			Vampire
				Weak	!	Madness
				Normal	!	Ordinary
				High	!	Energetic
			Werewolf
				Weak	!	Licantrop
				Normal	!	Ordinary
				High	!	MultiForms
			Cubus
				Incubus
				Succubus
	Misc
		Groups
			Soul	!	Soul shells
				Aura	!	Soul shells visible part
			Body	!	Body shells
			Soul_e	!	s3
			Soul_g	!	s2
		Str
			World
				Core	!	bhavachakra
				Space
				Time
				Content
					Matteral
					Etheral
			Soul
				Core	!	Atman
				Etheral
				Mental
			Domen	!	Soul+World
				Core	!	bhavachakra, Atman
				Space
				Time
				Content
					Matteral
					Etheral
				Etheral
				Mental
			God
				Core	!	God
				Content
					Matteral
					Etheral
					Mental
					God
			Matter
				Matteral
			Ether
				Ether
			Ment
				Mental
			Object	!	Matter+Ether
				Matteral
				Etheral
		Magic
			Level
				slots
					Current	!	Spell
					Other
						Form
						Element
						Direction
				1 Number
				Skills
			Energy
				Magic of Vance//Spells saves how patrons
				Srednyaya
				Mana Magic
		Version
			/*	-	!	Next
			/*	>	!	Sleduet
			/*	*	!	No
			/*	'	!	Inverse
			Normal	!	-Start-Action-Result
			Avers	!	*Start*Action*Result
			Deconstr	!	-Start-Action>Result
			Reconstr	!	>Start>Action>Result
			Subvers	!	-Start-Action*Result
			Invers	!	'Start'Action'Result
			Obosnuy	!	-Start-Action-Result and Obosnuy
			Parody	!	Parody of -Start-Action-Result
			Satira	!	Satira of -Start-Action-Result
			ZigZag	!	Combinations of other
		Space change
			/*	-	!	Normal
			/*	^	!	Up
			/*	_	!	Down
			/*	#	!	Both
			/*	()	!	Connection
			/*	><	!	Nalozheniye
			Bubble	!	----^^^^^----
			Zip	!	----^_^_^----
			Domen/Pocket	!	----#####----
			Worlds	!	#############
			Portkey	!	--(-------)--
			Portal	!	-->-------<--
			Skladka	!	Prana remove
			Energy
			Quant
			Atom
			Molecula
			Temperature
			Age
			Motion
			Ether
			Bio
			Prah
		Nonfic
			Real
			Fantastica
				Fantasy
					0.0	!	Magic
					0.5	!	Metaphysic
					1.0	!	Sci
				Other
					0.0	!	Not-Sci
					0.5	!	Pseudo-Sci
					1.0	!	Sci
	Organizations	!	g`)
add(`2rE
	1`)
add(`Real world
	Verse
		@Type
			Uni
		Original
			@Worlds
				Our	!	Earth-2020
	Objects
		#Elixirs
			#r-4[y]
				#Toxins
				#Radioactive
				#Narcotics
				#Bacteria
				#Virus
		#Artefacts
			#r-4[y]
				#Weapon
					#Guns
						#Automates
						#Pistols
					#Explosive
					#Nuclear
					#Tank
				#Vehicle
					#Car
					#Plane
					#Helicopter
					#Train
					#Ship
				#Drone
					#Quadrocopter
				#Videocamera
				#Display
				#Microphone
				#Dinamic
				#Rockets
				#Computer
				#Telephone
	Actions
		#r-4[y]
			Granade by post
			#Bioweapon`)
add(`Fullmetal Panic
	@Languages[y]
		Japanese
	Organizations
		Mithrill`)
add(`HP and future know
	What can use
		omut of memory
		time-turner copy
		message
			patronus
			magical-mirror
		transfiguration
			Atomic bomb
			Anti matter
			Radioactive
			big to small, and fast return
			ice
				toxic
				acid
				liquid nitrogen
				a lot of liquid
		Kneezl
		Artefatory parts of body
	Objects
		#Artefacts
			#r-5[y]
				l4.0
					Map of Marauders
						@Marauders
							@James Potter
							@Luni
							@Sirius Black
							@Wormtail/*Карта Хогвартса и окрестностей с подписью имен Родовой магии в тех местах, где находится разумное существо в любой форме
				l5.0
					#of Basicals
						Sword of Gryffindor
							@Godrik Gryffindor/*Зачарован на лёгкость, Сам себя заколет, режет магией	Оружие: Холодно-Магическое
						Diadem of Ravenclaw/*Стимулирует мозговую деятельность, приводит сознание к ясности	Ментальные: Стимулятор
							@Rovenna Ravenclaw
						Medalion of Slytherin
							@Salazar Slytherin
						Cup of Hufflepuff
							@helga Hufflepuff
						Eye of Moody
							@Alastor Moody/*Сканирует пространство на всю сферу, показывает обладатели образ, позволяет смотреть сквозь вещи, показывает магию
				l7.0
					Stone of Materialization
						@Nicolas Flammel/*Преобразует созданное магией в реальную материю
					Mirror of Erised/*Создаёт портал в кусок мира, в котором находится единственный отражающийся в зеркале, в том виде, в котором он видит исполнение своих самых глубоких желаний. Портал находится внутри зеркала, в него нельзя просто пройти из-за защиты. Неизстно способа уничтожения зеркала. Зеркало может открывать портал в часть куска мира, при определенных условиях этого куска мира и при этом в этой части куска мира будет находиться заранее вложенные вещи
			#r-6[y]
				@Mysteries Department's
					#Time-Turners/*Закольцовывает время, перемещая назад	Министерство магии Британии: отдел тайн, другие министерства магии, нелегалы
				#Deathly Hallows
					Cloak of Invisibility/*	Epic	Legendary	Уникальный (1)	Делает вас совершенно невидимым, вас нельзя обнаружить напрямую, для хозяина мантия прозрачна, если вы уже дали магическое согласие на обнаружение вас можно будет найти, но не увидеть, вас можно видеть изнутри мантии	Мантия-Невидимка, Прячущие, Дар Смерти	Игнотус Певерел & Другие Певерелы? &?	-
					Elder Wand/*	Epic	Legendary	Уникальный (1)	Самая совершенная палочка, может подходить любому магу, ищет себе наиболее сильного хозяина, подчиняется победившему магу	Трансформаторы Магии: Волшебные Палочки, Дар Смерти	Игнотус Певерел & Другие Певерелы? &?	-
					Stone of Reincarnation/*	Epic	Legendary	Уникальный (1)	Создаёт псевдоматериальные тело и разум человека с помощью информации магического ядра, сознания и некромантической информации	Информационные, Некромантические: Информационные, Псевдо-Материализационные, Дар Смерти	Кадм Певерел & Другие Певерелы? &?	-
	Levels
		0.0	!	Nonmagic
			@l[y]
				O
				0
				N
			@r[y]
				Немагический
		1.0	!	Mediocre
			@l[y]
				A
				M
			@r[y]
				Заурядный
		2.0	!	Weak
			@l[y]
				B
				W
			@r[y]
				Слабый
		3.0	!	Ordinary
			@l[y]
				C
				O
			@r[y]
				Обыкновенный
		4.0	!	Rare
			@l[y]
				R
			@r[y]
				Редкий
		5.0	!	Epic
			@l[y]
				E
			@r[y]
				Эпический
		6.0	!	Legendary
			@l[y]
				L
			@r[y]
				Легендарный
		7.0	!	Divine
			@l[y]
				D
			@r[y]
				Божественный
	Live entity
		Немагические	Комбинированные	Магические
		Растения: нори, деревья, трава	Магическая растительность: магические "грибы", травы, мхи	---
		Большие грибы: мухомор, груздь		---
		Вирусы	---	Магические вирусы
		Плесень	---	Магическая плесень
		Дрожжи	---	---
		Простейшие	---	---
		Бактерии	---	---
		Позвоночные: рептилии, звери, рыбы	Магические твари: дракон, феникс, нюхлер	Магические сущности: ??? обй c дем пат
		Разумные: гоминиды (в т.ч. люди, эльфы, гномы, гоблины), кентавры, русалоиды /*Они в отличии от маг. тварей не магические, убьем дракона - магия выделится, убьем человека - нет, может быть лишь всплеск до смерти	---	Разумные сущности: Дементоры, патронусы, призраки /*Они разумны; могут хранить, передавать, обрабатывать инфу; производить сложные действия; работать по плану. Дементоры сотрудничают с теми, кто дает жертву, а патронусы используют добровольно отданную магию хозяина. Патронус человека всегда 1, если он делится на несколько частей передающих сообщение он все еще лишь 1. Когда патронус не вызван, он в состоянии "споры" в ядре человека, при смерти владельца патронус остается в ядре, если уничтожить ядро - патронус тоже будет уничтожен`)
add(`Doctor Who`)
add(`Final Fantasy`)
add(`Elfish Trash
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
			Elfish Trash 1
			Elfish Trash 2
			Elfish Trash 3
				@Verse
					Startrack
	Verse
		@Type
			Meta
		Original
		Rudazov
		Charodei
		@Tags
			Gamelit
		Naruto
		Startrack
		Potteriana`)
add(`Charodey
	@Languages[y]
		English
	@Sources[y]
		#Serial`)
add(`Ranma 1/2
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Inuyasha
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Charodei
	@Languages[y]
		Russian
	@Sources[y]
		#Film`)
add(`Blue exorcist
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Features
		#r-5[y]
			Demon
			#w-1	!	Spirit
				Brownie
	Dimension
		Gienna	!	Demonic
		Alis	!	Human`)
add(`Rick and Morty
	@Languages[y]
		English
	@Sources[y]
		#Multserial
			1
			2
			3
			4
	Objects
		#Artefacts
			#r-5[y]
				#Portal Gun
	Verse
		@Type
			Multi
		Original`)
add(`Portal
	@Languages[y]
		English
	@Sources[y]
		#Games
	Objects
		#Artefacts
			#r-5[y]
				#Portal Gun`)
add(`Marvel
	@Sources[y]
		#Fiction
			#Comics
				Marvel
	Verse
		@Type
			Multi
		Original
	Creatures
		#Mind
			#r-5[y]
				#X-Man
					Ksavier
					Logan
				#Human
					Entony Stark
					Govard Stark
				#Zen-Hoberis
				#Klyntar
				#Kree
				#Inhuman
				#Chitauri
				#Flora Koloss
				#Titan_1
	Energies
		#r-5[y]
			+5	!	Magical?
	Features
		#r-5[y]
			X-Man
				Action
					Mental
						Telepathy
							@Ksavier
					Regen
						Cell
							@Logan
	Materials
		#Metals
			Vibranium
			Adamantium
	Organizations
		Stark
			@Entony Stark
		X-Man
			@Ksavier
	Objects
		#Artefacts
			#r-4[y]
				#Tech
					#Stark's
						#Iron Man suits
							mark7
						#Thermonuclear Reactor
				Cerebro
			#r-7[y]
				#Gems
					#Infinity
						Space
						Soul
						Reality
						Time
						Power
						Mind
			#r-6[y]
				#Loki's
					Sceptre
				#Thor's
					Mjolnir`)
add(`Sword Art Online
	@Languages[y]
		Japanese
	@Sources[y]
		#Ranobe
		#Anime
	Verse
		@Type
			Uni
		Original
		@Tags
			Virworld
				Gamelit
	Objects
		#Artefacts
			#r-4[y]
				#Neurohelmets
				#Amuspheres`)
add(`Hellsing ultimate
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Features
		#r-5[y]
			Vampire
		#r-4[y]
			#w+1	!	Undead`)
add(`Dark souls
	@Languages[y]
		English
	@Sources[y]
		#Games`)
add(`Devil May Cry
	@Languages[y]
		English
	@Sources[y]
		#Games
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l5.0
						Dante`)
add(`Bioshock
	@Languages[y]
		English
	@Sources[y]
		#Games`)
add(`New horizonts
	@Authors[y]
		Shetel-Sorken
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
	@Marks[y]
		AU
		Вымышленные существа
		Dark
		Жестокость
		Magical Realism
		Mystery
		MS
		OWP
		OMP
		ООС
		Отклонения от канона
		POV
		Подростки
		Попаданчество
		Психические расстройства
		Fantastics
		Fantasy
	@Spoilers[y]
		#Death
			main person
			adding person
	Verse
		@Type
			Multi
		Original
		Naruto
		Resident Evil
		Marvel
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Orc
				#Elv
				#Ilitishari
	Features
		#r-6[y]
			Shari
		#r-5[y]
			Telepath
	Elements
		#Plasma
			Bio`)
add(`Voshozhdeniye geroya shita
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Verse
		@Type
			Multi
		Original
		@Tags
			Gameworld`)
add(`Men in black
	@Languages[y]
		English
	@Sources[y]
		#Film`)
add(`Bad choice
	@Authors[y]
		N.B.
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
	@Marks[y]
		AU
		Вымышленные существа
		MS
		OWP
		OMP
		ООС
		Parody
		First Person
		POV
		Попаданчество
		Стёб
		Action
		Humor
	Verse
		@Type
			Meta
		Original
			@Worlds
				Leer
				Sixth Department
				Magical Rus
				Kostyan
				Unknown Crap
			@World
				Elements
					#Basic
						Fire
						Water
						Air
						Earth
						Electrizity
						Ice
					#First
						Dark
						Light
					#Misc
						Void
		Voshozhdeniye geroya shita
		Naruto
		Diablo
		Toriko
		Marvel
		Hellsing ultimate
		Dark souls
		DC
		Warcraft
		Bleach
		To Love-Ru
		Dragonball
		Skyrim
		Code Geass
		Toaru Majutsu no Index
		Sword Art Online
		Neon Genesis Evangelion
		Fullmetal Alchemist
		Potteriana
		@Tags
			Gamelit
		One Piece
		High School DxD
		Zero no Tsukaima
		Fairy Tail
		Star Wars
		Seilor Moon
		Inuyasha
		Blue exorcist
		Mob Psyho 100
		Ranma 1/2
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Elv
				#Unknown Evil Crap
				#Goblin_2
	Energies
		#r-5[y]
			-5	!	Mrana?
			-4	!	Psy?
			-3	!	Ema?
			-2	!	Spirita?
			-1	!	Prana
			+0	!	Force
			+1	!	Ki
			+2	!	Reatsu
			+3	!	Emana
			+4	!	Esperi
			+5	!	Mana
			+1+2	!	Ki+Reatsu
			+3+5	!	Emana+Mana
		#r-6[y]
			+7	!	Ba-Hion
	Objects
		#Elixirs
			#Hooch
				#Energies
				#Elements
					#Basic
						Fire
						Water
						Earth
						Air
						Electrizity
						Ice
					#First
						Dark
						Light
						Death
						Life
						Chaos
				#Emotions
					Love
					Peace	!	LOVEANDPEACE
					Anger
					Sad
	Users
		#r-5[y]
			e+1	!	Kiuser
			e+2	!	Reatsuuser
			e+4	!	Psyonic
			e+5	!	Mage
			e+1+2	!	Chakrauser
		#r-6[y]
			dm	!	Demon_3
			lm	!	Angel_0
			gm	!	Gamer's System
				Gamer	Stanford
				Gamer	Plus
				Gamer	T.-3000
				Cheater	Standard
				Cheater	Plus
				Hard
				The Gamer
		#r-7[y]
			e+7	!	God_3
		#r-0[y]
			e+7	!	Unknown Crap
	Actions
		#Categories
			Pathos hurt ignoring
			Hapsiel mode
			Kick of Unknown Crap
			Unknown Artefatory
			Dark-Shadow tropy
			#gm
				Inventory
				Gamer
					Body
					Mind
				Barrier
					Enter
					Out
					Create
					Destroy
				Soul
					Sealing
		#r-5[y]
			#l5.0
				@Name
					#MH
						Higher circle
				#Elements
					#Basic
						Fire
							Uncontrolled	!	Armageddon
						Water
							Uncontrolled	!	Taifun
						Air
							Uncontrolled	!	Tornado?
						Earth
							Uncontrolled	!	?
	Features
		#r-4[y]
			Entity
				#w+1	!	Undead
			#w+1	!	Undead
		#r-5[y]
			Entity
				#w+1	!	Undead
			#w+1	!	Undead
			Vampire
			Werewolf
	Objects
		#Artefacts
			#r-5[y]
				#Entity Stones / ES
				#Soul Stones / SS
			#r-7[y]
				#Spheres
					#Skill-Copy	/*Gold
					#Skill-Izvlecheniya
					#Dark Skill-Copy
					#Achievement-Copy
	Space
		n
			~1.0 ~1.5	!	Dark-Shadow
			~1.0 ~0.0	!	Matteral
			~2.0 ~0.0	!	Astral
			~2.0 ~2.0	!	Mental
	Elements
		#Basic
			Fire	!	Pyromancy
			Water	!	Hydromancy
			Earth	!	Geomancy
			Air	!	Airomancy
			Ice	!	Cryomancy
			Electrizity	!	Electromancy
		#First
			Dark
			Light
			Chaos
			Death
		#Other
			Space
			Time
		#Misc
			Shadow
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l5.0
						Yamada Toru
			#r-6[y]
				#Styopochkin
					Student of unknown crap
			#r-7[y]
				Unknown Crap
				Tizitsh
				Chronos
				Player
				Hel
				Hapsiel`)
add(`Orderly
	@Languages[y]
		Russian
	@Sources[y]
		#Books
	@Authors[y]
		Nick Perumov`)
add(`Azimov
	@Authors[y]
		Azik Azimov
	@Languages[y]
		English
	Space
		w
			<1	!	Hyper`)
add(`hainline
	@Authors[y]
		Robert Hainline
	@Languages[y]
		English
	Space
		w
			<1	!	Cherenkov drive`)
add(`Hyperion
	Space
		w
			<1	!	Hyper`)
add(`vavilon5
	Space
		w
			<1	!	Hyper`)
add(`Star Gate
	@Languages[y]
		English
	Space
		w
			<1	!	Hyper`)
add(`Gamelit
	Users
		#r-6[y]
			gm	!	Gamer's System`)
add(`Gameworld
	Users
		#r-6[y]
			gm	!	Gamer's System`)
add(`Vlast magii
	@Languages[y]
		Russian
	@Authors[y]
		MorgothBauglir
		Shetel-Sorken
	@Sources[y]
		#Fanfics
			"Vlast magii"
	Verse
		@Type
			Meta
		Dragon Age
		Rudazov
		@Tags
			Gamelit`)
add(`Path to Top
	@Languages[y]
		Russian
	@Authors[y]
		Hedin Knowing Dark
	@Sources[y]
		#Fanfics
			"Path to Top"
	Verse
		@Type
			Meta
		Rudazov
		Original
	Actions
		#r-5[y]
			#l5.0
				@Name
					@MH
						GodHands
				#Elements
					#Add
						Plasma
							Uncontrolled	!	Hors`)
add(`Rudazov
	Verse
		@Type
			Meta
		Original
			@World
				#Access
					Destroyed
					Non-Created
				#Gran
					Chaotic
					Half-Chaotic
					Half-Normal
					Normal
				#Elements
					#Basic
						Fire
						Water
						Air
						Earth
						Electrizity
						Ice
					#First
						Dark
						Light
					#Misc
						Void
			@Civilization
				#Opened
					Closed	!	Don't know
					Half-Closed	!	Thinks that other is 1,2,3... not a lot of
					Half-Opened	!	Have knowledge
					Opened	!	Have contacts
				#Levels
					#Paths
						#un	!	Universal
							0.0	!	0	Primitive - ?	/*
								@Kaabar
								@Rari.Devkatsi
							1.0	!	3	? - Mech/Social	/*
							2.0	!	6	? - Digit/	/*
							3.0	!	9	? - Space/Verse level	/*
							4.0	!	12	? - ?		/*
							5.0	!	15	? - Energy	/*
							6.0	!	18	Immortal - tech/mage/bio	/*
						#en	!	Magical
							0.3	!	1	? - ?		/*Mage Ghyldy
								@Our.Sumer	-3000
							0.7	!	2	? - ?		/*Magic Schools
							1.0	!	3	Social - ?	/*Magic infrastructure, service, shops
								@Parifat 2000
							1.3	!	4	? - ?		/*Magic conveer
								@Rari.Grayland	from Epilog
							3.3	!	10
								@Parifat	-3000
							6.0	!	18	Immortal - ?/*
								@Infal
								@Jinn
						#bi	!	Biotic
							0.3	!	1	? - ?		/*Prirucheniye, odomashnivaniye
							0.7	!	2	? - ?		/*Selection
								@Rari.Eist
							6.0	!	18	Immortal - ?/*
						#tc	!	Technogen
							0.3	!	1	? - ?		/*Compas, Gun Powder,	Books print
							0.7	!	2	? - ?		/*Industrial revolution
								@Rari.Rokush
								@Rari.Lariya
							1.0	!	3	Mech - ?	/*Metals, engines
							1.3	!	4	? - ?		/*Machines, Electrizity, Chem
							1.7	!	5	? - ?		/*High Chem, ICE, Conveer
							2.0	!	6	Digit - ?	/*Electronics, Robots, Commutications
								@Our
							2.3	!	7	? - ?		/*Nanotech, Higher Organic Chem, Cyberspace
							2.7	!	8	? - ?		/*High Nano, Spacetech, Terraforming
								@Plonet	Before Sudden hour
							3.0	!	9	Space		/*High Terraforming, Space cities, Between Stars Flying
							3.3	!	10	? - ?		/*Galaxy Level, Alliens contacts
							4.0	!	12
								@Earth	2400
							4.3	!	13
								@Svarog.Svarog	7000
							5.0	!	15
								@Eikr.U-l'tra-let
							5.3	!	16
								@Muraran
							5.7	!	17
								@*.Spectator
								@Svarog.Galact	7000
							6.0	!	18	Immortal - ?/*
								@Ancient
								@Titan_0
						#te	!	Technomagical
							0.7	!	2
								@Rari.Grayland	2000
					/*Number after "-" says that this world after apocalipsis, have but cant create this technologies
			@Worlds
				Rari
				Quetzol-Iin
				Eikr\n\t\t\t	Hvitachi\n\t\t\t	Worldtown
				Lang\n\t\t\t	Kaabar\n\t\t\t	Nine Heavens
				Hell\n\t\t\t	Our	!	Earth-2006\n\t\t\t	Heaven
				Golus	\n\t\t\t	Dotembria
				Pargoron\n\t\t\t	Parifat\n\t\t\t	Salvan
				Patala	\n\t\t\t	Dovos
				Jahannam	\n\t\t\t	Kaf	\n\t\t\t	Janna
				Shemussen	\n\t\t\t	Plonet	\n\t\t\t	N	\n\t\t\t	Labirint	\n\t\t\t	Svarog	\n\t\t\t	Deorg Academy
				X	\n\t\t\t	Z	\n\t\t\t	A	\n\t\t\t	Y	\n\t\t\t	O	\n\t\t\t	Caves Sheymullin
				M	\n\t\t\t	K	\n\t\t\t	H	\n\t\t\t	G	\n\t\t\t	F	\n\t\t\t	E	\n\t\t\t	D	\n\t\t\t	C	\n\t\t\t	B	\n\t\t\t	P	\n\t\t\t	Earth-7112
				Proxima Centaura	\n\t\t\t	Proxima Hell	\n\t\t\t	Proxima Heaven
				World of Yehudin	!	Dodekaedr
	@Authors[y]
		Alexander Rudazov
	@Languages[y]
		Russian
	@Sources[y]
		#Books
			#Fantasy
				"Sumer nights"	/	"Shumerskiye nochi"
				"Archmage"	/	"Arhimag"
					1.	"Archmage"		/	"Arhimag"
					2.	"Knights of Prechistya deva"	/	"Ritsari Prechistoy Devy"
					3.	"The best weapon"/	"Samoye luchsheye oruzhiye"
					4.	"Gray plague"	/	"Seraya chuma"
					5.	"War of Warlocks"/"Voina koldunov"
						5.1.	/"Vtorzheniye"
						5.2.	/"Shturm tsitadeli"
					6.	"Kids of sudden hour"/"Deti sudnogo chasa"
					7.	"Sovet 12"	/	"Sovet dvenadtsati"
					8.	"Bitva polchish"	/	"Bitva polchish"
					9.	"Zarya nad bezdnoy"/"Zarya nad bezdnoy"
				"Yatshen"
					1.	"Three eyes and six hands"/"Tri glaza i shest ruk"
					2.	"Shestrirukiy resident"/"Shestrirukiy resident"
					3.	"Demons in vatikan"/"Demony v vatikane"
					4.	"Son of Archdemon"/"Syn Arhidemona"
				"Ghost"/"Prizrak"
				"Three mudretsa"/"Tri mudretsa"
					1.	/"Tri mudretsa v odnom tazu"
					2.	/"Taina pohishennoy bashni"
				"Kriabal"/"Kriabal"
					1.	/"Kriabal"
					2.	/"Apofeoz"
				"Predaniya"
					1.	/"Predaniya stariny glubokoy"
					2.	/"Byliny sego vremeni"
					3.	/"Konets skazki"
				"Zverolov"
				Misc
					/"Vlastelin"
					/"Ekipazh"
					/"Demon pod divanom"
					/"Zhraniyo"
					/"Rasskazy is pravogo botinka"
					/"Arifmoman"
	Shells
		-5	!	2/7	Magical body
		-2	!	3	Body, Matter of
		-1	!	1	Physical body
		+0	!	4	Atman
		+1	!	2	Vital
		+2	!	3	Astral, aura
		+3	!	5	Person
		+4	!	6	Psyhic
		+5	!	7	Magic
		+6	!	8	Immortal
		+7	!	9	God
	Energies
		#r-5[y]
			-1	!	2 Prana
			+	!	7 Mana
		#r-7[y]
			+7	!	9 Ba-Hion
	Users
		#r-5[y]
			e+5	!	Mage
			e+4	!	Mentat?
		#r-4[y]
			e+0+2	!	Spiritual Weapon
	Levels
		0.0	!	Sumer.Nomage
		1.0	!	Sumer.Student
		2.0	!	Sumer.Apprentice
		3.0	!	Sumer.Master
		4.0	!	Sumer.Pastmaster
		5.0	!	Sumer.Archmage
		6.0	!	Sumer.Higher
		/*
		0.0	!	Grayland.Grechka
		1.0	!	Grayland.Student
		1.5	!	Grayland.Purple
		2.0	!	Grayland.Blue
		2.5	!	Grayland.Light Blue
		3.0	!	Grayland.Green
		3.5	!	Grayland.Yellow
		4.0	!	Grayland.Orange
		4.5	!	Grayland.Red
		5.0	!	Grayland.Gray
	Schools
		Grayland
		Sumer
		Kiig
		Mysteria
		Lka-Nandasi
		Deorg Academy
	Actions
		#r-5[y]
			#Action
				#Protection
					Mirror	!	Mirror Shield
					Absolute	!	Sumer.
					Universal	!	Sumer.
					Personal	!	Sumer.
				#Atack
					Clone of Chaos	!	Grayland.
			#Misc
				Sphere of Thirst	!	Grayland.
				Antimagic-tatoo	!	Kiig.
			#l5.0
				@Name
					@Grayland
						Spells A+
					@Sumer
						GodHands
				#Elements
					#Misc
						Grace
							Uncontrolled	!	Sumer.Inanna	/*Clear and health place Needs: soul of light
						Desecration
							Halfcontrolled	!	Grayland.Fog of Death	/*Desecration fog
						Void
							Uncontrolled	!	Grayland.Total Zero	/*Desintegration of all matter
						Ethervoid
							Halfcontrolled	!	Grayland.Fifth spell	/*Full eating of all ether (mana, prana, ...)
					#Basic
						Fire
							Uncontrolled	!	Sumer.Shamash	/*Needs: result is neuromagic overwork
						Air
							Controlled	!	Sumer.Adad	/*Controlled klimat Needs: salt mud lake
						Electrizity
							Uncontrolled	!	Grayland.Lightning of the Gods	/*Insane Lightning
						Earth
							Controlled	!	Sumer.Enlil	/*Controlled earth
							Uncontrolled	!	Grayland.Rumble of Hashiba	/*Earthquake
					#Other
						Space
							Controlled	!	Sumer.Anu		/*Exhange of two places Needs: magical line around place, hited teeth of user
					#Misc
						Getmye	!	Sumer.Ea		/*Needs: Drop of ihor
				#Creature[y]
					Demon
						Anti	!	Sumer.Marduk	/*Needs: Incarcered archdemon, higher mortal demonolog
					#w+1	!	Undead
						Create	!	Sumer.Nergal	/*Needs: 3 masters nectromancers
				#Action[y]
					Protection	!	Sumer.Tammuz	/*Needs: egg of Phoenix
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l3.0
						Vanessa Lee
						Hoboken
						Lod Gveideon
					#l4.0
						Toray	!	Life
					#l5.0
						Shamshuddin	!	Black
						Tivildorm	!	Ghost
						Turseya	!	Wolferine
						Murok	!	Vivisektor
						Kodera !	Yasnovidyashyaya
						Kleventin	!	Predatel
						Asante	!	Storm
						Ruork	!	Machinist
						Riggellion	!	One Eye
						Kvillion	!	Dubble
						Yadjun	!	Fire
						Ruaha	!	Karga
						Isshkamir	!	Lightning
						Bestelglosud	!	Chaos
						Astaron	!	Ice
						?	!	?
						Kreol	!	Crusher
					#l6.0
						White Kiig
				#Elv_2
				#Sid
				#Dev
				#Devkatsi
				#Eist
				#Kiig
			#r-6[y]
				#Titan_0
				#Jinn
				#Ancient
				#Infal
	Space
		w
			~0	!	Core, center of Everything
			<1	!	Hyperspace, Esher's geometry
			~1	!	Normalspace
			>1	!	Underspace
		n
			~0.0 ~0.0	!	bhavachakra
				Other
				Blood Beach	/*Place for demons
			~1.0 ~0.0	!	Normal, material
			~1.5 ~0.0	!	Shadow/Twilight/Through the Looking Glass
			~2.0 ~0.0	!	Astral,	world of spirits
				Other
				World of the dead
			~2.0 ~1.5	!	World of dreams
			~2.0 ~2.0	!	NooSphere
		Limbo	!	gray world
		Chaos	!	non-embodied
	Users
		#r-5[y]
			Mage
				Black
				Gray
				White
		#r-6[y]
			Immortal
				Dark	!	Demon_0
				Neutral	!	Immortal
					h+5	!	Jinn
					h-1	!	Titan_0
					h+1	!	Arch
				Light	!	Angel_0
		#r-7[y]
			e+7	!	God_1
				Dark
				Neutral	!	Beastgod
				Light
	Features
		#r-4[y]
			#w+1	!	Undead
				Ghoul
				Zombie
			#w-1	!	Spirit
				Brownie
				Boggart
				Ghost
				Loa
				Embodied
		#r-5[y]
			#w+1	!	Undead
				Einherjar
				Draugr
				Lich
			Mye
			Vampire
				Weak	!	Madness
				Normal	!	Ordinary
				High	!	Energetic
			Werewolf
				Weak	!	Licantrop
				Normal	!	Ordinary
				High	!	MultiForms
			Cubus
				Incubus
				Succubus
		#r-6[y]
			#w+1	!	Undead
				Undead-Immortal
		#r-7[y]
			#w+1	!	Undead
				Undead-God
	Objects
		#Artefacts
			#r-5[y]
				#Grimoires
					Kreol's
				#Rods
				#Staffs
					Kreol's
				#Amulets
					Kreol's
					Valet
				#Roasters
					Kreol's
				#Organization's
				#Gems
					Gate
				#Tech
					#Plonet's
			#r-6[y]
				#Grimoires
					Kriabal
						@Briar
	Elements
		#Basic
			Fire	!	Pyromancy
			Water	!	Hydromancy
			Earth	!	Geomancy
			Air	!	Airomancy
			Ice	!	Cryomancy
			Electrizity	!	Electromancy
		#First
			Dark
			Light
			Chaos
			Death
		#Other
			Meteo
				Weather
				Klimat
				Kataklism
			Space
			Time
			Motion	!	Telekinesis
		#Misc
			Shadow
			Blood
			Mirror
	Directions
		#Languages[y]
			Word
			Rune
			Image
			Picture
			Seal
		#Types[y]
			#Action
				Vampire
				Absorption
				Curse
				Transformation
					1	Material
					2	Form
						Shape
						Size
					3	Structure
					Figure
				Blessing
				Vow
				Summon
				Sensor
				Illusion
				Flying
				Teleport
				Enchantment
				Name
				Physical	!	Technomagic
				Warlock
				Apostol
				Hooly
				Love
				Music
				Domestic
				Soul
				Volt
					Voodoo
					Volt
				Estestvennaya
				Metamorph
					Turning
					Changing
					Totem	!	Felgi
					Partial
				Clairvoyance
					True prophecy
				Mental
					Telepathy
				Magic of Ghost
				Alchemy
				Twilight-Shadow
			#Saving
			#Object
				Elixir
					Potion
					...
				Artefact
		#Creatures
			Automate
			Doppel
			Holem
			Phantom
			Demon
			Immortal
			Animal
			Angel_0
			God
			Bestia
			Flora
			Vampire
			Loa
			Ghost
			Chimera
	Organizations
		Organization
		#Labs
			Geya
			Uran
	Materials
		#Metals
			#r-4[y]
				Adamantium/*Pseudo adamant, very sharp, very durable
			#r-5[y]
				Koroniy		/*Anti mage
				Coldiron	/*Anti mage
				Copper		/*Anti halfmaterialized
				Bloodiron	/*Anti demon
				Silver		/*Anti undead
				Mithrill
			#r-7[y]
				Adamant		/*Anti superreal
		#Alchemical
			Philosopher's
				Stone
				Metal
				Liquid
				Powder
		#Gas
			Flogiston
			Teporiy
		#Bio
			Regenerin`)
add(`Startcraft
	@Sources[y]
		#Games
			#Computer`)
add(`Siyatelniy
	@Authors[y]
		Pavel Kornev
	@Languages[y]
		Russian
	@Sources[y]
		#Books
	Materials
		#Metals
			Coldiron	/*Anti mage`)
add(`SCP Foundation
	@Languages[y]
		English
	@Sources[y]
		#Statue
	Organizations	!	g
		SCP	!	Secure Containt Protect
	Objects
		#Artefacts
			#r-5[y]
				#SCP's`)
add(`Naruto
	@Sources[y]
		#Fiction
			#Jarse
				Naruto
	Verse
		@Type
			Uni
		Original
			@Worlds
				Naruto's
					Satellites
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l5.0
						Uzumaki
							Naruto
							Kushina
							Mito
						Namikaze
							Minato
						Hatake
							Kakashi
						Umino
							Iruka
						Sarutobi
							Asuma
							Hiruzen
						Shimura
							Danzo
						Hyuga
							Hinata
						Ootsutsuki
							Kaguya
						Kaguya
							Kimimaro
						Orochimaru
						Jiraiya
						Ranmaru
						Senju
							Tsunade
							Hashirama
							Tobirama
						Uchiha
							Madara
							Izuna
							Obito
							Sasuke
							Itachi
				#Frog
				#Snake
				#Monkey
				#Cat
				#Dog
				#Raven
				#Bijuu
					#Enot
						Shukaku
					#Cat
						Matatabi
					#Turtle
						?
					#Monkey
						?
					#Slug
						?
					#zhuk
						?
					#Octopus
						?
							@KiraBi
					#Fox
						Kurama
							@Naruto
	Energies
		#r-5[y]
			+1+2	!	Chakra
	Features
		#r-5[y]
			#Genetic
				Uzumaki
				Uchiha
				Hyuga
				Senju
				Ootsutsuki
				Kurama
				Kaguya
			Dojutsu
				#Byaku tree
					Byakugan
					Tenseigan
				#Sharin tree
					Sharingan
						1
						2
						3
						Mangeke
					Rinnegan
					Rinnesharingan
				Ranmaru's
			Elements
				Explosion
				Crystall
				Acid
				Magnetism
				Metal
				Lava	!	Fire+Earth?
				Boil	!	Fire+Water?
				Heat	!	Fire+Air?
				Tree	!	Earth+Water Moku
				Earth+Air	!	Sand
				Water+Air	!	Ice
	Elements
		#Basic
			Fire	!	Katon
			Water	!	Suiton
			Earth	!	Doton
			Air	!	Fuuton
			Electrizity	!	Raiton
		#Misc
			In	!	Inton
			Yan	!	Yanton
			Inyan	!	Inyanton
	Directions
		#Languages[y]
			Technique	!	Nin
			Fuin
			Mudra
		#Types[y]
			#Action
				Summon
				Sensor	!	Kanchi
				Absorption
				Displacement
				Arms	!	Tai
				Steelarms	!	Ken
				Flying
				Sealing in
				Senjutsu	!	Sen
				Illusion
					Genjutsu	!	Gen
			#Object
				Artefact
		#Creatures
			Doppel	!	Kage Bunshin
			Marionette
	Actions
		#Categories
			Feel of Look
			Yaki
			Want of Blood
			Step
				Tree
				Water
		#r-5[y]
			#Misc[y]
				Telescope
	Organizations
		#Gakurezato
			#Fire
				Konoha
					ANBU
						Normal
						Root
			#Water
			#Fog
			#Lightning
			#Air
				Suna
	Countries
		Fire
		Water
		Fog
		Lightning
		Air
		//
		Rice
		River
		Star
		Demon
		Bear
		Bird
		Tea
	Objects
		#Artefacts
			#r-5[y]
				Star
				#Swords of Fog`)
add(`Chernovik
	@Sources[y]
		#Books
			#Fantasy
				Chernovik
	Features
		Functional`)
add(`JoJo Bizzare
	@Languages[y]
		Japanese`)
add(`Fate
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Actions
		#r-5[y]
			#Action
				#Vampiring
					Blood Citadel?
	Energies
		#r-5[y]
			-1	!	Prana
			+5	!	Mana
	Users
		#r-5[y]
			e+5	!	Mage
	Objects
		#Artefacts
			#r-6[y]
				#The Holy Grail
	Creatures
		#Mind
			#r-6[y]
				#Servant`)
add(`Claymore
	@Languages[y]
		Japanese
	@Sources[y]
		#Manga
	Energies
		#r-5[y]
			yo	!	Yoki
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Claymore
				#Yoma`)
add(`of Argus Filchenkov
	Verse
		@Type
			Uni
		Potteriana
	@Languages[y]
		Russian
	@Authors[y]
		Argus Filchenkov
	@Sources[y]
		#Fanfics
			0.	"Prologue.	Harry Potter and Three Old Ladies"
			1.	"Harry Potter and key saver"
			2.	"Harry Potter and instinniy naslednik"
			3.	"Harry Potter and Iskusstvo pobega"
			4.	"Harry Potter and Champions Hunt"
	Objects
		#Artefacts
			#r-6[y]
				#Time-Turners	!	Not limited hours, madness on incorrect
	Materials
		#Metals
			Coldiron`)
add(`of Kitsune Miyato
	@Languages[y]
		Russian
	@Authors[y]
		Kitsune Miyato
	@Sources[y]
		#Fanfics
			"Izbranniye"
			"Mother-and-Mother-Law"
	Verse
		@Type
			Meta
		Naruto
		Potteriana
		Dozory
	Objects
		#Artefacts
			#r-6[y]
				#Time-Turners	!	Reality splitter, awful results of
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l5.0
						Harry Potter	!	Uzumaki Naruto
						Albus Dumbledore	!	Albus Persival Vulfric Brian Potter,Dumbledore`)
add(`Guren Lagan
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`HPMoR
	@Authors[y]
		Eliezer Yudkowsky
	@Languages[y]
		English
	@Sources[y]
		#Fanfics
			"Harry Potter and the Methods of Rationality"
	Verse
		@Type
			Uni
		Potteriana
	Objects
		#Artefacts
			#r-5[y]
				#Quotes Quills
				Moody's Eye[u]
				Philosopher's Stone[u]
				Mirror of Erised[u]
			#r-6[y]
				#Time-Turners	!	6 hours max, with many turners too
				Moody's Eye	!	Eye of Vance
				Left Leg of Vance
				Philosopher's Stone	!	Stone of Materialization
				Mirror of Erised	!	Mirror of Atlants
	Actions
		#Advances
			Patronus 2.0
			Avadakedavra 2.0
			Dementor control
			Partial TransFormsation
		#r-5[y]
			#Action
				#Atack
					#Shieldbreacker
						"lagan"	/*Shield breaker
					"stupofy"	/*AutoAim stupefy
					"luminos"	/*Lumination hex
					"mahasu"	/*Sumer simple hit
					Momental Sleep	!	"somnium-"	/*Sleep, weak battle magic
				#Protection
					"prizmatis"	/*Prizmatic shield
					"defendo"	/*Weak shield
					Anti-Time-Turner
					Anti-Transgrassion
				#Vampire
					Ritual Blood Citadel?
	Complexes
		27 spells for important topic talk
			@Anti-Time-Turner
			@Anti-Transgrassion
			...
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l0.0
						Petunia Dursley	!	Petunia	Evans-Verres
					#l3.0
						Harry Potter	!	Harry James Potter-Evans-Verres
					#l5.0
						Voldemort	!	Tom Morphin Riddle`)
add(`Diablo
	@Languages[y]
		English
	@Sources[y]
		#Games
			#Computer
				1
				2
	Objects
		#Artefacts
			#r-6[y]
				Horadrical Cube`)
add(`Warcraft
	@Languages[y]
		English
	@Sources[y]
		#Games
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Orc_2`)
add(`Life of Archmage Potter
	@Authors[y]
		Fil Bandileros
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
	Verse
		@Type
			Meta
		Potteriana
		Original
			@Worlds
				Our	!	Earth-?
				Other?
		Naruto
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l3.0
						Harry Potter[u]
					#l5.0
						Harry Potter	!	Abraam
							@Archmage
			#r-7[y]
				Hel`)
add(`Boy Who Conquered Time
	@Authors[y]
		Fil Bandileros
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
	Levels
		0.0	!	0
		1.0	!	1
		1.3	!	2
		1.7	!	3
		2.0	!	4
		2.3	!	5
		2.7	!	6
		3.0	!	7
		3.3	!	8
		3.7	!	9
		4.0	!	10
		5.0	!	Higher
	Verse
		@Type
			Multi
		Potteriana
		Lord of Rings
		Zero no Tsukaima
		High School DxD
		Star Wars
		Naruto
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l3.0
						Harry Potter[u]
					#l5.0
						Harry Potter	!	Henry James Potter, The-Boy-Who-Conquered-The-Time
							@Time
								Back
								No
	Users
		#r-6[y]
			#Other
				Time
					Back
					Notime
	Objects
		#Artefacts
			#r-6[y]
				Chronos braslet
	Directions
		#Languages[y]
			Schema
			Spell
	Energies
		#r-5[y]
			-1	!	Prana
			+5	!	Mana
	Elements
		#Other
			Time`)
add(`Potteriana
	@Sources[y]
		#Fiction
			#Verse
				Potteriana
	Materials
		#Liquid
			#r-5[y]
				Basilisk Poison
				Phoenix Cry
		#Powder
			#r-5[y]
				Momental Dark Powder
	Objects
		#Artefacts
			#r-5[y]
				Marauder's Map
				Diary of Tom Riddle
				#of Basicals
					Ravenclaw's Diadem
					Gryffindor's Sword
					Hufflepuff's Cup
					Slytherin's Locket
				Sorting Hat
				Deluminator
				Room of Requirement
				Quick-Quotes Quill
				Mirror of Erised
				Weasley's Ford
				Knight Bus
				Philosopher's Stone
				Moody's Eye
				Mokeskin pouch
				#Broomsticks
				#Vanishing Cabinet
				#Portkeys
				#Invisibility Cloaks
				#Wands
				#Snitches
				#Bludgers
				#Mysteries Department's
			#r-6[y]
				#Mysteries Department's
					#Time-Turners
				#Deathly Hallows
					Cloak of Invisibility
					Resurrection Stone
					Elder Wand
		#Elixirs
			#Potions
				Feliks Feliciss
				напиток живой смерти
				Anti Veritaserum
				Veritaserum
				оборотное зелье
	Energies
		#r-5[y]
			+3+5	!	Wirardy?
	Directions
		#Types[y]
			#Object
				Elixir
					Potion
					Putting	/*3
			#Action
				Alchemy
				Arithmancy
				Lexomancy	/*3
				Mental
					Protection	!	Occlumency
					Penetration	!	Legilimency
				Clairvoyance	!	Divination
					True prophecy
				Metamorph
					Totem	!	Animagic
				TransFormsation	!	Transfiguration
					Forms
					Figure
					Material
					Structure
				Summon	/*4||1
				Curse
				Blessing
				Vow
				Enchantment
		#Languages[y]
			Rune
			Spell
			Ritual
		#Creatures
			Bestia	!	Magezoology
			Flora	!	Herbology
			Holem
	Organizations
		Mysteries Department
		Magic Ministery
			Aurorate
		#Schools
			Hogwarts
			Sharmbatton
			Durmshtrang
			Ilvermorny
			katotokai?
			Koldovstvorets
	Actions
		#r-5[y]
			#Categories
				Wizarding
				Parseltongue
				Nonverbal
				Without wand
			#Rituals
				непреложный обет
			#Spells
				ложная память
				аппарация
				протеевы чары
			#Action
				#Invisible
					заклинание Дезиллюминационное	/* — заклинание, делающее объект неотличимым от окружающей среды.
				#Heal
					"Brahiam emendo" /*(1)	 — убирает кости. Это заклинание применял Златопуст Локонс, когда Гарри сломал руку во время матча по квиддичу[6].
				#Protection
					"Cave inimicum"	/* — защитное заклинание. Делает защищаемый объект невидимым сверху.
				#Atack
					"Alarte askendare" /*(1)	 — подбрасывает объекты вверх[6].
					"Arania exumi" /*(1)	 — использовал Гарри для отпугивания акромантулов во втором фильме. Заклинание действует на одного паука[6].
					"Baubillius"	/* — заклинание, которое выпускает из конца волшебной палочки яркую бело-жёлтую молнию[9].
					"Brahiabindo"	/* — связывающее заклинание.[11]
					"Vaddivasi"	/* — заставляет лететь предмет в противника.
					"Oppunio"	/* — атакующее заклинание (приказ атаковать для вызванных волшебником существ).
					"Relashio"	/* — снятие оков, цепей, освобождение объекта или отброс оппонента (Боб Огден отбросил Марволо Мракса). На суше это сноп желтых искр, под водой	/* — струя кипятка.
					"Expelliarmus"	/* — заклинание разоружения, выбивает палочку или другое оружие из рук противника.
				#Summon
					Bird	!	"avis-"	/* - Заклятие призыва птиц. Создаёт стайку птиц.
			#TransFormsation
				"Vermiculus" /*(2)	 — превращает объект в червя[5].
				"Aviforce-"/*(2)	 — противник превращается в птицу/стаю птиц/стаю летучих мышей.[4]
			#Misc
				#Soul
					Horcrux
				#Domestic
					Opendoor	!	"aberto-"	/* - отпирает дверь.
				"Ascendio" /*(1)	 — выталкивает человека из воды[8].
			"Verdimilius" /*(2)	 — выстреливает зелёными искрами во врага или освещает и делает видимыми и осязаемыми объекты скрытые темной магией. В игре «Гарри Поттер и Тайная комната» позволяет обнаружить невидимые объекты (как Люмос в других версиях игры)[4].
			"Garmonia necture pasus" /*(1)	 — заклинание для активации Исчезательного шкафа. Использовалось Малфоем[13].
			"Herbivicus" /*(2)	 — заклинание роста растений. Выращивает растения и оглушает тепличных врагов[5].
			«Гибель воров»	/* — зачаровывает воду (в частности водопад в подземельях банка «Гринготтс»). Зачарованная вода смывает любые чары (Империус и Конфундус в том числе) и любую магическую маскировку.
			"Dacliforce" /*(2)	 — превращает объект в резиновую утку[5][17].
			"Dantissimus"	/* — заклинание быстрого роста передних зубов[3].
			"Deletrius"	/* — заклинание способно расщеплять или удалять объекты[3].
			неприметность (3)
			"Draconiforce" (2)	/* — оживляет статую мини-дракончика в настоящего мини-дракончика или превращает в мини-дракончика предметы небольшой массы[15].
			"Incarciforce" (2)	/* — превращает люстру в клетку[9].
			"Inflatus" (2)	/* — заставляет объект надуваться, как воздушный шар[5].
			"Informus" (2)	/* — показывает информацию о существе-цели в GBA версии игры «Гарри Поттер и узник Азкабана»[21].
			"Calvorio" (2)	/* — заклинание выпадения волос[12].
			"Cantis" (2)	/* — заклинание, которое заставляет поражённую им цель петь[12].
			"Carpe retractum" (2)	/* — Чары Захвата и Притяжения. Притягивает человека к цели (или цель к человеку). В игре «Гарри Поттер и узник Азкабана» это заклинание использовал Рон на первых же занятиях по Защите от Тёмных Искусств[15].
			"Lapiforce" (2)	/* — превращает предмет небольшой массы в кролика или оживляет его статуэтку[15].
			"Meloforce" (2)	/* — тыквоголовое заклятие. Превращает голову объекта в тыкву[15].
			"Meteo recanto"	/* — останавливает некоторые атмосферные осадки.
			"Mimbl vimbl" (2)	/* — Заклинание Косноязычия. Мешает противнику правильно произнести заклинание тем, что связывает язык в узел[22].
			"Mucus ad nosem"	/* — Проклятье Призраков. Вызывает сильный насморк[16].
			"Mutatio-"	/* — мутация
			"Pointme"	/* — заклинание-компас. Показывает направление на север.
			"Orbis" (2)	/* — «закапывает живьём» противника под землю[5].
			"Orhideus"	/* — создаёт букет орхидей или превращает объекты в лепестки орхидей.
			«Патентованные чары	/* — грёзы наяву»	/* — товар из магазина близнецов Уизли: «Одно простое заклинание, и вы погружаетесь в высококачественную, сверхреалистическую грезу наяву продолжительностью тридцать минут».
			"Periculum"	/* — создаёт сноп красных искр. Использовал Гарри в лабиринте для сигнала о выбывании Флёр Делакур из поединка.
			"Portoberto"	/* — заклинание, разбивающее висящий замок и оставляющее дымящуюся дыру на месте замочной скважины[19].
			чары Протеевы	/* — позволяет группе предметов частично менять свою форму, при изменении формы одного из них.
			"Pullus" (2)	/* — превращает объект в курицу[5].
			"Pack" (2)	/* — заклинание, позволяющее быстро сложить вещи[7].
			"System aperio" (1)	/* — этим заклинанием во втором фильме Том Реддл открыл сундук Хагрида, в котором сидел Арагог[6].
			"Skribbliforce" (2)	/* — заклинание, превращающее объект в перо[9].
			"Skurge" (2)	/* — заклинание, удаляющее эктоплазму[22].
			"Snaffliforce" (2)	/* — заклинание, превращающее объекты в мышей[15].
			"Herbiforce" (2)	/* — превращает волосы жертвы в цветы[12].
			"Ebublio" (2)	/* — превращает объект в мыльные пузыри[5].
			"Everte Statum" (1)	/* — отталкивает противника[6].
			"Expellimillius"	/* — поджигающее заклинание.
			"Ectomatis" (2)	/* — заклинание, которое позволяет выпустить из конца палочки небольшой кубик эктоплазмы[4].
			"Emacipare"	/* — заклинание, освобождающее от пут.[11]
			"Entomorphium" (2)	/* — ненадолго превращает в муравья[12].
				/*
			#Formsula unknown
				чары Тормозящие Хортона-Кейтча	/* — запатентованные чары, применяемые к мётлам фирмы «Комета».
				Трансмогрифианская Пытка
				Синие искры (2)
				заклинание Хватательное
				Чары Ябеда
				Чары горячего воздуха
				Чары заморозки огня
				Чары осушения
				Чары зелёного дыма
				Чары рессорной подушки
				Веселящие чары
				Взрывающее заклятие
				Сезам откройся	/* — заклятие, сносящее двери с петель[19].
				Гомункуловы чары (2)	/* — неизвестное заклятие (или группа чар), следящие за людьми на определённой территории[16].
				Воющие сигнализационные чары
				Залинание Губрайтов огонь
				Заклинание вечного приклеивания
				Заклинание головного воздушного пузыря
				Заклинание для очистки картофеля
				Заклинание заметания следов
				Заклинание запечатывания комнаты
				Заклинание запечатывания пергамента
				Заклинание невидимого хлыста (2)
				Заклятие ненаносимости
				Заклятие Неразбиваемости
				Заклинание Обращения	/* — оборотня в человека.
				Заклинание открывания дверей
				Заклинание пальцекусания
				Заклинание против списывания
				Заклинание роста ногтей на ногах
				Заклинание телепортации
				Заклятие Пылающей руки
				Проклятие воришки
				Парящие чары
				Облегчающие чары
				Летучемышиный сглаз
				Кишечно-опорожнительное заклятие
				Зелёные искры
				Зелёное специальное заклинание
				Заклинание Жалящее
				«Сито из котла» (2)
			#Mental
				Muggle Repelling	!	"Repello Muggletum"
				Чары подчинения - не империо
				Absolute Submission	!	"Imperio-"
			#Verbal Formsula
				"Contra-" (3)	/* - нарушение работы заклинаний
				"Spangify-" (2)	/* — батут
				"Steelclaw-" (2)	/* — steel claw
				"Tarantalegro-"	/* — танцы
				"Titillando-"	/* — щекотку и ослабление
				"Fenestram-"	/* — разбивает стекло.[2]
				"Fera Verto" (1)	/* — живых в сосуды
				"Ferula-"	/* — шина
				"Fianto duri" (1)	/* — мощное защитное заклинание, укрепляющее действие сопутствующих защитных чар[27].
				"Fulgari-"	/* — связывающее заклинание.[11]
				"Furunculus-"	/* — появление на теле противника нарывов.
				"Impedimenta-"	/* — Помехи движению
				"Vomitare viridis" (2)	/* — рвотное заклинание[12].
				"Erecto-"	/* — раскрывает раздвижные предметы (например, палатку).
				"Vulnera Sanentur" (1)	/* — лечивания магических ран
				"Glacius-" (2)	/* — замораживает, тушит пожары[15].
				"Inanimatus Conjurus"	/* — заклинание созидания.
				"Reparifargo-"	/* — заклинание, которое придаёт объекту, подвергнутому неполной трансфигурации, первоначальный вид[16].
				Otvod glaz	!	"repello-"	/*Repelling hex
				"-Inimicum"	/* — чары, защищающие какое-либо место от врагов.
				"Ridiculus-"	/* — против боггарта
				"Rictusempra-"	/* — щекотка
				"Salvio Hexia"	/* — защитное заклинание, делает местность невидимой.
				"Sectumsempra-"	/* — темный меч
				"Serpensortia-" (1)	/* — призыва змеи[6].
				"Anapneo-"	/* — прочищает дыхательные пути.
				"Appareo-"	/* — проявление невидимого
				"Scripto--" (3)	/* - чары письма
				"Inebriat-" (3)	/* - чары впитывания жидкости в предмет
				"Formsalucis-" (3)	/* - свет в форму
				"Calori-" (4)	/* - нагреть
				"Frigido-" (4)	/* - охладить
				"Finita-"	/* - закончить
				"Priore-"	/* - предыдущий
				"Eructo-"	/* - выплевывать\выкидывать
				"Accio-"	/* - призывать
				"Revelare-"	/* - выявлять
				"Abrupto-" (3)	/* - отвергать
				"Confundito-"	/* - сбивать с толку
				"Expecto-"	/* - отправлять вызов
				"Creatio-"	/* - создавать
				"Reparo-"	/* - чинить
				"Protego-"	/* - защищать
				"Episkey-"	/* - исцелять
				"Reducto-"	/* - разрушение
				"Reducio-"	/* - уменьшение
				"Engorgio-"	/* - увеличение
				"Tergeo-"	/* - мелкое ощищение
				"Excuro-"	/* - большое очищение от грязи
				"Pulso-" (3)	/* - мелкого толчка
				"Flippendo-"	/* - большого толчка
				"Expulso-"	/* - отбрасывающего мелкого взрыва
				"Confringo-"	/* - огненный взрыв
				"Petrificus-"	/* - паралич
				"Silencio-"	/* - беззвучие
				"Quietus-"	/* - тишина, отмена соноруса
				"Sonorus-"	/* - громкость, отмена квиетуса
				"Evanesco-"	/* - удаление сотворенного
				"Flagreit-"	/* - светящаяся метка
				Sleep	!	"sopporo-"	/* - усыпление
				"Partis-"	/* - проход
				"Stupefy-"	/* - оглушение
				"Muffliato-"	/* - оглохни
				"Obliviate-"	/* - забвение
				"Rennerveit-"	/* - оживи
				"Obskuro-"	/* - ослепление
				"Conjuctivitus-"	/* - боль в глазах
				"Nox-"	/* - нокс
				"Lumos-"	/* - люмос
				"Langlock-"	/* - обезъяз
				"Crucio-"	/* - пыточное
				"Avadakedavra-"	/* - убивающее
				"Depulso-"	/* - отбрасывающее
				"Immobilus-"	/* - остановка действия
				"Impervius-"	/* - непроницаемость
				"Arresto-" (1)	/* — задержание
				"Alohomora-"	/* — Отпирающее магию
				"Incarcero-"	/* — связывает верёвками.
				"Insendio-"	/* — огонь
				"Collosho-"	/* — приклеивает обувь противника к полу[16].
				"Colloportus-"	/* — запирающее заклинание.
				"Lacarnum Inflamare" (1)	/* — создание небольшого огня в фильме «Гарри Поттер и Философский камень». В книге есть похожее заклинание, но оно не произносится[14].
				"Levi-"	/* — подвешивание в воздухе
				"Levioso-"	/* — левитация
				"Legillimenso-"	/* — чтение мыслей
				"Libera-"	/* - освобождает от действия
				"Locomotor-"	/* — передвижение предметов
				"-Wibbly" (2)	/* — заклинание ватных ног. Ноги придётся волочить[16].
				"-Mortis"	/* — заклинание обезноживания. Склеивает обе ноги.
				"Extremis-" (2)	/* — расширяет
				"Mobili-"	/* — движение
				"Morsmordre-"	/* — Запускает в небо Черную метку.
				"Glisseo-"	/* — скольжение
				"Deprimo-"	/* — убирает препятствие[18].
				"Descendo-"	/* — заклинание, опускающее объекты.
				"Geminio-"— копирование
				"Diminuendo-" (1)	/* — уменьшает
				"Dissendo-"	/* — открывает механизмы
				"Diffindo-"	/* - разрезание
				"Duro-"	/* — затвердевание
				"Colorum-"	/* — цвет неживого (в тч волос и ногтей)
				"Defodio-" (2)	/* — долото
			#Object
				"-Subiecti-"	/* - subject
				"-Obiecti-"	/* - object
				"--Corpus-"	/* — body
				"--Atramentum-"	/* — чернила
				"--Hominem-"	/* - human
				"--Hominum-"	/* - people
				"--Animagis-"	/* - animagus
				"--Fumos-" (2)	/* - дым
				"--Vipera-" (1)	/* — змея
				"--Portus-"	/* - порт-ключ
				"--Cross-"	/* - cross
				"--Patronum-"	/* - patronus
				"--Arbus-"	/* — деревянное
				"--Incantationem-"	/* - spell
				"--Slagus-"	/* - слизень
				"--Ignis-"	/* - fire
				"--Aqua-"	/* - water
				"--Bombardo-"	/* - bomb
				"--Piertotum-"	/* — движение големов
				"--Capacius-"	/* — емкость
				"--Magicus-"	/* - magical
			#Types
				"-Wingardi"	/* - крылообразная
				"-Inferni"	/* - hell, cursed
				"-Diabolica"	/* - огненный щит
				"-Horribilis"	/* - антитемный щит
			#Area
				"-Totalis"	/* - полный
				"-Directum" (3)	/* - направленное действие
				"-Skullus" (2)	/* - действует на голову
			#Time
				"-Momentum"	/* - моментальное действие
				"-Postea"	/* - спустя
				"-Temporus"	/* - временное действие
				"--Minutum" (3)	/* - заклинание длительностью в минуту
				"--Horum" (3)	/* - Заклинание длительностью в час
				"--Diesum" (3)	/* - заклинание длительностью в сутки
				"--Prolonga" (3)	/* - заклинание с более долгим эффектом
				"--Aeternum" (3)	/* - заклинание с "вечным" эффектом
			#Power
				"-Potentio"	/* - мощность
				"--Tertium"	/* - заклинание в треть силы
				"--Dimidium"	/* - заклинание в половину силы
				"--Duo"	/* - заклинание удвоенной силы
				"--Tria"	/* - заклинание утроенной силы
				"--Maxima"	/* - максимально сильное для вас заклинание
				/*Общая формула заклинания: [modum] [subject] [object] [adjectivum (optionem/scopus/tempus/potentium)]
				/*Общая формула зачарования: [subject] [object] [modum-ing] [adjectivum (optionem/scopus/tempus/potentium)]
	Complexes
		Finding
			@Accio
			@Revelare
				Animagis
				Hominum
				Specialis
			@Aparekium
		Protecting
			@Silencio	/* - обеззвчиние
			@Impervius	/* - непроницаемость
			@Muffliato	/* - заглушающий шум
			@Protego
				Maxima	/* - щит максимум
				Totalis	/* - щит вокруг
				Horribilis	/* - защита от темного
			@Cave Inimicum	/* - невидимость сверху
			@Fianto Duri	/* - усиление защиты
			@Salvio Hexia	/* - невидимость сбоку
			@""воздушый пузырь	/* - удаление запахов
			@Repello Inimicum	/* - защита от врагов
			@""дизиллюминация	/* - камуфляж
			@""неприметность -
			@Glisseo	/* - отключение трения
			@Fidelius	/* - заклятие доверия
			@Revelare	/* - выявление / гомунгуловы чары?
			@Colloportus	/* - запирание
			@""запечатывание комнаты
			@""ненаносимость
			@""неразбиваемость
			@Expecto Patronum
		Binding
			@Confundus	/* - confusion of mind
			@Stupefy	/* - оглушение
			@Sopporo	/* - усыпление
			@Incarcero	/* - связывание
			@Petrificus Totalis	/* - полное обездвиживание
			@Silencio	/* - немота
			@Impedimenta	/* - помеха
			@Arresto Momentum	/* - остановка
			@Immobilus	/* - отключение действия
			@Obskuro	/* - ослепление
			@Conjuctivitus	/* - нарушение зрения, боль в глазах
			@Colloshu	/* - приклеивание обуви к полу
			@Lokomotor
				Vibbli	/* - ватноножие
				Mortis	/* - обезноживание
			@Mimbl Vimbl	/* - косноязычие
			@Langlock	/* - оьбезъяз
			@Expelliarmus	/* - обезоружение
			@Fulgari	/* - связывание
	Creatures
		#r-4[y]
			#Salamander
			#Manticore
			#Mandrake
			#Fire Crab
			#Cerber
		#r-5[y]
			#Wyvern
			#Unicorn
		#r-6[y]
			#Basilisk
				@Slytherin
			#Dementor
			#Phoenix
				Fawkes
					@Albus Dumbledore
		#Mind
			#r-5[y]
				#Acromantula
					Arogog
				#Giant
				#Goblin
				#Troll
				#Centaur
				#Gnome_2
				#Merpeople
				#Human
					#l0.0
						Dudley Dursley
						Vernon Dursley
						Petunia Dursley
						Arabella Figg
					#l3.0
						Mundungulus Fletcher
						Dedalus Dingl
						Minerva MacGonagall
						Drako Malfoy
						Lucius Malfoy
						Narcissa Malfoy Black
						Bellatrix Lestrange Black
						Sirius Black
						Rabastan Lestrange
						Rudolfus Lestrange
						Severus Snape
						Quirrinus Quirrell
						Rubeus Hagrid
						Hermione Granger
						Ron Weasley
						Fred Weasley
						George Weasley
						Persy Weasley
						Ginny Weasley
						Bill Weasley
						Charly Weasley
						Molly Weasley Pruit
						Artur Weasley
						Harry Potter	!	Harry James Potter, Boy-Who-Lived
					#l4.0
						Alastor Moody
					#l5.0
						Voldemort	!	Tom Marvolo Riddle
						Albus Dumbledore	!	Albus Persival Vulfric Brian Dumbledore
	Features
		#r-4[y]
			Muggle
			Squib
			#w-1	!	Spirit
				Ghost
				Boggart
				Brownie Elv
			Poltergeist
		#r-5[y]
			Eye of Basilisk
			Wizard
				Dark
				Normal
				Light
			Metamorph
				Partial
				Totem
			Parselmouth
			Werewolf
			Vampire`)
add(`Witcher
	@Authors[y]
		Andrzej Sapkowski
	@Languages[y]
		Polish
	@Sources[y]
		#Games
			#Computer
	Creatures
		#r-5[y]
			#Cockatrice
			#Basilisk
		#Mind
			#r-5[y]
				#Human
					#l3.0
						Geralt
	Features
		#r-5[y]
			Witcher
			Mage?
	Directions
		#Languages[y]
			Mudra
	Actions
		#r-5[y]
			#Elements
				#Basic
					Air	!	Aard
					Water	!	Aksiy
					Earth	!	Kven
					Fire	!	Igni
			#Action[y]
				Protection	!	Heliotrop
				Pomehi	!	Irden`)
add(`Pokemon
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Creatures
		#r-4[y]
			#Pokemon
	Objects
		#Artefacts
			#r-5[y]
				#Pokeballs`)
add(`Ghost Busters
	@Languages[y]
		English
	@Sources[y]
		#Film
	Objects
		#Artefacts
			#r-4[y]
				#Ghost traps
	Creatures
		#r-4[y]
			#Ghost`)
add(`UQ Holder
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Rave Master
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Rosario to Vampire
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Features
		#r-5[y]
			Vampire`)
add(`The Law of Ueki
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Hunter x Hunter
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Tenjou Tenge
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`My hero academy
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Features
		#r-5[y]
			Quirk`)
add(`Berserk
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Toriko
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Adacademy Wasshoi
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Users
		#r-5[y]
			e+5	!	Mage`)
add(`High School DxD
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Dragon
	Objects
		#Artefacts
			#r-6[y]
				#Evil Pieces
				#Sacred Gear
				#Holy Swords
	Users
		#r-5[y]
			e+5	!	Mage?
		#r-6[y]
			dm	!	Demon
			lm	!	Angel_0
			fm	!	Fallen
		#r-7[y]
			e+7	!	God_?`)
add(`Startrack
	@Languages[y]
		English
	@Sources[y]
		#Serial
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Vulkan
	Energies
		#r-5[y]
			+4	!	Psy?
	Users
		#r-5[y]
			e+4	!	Psyonic`)
add(`Seilor Moon
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Reptiloid
	Objects
		#Artefacts
			#r-5[y]
				Moon Diadema`)
add(`Dragonball
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Energies
		#r-5[y]
			+1	!	Ki?
	Objects
		#Artefacts
			#r-6[y]
				#Dragon Balls`)
add(`Lord of Rings
	@Authors[y]
		John Ronald Reuel Tolkien
	@Languages[y]
		English
	@Sources[y]
		#Books
	Space
		n
			~1.0, 0.0	!	Body
			~1.5, 0.0	!	Soul
	Verse
		@Type
			Uni
		Original
			@Worlds
				Arda
	Energies
		#r-5[y]
			+5	!	Mana?
	Features
		#r-7[y]
			God_1
			Valar
		#r-6[y]
			Ainur
		#r-5[y]
			Mage
			Nazgul
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Elv
				#Gnome
				#Orc_3
				#Troll
				#Dragon
				#Balrog
				#Ent
				#Hobbit
	Objects
		#Artefacts
			#r-6[y]
				#Rings
					One Ring
				#Gems
					Silmarils
	Materials
		#Metals
			Mithrill`)
add(`Nick
	@Languages[y]
		Russian
	@Authors[y]
		Andrzej	Yasinski
	@Sources[y]
		#Books
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Elv
				#Gnome
				#Orc_0
				#Demon_0
	Energies
		#r-5[y]
			-1	!	Prana
			+3	!	Emana
			+4	!	Psy
			+5	!	Mana
			if	!	Infomana
	Users
		#r-5[y]
			e+5	!	Mage
			if	!	Infomage
			e+3	!	Sorcerer
			e+4	!	Psyonic
	Objects
		#Artefacts
			#r-5[y]
				#Rods
					#Adeptnesser's
	Elements
		#Basic
			Fire
			Water
			Air
			Earth
			Ice
			Electrizity
	Directions
		#Languages[y]
			Construct
			Weaving
			Structure
			Image	/*Only gods
		#Creatures
			Holem
			Automate
		#Types[y]
			#Action
				Mental
				Info
				Clairvoyance
					Types
						Probability
				Illusion
					Dense
				Materialization
					Creating
					Removing
				Heal
				Atack
				Protection
				Alchemy
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	!	Earth-2150?
				Lungria
	Space
		n
			~1.0 ~0.0
			~1.5 ~1.5	!	Astral?, ?-net
			~1.0 ~2.0	!	infofield?, zero-net
	Shells
		+	!	Aura
		-4	!	Infostructure
		+4	!	Mental
	Schools
		Adeptness
		Sorcery
		Magic
		Atl
		Atlant
	Features
		#r-5[y]
			Cleverness
		#r-6[y]
			God_2`)
add(`Skyrim
	@Languages[y]
		English
	@Sources[y]
		#Games
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Dragon
	Users
		#r-5[y]
			e+5	!	Mage`)
add(`Star Wars
	@Languages[y]
		English
	@Sources[y]
		#Film
	Creatures
		#Mind
			#r-5[y]
				#Human
	Energies
		#r-5[y]
			gf	!	Great Force?
	Users
		#r-5[y]
			gf	!	Forceuser
				lm	!	Light
				dm	!	Darl
	Schools
		Jedi
		Sith
	Space
		w
			<1	!	Hyper
	Objects
		#Artefacts
			#r-5[y]
				#Steelarms
					#Lightsaber
				#Tech
					#Galaxy's`)
add(`Warhammer
	@Languages[y]
		English
	@Sources[y]
		#Games
	Creatures
		#Mind
			#r-5[y]
				#Human
	Materials
		Noktilit
		#Metals
			Adamantium
	Energies
		#r-5[y]
			+4	!	Psy?
	Users
		#r-5[y]
			e+4	!	Psyker`)
add(`Minecraft
	@Authors[y]
		Notch	!	Markus Persson
		Jebb
		Grum
	@Languages[y]
		English
	@Sources[y]
		#Games
			#Computer
				Pre-Classic
				Classic
				Indev
				Infdev
				Alpha
				Beta
				Java
				Bedrock
	Space
		o
			Hell	!	Nether World
			End
			Matteral	!	Over World
	Features
		#r-4[y]
			#w-1	!	Spectator Mode
	Users
		#r-6[y]
			#Immortal	!	Godmode
		#r-7[y]
			e+7	!	Creative gamemode, Admin perms
	Creatures
		#r-3[y]
			#Pig
			#Cow
			#Horse
			#Rabbit
			#Sheep
		#r-4[y]
			#w+1	!	Undead
				#Zombie
				#Skeleton
					#Normal
					#Wither
			Spider
		#r-5[y]
			#Dragon
				#Ender
			#Enderman
			#Creeper
			#Ifrit
			#Wither
			#Ghust
	Objects
		#Artefacts
			#r-5[y]
				#Ender's
					#Eye
					#Egg
					#Perl
	Materials
		#Metals
			Iron
			Gold
			Netherit
		#Powder
			Gun
			Fire
			Light
			Red
			Netherit
			Iron
			Gold
		Obsidian
		Bedrock
		#Gems
			Diamond
			Emerald
			Lapis Lazurit
		Coal
		Wood
		Stone
		Wool
Immersive Engineering
Minefactory
Redpower
Electrizity
Railcraft
Reactorcraft
Big Reactor
Rotarycraft
Thermal Expansion
	Materials
		#Metals
			Platina
			Silver
Thaumcraft
Bloodmagic
Mekanism
	Materials
		#Metals
			Osmium
		#Alloy
			Steel
Forestry
	Materials
		Apatite
Industrialcraft
	Materials
		#Metals
			Iridium
			Silver
			Tin
			Copper
			Uranium
			Plutonium
		Matter
	Objects
		#Artefacts
			#r-5[y]
				#Armor
					#Quantum
					#Nano
				#Steelarms
					#Nanosaber
				#Weapon
					#Laser
			#r-7[y]
				#Developer Tool	!	Debug Tool, Adamant Rod
Buildcraft
Ender IO
	Objects
		#Artefacts
			#r-5[y]
				#Armor
					#Ender
				#Steelarms
					#Ender
Gravisuite
	Objects
		#Artefacts
			#r-5[y]
				#Armor
					#Gravi-Chestplate
				#Steelarms
					#Vajra
Gregtech
Terrafirmacraft
Applied Energistics
	Objects
		#Artefacts
			#r-5[y]
				#Appeng
					#Monitors
					#Autocrafts`)
add(`Zero no Tsukaima
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Energies
		#r-5[y]
			+3+5	!	Wizardy?
	Elements
		#Basic
			Fire
			Water
			Air
			Earth
		#Misc
			Void
	Directions
		#Languages[y]
			Spell
			Rune
			Ritual
		#Types[y]
			#Action
				Summon
				Alchemy
			#Object
				Elixir
					Potion
		#Creatures
			Animal
				Familiar
	Objects
		#Elixirs
			#Potions
				Love
		#Artefacts
			#r-5[y]
				#Wands
				#Flying Ships
				#Rings
					of Water
					of Air
	Users
		#r-5[y]
			e+3+5	!	Wizard
	Features
		#r-5[y]
			Gandalf
			Lifrasir
			Sidalf
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	!	Earth-2007?
				Other?
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Elv
				#Changeling
		#r-5[y]
			#Wyvern
			#Salamander
			#Beholder
	Features
		#r-4[y]
			#w-1	!	Spirit
				Loa?`)
add(`Toaru Majutsu no Index
	@Languages[y]
		Japanese
	@Sources[y]
		#Ranobe
			"Toaru Majutsu no Index"
			"Toaru Kagaku no Accelerator"
			"Toaru Kagaku no Railgun"
			"Shinyaku Toaru Majutsu no Index"
		#Manga
			"Toaru Majutsu no Index"
			"Toaru Kagaku no Accelerator"
			"Toaru Kagaku no Railgun"
		#Anime
			"Toaru Majutsu no Index"
			"Toaru Kagaku no Accelerator"
			"Toaru Kagaku no Railgun"
	Verse
		@Type
			Meta
		Original
			@Worlds
				Our	!	Earth-2052?
	Energies
		#r-5[y]
			+5	!	Mana
		#r-6/7[y]
			tl	!	Telesma?
	Shells
		aimf	!	AIM-field
	Schools
		Academ-City
	Levels
		0.0	!	Zero-esper	/*, don't have ability
		1.0	!	Weak	/* esper, can destroy 1 cube meter
		2.0	!	Simple	/* esper, can destroy room
		3.0	!	Normal	/* esper, can destroy house
		4.0	!	Strong	/* esper, can destroy town
		5.0	!	Very strong	/* esper, can destroy country
		5.5	!	Sub-Angel(Immortal)	/*esper, can destroy continent
		6.0	!	Insane, Angel(Immortal)	/* power of esper, can destroy planet's surface; not exist
	Directions
		#Languages[y]
			Ritual
			Rune
			Spell
		#Types[y]
			#Object
				Enchanted
	Users
		#r-5[y]
			e+4	!	Esper
				#l1.0
				#l2.0
				#l3.0
				#l4.0
					#Action
						Teleport
							#Needs
								Touch
									@Sirai Kuruku
								Look
									@?
				#l5.0
					#Misc
						Super strength
							@Rank_Seven
								@Rank
									7
						6
							@Rank_Six
								@Rank
									6
						#Mental
							#Control
								@Mentalout
									@Rank
										5?
					#Elements
						#Misc
							Plasma
								@Meltdowner
									@Rank
										4
				#l5.5
					#Elements
						#Misc
							Electromagnetism
								@Railgun
									@Rank
										3
							Ether	!	Dark matter
								@Darkmatter
									@Rank
										2
					#Elements
						#Other
							Motion
								Vector
									Direction
										@Accelerator
											@Rank
												1
											#Needs
												Touch
			e+5	!	Mage
				Index
					@Index
				@Styl Magnus
		#r-6[y]
			Angel_0
			Imagine Breaker
				@Kamijo Touma
					#Needs
						Touch
		#r-7[y]
			e+7	!	God_?
	Actions
		#r-5[y]
			#Action
				Protection
					Vector
						@Accelerator
	Objects
		#Artefacts
			#r-5[y]
				#Grimoires
					#Forbidden index's
				Cross?
				Sword of space?
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l0.0
						Kamijo Touma
					#l4.0
						Sirai Kuroku
						Kongo Mitsuko
						Styl Magnus
						Index
					#l5.0
						Rank_Seven	!	Sogiita Gunha
							@Rank
								7
						Rank_Six	!	Aihana Etsu
							@Rank
								6
						Mentalout	!	Shokuhou Misaki
							@Rank
								5
						Meltdowner	!	Mugino Sizuri
							@Rank
								4
					#l5.5
						Railgun		!	Misaka Mikoto
							@Rank
								3
						Darkmatter	!	Kakine Teitoku
							@Rank
								2
						Accelerator
							@Rank
								1
					#l6.0
						Alister Crowley`)
add(`Bleach
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Users
		#r-5[y]
			e+2	!	Reatsu
	Energies
		#r-5[y]
			+2	!	Reatsu
	Features
		#r-5[y]
			Hollow
			Quincy
			Shinigami
			Sword of Soul`)
add(`One Piece
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Features
		#r-5[y]
			Fruits`)
add(`Mass Effect
	@Languages[y]
		English
	@Sources[y]
		#Games
	Creatures
		#Mind
			#r-5[y]
				#Human
	Users
		#r-5[y]
			e+4	!	Biotic
	Energies
		#r-5[y]
			+4	!	Psy?`)
add(`Terminator
	@Languages[y]
		English
	@Sources[y]
		#Film
	Objects
		#Artefacts
			#r-5[y]
				#Tech
					#Skynet's
						#AI
						#Drones
						#Terminators
							#1
							#800
							#850
							#1000
							#Ex
						Time-Machine
						#Cyborgs`)
add(`Resident Evil
	@Languages[y]
		English
	@Sources[y]
		#Games
	Creatures
		#r-4[y]
			#Virused Zombie
	Features
		#r-5[y]
			Superability`)
add(`Cat Leopold
	@Languages[y]
		Russian
	@Sources[y]
		#Multfilm
	Objects
		#Elixirs
			#r-4[y]
				Ozverin`)
add(`Noragami
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
		#Manga
	Users
		#r-4[y]
			e+0+2	!	Sword-Soul
	Actions
		#r-5[y]
			Line
	Features
		#r-4[y]
			#w-1	!	Spirit
				Ghost
				Demon-Loa
				God_0`)
add(`My Little Pony`)
add(`Winks`)
add(`Slayers
	@Sources[y]
		#Fiction
			#Anime
				Slayers
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l6.0?
						Lina Invers
	Users
		#r-5[y]
			e+5	!	Mage
	Energies
		#r-5[y]
			+5	!	Mana?`)
add(`Fairy Tail
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Verse
		@Type
			Uni
		Original
			@Worlds
				Other?
	Users
		#r-5[y]
			e+5	!	Mage?
	Energies
		#r-5[y]
			+5	!	Mana?`)
add(`DC
	@Languages[y]
		English
	@Sources[y]
		#Comics
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	!	Earth?
	Creatures
		#Mind
			#r-5[y]
				#Human
	Energies
		#r-5[y]
			+5	!	Mana?
		sf	!	Speedforce
	Emotions	!	Lantern's
		Life	!	of White
		Anger	!	of Red, Atrocitus
		Greed	!	of Orange
		Fear	!	of Yellow, Sinestro
		Will	!	of Green
		Hope	!	of Light Blue
		Compassion	!	of Blue, Indigo
		Love	!	of Purple, Sapphire
		Death	!	of Black
	Users
		#r-5[y]
			Metahuman
			sf	!	Speedforceuser
			e+5	!	Mage
	Objects
		#Artefacts
			#r-4[y]
				#Tech
					#Batman's
					#Luthor's
			#r-5[y]
				#Tech
					#Crypton's`)
add(`Avatar
	@Languages[y]
		Japanese
	@Sources[y]
		#Multserial
	Energies
		#r-5[y]
			+5	!	Mana?
	Elements
		#Basic
			Fire
			Water
			Earth
			Air
	Directions
		#Types[y]
			#Action
				Heal
	Features
		#r-5[y]
			Mage
				Fire
				Water
				Earth
				Air
			Avatar`)
add(`Fullmetal Alchemist
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Features
		#r-5[y]
			Alchemist
	Features
		#r-5[y]
			Gate of Truth
	Energies
		#r-5[y]
			al	!	Alchemycal?`)
add(`Dozory
	@Languages[y]
		Russian
	@Authors[y]
		Sergey Lukyanenko
	@Sources[y]
		#Books
	Schools
		Other
	Levels
		0.0	!	No
		1.0	!	Potential
		1.5	!	7
		2.0	!	6
		2.5	!	5
		3.0	!	4
		3.5	!	3
		4.0	!	2
		4.5	!	1
		5.0	!	Higher/Not in categories
		6.0	!	0
	Energies
		#r-5[y]
			-1	!	Prana?
			+3+5	!	Wizardy?
				dm	!	Dark
				lm	!	Light
	Features
		#r-4[y]
			#w+1	!	Undead
		#r-5[y]
			Other
				Dark
				Light
			Vampire
			Werewolf
			Cubus
				Incubus
				Succubus
			Mage
			Witch
			Mirror
	Actions
		#r-5[y]
			#Misc
				#Domestic
					Absolute lock	/*наглухо запирает любые двери
				#Mental
					Absolute Submission	!	Доминанта	/* — заклинание абсолютного подчинения.
					Петров	/* — заклинание, накладываемое для мгновенного обучения 15 распростаненных языков (среди них упоминается польский).
					Skolko let, skolko zim
					Schastye
					Long tongue	/* — Слабое и легко скрытое заклинание делает противника разговорчивым, заставляя разбалтывать информацию.
					Реморализация	/* — заклинание, заставляющее субъекта строго соблюдать заданную, либо собственную мораль.
					#Protection
						Barrier of will	/* — заклинание защиты разума.
						Сфера Спокойствия	/* — заклинание ментальной защиты.
						Ледяная Кора	/* — ментальная защита.
			#Action
				Muggle Repelling	!	Сфера Невнимания	/* — заклинание, предохраняющее от излишнего любопытства людей. Не действует на Иных и чувствительных к магии людей.
				#Heal
					Absolute constipation	/*вызывает абсолютный запор у того, к кому оно применяется.
					Avicenna	/* — заклинание исцеления.
					Sleep	!	Morphey	/* — заклинание, усыпляющее людей на определённой площади: благодаря постепенному действию (несколько секунд, примерно пять) позволяет избежать лишних жертв, например связанных с потерей управления автомобилями на ходу и т. п. По этой простой причине предпочитается
				#Illusion
					Disguise	!	Паранджа	/* — заклинание, как правило, накладываемое Тёмными женщинами. Аналог магической косметики.
				#Protection
					Кольцо Шааба	/* — охранное заклинание, завязанное на определённое слово.
					Хрустальный щит	/* — очень мощная защита от физического воздействия на объект. Побочным эффектом дает слабую магическую защиту. Мнение что Щит невозможно продавить подтвердилось после применения Щита Эдгаром против вампира Кости, не сумевшего продавить его, даже будучи Абсолютным Иным ("Сумеречный дозор").
					Хрустальный шар	/* — создает вокруг мага шар из «хрусталя», защищающий его от любого физического воздействия.
					Сфера отрицания	/* — заклинание, используемое как защита против вражеских заклинаний, при сильной подкачке может надёжно защитить даже против заклинаний высших магов. Пропускает физические атаки.
					Mana	!	Mage shield	/* — универсальная защита, мощность зависит от вкладываемой силы.
					Universal	!	Rainbow sphere	/* — достаточно сильная универсальная защита.
					Тайга	/* — очень мощное заклинание, имеющее форму огненной сети, опутывающей противника. Упоминается в «Новом Дозоре» и было использовано чтобы замедлить Тигра, правда воздействие было минимальное, так что настоящий эффект неизвестен.
				#Atack
					Momental Sleep	!	Opium	/* — менее гуманный аналог Морфея, в отличие от последнего усыпляет резко, без промедления, что может вызвать аварии и жертвы среди людей, так как не даёт жертве время остановиться или прекратить занятия.
					White kopiyo — боевое заклинание Светлых. Магическое копье, действует соответственно названию. Упоминается в романе «Последний дозор». В шестом дозоре было использовано Антоном Городецким против Двуединого. "Я видел, ... как загорелось пальто Темного, пробитое "белым копьем"..."
					Марево Трансильвании 	/* — заклинание, магическим способом причиняющее физические увечья путём всестороннего сдавливания объекта заклинания. Применяется только Тёмными Иными. Было применено Зеркалом Виталием Рогозой для отражения атаки Тигренка в «Дневном дозоре».
					Pressure	!	Press	/* — заклинание чистой Силы. Сгущает Силу до осязаемого состояния, используется чтобы давить противника.
					White Sword	/* — светлое заклинание, преобразующее Силу в белый клинок. Использует Светлана в бою против ведьмы Арины(«Сумеречный дозор»). Также Светлана использовала "защиту Лужина", вероятно с помощью меча. В теории заклинание поражает лишь Тёмных и склонившихся ко Злу людей. На практике человек становится уязвим к Мечу при появлении у него агрессии, страха, злобы.
					Vacuum
					Плеть Шааба	/* — боевое заклинание Тёмных: огненная струя, принимающая облик огромной змеи с некоторыми зачатками разума, изменяющая направление в полёте. Любимое заклинание Завулона. В книге Новый Дозор упоминается похожее заклинание, использумое Завулоном в битве с Тигром. Пламя было синего цвета, так что не установлено являлось ли оно Плетью Шааба, либо каким-то другим заклинанием.
					Поцелуй Ехидны	/* — Что-то вроде дождя из кислоты
					Огненная кобра	/* — заклинание, использованное против Завулона, создающее гигантскую огненную змею которая самостоятельно борется с противником.
					Огненная Стена (или Стена огня)	/* — довольно сильное групповое заклинание. Наносит значительный урон огнём противнику, причём чем меньше противников в группе, тем большие повреждения получит каждый из них.
					Путы Захви	/*—жертва заклинания не имеет возможности двигаться и как-то действовать, но способна слышать, видеть и говорить (не путать с трансом). Применялось Лайком в "Лике Черной Пальмиры".
					Buka	/* — боевое заклинание. Предположительно, из арсенала светлых. Эффект от применения данного заклинания не описан. Применялась в книге «Последний Дозор».
					Прах	/* — заклинание против дэвов и големов. В силу редкости последних, практически не используется, не преподается иным при обучении в дозорах. Несложное заклинание, требующее правильно сложенного магического паса и берущее много Силы. Использовалось Антоном в Последнем дозоре против дэва. Он, в свою очередь, узнал об этом заклинании от Ольги.
					Thanathos	/* — заклинание, подавляющее волю и вызывающее остановку сердца. Убивает не сразу, жертву можно спасти, как это было в «Сумеречном Дозоре».
			Agape	/* — знак любви.
			Aspirin	/* − тёмное заклинание, понижает температуру цели до температуры окружающей среды, может использоваться в бою.
			#Aura
				vzor serdsta	/* — похожие заклинания, позволяют видеть невидимое. С помощью последних двух можно смотреть даже на первый слой Сумрака.
				Instinnoe zrenie
				yasniy vzglyad
			gremlin	/* — заклинание, порождающее сущность, которая медленно разрушает технику. Например, в «Дневном Дозоре» Алиса применила это заклинание, чтобы испортить автомобиль нагрубившего ей водителя.
			Ивовая Кора	/* — Светлый вариант Аспирина.
			Прометей	/* — безопасный розжиг костра.
			Light	/* — зажигает огонь на ладони.
			#Search
				Снежная паутина	/* — поисковое заклинание с большим радиусом действия, и требующее больших затрат Силы.
				Око мага	/* — что-то вроде магического радара в Сумраке и реальном мире. имеет Форму большого шара, напоминающее глаз.
			Спайдерфлэйм	/* — заклинание, вызывающее возгорание объекта пламенем характерного тускло-синеватого цвета.
			Тройной ключ	/* — заклинание, порождающее любовь, веру и понимание. К тому же разбивает ментальную защиту противника.
			Тройное лезвие	/* — заклинание, материализующее 3 кинжалоподобных лезвия, с большой скоростью летящих в указанном магом направлении.
			Fireball	/* — широко распространённое как у Светлых, так и у Тёмных заклинание. Во врага пускается сгусток огня. Существует также «групповой файербол» и какая-то особая версия последнего у Инквизиторов.
			#Creature
				#w+1	!	Undead
					Anti
						Серый молебен	/* — заклинание против нежити: вампиров, зомби и т. п. Ослабляет и замедляет вампиров, на большей мощности упокаивает. Скелетов, замби, то есть нежить, не имеющую собственной воли, а подчиняющуюся воле поднявшего их колдуна, развеивает.
			#Elements
				#Other
					Space
						Portal	!	/* — заклинание позволяющее почти мгновенно переносится на большие расстояния при помощи врат, без наводки используется только высшими иными (или зеркалом). При помощи мага в пункте назначения создавать портал проще.
					Time
						Stop	!	Freeze	/* — локальная остановка времени, применяется для иммобилизации противника без причинения ему вреда.
			Ход	/* — заклинание, позволяющее бежать с очень высокой скоростью. При попадании под воздействие заклинания сердечной мышцы (миокарда) может вызвать остановку последнего.
			#l5.0
				#Elements
					#First
						Light
							Uncontrolled
								White marevo	/* — самое сильное и страшное из упоминаемых в книгах заклинаний Светлых . По силам только высшим магам, «требует максимального сосредоточения и полной прокачки Силы в радиусе трёх километров». После произнесения изо рта мага вырывается белый туман, вызывающий локальное «схлопывание» всех слоёв Сумрака, и превращающий всех противников-иных в камень, внутри которого души остаются вечно живыми, но бездвижными и лишёнными всех чувств, медленно сходя с ума; людей сумрак перемалывает без следа. Придумано Мерлином, использовано лишь один раз Рустамом и Гесером.
						Dark
							Uncontrolled
								Тень владык	/* — самое сильное из упоминаемых в книгах заклинаний Тёмных. Временно вызывает души умерших Великих Тёмных Иных с шестого слоя Сумрака, накачивает их Силой и заставляет уничтожать всё вокруг.
					#Other
						Time
							Uncontrolled
								Саркофаг времён	/* — заклинание из арсенала Инквизиции. Применивший его оказывается вместе со своей жертвой запертым в каменном саркофаге, плывущим в небытии, до скончания времён. Случаев побега из саркофага времён пока не существует. Антон Городецкий в книге "Новый дозор" был освобожден из саркофага времен, где он был заключен с ведьмой Ариной	 — тигром. (Однако, осталось неясным, смогла ли Арина освободиться с помощью Минойской Сферы (только ведьмы умеют их заряжать), которую имела при себе: Минойская Сфера прокладывает портал откуда угодно)
	Objects
		#Artefacts
			#r-5[y]
				Son Merlina?
				Venets of Everything	/* — камни в основании замка в Эдинбурге, позволяют освобождать ушедших Иных, даруя им окончательную смерть.
				#Grimoires
					Fuaran's	/*Book about turning human to Other, and Other to Higher level
				#Ingredients
					#Claws
						Claw of Phaphnir	/* — коготь Великого Тёмного мага, убитого в своём сумеречном облике дракона, ставший сильным артефактом после того, как Братья Регина (секта, созданная учениками Фафнира) несколько поколений питали его силой.
				#Kandaly
					Shredinger Cat	/* — артефакт, действующий во всех слоях Сумрака. Пушистая меховая лента, надеваемая на шею, как правило преступникам при конвое Инквизицией. Обезглавливает цель при малейшем магическом воздействии с её стороны.
				Mel of Fate	/* — кусочек мела, с помощью которого можно изменить Книгу Судьбы любого человека или Иного. Сделать это может только Светлая Великая Волшебница. В книге «Ночной Дозор» Светлана хотела изменить судьбу Егора, но в это же самое время Ольга изменила Книгу Судьбы самой Светланы.
				#Spheres
					Minoy	/* - открывает портал откуда угодно, а его точку назначения невозможно проследить. Имеет только один заряд, перезаряжать его умеют только ведьмы. С разряженной Минойской Сферой ведьма Арина была заперта заклинанием Саркофаг Времён.
				Power Prizm	/* — хрустальная прозрачная призма. Использующий призму Иной вытягивает жизненную силу из того, на кого сквозь неё смотрит. Использовала Алиса Донникова ("Ночной дозор")
	Directions
		#Languages[y]
			?
		#Types[y]
			#Action
				Love	!	Obvorozhenie
				Clairvoyance
					Probability
				Metamorph	!	Oborotnichestvo
					Werewolf
					Turning
				Atack
				Protection
				Heal	!	Healing
			#Saving
			#Object
		#Creatures
			#w-1	!	Necromancy
	Space
		n
			~1.0 ~0.0
			~1.5 ~0.0	!	Twilight
				~1.5 ~0.0
					0	x1	none cold	some gray	0	none lag	normal
				~1.1 ~0.3
					1	x3	weak cold	weak gray	-	weak lag	3 moons
				~1.1 ~0.6
					2	x9	very cold	very gray	-	very lag	red cloud
				~1.3 ~0.9
					3	x27	full cold	full gray	-	full lag
				~1.3 ~0.9
					4	x27	none temp	some color	+	desert
				~1.1 ~0.6
					5	x9	weak temp	weak color	+	some elems
				~1.1 ~0.3
					6	x3	very temp 	very color	+	world of dead elems
				~1.5 ~0.0
					7	x1	full temp	full color	0	normal	/*Can be backside`)
add(`Virworld`)
add(`Kono Subarashii Sekai ni Shukufuku o
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	!	Earth?
				Other`)
add(`Tokyo Ghoul
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Lucifer
	@Languages[y]
		English
	@Sources[y]
		#Serial
			1.
			2.
			3.
			4.`)
add(`Hataraku Maou-sama
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Features
		#r-6[y]
			Demon_0
			Fallen
			Angel_0
	Creatures
		#Mind
			#r-6[y]
				#Demon
					Alciel	!	Shiro Ashiya
					Satan Jakob	!	Sadao Mao
					Lucifer	!	Urushihara Hanzo
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	!	Earth
				Ente Isla`)
add(`To Love-Ru
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`The Gamer
	@Languages[y]
		Korean
	@Sources[y]
		#Manhva
	Users
		#r-5[y]
			e+1	!	Kiuser
			Feature
			e+5	!	Mage
		#r-6[y]
			God_4
			gm	!	Gamer's System
				The Gamer
	Features
		Dark soul
	Verse
		@Type
			Uni
		Original
		@Tags
			Gamelit
	Elements
		#Basic
			Fire
			Water
			Air
			Earth
	Directions
		#Types[y]
			#Action
				Clairvoyance
	Actions
		#r-5[y]
			Postup @tshonbo
			Soul heal @yunhon
			#Action
				#Protection
					Mana	!	Mana Shield
	Creatures
		Elemental
		#Mind
			#r-5[y]
				#Human
					#l5.0
						Gamer	!	Han Jee Han
						Blood Witch	!	Lolicano Mistrim
	Objects
		#Artefacts
			#r-5[y]
				#Broomsticks
				#Soul Stones / SS
			#r-7[y]
				Sword Dan
				#Divine
					Bereza
					Mirror
					???
	Organizations
		Bezdna
			Aukcion`)
add(`Neon Genesis Evangelion
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Shells
		atf	!	AT-field
	Creatures
		#r-6[y]
			#Angel_1
			#Eva
	Features
		#r-5[y]
			Kid`)
add(`Kir Bulychov
	Objects
		Artefacts
			#r-5[y]
				#22 Century Tech
					Time-Machine
					Meylaphone
					Videophone
					Spaceship
	Creatures
		#Mind
			#r-5[y]
				#Human
					Seleznyov(a)
						Alice`)
add(`Master and Margarita
	@Authors[y]
		Bulgakov
	@Languages[y]
		Russian
	@Sources[y]
		#Books`)
add(`Alice in back side of mirror
	@Languages[y]
		Japanese
	@Sources[y]
		#Books`)
add(`Voina i mir
	@Authors[y]
		Lev Tolstoy
	@Languages[y]
		Russian`)
add(`Gundum
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Ottsy i deti
	@Authors[y]
		Turgenev
	@Languages[y]
		Russian
	@Sources[y]
		#Books`)
add(`How to stat wizard
	@Authors[y]
		Duain Diana
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`12 stuliev
	@Languages[y]
		Russian
	@Sources[y]
		#Books`)
add(`Green Mile
	@Authors[y]
		Steven King
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`Pobeg is shoushenka
	@Authors[y]
		Steven King
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`451 Farengait
	@Authors[y]
		Rai bradberry
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`We
	@Languages[y]
		Russian
	@Sources[y]
		#Books`)
add(`Oh divniy new world
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`1984
	@Authors[y]
		George Oruell
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`Skotniy Dvor
	@Languages[y]
		Russian
	@Sources[y]
		#Books`)
add(`The Zadrot
	@Authors[y]
		Fil Bandileros
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
	Verse
		@Type
			Uni
		The Gamer`)
add(`Meta-Hobbit
	@Authors[y]
		Fil Bandileros
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
	Verse
		@Type
			Meta
		DC
		Lord of Rings
		@Tags
			Gamelit`)
add(`Meta-Gamer
	@Authors[y]
		Fil Bandileros
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
	Verse
		@Type
			Meta
		DC
		@Tags
			Gamelit`)
add(`Solaris`)
add(`Thanks for fish
	@Authors[y]
		Fil Bandileros
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
	Verse
		@Type
			Multi
		Marvel`)
add(`Atlant raspravil plechi
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`Eyes of other world
	@Authors[y]
		Jack Vance
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`Game of Thrones
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`Autostop by galaxy
	@Authors[y]
		Duglas adams
	@Languages[y]
		English`)
add(`Path of Dark Mage
	@Authors[y]
		Sergey Zloy
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
	Verse
		@Type
			Uni
		Potteriana`)
add(`Mage and his shadow`)
add(`Fate of Archmage
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
			1. "Fate of Archmage"
			2. "Plan of Archmage"
	Verse
		@Type
			Meta
		Rudazov
		Potteriana`)
add(`Sticks`)
add(`Myths of Ktulhu
	@Authors[y]
		Govard Lovecraft
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`Strugatskie
	@Authors[y]
		Strugatskie
	@Languages[y]
		Russian
	@Sources[y]
		#Books`)
add(`Antichniy charoplet
	@Authors[y]
		Alessiy
	@Languages[y]
		Russian
	@Sources[y]
			#Fanfics
				1.
				2.
				3.`)
add(`Small Monster
	@Authors[y]
		Daimon Agafo
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics`)
add(`King's Battle
	@Languages[y]
		Japanese
	@Sources[y]
		#Ranobe`)
add(`Hunger Games
	@Authors[y]
		Katlin
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`Voina mirov
	@Authors[y]
		Herbert wels
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`Hyperboloid inzhenera garina
	@Authors[y]
		Tolstoy
	@Languages[y]
		Russian
	@Sources[y]
		#Books`)
add(`Tumannost Andromedy
	@Authors[y]
		Efremov
	@Languages[y]
		Russian
	@Sources[y]
		#Books
	Space
		w
			<1	!	zero-space`)
add(`Elita
	@Authors[y]
		Belyaev
	@Languages[y]
		Russian
	@Sources[y]
		#Books`)
add(`Dead souls
	@Authors[y]
		Nikolay Gogol
	@Languages[y]
		Russian
	@Sources[y]
		#Books`)
add(`Pandora Box`)
add(`Svarog
	@Authors[y]
		Buzhkov
	@Languages[y]
		Russian
	@Sources[y]
		#Books`)
add(`Deus Ex
	@Sources[y]
		#Games`)
add(`Fallout
	@Sources[y]
		#Games`)
add(`Assasin's Creed
	@Sources[y]
		#Games`)
add(`Megabrain
	@Sources[y]
		#Film`)
add(`Matrix
	@Languages[y]
		English
	@Sources[y]
		#Film`)
add(`Fifth Element`)
add(`trassa 60`)
add(`Hodyachiy Zamok
	@Authors[y]
		Hayao Miadzaki
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Seishun Buta Yaro wa Bunny Girl-senpai no Yume wo Minai
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Love Death Robots
	@Sources[y]
		#Serial`)
add(`Black Mirror
	@Sources[y]
		#Serial`)
add(`Memnoh Devil`)
add(`Will for Life
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics`)
add(`Technomancer
	@Languages[y]
		Russian
	@Sources[y]
		#Fanfics
	Verse
		@Type
			Uni
		Systema, Labirint, Bogi, Avanturisti`)
add(`Overlord
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`One Punch Man
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Mob Psyho 100
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l0.0
						Mob's teacher
					#l5.0
						Mob
	Energies
		#r-5[y]
			+4	!	Psy?`)
add(`Svet za okoshkom
	@Authors[y]
		Svyatoslav Loginov
	@Languages[y]
		Russian
	@Sources[y]
		#Books
	Features
		#r-4[y]
			Ghost`)
add(`Assassination Classroom
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`vosplamenyayushaya vzglyadom
	@Authors[y]
		Steven King
	@Languages[y]
		English
	@Sources[y]
		#Books`)
add(`Re: Monster
	@Languages[y]
		Japanese
	@Sources[y]
		#Manga`)
add(`High School of Dead
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Chronics of Narnia`)
add(`Soul Eater
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Labirints Eho`)
add(`Labirint Favna`)
add(`Persi Jackson`)
add(`Star Dust`)
add(`Home of strange kid ms peregrin`)
add(`Gravity Falls
	@Languages[y]
		English
	@Authors[y]
		Alex Hirsh
	@Sources[y]
		#Multserial
			1 Season
			Video chronics
			2 Season
	Objects
		#Artefacts
			#r-4[y]
				#Diaries
					@Stanford
					1
					2
					3
		#r-5[y]
			#Anomaly
				Sizing Lamp
	Creatures
		#Mind
			#r-6[y]
				#Demon
					Bill Cipher`)
add(`Fineas and Ferb
	@Languages[y]
		English
	@Sources[y]
		#Mult`)
add(`Infinity Story`)
add(`Collectioner`)
add(`Molchaniye Yagnyat`)
add(`Diplomirovanniy Charodey`)
add(`Wizard Parents`)
add(`Dungeons and Dragons
	@Languages[y]
		English
	@Sources[y]
		#Games`)
add(`Volshebnik strany OZ`)
add(`Volshebnik izumrudnogo goroda
	@Authors[y]
		Alexander Volkov
	@Languages[y]
		Russian
	@Sources[y]
		#Books
		#Mult`)
add(`Dragon Age
	@Languages[y]
		English
	@Sources[y]
		#Games
	Space
		n
			Fade
			~1.0 ~0.0	!	Yav
	Materials
		#Metals
			Lyrium`)
add(`RWBY
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
	Creatures
		#r-5[y]
			#Grimm`)
add(`Death Note
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime
		#Manga
	Objects
		#Artefacts
			#r-7[y]
				#Death Notes
	Users
		#r-7[y]
			Death Note	!	Shinigami
	Creatures
		#Mind
			#r-7[y]
				#Human
					#l0.0
						Yagami Light
						L Lawliet
						Amane Misa
				#Shinigami
					Ryuk
					Rem
					Death King`)
add(`Dragonlance
	@Languages[y]
		English`)
add(`League of Legends
	@Languages[y]
		English`)
add(`Atack on Titan
	@Languages[y]
		Japanese
	@Sources[y]
		#Anime`)
add(`Code Geass
	@Sources[y]
		#Fiction
			#Anime
				Code Geass
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l3.0
						Roland
						Mao
					#l5.0
						Lelouch
						Charlz
						Marianna
						C.C.
	Actions
		#r-5[y]
			Mental
				Geass
					Control
						@Lelouch
					Memory
						@Charlz
					Soul
						@Marianna
					Time Stop
						@Roland
					Love
						@C.C.
					?
						@V.V.
					Telepathy
						@Mao
				Antigeass
					@Jeremia
		#r-6[y]
			Code Geass
				@C.C.
				@V.V.
				@Charlz
				@Lelouch
	Materials
		Sakuradait
	Objects
		#Artefacts
			#r-5[y]
				#Tech
					#Britanian Imperia's
						#Knightmares`)
props.sourcesConfig	=	`#Rationality
	#Books
		HPMoR
			@References
				#Fiction
					#Books
						Дуэйн Диана
							Как стать волшебником
						дипломированный чародей
				#Nonfiction
					#Books
						Атлант расправил плечи
					Less Wrong
					Feynman Lectures
					Gyodelya Eshera Baha
					принятие решений в неопределенности
			@Date	!	18.07.17
			@Authors	!	Элиезер Юдковский
			=18.07.26-18.08.04 10.0
			=20.04.03 13:34-
#Fiction
	#Javerse
		Naruto
			@Languages	!	Japanese
			@Authors	!	Masasi Kisimoto
			@Date	!	19.02.03
			#Anime
				1 Season	!	19.03.04 12:00-?		6.0
					001-010	!	20.01.04				7.0
					010-019	!	20.01.04				6.0
					019-040	!	20.01.04-20.01.05		7.0
					040-065	!	20.01.05				7.0
					066-067	!	20.01.06 8:40-11:39		7.0
					068-080	!	20.01.06 11:40-16:45	7.0
					081-085	!	20.01.06 16:50-19:24	7.0
					086-100	!	20.01.06 20:15-20.01.07 10:58	7.0
					101-106	!	20.01.07 11:00-13:13	7.0
					107-135	!	20.01.07 13:15-20.01.08 10:55	7.0
					136-141	!	20.01.08 10:55-13:36	7.0
					142-147	!	20.01.08 13:37-15:42	7.0
					148-151	!	20.01.08 15:45-17:04	7.0
					152-161	!	20.01.08 17:05-20:38	7.0
					162-168	!	20.01.09 9:48-12:59		7.0
					169-186	!	20.01.09 13:00-20:40	7.0
					187-202	!	20.01.09 20:42-20.01.10 11:00	7.0
					203-208	!	20.01.10 11:00-13:08	7.0
					209-212	!	20.01.10 13:10-17:25	7.0
					213-215	!	20.01.10 17:26-19:40	7.0
					216-220	!	20.01.10 19:40-21:25	8.0
				2 Season
					001-	!	20.01.11 7:45-
			#Manga
	#Anime
		High School of Dead
			@Date	!	20.03.29
			@Source	!	Fanfic
		Demons High School
			@Date	!	19.03.17
		Zero no Tsukaima
			@Date	!	19.03.17
			1 Season	!	19.03.18 23:00-19.03.19 19:20 8.5
			2 Season	!	19.03.19 22:22-19.03.20 14:40 7.0
			3 Season	!	19.03.20 14:45-23:45 7.0
			4 Season	!	19.03.21 06:30-14:45 8.0
		Sword Art Online
			@Date	!	19.03.21
			1 Season	!	19.03.24 13:40-19.03.25 14:00 8.0
			2 Season
			3 Season
			4 Season
			5 Season
		Ходячий замок
			@Date	!	19.03.21
		Code Geass
			@Languages
				Japanese
			@Date	!	19.03.21
			R1	!	19.07.30 10:41-22:45 8.0
			R2	!	19.07.30 22:47-19.08.04 12:17 8.0
			1 Film
			2 Film
			3 Film
			4 Film
			5 Film
			6 Film
		Toaru
			@Date	!	19.03.17
			Toaru majutsu no index
				1 Season	!	19.11.05 6:00-19:06 =7.5/10
				2 Season	!	19.11.05 20:12-19.11.07 15:25 =8/10
				3 Season	!	19.11.07 21:11-19.11.10 7:48 =7.5/10
			Toaru kagaku no railgun
				1 Season	!	19.04.16 18:08-19.04.17 22:24 =7/10	20.01.19-20.01.20 21:45 =8/10
				2 Season	!	19.05.02 12:50-19... 19.11.01 22:15-19.11.04 22:45 =7.5/10	20.01.21 10:10-20.01.23 13:00 =7.5/10
			Toaru kagaku no accelerator
				1 Season	!	19.11.04 15:00-22:45 =8/10
		Bleach
			@Date	!	19.03.17
			1		19.08.04 15:00-
		Fate
			@Date	!	19.03.17
		One peace
			@Date	!	19.03.22
		Lupen
			@Date	!	19.03.23
		Uq holder
			@Date	!	19.03.25
		RWBY
			@Date	!	19.04.23
		Seishun Buta Yaro wa Bunny Girl-senpai no Yume wo Minai
			@Date	!	19.06.13
			=19.06.13 23:30-
		Kono Subarashii Sekai ni Shukufuku o
			@Date	!	19.06.16
		kanokon
			@Date	!	19.06.18
			=19.06.18 15:30-19.06.19 4:30 =7/10
		Death Note
			@Date	!	19.06.27
			=19.06.27 8:01-19.06.28 9:01 =8/10
			1-10?	! =9.5	19.06.28 11:00-20:15 =9/10
			-31?	! =7
			31-36?	 !=8.5
			37	 !=9
		Seilor Moon
			@Date	!	19.07.06
				20.01.30-
		Fullmetal Alchemist
			@Date	!	19.07.06
		Atack on Titan
			@Date	!	19.07.06
		Detective Konan
			@Date	!	19.07.06
		Pokemon
			@Date	!	19.07.06
		Mob Psycho 100
			Source
				Bad Choice
			Anime
				1 season    !   20.05.03-
				2 season    !   -20.05.06 10:40 9/10
		Tokyo Ghoul
			@Date	!	19.07.06
			1 Season	!	19.07.07 19:22-19.07.08 6:32 =8/10
			2 Season	!	19.07.08 6:34-12:57 =6/10
			3 Season	!	19.07.08 13:00-
		My hero academy
			@Date	!	19.09.11
			1 Season	!	19.09.11 11:00-15:00 =7/10
			2 Season	!	19.09.11 15:10-19.09.14 10:00 =7/10
			3 Season	!	19.09.14 10:05-19.09.15 09:50 =7/10
		Noragami
			@Date	!	19.09.16
			1 Season	!	19.09.16 12:45-21:23 =8/10
			2 Season. Aragoto	!	19.09.22 9:35-22:05 =8.5/10
		Overlord
			@Date	!	19.10.03
		One punch man
			@Date	!	19.10.16
			1 Season	!	19.10.16 8:10-18:10 =8/10
			2 Season	!	19.10.16 18:15-19.10.17 13:31 =8/10
		Hataraku Maou-sama
			@Date	!	20.01.01
		Assassination Classroom
			@Date	!	20.02.05
			=20.02.05 17:00-20.02.07 17:55 =8/10
	#Manga
		#Languages	!	Japanese
	#Ranobe
		@Languages	!	Japanese
		King's Battle
			@Date	!	19.03.24
		Sword Art Online
			@Date	!	19.03.25
			@Authors	!	Рэки Кавахара
			1.	!	19.03.25 15:15-19.03.27 12:45 =8/10
			2.	Айнкрад	!	19.03.27 12:50-19.03.28 15:15 =7/10
			3.	Танец фей	!	19.03.29 09:55-19.03.30 15:10 =7/10
			4.	Танец фей	!	19.03.30 16:00-19.03.31 16:35 =7/10
			5.	Призрачная пуля	!	19.03.31 16:40-19.04.01 10:30 =7/10
			6.	призрачная пуля	!	19.04.01 10:30-19.04.02 13:50 =7/10
			7.	розарий матери	!	19.04.02 13:55-19.04.05 10:05 =7/10
			8.	вначале и потом	!	19.04.05 10:45-
	#Serial
		чародей 19.01.16		Фильм
		17 мгновений весны
			@Date	!	18.09.25
			=18.09.25-18.09.26
		Lucifer
			@Date	!	18.11.25
			1 Season	!	18.11.29 15:20-18.11.30 10:00 =9/10	19.03.24 11:11-
			2 Season	!	18.11.30 10:10-18.12.01 12:05 =8/10
			3 Season	!	18.12.01 12:20-18.12.02 19:05 =8/10
			4 Season
		теория большого взрыва
			@Date	!	18.11.28
			1 Season	!	18.12.03 22:00-
		Игра престолов
			@Date	!	18.11.28
		Классная школа
			@Date	!	18.11.26
			=18.11.26-
		Young Sheldon
			@Date	!	20.02.15
			1 Season
				=20.02.15 6:30-15:05 =9/10
				=20.02.18 9:38-20.02.20 7:45 =8/10
			2 Season
				=20.02.15 15:17-20.02.17 10:55 =8.5/10
				=20.02.20 7:48-
			3 Season
				=20.02.17 12:29-20.02.18 8 =8/10
	#Books
		#Duein Diana
			@Languages	!	English
			How to will be wizard	!	18.11.01-
		#Strugatskie
			@Languages	!	Russian
			@Date	!	20.03.08
			Мир Полудня
			Понедельник начинается в субботу
			Гадкие лебеди
			Сказка о тройке
		Myths of Ktulhu
			@Authors	!	Lovecraft
			@Date	!	18.12.29
		Sticks
			@Date	!	18.12.16
		Game of Thrones
			@Date	!	18.11.28
		Rudazov
			@Authors	!	Alexander Rudazov
			Sumer nights
				1.	!	18.12.31 17:20-19.01.01 23:37 7/10
			Archmage	!	18.12.13-19.01.01 8/10
				@Date	!	18.12.06
				1.	Архимаг
					=18.12.13 20:40-18.12.15 13:30 7.5/10
					=19.12.05 14:10-19.12.06 16:45 8/10
				2.	Рыцари Пречистой девы
					=18.12.15 14:52-18.12.19 15:15 7.5/10
					=19.12.06 16:47-19.12.08 19:19 7.5/10
				3.	Самое лучшее оружие
					=18.12.19 15:15-18.12.20 23:53 7.5/10
					=19.12.08 19:20-19.12.11 10:53 8/10
				4.	Серая чума
					=18.12.21 12:30-18.12.22 18:46 7.5/10
					=19.12.11 12:21-19.12.12 22:12 8/10
				5.	Война колдунов
					5.1.	вторжение
						=18.12.22 18:47-18.12.24 07:48 7.5/10
						=19.12.12 22:20-19.12.14 22:20 8/10
					5.2.	штурм цитадели
						=18.12.24 07:48-18.12.25 08:48 7.5/10
						=19.12.14 22:23-19.12.16 13:43 7.5/10
				6.	Дети судного часа
					=18.12.25 08:49-18.12.26 13:23 +8.0
					=19.12.16 13:45-19.12.17 13:25 +7.5
				7.	Совет 12
					=18.12.26 13:30-18.12.27 12:30 +7.0
					=19.12.17 13:30-19.12.18 17:26 +8.0
				8.	Битва полчищ
					=18.12.27 12:35-18.12.29 11:22 +7.0
					=19.12.18 17:30-
				9.	Заря над бездной
					=18.12.29 11:22-18.12.30 23:59 +9.0
			Yatshen
				@Date	!	19.01.11
					1.	Три глаза и шесть рук
						=19.01.11 16:00-19.01.12 14:40 =8.0/10
						=19.12.09 23:55-19.12.19 22:15 =7.5/10
					2.	Шестирукий Резидент
						=19.01.12 14:40-19.01.13 16:45 =7.5/10
						=19.12.19 22:26-19.12.23 13:56 =7.5/10
					3.	Демоны в Ватикане
						=19.01.13 16:46-19.01.14 22:14 =8.0/10
						=19.12.23 16:40-19.12.27 09:31 =7.5/10
					4.	Сын Архидемона
						=19.01.14 22:16-19.01.15 19:09 =8.5/10
						=19.12.27 09:35-19.12.28 13:25 =8.0/10
			Arifmoman
				@Date	!	19.01.16
				1.	Червоточина	!	19.01.28 15:00-19.01.29 18:13 =7.0/10
				2.	В небесах	!	19.01.29 18:15-19.01.31 11:50 =6.5/10
			Tri mudretsa
				@Date	!	19.01.16
				1.	Три мудреца в одном тазу	!	19.01.16 12:29-19.01.18 17:12 =6/10
				2.	Тайна похищенной башни	!	19.01.21 18:00-19.01.22 19:14 =6/10
			Kriabal
				@Date	!	19.01.16
				1.	Kriabal
					1.1.	Тьма у ворот		19.01.23 12:53-19.01.24 19:53 =7/10
					1.2.	Свет в глазах		19.01.24 20:00-19.01.25 23:45 =7/10
				2.	Apofeoz
			Ghost
				@Date	!	19.01.25
				=19.01.27 12:00-19.01.28 14:15 +7.0
				=19.07.08 15:30-19.07.11 09:52 +7.0
			spasibo za pokupku
				@Date	!	19.01.26
				=19.01.26 12:00 +6.0
			Vlastelin
				@Date	!	19.01.26
				=19.01.26 12:15-01:09 +9.0
				=19.12.20-19.12.23 11:29 +8.5
			Рассказы из правого ботинк
				@Date	!	19.01.26
				=19.11.13 15:00-19.11.14 20:57 +7.5
			Ekipazh
				@Date	!	19.01.26
				=19.11.15 06:30-19.11.16 19:27 +7.0
		Solaris
			@Date	!	18.11.13
		Nick
			@Date	!	18.12.06
			@Authors	!	Andrzej	Yasinski
				1.	Lammer	!	19.07.11 10:22-19.07.12 22:01 7.5/10
				2.	User	!	19.07.13 8:03-19.07.14 19:37 7.5/10
				3.	стихийник	!	19.07.14 19:41-19.07.15 22:51 8/10
				4.	Admin	!	19.07.16 10:54-19.07.17 8:58 7.5/10
				5.	беглец	!	19.07.17 9:00-19.07.18 16:58 8/10
				6.	Sorcerer
					1 Tom	!	19.07.18 17:20-19.07.19 17:00 7.5/10
					2 Tom	!	19.07.19 17:02-19.07.20 20:39 7.5/10
				7.	Астральщик
					1 Tom	!	19.07.20 20:45-19.07.21 16:02 7.5/10
					2 Tom	!	19.07.21 16:20-19.07.22 17:58 9/10
				8.	Землянин
					1 Tom	!	19.07.22 18:00-19.07.23 15:00 8/10
					2 Tom	!	19.07.23 15:09-19.07.24 16:32 8/10
				Tolleus
					1 Tom	!	19.07.24 18:31-19.07.26 11:40 7/10
					2 Tom	!	19.07.26 11:45-19.07.28 13:05 7/10
		12 стульев
		Orderly
			@Date	!	18.08.18
			@Authors	!	Nick Perumov
			Ring of Dark
				Эльфийский клинок	!	18.08.25-18.09.07 5/10
				Чёрное копье	!	18.09.07-18.10.29 5/10
				Адамант Хенны	!	18.10.29-
		Master and Margarita
			@Date	!	18.08.27
		War and Peace
			@Authors	!	Lev Tolstoy
			@Date	!	18.09.07
		Ottsy and Kids
			@Date	!	18.09.07
			@Authors	!	Тургенев
		Steven King
			@Date	!	18.09.14
			зелёная миля
			побег из шоушегка
		Ray Bradberry
			@Date	!	18.09.23
			451 по Фаренгейту
		George Oruell
			@Date	!	18.09.23
			1984
			скотный двор
		We
			@Date	!	18.09.23
		о дивный новый мир
			@Date	!	18.09.23
	#Games
		@Languages	!	English
		The elder Scrolls
			@Date	!	18.12.30
			Skyrim
		Dragon Age
			@Date	!	18.12.30
	#Fanfics
		@Languages	!	Russian
		Myverse
			@Authors	!	Me
			@Date	!	20.05.10
			@Languages	!	Russian
		Harry Potter and Three Old Ladies
			@Authors	!	Argus Filchenkov
			@References
				#Fiction
					#Books
						Оливер Твист
							@Authors	!	Чарльз Диккенс
							=20.03.15 19:30-
						Воспламеняющая взглядом
							@Authors	!	Стивен Кинг
							=20.03.22 16:05-
						Граф Монте Кристо
			@Date	!	20.03.02
			0. Три пожилых леди		20.03.02 22:45-20.03.03 14:45 =9/10	20.03.15 10:20-20.03.22 15:53 =8/10
			1. Хранитель ключей		20.03.03 14:50-20.03.04 23:10 =9.5/10	20.03.22 17:25-
			2. Истинный наследник		20.03.05 10:50-20.03.06 13:07 =9/10
			3. Искусство побега		20.03.06 13:12-20.03.07 19:35 =9.3/10
			4. Охота на чемпионов		20.03.07 20:05-20.03.08 17:19 =9/10 (30 все что было) -20.03.28 20:16 =9.5/10 (до конца)
		Kitsune Miyato
			@Source	!	Ficbook
			@Date	!	20.03.23
			Учиха Саске из клана редисок
				@Date	!	19.10.06
				1 Part	!	19.10.31 16:47-19.11.01 12:00 =7/10
				2 Part	!	19.11.01 12:01-19:01 =7/10
				3 Part	!	19.11.01 22:22-19.11.02 21:56 =7.5/10
				4 Part	!	19.11.02 21:57-19.11.03 16:43 =7.5/10
				5 Part	!	19.11.03 16:45-19.11.04 13:55 =7/10
			техника зеркального перевоплощения
				@Date	!	19.10.06
				=19.11.06 18:00-19.11.07 12:00 =7/10
			все было совсем не так
				@Date	!	19.10.06
				1 Part	!	19.10.06 12:00-23:00 =8/10
				1 Part	!	19.10.06 23:00-19.10.07 12:00 =8/10
				3 Part	!	19.10.07 12:00-22:45 =8/10
				4 Part	!	19.10.08 6:40-18:00 =8.5/10
			жизнь которую я изменю
				@Date	!	19.10.06
				1 Book. спасёнение клана учиха		!	20.01.10-20.01.13 21:30 =8.5/10
					1 Part	!	19.10.22 18:00-19.10.23 9:28 =8/10
					2 Part	!	19.10.23 9:31-16:45 =8/10
					3 Part	!	19.10.23 16:50-19.10.24 8:24 =8/10
				2 Book. начало нового мира		!	20.01.14 7:00-20.01.17 7:40 =8/10
					1 Part	!	19.10.24 10:40-17:26 =8/10
					2 Part	!	19.10.24 17:28-19.10.25 1:46 =8/10
					3 Part	!	19.10.25 8:08-20:40 =8/10
				3 Book. эпоха возрождения
					1 Part	!	19.10.25 22:07-19.10.27 1:07 =8/10
					2 Part	!	19.10.27 12:00-19:23 =8/10
					3 Part	!	19.10.27 19:25-19.12.29 8:38 =8/10 (читал во время написания)
			избранные
				@Date	!	19.10.08
				0 Book. Prologue. какой придурок вызвал демона?		19.10.08 20:00-21:10 =7/10
				1 Book. какого биджуу я теперь волшебник?
					1 Part	!	19.10.08 21:23-19.10.09 7:30 =8/10
					2 Part	!	19.10.09 7:35-15:28 =8/10
					3 Part	!	19.10.09 15:30-20:46 =8/10
					4 Part	!	19.10.09 20:50-19.10.10 6:40 =8/10
					5 Part	!	19.10.10 6:50-14:50 =8/10
				2 Book. шиноби скрытого Хогвартса
					1 Part	!	19.10.10 15:45-22:25 =8/10
					2 Part	!	19.10.10 22:32-19.10.11 12:42 =8/10
					3 Part	!	19.10.11 12:45-0:46 =8/10
					4 Part	!	19.10.12 0:45-19:35 =8/10
				3 Book. Узумаки Наруто и Дары магии
					1 Part	!	19.10.12 19:40-3:17 =8/10
					2 Part	!	19.10.13 3:20-11:50 =8/10
					3 Part	!	19.10.13 11:55-19:18 =8/10
					4 Part	!	19.10.13 19:20-19.10.14 16:25 =8/10
				4 Book. Чакра. Легенда о Саске
					1 Part	!	19.10.14 16:35-19.10.15 18:00 =8/10
					2 Part	!	19.10.15 18:02-19.10.18 13:02 =8/10
					3 Part	!	19.10.18 13:05-19:30 =8/10 (1-11, All)	-20.04.20	=8.5/10 (All)
			Мать и мачеха
				1 Book	!	20.03.23 12:00-17:33 =8/10
				2 Book	!	20.03.23 17:37-20.03.24 10:10 =8/10
				3 Book	!	20.03.24 10:10-12:20 =8/10 (все что было
			Буйабесс По русски	!	20.03.24 12:30-15:25 =7/10
			диссонанс родственных связей	!	20.03.24 15:33-22:56 =8.5/10
			Непокобелимый
				1 Book	!	20.03.25 10:20-14:35 =7.5/10
				2 Book	!	20.03.25 14:36-18:10 =8/10
				3 Book	!	20.03.25 18:10-20.03.26 10:26 =9/10
			Цукиеми: и жили они долго и счастливо
			Игра по фальшивым нотам	!	20.03.26 13:36-18:09 =7.5/10
		Sergei Zloy
			@Date	!	18.12.06
			Path of Dark Mage	!	18.12.06 17:44-18.12.09 6:35 9/10
				начинающего	!	18.12.06 17:44-18.12.08 2:50 8/10
				опытного	!	18.12.08 2:52-18.12.09 1:47 9/10
		Fil Bandileros
			другой взгляд
				@Date	!	18.11.20
				=18.12.06 12:38-17:25 =7/10 (г1ч1-г2ч3 все что было)
			жизнь номер 2
				@Date	!	19.01.02
				=19.01.03 10:38-19:41 =7/10 (все что было, до момента с расследованием лиса)
			Звезда по имени
				@Date	!	18.11.19
				=18.11.19 15:34-
			Meta-Hobbit	!	18.11.05 11:37-1:35 6/10
			Мета-Игрок	!	18.11.06-18.11.07 (1-26 все что было) 8/10
			Сказки русского леса	!	18.11.12 15:35-15:44(0 все что было) 3/10
			Что? Наша жизнь игра?
			Хорошо в деревне летом	!	18.11.09 17:50-21:36 7/10
			Спасибо за рыбу
				Спасибо за рыбу	!	18.11.14 10:24-18.11.19 15:14 6/10
				Монарх	!	18.11.12 15:47-18.11.14 10:13 (1-22 все что было) 5/10
			Инь Янь Хрень	!	18.11.10 7:43-18.11.12 15:31 6/10
			Фатальная ошибка	!	18.11.08 21:35-18.11.09 17:42 6/10
			@Date	!	18.10.17
			The Zadrot
				=18.11.02-18.11.04 9/10
				=19.02.11 17:45-19.02.16 11:45 5/10 (1-2 не стал читать)
			The Boy Who Conquered The Time
				ГП&МКПВ-B	!	18.10.31 10:27 - 15:32 7/10
				Туда и обратно, МКПВ-B	!	18.10.19-18.10.20 7/10
				Сиськи	!	18.11.05 10:20-11:34 (1-7 все что было) 6/10
				Каникулы мага	!	18.11.07 8:12-15:16 6/10
				Звёздное время	!	18.11.07 15:20-18.11.08 12:10 (1-23 все что было) 7/10
				Love and peace	!	18.11.08 12:20-18:14 6/10
				МКПВ-А	!	18.10.13 -18.10.14 8/10
				МКПВ-B	!	1-72 Главы (все что было) 18.10.29-18.10.30 9/10
				МКПВ-C	!	1-27 (все что было) 18.10.31-18.11.01 9/10
				МКПВ-D	!	сс-тк (Все что было) 18.11.01 8:34-16:14 4/10
				МКПВ-E	!	1-21 главы (все, что было) 18.10.15-18.10.19 5/10
	#Manihua
		@Languages	!	Chinese
	#Manhva
		@Languages	!	Korean
		The Gamer
			@Date	!	18.11.04
			1 Season	!	19.02.11 21:00-19.02.12 22:00 7/10
			2 Season	!	19.02.12 22:17-19.02.13 15:00 7/10
			3 Season	!	19.02.13 16:22-19.02.14 10:16 7/10
			4 Season	!	19.02.14 10:17-21:47 7.5/10 (1-256, all)
	#Multserial
		Mr freeman
			@Languages	!	Russian
			@Date	!	18.08.04
	#Film
		Иван Васильевич меняет профессию
			@Date	!	18.08.04
		Мегамозг
			@Date	!	18.08.31
		Великий защитник
			@Date	!	18.08.31
			1
			2
		Матрица
			@Date	!	18.09.01
		Пол секретный материальчик
			@Date	!	18.09.12
		бриллиантовая рука
			@Date	!	18.09.14
		12 стульев
			@Date	!	18.09.14
		бойцовский клуб
			@Date	!	18.09.14
		побег из щоушенка
			@Date	!	18.09.14
		зелёная миля
			@Date	!	18.09.14
		5 элемент
			@Date	!	18.09.14
		Леон киллер
			@Date	!	18.09.14
		искусственный
			@Date	!	разум 18.09.28
		трасса 60
			@Date	!	18.10.07
		Только не они
			@Date	!	18.10.16
		Звёздные войны
			@Date	!	18.11.07
		аватар легенда об Аанге
			@Date	!	18.12.04
		Люди икс
			@Date	!	18.12.05
			Дни минувшего будущего	18.12.05 16:00 =7/10
			апокалипсис
		терминатор
			@Date	!	18.12.05
			1	18.12.05 18:40-18.12.06 8:10 =9/10
			2	19.04.16 16:25-19.04.17 8:00 =7/10
			3
			4
		чародеи
			@Date	!	19.01.16
		Идиократия
			@Date	!	19.01.26
		Изобретение лжи
			@Date	!	19.01.26
		Мэри попинс
			@Date	!	19.02.27
		Marvel
			@Date	!	19.03.02
		Venom
			@Date	!	19.03.02
		DC
			@Date	!	19.03.02
		иллюзия обмана
			@Date	!	19.03.05
			1
			2
		Джинг король бандитов
			@Date	!	19.03.23
		назад в будущее
			@Date	!	19.04.15
			1 Film	!	19.04.15 13:45 =8/10
			2 Film	!	19.04.15 17:05 =7/10
			3 Film	!	19.04.15 18:55 =7/10
		апгрейд
			@Date	!	19.04.20
		бегущий по лнзвию
			@Date	!	19.04.20
		призрак в доспнхах
			@Date	!	19.04.20
		Мстители: война бесконечности
			@Date	!	19.04.20
		Все могу
			@Date	!	19.04.30
			=19.05.01 12:00 =7/10
		Падингтон
			@Date	!	19.05.16
		они никогда не станут старше
			@Date	!	19.05.23
		Начало
			@Date	!	19.05.24
		11 друзей Оушена
			@Date	!	19.07.04
			=19.07.04 19:50-21:40 =9/10
		Схватка, 2011
			@Date	!	19.07.06
			=19.07.06 13:21-14:50 =7/10
		Схватка, 1995
			@Date	!	19.07.06
			=19.07.06 14:55-
		День сурка
			@Date	!	19.07.06
			=19.07.06 19:23-21:00 =8/10	19.07.07 9:13-
	#Verse
		Dozory
			@Languages	!	Russian
			@Date	!	19.07.11
			@Authors	!	Sergei Lukyanenko
			#Books
				1 Book.	Night	!	20.04.22 15:00-20.04.23 17:25 =8/10
				2 Book.	Day	!	20.04.23 17:30-20.04.25 8:37 =8/10
				3 Book.	Twilight	!	20.04.25 11:30-20.04.26 11:40 =8/10
				4 Book.	Last	!	20.04.26 20:15-20.04.27 12:35 =8/10
				5 Book.	New	!	20.04.28 22:00-20.04.29 14:10 =8/10
				6 Book.	Sixth	!	20.04.29 14:30-20.04.30 11:15 =8/10
			#Film
				1 Film.	Night
				2 Film.	Day
		Potteriana
			@Languages	!	English
			@Date	!	20.03.14
			@Authors	!	Joanne Rowling
			#Books
				"Harry Potter"
					1 Book.	"Harry Potter and Philosopher's Stone"
					2 Book.	"Harry Potter and Secret Room"
					3 Book.	"Harry Potter and Uznik Azkabana"
					4 Book.	"Harry Potter and Kubok Ognya"
					5 Book.	"Harry Potter and Order of Phoenix"
					6 Book.	"Harry Potter and Half-Blood Price"	!	20.03.14 10:00-20.03.21 12:00 =6.5/10
					7 Book.	"Harry Potter and Deathly Hallows"	!	20.03.21 12:05-
			#Film
				"Fantasic Beasts"
					1 Film.	"And where they lives"
					2 Film.	"Prestupleniya grindevalda"
					3 Film.
					4 Film.
					5 Film.
				"Harry Potter"
					1 Film.	"Harry Potter and Philosopher's Stone"
					2 Film.	"Harry Potter and Secret Room"
					3 Film.	"Harry Potter and Uznik Azkabana"
					4 Film.	"Harry Potter and Kubok Ognya"
					5 Film.	"Harry Potter and Order of Phoenix"
					6 Film.	"Harry Potter and Half-Blood Price"
					7 Film.	"Harry Potter and Deathly Hallows"
		Lord of Rings
			@Languages	!	English
			@Date	!	18.08.18
			@Authors	!	John Ronald Ruel Tolkien
			#Books
				The Lord of The Rings
					Братство кольца	!	19.02.02 11:00-19.02.05 11:00 7/10
					Две башни	!	19.02.05 11:00-20:50 7/10
					Возвращение короля	!	19.02.06 11:00-19:50 8/10
				Silmarillion
				Hobbit
				Notes
			#Film
				The Lord of The Rings
					@Date	!	19.02.06
					1: Братство кольца
					2: Две твердыни
					3: Возвращение короля
				Hobbit
					@Date	!	19.02.06
					1
					2
					3
#Nonfiction
	#Books
		Alexander Panchin
			@Date	!	18.09.23
			Защита от темных искусств
			Сумма биотехнологий
		А. Водовозов
			@Date	!	18.11.25
			пациент разумный
		Stephen Hawking
			Кратчайшая история времени
			@Date	!	18.09.07
		Dawkinz
			@Date	!	18.09.07
			Расширенный фенотип
			Эгоистичный ген
		Karl Marks
			@Date	!	18.11.03
			Capital
#nonsorted
	#Books
		Popadantsy from Father's folder
			@Date	!	18.11.15
			забытый демон
				@Date	!	19.01.09
				=19.01.09 15:00-19.01.11 12:19 =6/10

18.12.09		Книга					эпоха темного мага	18.12.09 1:47-6:35 =7/10	19.01.03 19:52-19.01.08 15:04 =8/10

19.01.02		Книга	?			Командировка князя Тьмы
19.01.02		Книга	?			магия и физика
18.12.06		Книга	?			мыслит, значит существует		18.12.12 10:42-18.12.13 19:31 =7/10
18.12.06		Книга	?			терминатор
18.12.06		Книга	?			однажды он прогнётся под нам
18.12.06		Книга	?			темные волшебники
18.12.06		Книга	?			маг и его тень

19.01.02		Книга	?			Неистовый шумерский чародей		19.02.01 16:00 =6/10
18.12.06		Книга	?		Судьба архимага
		Книга			>	судьба архимага		18.12.09 12:00-18.12.11 14:07 =8/10	19.01.02 10:26-
		Книга			>	план архимага		18.12.11 14:09-18.12.12 9:54 =6/10 (1-5 1-4 все что было)

18.12.30		Книга	Стругацкие			Трудно быть богом

19.01.03		Книга	?			одержимые		19.01.03 23:00-19.01.08 21:55 =7/10
19.01.09		Книга	Бессмертник			повелитель кошмаров		19.01.09 7:23-14:08 =7/10

19.01.30		Книга	Хадин Познавший Тьму			Путь наверх		19.01.30 8:20-19:46 =8.5/10 (1-57 все что было)
19.02.04		Книга	?			Архимаг 7.1 диабло		19.02.07 14:48-20:10 =6.5/10 (1-10 все что было)
19.02.04		Книга	?			Власть магии
		Книга					Смертный	19.02.07 20:10-01:23 =7.5/10
		Книга					Бессмертный	19.02.08 9:00-16:00 =7.5/10
19.02.08		Книга	?			Цепь событий		19.02.08 16:40-
19.02.08		Книга	Алессий			Античный чароплет. 1		19.02.09 9:45-19.02.10 14:10 =7.5/10 (1-17 все что было)
19.02.10		Книга	Даймон Агафо			Маленький монстр		19.02.10 17:00-19.02.11 14:00 =9/10 (1-12 все что было)
19.02.08		Книга	?			Мира Парадигма		19.02.11 14:10-
19.02.08		Книга				эльфийский трэш
		Книга				>	1	19.02.16 13:40-19.02.17 22:00 =7/10	19.08.18 20:06-
		Книга				>	2	19.02.17 22:00-19.02.18 20:40 =8/10
		Книга				>	3	19.02.18 20:40-19.02.19 15:40 =8/10
19.02.08		Книга				объединение необъединимого		19.02.19 16:00-19.02.20 12:00 =7.5/10 (1-28 все что было)	19.02.22 8:15-9:40 =7.5/10 (29-31 все что было)
19.02.20		Книга				фэйт/архимаг		19.02.20 12:00-19.02.21 14:00 =7/10 (все что было)
19.02.20		Книга				паладин		19.02.21 15:00-18:00 =7/10 (все что было)
19.02.08		Книга				путь славления богом		19.02.21 18:30-19.02.22 8:00 =6/10 (все что было)
19.02.22		Книга				подарок недовольным		19.02.22 12:00-13:40 =6.5/10 (все что вложении)
19.02.22		Книга				Гарри Поттер и архимаг		19.02.23 12:00-19:40 =7/10
19.02.23		Книга	alex31			игрок dc
		Книга					крутой легавый	19.02.23 20:00-19.02.25 8:20 =7/10
		Книга					антигерой	19.02.25 8:40-19.02.27 18:10 =7/10
		Книга					несправедливость	19.02.26 18:20-19.02.27 8:50 =5/10 (1-13 все что было)
19.02.26		Книга	alex31
19.02.23		Книга				дитя
		Книга					дитя	19.02.27 12:00-19.02.28 21:40 =7/10
		Книга					контракт и прочие неприятности	19.02.28 21:50-19.03.02 8:30 =7/10 (все что было 1-28)
19.02.23		Книга				неудачный выбор
		Книга					1	19.03.02 12:00-19.03.07 16:00 =8/10	20.01.25 8:00-20.02.01 11:55 =8/10
		Книга					2	19.03.07 16:00-19.03.11 16:00 =8/10	20.02.01 12:00-20.04.20 =8/10
		Книга					3	19.03.11 16:10-19.03.12 10:16 =7/10 (все что было 1-13) -20.01.26 19:45 =8.5/10 (до конца)	20.04.20-
19.03.05		Книга	корнев
19.03.13		Книга	xp0ft			архимаг		19.03.13 17:00-22:22 =7/10 (все что было 1-13)
19.03.13		Книга				везуха		19.03.14 17:00-19.03.16 17:30 =7/10
19.03.13		Книга				вершина		19.03.16 18:00-
19.03.17		Книга				Наруто
19.03.17		Книга	jack vance			глаза чужого мира
19.03.13		Книга	бандилерос			имя мне легион		19.03.21 15:40-
19.03.23		Книга	walter			Разбор 1 тома Zero no Tsukaima или Сайто и премия Дарвина		19.03.23 14:00-22:30 =7/10	19.11.20-19.11.21 =8/10
							разбор 2 тома или реальность гасит ответный удар		19.11.21-19.11.22 =8/10
19.04.02		Книга	Герберт уэлс			война миров
19.04.02		Книга	толстой			гиперболоид инженера гарена
19.04.02		Книга	Ефремов			туманность андромеды
19.04.02		Книга	беляев			элита
19.04.02		Книга	Беляев
19.04.02		Книга	Ефремов
19.04.02		Книга	Герберт уэлс
19.04.13		Книга	гоголь			мертвые души		19.04.13 15:50-
19.03.13		Книга				не то не этого я хотел		19.04.20 14:00-18:35 =7.5/10
19.03.17		Ранобэ			to aru	>
19.03.17		Ранобэ			>	to aru majutsu no index		20.01.19 8:00-
19.03.17		Ранобэ			>	to aru kagaku no railgun
19.03.17		Ранобэ			>	to aru kagaku no accelerator
19.03.13		Фанфик	tigrewurmut			страж знаний	>
19.03.13		Фанфик	tigrewurmut			>	начало	19.04.22 17:55-19.04.25 12:55 =7/10
19.03.13		Фанфик	tigrewurmut			>	2	19.04.25 13:00-19.04.27 12:40 =7/10
19.03.13		Фанфик	tigrewurmut			>	не герой	19.04.27 12:40-19.04.29 9:05 =7.5/10
19.03.13		Фанфик	tigrewurmut			>	нг2 ч1	19.04.29 11:05-19:10 =7/10
19.03.13		Фанфик	tigrewurmut			>	нг2 ч2 в1	19.04.29 19:10-19.04.30 12:45 =,?? оценки нет потому что концовка совершенно непонятная и вообще творится какой-то сюр
19.03.13		Фанфик	tigrewurmut			>	нг2 ч2 в2	19.04.30 13:00-19.05.01 13:00 =7/10
19.03.13		Фанфик	tigrewurmut			>	нг3	19.05.01 16:16-17:50 =7/10
19.03.13		Фанфик	tigrewurmut			фокусник шляпник	>
19.03.13		Фанфик	tigrewurmut			>	фокусник	19.05.01 17:55-19.05.10 16:25 =7.5/10
19.03.13		Фанфик	tigrewurmut			>	волшебник	19.05.10 16:30-21:00 =7/10
19.03.13		Фанфик	tigrewurmut			возвращение героя	-	19.05.11 12:12-19.05.12 19:00 =7/10
19.04.23		Книга	Астапов Павел			Будни учителя	-	20.02.27-20.02.29 11:30 =8/10
19.04.23		Книга	Артем Краснов			блабериды	-
19.04.25		Книга	Айзек Азимов
19.04.27		Книга	tigrewurmut
19.04.27		Книга	Конан Дойль			Шерлок Холмс
19.04.27		Книга	бужков			Сварог
19.04.27		Книга	Лукьяненко
19.04.27		Комикс	Marvel
		Книга
19.04.27		Комикс	DC

18.09.02		Игра				Deus Ex
18.09.19		Игра				Fallout
18.12.02		Игра				Assasin's creed
19.01.04		Сериал			Ивановы ивановы
		Сериал			>	1
		Сериал			>	2
19.03.20		Видео-Комикс				земля королей
19.04.27		Сериал			Шерлок (Советский)
19.04.27		Сериал			Шерлок (Роберт Дауни)
19.04.27		Сериал			Шерлок (Камбербэтч)
19.05.12		?		Bubble	майор гром
19.05.12		?				шоу трумена
19.05.23		Книга				Биология добра и зла
19.05.23		Игра				observation
19.06.19		Манга			kanokon			19.06.20 0:40-19.06.21 17:00 =7/10
19.06.19		Радий Полонский
19.06.22					ведьмак
19.06.22					люди в черном
19.06.22					звёздные войны
19.06.22					любовь смерть роботы
19.06.22					чёрное зеркало
19.07.28		Манга			Тетрадь Смерти
						1		19.07.28 14:43-19:01 =8/10
						2		19.07.28 19:02-21:24 =8/10
						3		19.07.29 12:28-15:06 =8/10
						4		19.07.29 15:06-17:30 =8/10
						5		19.07.29 17:31-20:36 =8/10
19.08.11		Книга				мемнох дьявол
19.08.12		Книга				трудно быть богом
19.08.12		Книга				пикник на обочине
19.08.20		Фанфик	шэтэл-соркен			новые горизонты		19.08.20 13:00-19.08.21 13:53 =8/10 (все что было)
19.08.20		Фанфик				воля к жизни		19.08.21 14:00-19.08.22 21:52 =8/10
19.08.20		Фанфик				техномансер		19.08.23 14:00-19.08.25 18:31 =7/10
19.08.26		Фанфик			в тени правителей			19.08.26 15:00-19.08.27 10:33 =6/10
					>	тьма закрывающая знания		19.08.27 10:45-22:50 =7/10
					>	великие кровавые игры		19.08.27 23:00-19.08.28 1:20 =7/10 (все что было до 7)
19.08.29		Книга				ирьенин		19.08.29 18:00-19.09.01 21:40 =7.5/10
19.09.16					Одиссей покидает Итаку
19.09.23					недоверчивые умы
19.09.23					объясняя религию
19.03.13					эффект мага			19.09.24 21:00- =7.5
19.09.27					Две стороны медали: безумие			-19.09.27 20:51 =7.5/10
19.09.30					Попаданец в Яманака Ино			19.09.30 11:00-19.10.02 16:31 =7.5/10
						рецепт апокалипсиса от учиха
							ч1	19.10.18 19:40-19.10.19 19:40 =8/10
							ч2	19.10.19 19:45-19.10.20 9:45 =8/10
							ч3	19.10.20 9:50-20:50 =8/10
						рецепт апокалипсиса 2		19.10.20 21:40-19.10.21 19:31 =7.5/10
						рецепт апокалипсиса 3		19.10.21 19:35-19.10.22 17:14 =8/10
						спэшлы		19.10.17 16:25-17:52 =8/10
19.10.26					юнлинг			19.10.28 12:03-19.10.31 16:34 =7.5/10
19.03.13						дважды озадачен		19.11.19 10:10-19.11.20 13:26 =8.5/10
19.11.21						два нуля		19.11.22 7:00-22:15 =8/10
19.11.21						Амулет
							амулет. начало	19.11.23 7:00-19:00 =7.5/10
							амулет. наследие Слизерина	19.11.23 19:05-19.11.25 14:35 =7.5/10
							3	19.11.25 14:40-15:43 =7/10
19.12.28		Книга	Логинов			Свет за окошком		19.12.28 14:30-19.12.29 9:36 =8/10

20.02.05						Заводной апельсин		20.03.22 9:55-12:25 =6/10
ещё очень давно					Астаргоргарот			20.03.02 12:05-19:35 =8/10

20.03.29	Фанфик	Манга				Реинкарнация: Монстер
Lectures
	Pogruzheniye v psychology
		Date    !   20.03.29
		References
			Books
				Нет кузнечика в траве
				Коллекнионер
				Лишенные совести
					Authors	!	Роберт Хэйр
				Мудрость психопатов
					Authors	!	Кевин Даттан
				Психиатрические антисоциальные личности
					Authors	!	Нэнси но фривенс
			Film
				Проект Флорида
				Законопослушный Гражданин
				Cogitation (2011)	!	20.04.01 14:15-16:13 8/10
				Infection	!	20.04.01 -14:10 6.5/10
Videos
	?
		Date    !   20.03.29
			Film
				Хроники Нарнии
				Лабиринты Ехо
				Лабиринт фавна
				Перси Джексон
				Звёздная пыль
				Дом странных детей мисс Перегрин
				Бесконечная история
Reddit
	Date    !   20.04.03
	Film
		Молчание ягнят
		американский психопат
		Ганнибал
School
	References
		Books
			Fiction
				герой нашего времени`




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
var messagesLanguage='ru'
// Function for getting message by key
var getMsg=function(key, lang){
	return props.msgs[lang||messagesLanguage][key]
}
