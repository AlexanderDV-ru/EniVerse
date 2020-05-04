/*--- Name: EniVerses/Vesion: 0.2.0a/Authors: AlexanderDV/Description: Properties EniVerses .js. ---*/
//Properties
var props	=	{
	config	:	{
		inSyms	:	"$",
		offset	:	"\t",
		newLine	:	"\n",
		snippets	:	{
			"=":"\\c\\b\n\\c\t@=[y]\n\\c\t\t\\a"
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
		inComm	:	"!",
		toRedact	:	"?",
		synonymSplit	:	"/",
		isIn	:	":",
		isInSplit	:	";"
	}
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
		var add=aSpl[v]
		for(var v2 in props.config.snippets)
			if(aSpl[v].indexOf(v2)!=-1)
				add=props.config.snippets[v2].replace(/[\\][c]/g,aSpl[v].match(/^(\t+|\t|)/)[0]).replace(/[\\][b]/g,normalName(aSpl[v].split(v2)[0].substr(aSpl[v].match(/^(\t+|\t|)/)[0].length))).replace(/[\\][a]/g,normalName(aSpl[v].split(v2)[1]))
		res+=props.config.newLine+add
		if(v==0)
			props.universes.push(normalName(add))
	}
	adding=res
	adding	=	(props.config.newLine+adding.replace(new RegExp("["+props.config.offset+"]","g"),props.config.offset)).replace(new RegExp("["+props.config.newLine+"]","g"),props.config.newLine+multiplyStr(props.config.offset,props.offset))
	props.universesConfig+=	adding//.replace(/[{]/g,"{Eniverse.")
}
add(`Myverse
	About	=	o
		Authors[y]
			Me
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
	/*Classification
	/*Entity without shell, how names
	Without	=	w
		-2	=	Unthing
		-1	=	Unbody, Spirit
		+0	=	Unlife
		+1	=	Undead
		+2	=	Unentity
		+3	=	Unperson
		+4	=	Unmind
		+5	=	Unmage
		/*not equal to muggle, nomage
		+6	=	Unimmortal, Mortal
		+7	=	Ungod
	Shells	=	h
		-5	=	Magical Body	/*chakras, nadyas
		-4	=	Informatic Body	/*Infostructure
		-3	=	Feeling Body?
		-2	=	Ether Body
		-1	=	Matter Body
		+0	=	Core, lifing
		+1	=	Vital, living
		+2	=	Astral, spirital
		+3	=	Person, feeling
		+4	=	Mind, logical
		+5	=	Magical, creativity
		+6	=	Immortal, immortality function
		+7	=	God, Real-turning
		/*Index of energy equals to index of shell that used this energy (not have, use)
	Reality	=	r
		-7	=	7	Count shells
		-6	=	6	Count shells
		-5	=	5	Count shells
		-4	=	4	Count shells
		-3	=	3	Count shells
		-2	=	2	Count shells
		-1	=	1	Count shells
		-0	=	0	Count Shells
		+0	=	0	Full Shells
		+1	=	1	Full shells
		+2	=	2	Full shells
		+3	=	3	Full shells
		+4	=	4	Full shells
		+5	=	5	Full shells
		+6	=	5	Full shells
		+7	=	7	Full shells
		/*
		0	=	0	Half Shells
		1	=	1	Half Shells
		2	=	2	Half Shells
		3	=	3	Half Shells
		4	=	4	Half Shells
		5	=	5	Half Shells
		6	=	6	Half Shells
		7	=	7	Half Shells
		8	=	8	Half Shells
		9	=	9	Half Shells
		10	=	10	Half Shells
		11	=	11	Half Shells
		12	=	12	Half Shells
		13	=	13	Half Shells
		14	=	14	Half Shells
	Energies	=	e
		-5	=	Mrana?
		-4	=	Psy?
		-3	=	Ema?
		-2	=	Spirita?
		-1	=	Prana
		+0	=	Force
		+1	=	Ki
		+2	=	Reatsu
		+3	=	Emana
		+4	=	Esperi
		+5	=	Mana
		+7	=	Ba-Hion
		+1+2	=	Ki+Reatsu
		+3+5	=	Emana+Mana
		el	=	Elements{Myverse.Elements
		em	=	Emotions{Myverse.Emotions
			Pride	=	Pride of Gold?
			Pathos	=	Pathos of Gray?
	Levels	=	l
		0.0	=	Nomage
			@l[y]
				G
				O
			@d[y]
				Not Demon
		0.3
		0.5
		0.7
		1.0	=	Weak
			@l[y]
				F
			@d[y]
				Lower Demon
		1.3
		1.5
		1.7
		2.0	=	Simple
			@l[y]
				E
			@d[y]
				Low Demon
		2.3
		2.5
		2.7
		3.0	=	Normal
			@l
				D
			@d
				Medium Demon
		3.3
		3.5
		3.7
		4.0	=	High
			@l[y]
				C
			@d[y]
				High Demon
		4.3
		4.5
		4.7
		5.0	=	Higher
			@l[y]
				B
			@d[y]
				Higher Demon
		5.3
		5.5
		5.7
		6.0	=	Arch
			@l[y]
				A
			@d[y]
				Arch demon
		6.3
		6.5
		6.7
		7.0	=	God
			@l[y]
				S
			@d[y]
				God	Demon
		7.3
		7.5	=	Demiurg
			@l[y]
				X
			@d[y]
				Demiurg
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
		#r-0[y]{Myverse.Lvlsplitting
			/*
		#r-1[y]{Myverse.Lvlsplitting
			/*
		#r-2[y]{Myverse.Lvlsplitting
			/*
		#r-3[y]{Myverse.Lvlsplitting
		#r-4[y]{Myverse.Lvlsplitting
		#r-5[y]{Myverse.Lvlsplitting
		#r-6[y]{Myverse.Lvlsplitting
		#r-7[y]{Myverse.Lvlsplitting
	Users{Myverse.Splitting	=	u
		tc	=	Tech
		bi	=	Bio
		en	=	Energy/*Rudazov's magic
		te	=	Tech&Energy/*Technomagic of badchoice
		bt	=	Bio&Tech
		be	=	Bio&Energy
		fl	=	All paths
		#r-5[y]
			e+1	=	Kiuser
			e+2	=	Reatser
			e+3	=	Emotic
			e+4	=	Psyhic
			e+5	=	Mage
				Black
				Gray
				White
			e+1+2	=	Shinobi
			e+3+5	=	Wizard
				Black
				Gray
				White
		#r-6[y]
			Immortal
				Dark	=	Demon_0
				Neutral	=	Immortal
				Light	=	Angel_0
		#r-7[y]
			e+7	=	God_1
				Dark
				Neutral	=	Beastgod
				Light
	Artefacts{Myverse.Splitting	=	a
		#r-5[y]
			#Wands
			#Rods
			#Staffs
			#Grimoires
			#Spheres
	Creatures{Myverse.Splitting	=	c
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
		#n	=	Dimensions
			#Matteral
				#w+1
					#Undead
						Control
						Anti
				#bt	=	Bio
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
				#tc	=	Tech
					#Robot
				#en
					#Emotions	=	Emotional
					#Elements	=	Elemental
						Control
						Anti
						Create
					#Materials	=	Holem
						Control
						Anti
					#Automate
						Control
						Anti
					#Marionette
						Control
						Anti
					#Energies	=	Energal
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
				#w-1	=	Ghost
					Control
					Anti
			#Etheral
				#w-1	=	Loa
					Control
					Anti
			#Etheral-Mental
				#w-1	=	Phantom
					Control
					Anti
					Create
					Enter
			#Mental	=	Ment
		#Mind{Myverse.Splitting
			test
	Forms	=	f
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
		#Weapon
			Lash
			Sword
			Blade
			Torch
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
	Emotions	=	i
		Sad
		Apathy
		Pain
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
	Materials{Myverse.Splitting	=	m
	Elements	=	n
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
			Ethervoid
			Explosion
			Crystall
			Acid
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
			w+1	=	Undead
			w-1	=	Spirit
			tc	=	Tech
			bi	=	Bio
			en	=	Energy
		#Other
			Motion
			Time
				Tempoflucation
				Back
				Petlya
				Stop
				Prerivanye
				Vicherkivanye
				Jump
			Space
				Portal
					Dimension
					Linked
					World
					Domen	=	Anklav
					Normal
				Zip
				Pocket
				Dense
				Bubble
	Directions	=	d
		/*	Forms/Creatures and...
		#Forms{Myverse.Forms
		#Creature{Myverse.Creatures
		/*	...and Elements/Energies/Materials/Emotions
		#Elements{Myverse.Elements
		#Materials{Myverse.Materials
		#Emotions{Myverse.Emotions
		#Energies{Myverse.Energies
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
			Straight
			Object
			Saving
		#Misc[y]
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
			Empathy
			Telepathy
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
				Probability
				Vision
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
			Elementsov
			Mesta
		#Action[y]
			Vampire
			Absorption
			Heal
			Sealing
			Telekinesis
				Planing
				Levitation
				Teleport
				Gravity
				Archimeds law
				Magic
				Shupaltsa
				Mob
				Force
				Vector
			Illusion
				Optic
				Holo
				Genjutsu
				Emo
				Mental
				Dense	/*Not equals tactil
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
				Telekinesis
				Levitation
				Shupaltsa
				Field
				Vector
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
				Pseudo	=	Other life form
					tc	=	Robot
					w+1	=	Undead
					w-1	=	Spirit
				bt	=	Bio
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
			Bless
			Summon
			Atack
			Protection
			TransFormsation
				Forms
				Figure
				Material
				Structure
		#Object[y]
			Artefact
			Elixir
				Potion
				Putting
			Alchemy
				Astral
				Physical
				Full
	Spells	=	p
		#r-0[y]{Myverse.Directions
		#r-1[y]{Myverse.Directions
		#r-2[y]{Myverse.Directions
		#r-3[y]{Myverse.Directions
		#r-4[y]{Myverse.Directions
		#r-5[y]{Myverse.Directions
			#l5.0{Myverse.Directions
		#r-6[y]{Myverse.Directions
		#r-7[y]{Myverse.Directions
	Verse	=	v
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
						Ни что (вообще!) не может быть уничтожено, сумма всего в метавселенной никогда не меняется, более реальные могут лишь моментально изменить менее реальное в такую форму, что покажется уничтожение, но закон сохранения действует. По этой причине нельзя изменить атман, нет ничего более реального, просто некому будет на него так действовать. Нельзя иллюзию сделать реальной (воплощение делает реальный объект похожий на иллюзию), но для более реальных менее реальные являются иллюзиями просто разного качества, поэтому более реальные могут так сделать. Объекты одного уровня не могут друг на друга так действовать. Сумма всего в метавселенной не меняется со временем, всегда постоянна
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
							->	В шкале реальности атман 100%	=	=	 0%, она замкнута
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
						0	=	Core
				#Virtuality
					#One
						0.01-0.99	=	Info
				#Potentiality
					#Wild
						1-2	=	Chaos
					#Quiet
						3	=	Limbo
				#Reality
					#Pre
						4-5	=	cold ether
						5-10	=	energies
						10-15	=	Solid ether
						15-20	=	w-1,	Spirits
						20-25	=	Pseudo Matter
						25-30	=	Alchemy Matter
					#Normal
						30-40	=	r-2,	Matter
						40-50	=	r-3
						50-60	=	r-4
					#Post
						60-70	=	r-4/r-5
						70-80	=	r-5/r-6
						80-90	=	r-6/r-7
					#Super
						90-95	=	r-7
						95-99	=	Xtonics
					#Higher
						99	=	First Elements
				#Full
					#Full
						100	=	Core
			World Types
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
			Ether Types
				Cold	=	Other
				Dense	=	Negative Shells, except matteral shells
				Suble	=	Positive Shells
				Soft	=	Negative Energy, except e-7
				Hot	=	Positive Energy, except e+7
				First	=	e+7, First elements
					Undirected
						e+7
					Directed{Myverse.Elements.First
			mtv	=	Meta-Verse
				mlv	=	Multi-Verse
					uns	=	Uni-Space
						b
						d
						f
						g
						h
						j
						k
						q
					unv	=	Uni-Verse
						s	=	-Space
							m	=	Normal
								x	=	Length
								y	=	Height
								z	=	Depth
							w	=	Hyper
							n	=	Dimension
								a	=	Ether
								i	=	Info//w=i?
								o	=	Tropy
						v	=	-Verse
							/*Content
							r	=	Reality
							e	=	Energy
							f	=	Forms, Info, Structure
								Types
									Full-Realized-Types		Matter	=	222
										Matter	=	312
										Energy	=	231
										Ether	=	123
									Half-Realized-Types		Ether
										Chaos	=	120
										Limbo	=	110
										Ether	=	122
									Non-Realized-Types		Info
										Info	=	002
										Structure
										Types
								Structure
								Info
						t	=	-Time
					unt	=	Uni-Time
				Chaos
				Limbo
	Abilities{Myverse.Splitting	=	b
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
		векторная защита
		ускорение сознания
		атака по пране
		святые вещи
		демонические вещи?
		скрытие излучения невидимого спектра
		Fake Spell
	Space	=	s
		w	=	Hyper
			~0	=	Dot, Core
			<1	=	Hyper
			~1	=	Normal
			>1	=	Hypo
		n	=	Dimension
			~0.0 ~0.0	=	Core
			~1.0 ~0.0	=	Matteral
			~1.5 ~0.0	=	Matteral-Etheral
				@Ghost
			~2.0 ~0.0	=	Etheral
				@Loa
			~2.0 ~1.5	=	Etheral-Mental
				@Phantom
			~2.0 ~2.0	=	Mental
		Limbo
		Chaos
	Features	=	t
		#r-4[y]
			Poltergeist
			#w+1	=	Undead
				Ghoul
				Zombie
				Einherjar
				Draugr
				Lich
			#w-1	=	Spirit
				Brownie
				Boggart
				Ghost
				Loa
				Embodied
		#r-5[y]
			Obsessed
			Vampire
				Weak	=	Madness
				Normal	=	Ordinary
				High	=	Energetic
			Werewolf
				Weak	=	Licantrop
				Normal	=	Ordinary
				High	=	MultiForms
			Cubus
				Incubus
				Succubus
	Misc
		Groups
			Soul	=	Soul shells
				Aura	=	Soul shells visible part
			Body	=	Body shells
			Soul_e	=	s3
			Soul_g	=	s2
		Str
			World
				Core	=	bhavachakra
				Space
				Time
				Content
					Matteral
					Etheral
			Soul
				Core	=	Atman
				Etheral
				Mental
			Domen	=	Soul+World
				Core	=	bhavachakra, Atman
				Space
				Time
				Content
					Matteral
					Etheral
				Etheral
				Mental
			God
				Core	=	God
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
			Object	=	Matter+Ether
				Matteral
				Etheral
		Magic
			Level
				slots
					Current	=	Spell
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
			/*	-	=	Next
			/*	>	=	Sleduet
			/*	*	=	No
			/*	!	=	Inverse
			Normal	=	-Start-Action-Result
			Avers	=	*Start*Action*Result
			Deconstr	=	-Start-Action>Result
			Reconstr	=	>Start>Action>Result
			Subvers	=	-Start-Action*Result
			Invers	=	!Start!Action!Result
			Obosnuy	=	-Start-Action-Result and Obosnuy
			Parody	=	Parody of -Start-Action-Result
			Satira	=	Satira of -Start-Action-Result
			ZigZag	=	Combinations of other
		Space change
			/*	-	=	Normal
			/*	^	=	Up
			/*	_	=	Down
			/*	#	=	Both
			/*	()	=	Connection
			/*	><	=	Nalozheniye
			Bubble	=	----^^^^^----
			Zip	=	----^_^_^----
			Domen/Pocket	=	----#####----
			Worlds	=	#############
			Portkey	=	--(-------)--
			Portal	=	-->-------<--
			Skladka	=	Prana remove
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
					0.0	=	Magic
					0.5	=	Metaphysic
					1.0	=	Sci
				Other
					0.0	=	Not-Sci
					0.5	=	Pseudo-Sci
					1.0	=	Sci
	Organizations	=	g`)
add(`Real world
	Verse
		@Type
			Uni
		Original
			@Worlds
				Our	=	Earth-2020
	Artefacts
		#r-4[y]
			#Weapon
			#Computer
			#Telephone
			#Atomic bombs
	Abilities
		#r-4[y]
			Granade by post
			#Bioweapon
	Elixir
		#r-4[y]
			#Toxins
			#Radioactive
			#Narcotics
			#Bacteria
			#Virus`)
add(`Fullmetal Panic
	About
		Languages[y]
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
	Artefacts
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
		0.0	=	Nonmagic
			@l[y]
				O
				0
				N
			@r[y]
				Немагический
		1.0	=	Mediocre
			@l[y]
				A
				M
			@r[y]
				Заурядный
		2.0	=	Weak
			@l[y]
				B
				W
			@r[y]
				Слабый
		3.0	=	Ordinary
			@l[y]
				C
				O
			@r[y]
				Обыкновенный
		4.0	=	Rare
			@l[y]
				R
			@r[y]
				Редкий
		5.0	=	Epic
			@l[y]
				E
			@r[y]
				Эпический
		6.0	=	Legendary
			@l[y]
				L
			@r[y]
				Легендарный
		7.0	=	Divine
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
	About
		Languages[y]
			Russian
		Inputs[y]
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
	About
		Languages[y]
			English
		Inputs[y]
			#Serial`)
add(`Ranma 1/2
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Inuyasha
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Charodei
	About
		Languages[y]
			Russian
		Inputs[y]
			#Film`)
add(`Blue exorcist
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Features
		#r-5[y]
			Demon
			#w-1	=	Spirit
				Brownie
	Dimension
		Gienna	=	Demonic
		Alis	=	Human`)
add(`Rick and Morty
	About
		Languages[y]
			English
		Inputs[y]
			#Multserial
				1
				2
				3
				4
	Artefacts
		#r-5[y]
			#Portal Gun
	Verse
		@Type
			Multi
		Original`)
add(`Portal
	About
		Languages[y]
			English
		Inputs[y]
			#Games
	Artefacts
		#r-5[y]
			#Portal Gun`)
add(`Marvel
	About
		Languages[y]
			English
		Inputs[y]
			#Comics
	Verse
		@Type
			Multi
		Original
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Zen-Hoberis
				#Klyntar
				#Kree
				#Inhuman
				#Chitauri
				#Flora Koloss
				#Titan_1
	Energies
		+5	=	Magical?
	Features
		#r-5[y]
			X-Man
	Materials
		#Metals
			Vibranium
			Adamantium
	Artefacts
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
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Ranobe
			#Anime
	Verse
		@Type
			Uni
		Original
		@Tags
			Virworld
				Gamelit
	Artefacts
		#r-4[y]
			#Neurohelmets
			#Amuspheres`)
add(`Hellsing ultimate
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Features
		#r-5[y]
			Vampire
		#r-4[y]
			#w+1	=	Undead`)
add(`Dark souls
	About
		Languages[y]
			English
		Inputs[y]
			#Games`)
add(`Devil May Cry
	About
		Languages[y]
			English
		Inputs[y]
			#Games
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l5.0
						Dante`)
add(`Bioshock
	About
		Languages[y]
			English
		Inputs[y]
			#Games`)
add(`New horizonts
	About
		Authors[y]
			Shetel-Sorken
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
		Marks[y]
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
		Spoilers[y]
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
	Abilities
		#r-5[y]
			Biokinesis`)
add(`Voshozhdeniye geroya shita
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Verse
		@Type
			Multi
		Original
		@Tags
			Gameworld`)
add(`Men in black
	About
		Languages[y]
			English
		Inputs[y]
			#Film`)
add(`Bad choice
	About
		Authors[y]
			N.B.
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
		Marks[y]
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
			@World Types
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
		Ranma 1/2
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Elv
				#Unknown Evil Crap
				#Goblin_2
	Energies
		-5	=	Mrana?
		-4	=	Psy?
		-3	=	Ema?
		-2	=	Spirita?
		-1	=	Prana
		+0	=	Force
		+1	=	Ki
		+2	=	Reatsu
		+3	=	Emana
		+4	=	Esperi
		+5	=	Mana
		+7	=	Ba-Hion
		+1+2	=	Ki+Reatsu
		+3+5	=	Emana+Mana
	Elixirs
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
				Peace	=	LOVEANDPEACE
				Anger
				Sad
	Spells
		#r-5[y]
			#l5.0
				@Name
					#MH
						Higher circle
				#Elements
					#Basic
						Fire
							Uncontrolled	=	Armageddon
						Water
							Uncontrolled	=	Taifun
						Air
							Uncontrolled	=	Tornado?
						Earth
							Uncontrolled	=	?
	Users
		#r-5[y]
			e+1	=	Kiuser
			e+2	=	Reatsuuser
			e+4	=	Psyonic
			e+5	=	Mage
			e+1+2	=	Chakrauser
		#r-6[y]
			dm	=	Demon_3
			lm	=	Angel_0
			gm	=	Gamer's System
				Gamer	Stanford
				Gamer	Plus
				Gamer	T.-3000
				Cheater	Standard
				Cheater	Plus
				Hard
				The Gamer
		#r-7[y]
			e+7	=	God_3
		#r-0[y]
			e+7	=	Unknown Crap
	Abilities
		Pathos hurt ignoring
		Hapsiel mode
		Kick of Unknown Crap
		Unknown Artefatory
	Features
		#r-4[y]
			Entity
				#w+1	=	Undead
			#w+1	=	Undead
		#r-5[y]
			Entity
				#w+1	=	Undead
			#w+1	=	Undead
			Vampire
			Werewolf
	Artefacts
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
			~1.0 ~1.5	=	Dark-Shadow
			~1.0 ~0.0	=	Matteral
			~2.0 ~0.0	=	Astral
			~2.0 ~2.0	=	Mental
	Directions
		Elements
			#Basic
				Fire	=	Pyromancy
				Water	=	Hydromancy
				Earth	=	Geomancy
				Air	=	Airomancy
				Ice	=	Cryomancy
				Electrizity	=	Electromancy
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
	About
		Languages[y]
			Russian
		Inputs[y]
			#Books
		Authors[y]
			Nick Perumov`)
add(`Azimov
	About
		Authors[y]
			Azik Azimov
		Languages[y]
			English
	Space
		w
			<1	=	Hyper`)
add(`hainline
	About
		Authors[y]
			Robert Hainline
		Languages[y]
			English
	Space
		w
			<1	=	Cherenkov drive`)
add(`Hyperion
	Space
		w
			<1	=	Hyper`)
add(`vavilon5
	Space
		w
			<1	=	Hyper`)
add(`Star Gate
	About
		Languages[y]
			English
	Space
		w
			<1	=	Hyper`)
add(`Gamelit
	Users
		#r-6[y]
			gm	=	Gamer's System`)
add(`Gameworld
	Users
		#r-6[y]
			gm	=	Gamer's System`)
add(`Vlast magii
	About
		Languages[y]
			Russian
		Authors[y]
			MorgothBauglir
			Shetel-Sorken
		Inputs[y]
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
	About
		Languages[y]
			Russian
		Authors[y]
			Hedin Knowing Dark
		Inputs[y]
			#Fanfics
				"Path to Top"
	Verse
		@Type
			Meta
		Rudazov
		Original
	Spells
		#r-5[y]
			#l5.0
				@Name
					@MH
						GodHands
				#Elements
					#Add
						Plasma
							Uncontrolled	=	Hors`)
add(`Rudazov
	Verse
		@Type
			Meta
		Original
			World Types
				#Access
					Destroyed
					Non-Created
				#Gran
					Chaotic
					Half-Chaotic
					Half-Normal
					Normal
			Civilization
				#Opened
					Closed	=	Don't know
					Half-Closed	=	Thinks that other is 1,2,3... not a lot of
					Half-Opened	=	Have knowledge
					Opened	=	Have contacts
				#Levels
					#Paths
						#un	=	Universal
							0.0	=	0	Primitive - ?	/*
								@Kaabar
								@Rari.Devkatsi
							1.0	=	3	? - Mech/Social	/*
							2.0	=	6	? - Digit/	/*
							3.0	=	9	? - Space/Verse level	/*
							4.0	=	12	? - ?		/*
							5.0	=	15	? - Energy	/*
							6.0	=	18	Immortal - tech/mage/bio	/*
						#en	=	Magical
							0.3	=	1	? - ?		/*Mage Ghyldy
								@Our.Sumer	-3000
							0.7	=	2	? - ?		/*Magic Schools
							1.0	=	3	Social - ?	/*Magic infrastructure, service, shops
								@Parifat 2000
							1.3	=	4	? - ?		/*Magic conveer
								@Rari.Grayland	from Epilog
							3.3	=	10
								@Parifat	-3000
							6.0	=	18	Immortal - ?/*
								@Infal
								@Jinn
						#bi	=	Biotic
							0.3	=	1	? - ?		/*Prirucheniye, odomashnivaniye
							0.7	=	2	? - ?		/*Selection
								@Rari.Eist
							6.0	=	18	Immortal - ?/*
						#tc	=	Technogen
							0.3	=	1	? - ?		/*Compas, Gun Powder,	Books print
							0.7	=	2	? - ?		/*Industrial revolution
								@Rari.Rokush
								@Rari.Lariya
							1.0	=	3	Mech - ?	/*Metals, engines
							1.3	=	4	? - ?		/*Machines, Electrizity, Chem
							1.7	=	5	? - ?		/*High Chem, ICE, Conveer
							2.0	=	6	Digit - ?	/*Electronics, Robots, Commutications
								@Our
							2.3	=	7	? - ?		/*Nanotech, Higher Organic Chem, Cyberspace
							2.7	=	8	? - ?		/*High Nano, Spacetech, Terraforming
								@Plonet	Before Sudden hour
							3.0	=	9	Space		/*High Terraforming, Space cities, Between Stars Flying
							3.3	=	10	? - ?		/*Galaxy Level, Alliens contacts
							4.0	=	12
								@Earth	2400
							4.3	=	13
								@Svarog.Svarog	7000
							5.0	=	15
								@Eikr.U-l'tra-let
							5.3	=	16
								@Muraran
							5.7	=	17
								@*.Spectator
								@Svarog.Galact	7000
							6.0	=	18	Immortal - ?/*
								@Ancient
								@Titan_0
						#te	=	Technomagical
							0.7	=	2
								@Rari.Grayland	2000
					/*Number after "-" says that this world after apocalipsis, have but cant create this technologies
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
			Worlds
				Rari
				Quetzol-Iin
				Eikr\n\t\t\t	Hvitachi\n\t\t\t	Worldtown
				Lang\n\t\t\t	Kaabar\n\t\t\t	Nine Heavens
				Hell\n\t\t\t	Our	=	Earth-2006\n\t\t\t	Heaven
				Golus	\n\t\t\t	Dotembria
				Pargoron\n\t\t\t	Parifat\n\t\t\t	Salvan
				Patala	\n\t\t\t	Dovos
				Jahannam	\n\t\t\t	Kaf	\n\t\t\t	Janna
				Shemussen	\n\t\t\t	Plonet	\n\t\t\t	N	\n\t\t\t	Labirint	\n\t\t\t	Svarog	\n\t\t\t	Deorg Academy
				X	\n\t\t\t	Z	\n\t\t\t	A	\n\t\t\t	Y	\n\t\t\t	O	\n\t\t\t	Caves Sheymullin
				M	\n\t\t\t	K	\n\t\t\t	H	\n\t\t\t	G	\n\t\t\t	F	\n\t\t\t	E	\n\t\t\t	D	\n\t\t\t	C	\n\t\t\t	B	\n\t\t\t	P	\n\t\t\t	Earth-7112
				Proxima Centaura	\n\t\t\t	Proxima Hell	\n\t\t\t	Proxima Heaven
				World of Yehudin	=	Dodekaedr
	About
		Authors[y]
			Alexander Rudazov
		Languages[y]
			Russian
		Inputs[y]
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
		-5	=	2/7	Magical body
		-2	=	3	Body, Matter of
		-1	=	1	Physical body
		+0	=	4	Atman
		+1	=	2	Vital
		+2	=	3	Astral, aura
		+3	=	5	Person
		+4	=	6	Psyhic
		+5	=	7	Magic
		+6	=	8	Immortal
		+7	=	9	God
	Energies
		-1	=	2 Prana
		+5	=	7 Mana
		+7	=	9 Ba-Hion
	Users
		#r-5[y]
			e+5	=	Mage
			e+4	=	Mentat?
		#r-4[y]
			e+0+2	=	Spiritual Weapon
	Levels
		!School	=	Sumer
		0.0	=	Nomage
		1.0	=	Student
		2.0	=	Apprentice
		3.0	=	Master
		4.0	=	Pastmaster
		5.0	=	Archmage
		6.0	=	Higher
	Levels
		!School	=	Gray land
		0.0	=	Grechka
		1.0	=	Student
		1.5	=	Purple
		2.0	=	Blue
		2.5	=	Light Blue
		3.0	=	Green
		3.5	=	Yellow
		4.0	=	Orange
		4.5	=	Red
		5.0	=	Gray
	Schools
		Grayland
		Sumer
		Kiig
		Mysteria
		Lka-Nandasi
		Deorg Academy
	Spells
		#r-5[y]
			#Action
				#Protection
					Mirror	=	Mirror Shield
					Absolute	=	Sumer.
					Universal	=	Sumer.
					Personal	=	Sumer.
				#Atack
					Clone of Chaos	=	Grayland.
			#Misc
				Sphere of Thirst	=	Grayland.
				Antimagic-tatoo	=	Kiig.
			#l5.0
				@Name
					@Grayland
						Spells A+
					@Sumer
						GodHands
				#Elements
					#Misc
						Grace
							Uncontrolled	=	Sumer.Inanna	/*Clear and health place Needs: soul of light
						Desecration
							Halfcontrolled	=	Grayland.Fog of Death	/*Desecration fog
						Void
							Uncontrolled	=	Grayland.Total Zero	/*Desintegration of all matter
						Ethervoid
							Halfcontrolled	=	Grayland.Fifth spell	/*Full eating of all ether (mana, prana, ...)
					#Basic
						Fire
							Uncontrolled	=	Sumer.Shamash	/*Needs: result is neuromagic overwork
						Air
							Controlled	=	Sumer.Adad	/*Controlled klimat Needs: salt mud lake
						Electrizity
							Uncontrolled	=	Grayland.Lightning of the Gods	/*Insane Lightning
						Earth
							Controlled	=	Sumer.Enlil	/*Controlled earth
							Uncontrolled	=	Grayland.Rumble of Hashiba	/*Earthquake
					#Other
						Space
							Controlled	=	Sumer.Anu		/*Exhange of two places Needs: magical line around place, hited teeth of user
					#Misc
						Getmye	=	Sumer.Ea		/*Needs: Drop of ihor
				#Creature[y]
					Demon
						Anti	=	Sumer.Marduk	/*Needs: Incarcered archdemon, higher mortal demonolog
					#w+1	=	Undead
						Create	=	Sumer.Nergal	/*Needs: 3 masters nectromancers
				#Action[y]
					Protection	=	Sumer.Tammuz	/*Needs: egg of Phoenix
	Creatures
		#Mind
			#r-5[y]
				#Human
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
			~0	=	Core, center of Everything
			<1	=	Hyperspace, Esher's geometry
			~1	=	Normalspace
			>1	=	Underspace
		n
			~0.0 ~0.0	=	bhavachakra
				Other
				Blood Beach	/*Place for demons
			~1.0 ~0.0	=	Normal, material
			~1.5 ~0.0	=	Shadow/Twilight/Through the Looking Glass
			~2.0 ~0.0	=	Astral,	world of spirits
				Other
				World of the dead
			~2.0 ~1.5	=	World of dreams
			~2.0 ~2.0	=	NooSphere
		Limbo	=	gray world
		Chaos	=	non-embodied
	Users
		#r-5[y]
			Mage
				Black
				Gray
				White
		#r-6[y]
			Immortal
				Dark	=	Demon_0
				Neutral	=	Immortal
					h+5	=	Jinn
					h-1	=	Titan_0
					h+1	=	Arch
				Light	=	Angel_0
		#r-7[y]
			e+7	=	God_1
				Dark
				Neutral	=	Beastgod
				Light
	Features
		#r-4[y]
			#w+1	=	Undead
				Ghoul
				Zombie
			#w-1	=	Spirit
				Brownie
				Boggart
				Ghost
				Loa
				Embodied
		#r-5[y]
			#w+1	=	Undead
				Einherjar
				Draugr
				Lich
			Mye
			Vampire
				Weak	=	Madness
				Normal	=	Ordinary
				High	=	Energetic
			Werewolf
				Weak	=	Licantrop
				Normal	=	Ordinary
				High	=	MultiForms
			Cubus
				Incubus
				Succubus
		#r-6[y]
			#w+1	=	Undead
				Undead-Immortal
		#r-7[y]
			#w+1	=	Undead
				Undead-God
	Artefacts
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
	Directions
		Elements
			#Basic
				Fire	=	Pyromancy
				Water	=	Hydromancy
				Earth	=	Geomancy
				Air	=	Airomancy
				Ice	=	Cryomancy
				Electrizity	=	Electromancy
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
				Blood
				Mirror
		#Languages[y]
			Word
			Rune
			Image
			Picture
			Seal
		#Types[y]
			Straight
			Saving
			Artefact
		#Object[y]
			Magic of Ghost
			Alchemy
			Elixir
				Potion
				...
			Artefact
			Twilight-Shadow
		#Creature[y]
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
		#Action[y]
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
			Telekinesis
			Teleport
			Enchantment
		#Misc[y]
			Name
			Physical	=	Technomagic
			Warlock
			Apostol
			Hooly
			Love
			Music
			Domestic
			Soul
			Meteo
				Weather
				Klimat
				Kataklism
			Volt
				Voodoo
				Volt
			Estestvennaya
			Metamorph
				Turning
				Changing
				Totem	=	Felgi
				Partial
			Clairvoyance
				True prophecy
			Mental
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
	About
		Inputs[y]
			#Games
				#Computer`)
add(`Siyatelniy
	About
		Authors[y]
			Pavel Kornev
		Languages[y]
			Russian
		Inputs[y]
			#Books
	Materials
		#Metals
			Coldiron	/*Anti mage`)
add(`SCP Foundation
	About
		Languages[y]
			English
		Inputs[y]
			#Statue
	Organizations	=	g
		SCP	=	Secure Containt Protect
	Artefacts
		#r-5[y]
			#SCP's`)
add(`Naruto
	About
		Authors[y]
			Masasi Kisimoto
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
			#Manga
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
						Uzumaki Naruto
						Uchiha	Sasuke
						Uchiha	Itachi
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
		+1+2	=	Chakra
	Features
		#r-5[y]
			#Genetic
				Uzumaki
				Uchiha
				Hyuga
				Senju
				Kurama
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
				Lava	=	Fire+Earth?
				Boil	=	Fire+Water?
				Heat	=	Fire+Air?
				Tree	=	Earth+Water Moku
				Earth+Air	=	Sand
				Water+Air	=	Ice
	Directions
		Elements
			#Basic
				Fire	=	Katon
				Water	=	Suiton
				Earth	=	Doton
				Air	=	Fuuton
				Electrizity	=	Raiton
			#Misc
				In	=	Inton
				Yan	=	Yanton
				Inyan	=	Inyanton
		#Languages[y]
			Technique	=	Nin
			Fuin
			Mudra
		#Creature[y]
			Doppel	=	Kage Bunshin
		#Object[y]
			Marionette
			Artefact
		#Action[y]
			Summon
			Sensor	=	Kanchi
			Absorption
			Displacement
			Arms	=	Tai
			Steelarms	=	Ken
			Flying
			Sealing in
			Senjutsu	=	Sen
			Illusion
				Genjutsu	=	Gen
	Spells
		#r-5[y]
			#Misc[y]
				Telescope
	Artefacts
		#r-5[y]
			#Swords of Fog`)
add(`Fate
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Abilities
		Magic
	Energies
		-1	=	Prana
		+5	=	Mana
	Artefacts
		#r-6[y]
			#The Holy Grail
	Creatures
		#Mind
			#r-6[y]
				#Servant
	Spells
		#r-5[y]
			#Action
				#Vampiring
					Blood Citadel?`)
add(`Claymore
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Manga
	Energies
		yo	=	Yoki
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
	About
		Languages[y]
			Russian
		Authors[y]
			Argus Filchenkov
		Inputs[y]
			#Fanfics
				0.	"Prologue.	Harry Potter and Three Old Ladies"
				1.	"Harry Potter and key saver"
				2.	"Harry Potter and instinniy naslednik"
				3.	"Harry Potter and Iskusstvo pobega"
				4.	"Harry Potter and Champions Hunt"
	Artefacts
		#r-6[y]
			#Time-Turners	=	Not limited hours, madness on incorrect
	Materials
		#Metals
			Coldiron`)
add(`of Kitsune Miyato
	About
		Languages[y]
			Russian
		Authors[y]
			Kitsune Miyato
		Inputs[y]
			#Fanfics
				"Izbranniye"
				"Mother-and-Mother-Law"
	Verse
		@Type
			Meta
		Naruto
		Potteriana
		Dozory
	Artefacts
		#r-6[y]
			#Time-Turners	=	Reality splitter, awful results of
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l5.0
						Harry Potter	=	Uzumaki Naruto
						Albus Dumbledore	=	Albus Persival Vulfric Brian Potter,Dumbledore`)
add(`Guren Lagan
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`HPMoR
	About
		Authors[y]
			Eliezer Yudkowsky
		Languages[y]
			English
		Inputs[y]
			#Fanfics
				"Harry Potter and the Methods of Rationality"
	Verse
		@Type
			Uni
		Potteriana
	Artefacts
		#r-5[y]
			#Quotes Quills
			Moody's Eye[u]
			Philosopher's Stone[u]
			Mirror of Erised[u]
		#r-6[y]
			#Time-Turners	=	6 hours max, with many turners too
			Moody's Eye	=	Eye of Vance
			Left Leg of Vance
			Philosopher's Stone	=	Stone of Materialization
			Mirror of Erised	=	Mirror of Atlants
	Spells
		#r-5[y]
			#Action
				#Atack
					#Shieldbreacker
						"lagan"	/*Shield breaker
					"stupofy"	/*AutoAim stupefy
					"luminos"	/*Lumination hex
					"mahasu"	/*Sumer simple hit
					Momental Sleep	=	"somnium-"	/*Sleep, weak battle magic
				#Protection
					"prizmatis"	/*Prizmatic shield
					"defendo"	/*Weak shield
					Anti-Time-Turner
					Anti-Transgrassion
				#Vampire
					Ritual Blood Citadel?
	Abilities
		Patronus 2.0
		Avadakedavra 2.0
		Dementor control
		Partial TransFormsation
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
						Petunia Dursley	=	Petunia	Evans-Verres
					#l3.0
						Harry Potter	=	Harry James Potter-Evans-Verres
					#l5.0
						Voldemort	=	Tom Morphin Riddle`)
add(`Diablo
	About
		Languages[y]
			English
		Inputs[y]
			#Games
				#Computer
					1
					2
	Artefacts
		#r-6[y]
			Horadrical Cube`)
add(`Warcraft
	About
		Languages[y]
			English
		Inputs[y]
			#Games
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Orc_2`)
add(`Life of Archmage Potter
	About
		Authors[y]
			Fil Bandileros
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
	Verse
		@Type
			Meta
		Potteriana
		Original
			@Worlds
				Our	=	Earth-?
				Other?
		Naruto
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l3.0
						Harry Potter[u]
					#l5.0
						Harry Potter	=	Abraam
							@Archmage
			#r-7[y]
				Hel`)
add(`Boy Who Conquered Time
	About
		Authors[y]
			Fil Bandileros
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
	Levels
		0.0	=	0
		1.0	=	1
		1.3	=	2
		1.7	=	3
		2.0	=	4
		2.3	=	5
		2.7	=	6
		3.0	=	7
		3.3	=	8
		3.7	=	9
		4.0	=	10
		5.0	=	Higher
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
						Harry Potter	=	Henry James Potter, The-Boy-Who-Conquered-The-Time
							@tm	=	Time back user
	Users
		#r-6[y]
			nt	=	Notime
			tm	=	Time back user
	Artefacts
		#r-6[y]
			Chronos braslet
	Directions
		#Languages[y]
			Schema
			Spell
	Energies
		-1	=	Prana
		+5	=	Mana
		+3+5[u]
		tm	=	Time`)
add(`Potteriana
	About
		Authors[y]
			Joanne Rowling
		Languages[y]
			English
		Inputs[y]
			#Film
				"Fantasic Beasts"
				"Harry Potter"
					1.	"Harry Potter and Philosopher's Stone"
					2.	"Harry Potter and Secret Room"
					3.	"Harry Potter and Uznik Azkabana"
					4.	"Harry Potter and Kubok Ognya"
					5.	"Harry Potter and Order of Phoenix"
					6.	"Harry Potter and Half-Blood Price"
					7.	"Harry Potter and Deathly Hallows"
			#Books
				1.	"Harry Potter and Philosopher's Stone"
				2.	"Harry Potter and Secret Room"
				3.	"Harry Potter and Uznik Azkabana"
				4.	"Harry Potter and Kubok Ognya"
				5.	"Harry Potter and Order of Phoenix"
				6.	"Harry Potter and Half-Blood Price"
				7.	"Harry Potter and Deathly Hallows"
	Abilities
		#r-5[y]
			Wizarding
			Parseltongue
			Nonverbal
			Without wand
	Materials
		#Liquid
			#r-5[y]
				Basilisk Poison
				Phoenix Cry
		#Powder
			#r-5[y]
				Momental Dark Powder
	Elixirs
		#Potions
			Feliks Feliciss
			напиток живой смерти
			Anti Veritaserum
			Veritaserum
			оборотное зелье
	Energies
		+3+5	=	Wirardy?
	Directions
		#Object[y]
			Elixir
				Potion
				Putting	/*3
			Alchemy
		#Action[y]
			TransFormsation	=	Transfiguration
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
		#Misc[y]
			Arithmancy
			Lexomancy	/*3
			Mental
				Protection	=	Occlumency
				Penetration	=	Legilimency
			Clairvoyance	=	Divination
				True prophecy
			Metamorph
				Totem	=	Animagic
		#Creature[y]
			Bestia	=	Magezoology
			Flora	=	Herbology
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
	Artefacts
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
	Spells
		#r-5[y]
			ложная память
			аппарация
			протеевы чары
			непреложный обет
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
					Bird	=	"avis-"	/* - Заклятие призыва птиц. Создаёт стайку птиц.
			#TransFormsation
				"Vermiculus" /*(2)	 — превращает объект в червя[5].
				"Aviforce-"/*(2)	 — противник превращается в птицу/стаю птиц/стаю летучих мышей.[4]
			#Misc
				#Soul
					Horcrux
				#Domestic
					Opendoor	=	"aberto-"	/* - отпирает дверь.
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
			"InFormsus" (2)	/* — показывает информацию о существе-цели в GBA версии игры «Гарри Поттер и узник Азкабана»[21].
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
				Muggle Repelling	=	"Repello Muggletum"
				Чары подчинения - не империо
				Absolute Submission	=	"Imperio-"
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
				Otvod glaz	=	"repello-"	/*Repelling hex
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
				Sleep	=	"sopporo-"	/* - усыпление
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
						Harry Potter	=	Harry James Potter, Boy-Who-Lived
					#l4.0
						Alastor Moody
					#l5.0
						Voldemort	=	Tom Marvolo Riddle
						Albus Dumbledore	=	Albus Persival Vulfric Brian Dumbledore
	Features
		#r-4[y]
			Muggle
			Squib
			#w-1	=	Spirit
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
	About
		Authors[y]
			Andrzej Sapkowski
		Languages[y]
			Polish
		Inputs[y]
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
	Spells
		#r-5[y]
			Elements
				#Basic
					Air	=	Aard
					Water	=	Aksiy
					Earth	=	Kven
					Fire	=	Igni
			#Action[y]
				Protection	=	Heliotrop
				Pomehi	=	Irden`)
add(`Pokemon
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Creatures
		#r-4[y]
			#Pokemon
	Artefacts
		#r-5[y]
			#Pokeballs`)
add(`Ghost Busters
	About
		Languages[y]
			English
		Inputs[y]
			#Film
	Artefacts
		#r-4[y]
			#Ghost traps
	Creatures
		#r-4[y]
			#Ghost`)
add(`UQ Holder
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Rave Master
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Rosario to Vampire
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Features
		#r-5[y]
			Vampire`)
add(`The Law of Ueki
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Hunter x Hunter
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Tenjou Tenge
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`My hero academy
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Features
		#r-5[y]
			Quirk`)
add(`Berserk
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Toriko
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Adacademy Wasshoi
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Users
		#r-5[y]
			e+5	=	Mage`)
add(`High School DxD
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Dragon
	Artefacts
		#r-6[y]
			#Evil Pieces
			#Sacred Gear
			#Holy Swords
	Users
		#r-5[y]
			e+5	=	Mage?
		#r-6[y]
			dm	=	Demon
			lm	=	Angel_0
			fm	=	Fallen
		#r-7[y]
			e+7	=	God_?`)
add(`Startrack
	About
		Languages[y]
			English
		Inputs[y]
			#Serial
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Vulkan
	Energies
		+4	=	Psy?
	Users
		#r-5[y]
			e+4	=	Psyonic`)
add(`Seilor Moon
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Reptiloid
	Artefacts
		#r-5[y]
			Moon Diadema`)
add(`Dragonball
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Energies
		+1	=	Ki?
	Artefacts
		#r-6[y]
			#Dragon Balls`)
add(`Lord of Rings
	About
		Authors[y]
			John Ronald Reuel Tolkien
		Languages[y]
			English
		Inputs[y]
			#Books
	Space
		n
			~1.0, 0.0	=	Body
			~1.5, 0.0	=	Soul
	Verse
		@Type
			Uni
		Original
			@Worlds
				Arda
	Energies
		+5	=	Mana?
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
	Artefacts
		#r-6[y]
			#Rings
				One Ring
			#Gems
				Silmarils
	Materials
		#Metals
			Mithrill`)
add(`Nick
	About
		Languages[y]
			Russian
		Authors[y]
			Andrzej	Yasinski
		Inputs[y]
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
		-1	=	Prana
		+4	=	Psy
		+5	=	Mana
		if	=	Infomana
		+3	=	Emana
	Users
		#r-5[y]
			e+5	=	Mage
			if	=	Infomage
			e+3	=	Sorcerer
			e+4	=	Psyonic
	Artefacts
		#r-5[y]
			#Rods
				#Adeptnesser's
	Directions
		#Languages[y]
			Construct
			Weaving
			Structure
			Image	/*Only gods
		Elements
			#Basic
				Fire
				Water
				Air
				Earth
				Ice
				Electrizity
		#Creature[y]
			Holem
			Automate
		#Action[y]
			Illusion
				Dense
			Materialization
				Creating
				Removing
			Heal
			Atack
			Protection
		#Misc[y]
			Mental
			Info
			Clairvoyance
				Probability
		#Object[y]
			Alchemy
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	=	Earth-2150?
				Lungria
	Space
		n
			~1.0 ~0.0
			~1.5 ~1.5	=	Astral?, ?-net
			~1.0 ~2.0	=	infofield?, zero-net
	Shells
		+	=	Aura
		-4	=	Infostructure
		+4	=	Mental
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
add(`Misc
	About
		All not in classification
	Abilities
		Empathy
		Telepathy
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
			#Users
				Demon
				Angel
				Other
				Mage
			#Misc
				Night
			#Energies
		Berserk
		Yasnovidenie`)
add(`Skyrim
	About
		Languages[y]
			English
		Inputs[y]
			#Games
	Creatures
		#Mind
			#r-5[y]
				#Human
				#Dragon
	Users
		#r-5[y]
			e+5	=	Mage`)
add(`Star Wars
	About
		Languages[y]
			English
		Inputs[y]
			#Film
	Creatures
		#Mind
			#r-5[y]
				#Human
	Energies
		gf	=	Great Force?
	Users
		#r-5[y]
			gf	=	Forceuser
				lm	=	Light
				dm	=	Darl
	Schools
		Jedi
		Sith
	Space
		w
			<1	=	Hyper
	Artefacts
		#r-5[y]
			#Steelarms
				#Lightsaber
			#Tech
				#Galaxy's`)
add(`Warhammer
	About
		Languages[y]
			English
		Inputs[y]
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
		+4	=	Psy?
	Users
		#r-5[y]
			e+4	=	Psyker`)
add(`Minecraft
	About
		Authors[y]
			Notch	=	Markus Persson
			Jebb
			Grum
		Languages[y]
			English
		Inputs[y]
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
			Hell	=	Nether World
			End
			Matteral	=	Over World
	Features
		#r-4[y]
			#w-1	=	Spectator Mode
	Users
		#r-6[y]
			#Immortal	=	Godmode
		#r-7[y]
			e+7	=	Creative gamemode, Admin perms
	Creatures
		#r-3[y]
			#Pig
			#Cow
			#Horse
			#Rabbit
			#Sheep
		#r-4[y]
			#w+1	=	Undead
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
	Artefacts
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
	Artefacts
		#r-5[y]
			#Armor
				#Quantum
				#Nano
			#Steelarms
				#Nanosaber
			#Weapon
				#Laser
		#r-7[y]
			#Developer Tool	=	Debug Tool, Adamant Rod
Buildcraft
Ender IO
	Artefacts
		#r-5[y]
			#Armor
				#Ender
			#Steelarms
				#Ender
Gravisuite
	Artefacts
		#r-5[y]
			#Armor
				#Gravi-Chestplate
			#Steelarms
				#Vajra
Gregtech
Terrafirmacraft
Applied Energistics
	Artefacts
		#r-5[y]
			#Appeng
				#Monitors
				#Autocrafts`)
add(`Zero no Tsukaima
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Energies
		+3+5	=	Wizardy?
	Directions
		Elements
			#Basic
				Fire
				Water
				Air
				Earth
			#Misc
				Void
		#Languages[y]
			Spell
			Rune
			Ritual
		#Action[y]
			Summon
		#Object[y]
			Alchemy
			Elixir
				Potion
		#Creature[y]
			Animal
				Familiar
	Artefacts
		#r-5[y]
			#Wands
			#Flying Ships
			#Rings
				of Water
				of Air
	Users
		#r-5[y]
			e+3+5	=	Wizard
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
				Our	=	Earth-2007?
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
			#w-1	=	Spirit
				Loa?`)
add(`Toaru Majutsu no Index
	About
		Languages[y]
			Japanese
		Inputs[y]
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
				Our	=	Earth-2052?
	Energies
		+5	=	Mana
		tl	=	Telesma?
	Shells
		aimf	=	AIM-field
	Schools
		Academ-City
	Levels
		0.0	=	Zero-esper	/*, don't have ability
		1.0	=	Weak	/* esper, can destroy 1 cube meter
		2.0	=	Simple	/* esper, can destroy room
		3.0	=	Normal	/* esper, can destroy house
		4.0	=	Strong	/* esper, can destroy town
		5.0	=	Very strong	/* esper, can destroy country
		5.5	=	Sub-Angel(Immortal)
		6.0	=	Insane, Angel(Immortal)	/* power of esper, can destroy planet's surface; not exist
	Directions
		#Languages[y]
			Ritual
			Rune
			Spell
		#Action[y]
			Enchantment
	Users
		#r-5[y]
			e+4	=	Esper
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
							Ether	=	Dark matter
								@Darkmatter
									@Rank
										2
					#Action
						Telekinesis
							Vector
								@Accelerator
									@Rank
										1
									#Needs
										Touch
			e+5	=	Mage
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
			e+7	=	God_?
	Artefacts
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
						Rank_Seven	=	Sogiita Gunha
							@Rank
								7
						Rank_Six	=	Aihana Etsu
							@Rank
								6
						Mentalout	=	Shokuhou Misaki
							@Rank
								5
						Meltdowner	=	Mugino Sizuri
							@Rank
								4
					#l5.5
						Railgun		=	Misaka Mikoto
							@Rank
								3
						Darkmatter	=	Kakine Teitoku
							@Rank
								2
						Accelerator
							@Rank
								1
					#l6.0
						Alister Crowley`)
add(`Bleach
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Users
		#r-5[y]
			e+2	=	Reatsu
	Energies
		+2	=	Reatsu
	Features
		#r-5[y]
			Hollow
			Quincy
			Shinigami
			Sword of Soul`)
add(`One Piece
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Features
		#r-5[y]
			Fruits`)
add(`Mass Effect
	About
		Languages[y]
			English
		Inputs[y]
			#Games
	Creatures
		#Mind
			#r-5[y]
				#Human
	Users
		#r-5[y]
			e+4	=	Biotic
	Energies
		+4	=	Psy?`)
add(`Terminator
	About
		Languages[y]
			English
		Inputs[y]
			#Film
	Artefacts
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
	About
		Languages[y]
			English
		Inputs[y]
			#Games
	Creatures
		#r-4[y]
			#Virused Zombie
	Features
		#r-5[y]
			Superabilities`)
add(`Cat Leopold
	About
		Languages[y]
			Russian
		Inputs[y]
			#Multfilm
	Elixirs
		#r-4[y]
			Ozverin`)
add(`Noragami
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
			#Manga
	Users
		#r-4[y]
			e+0+2	=	Sword-Soul
	Spells
		#r-5[y]
			Line
	Features
		#r-4[y]
			#w-1	=	Spirit
				Ghost
				Demon-Loa
				God_0`)
add(`Slayers
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Users
		#r-5[y]
			e+5	=	Mage
	Energies
		+5	=	Magical?`)
add(`Fairy Tail
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Verse
		@Type
			Uni
		Original
			@Worlds
				Other?
	Users
		#r-5[y]
			e+5	=	Mage?
	Energies
		+5	=	Magical?`)
add(`DC
	About
		Languages[y]
			English
		Inputs[y]
			#Comics
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	=	Earth?
	Creatures
		#Mind
			#r-5[y]
				#Human
	Energies
		+5	=	Magical?
		em	=	Lantern's
			Life	=	of White
			Anger	=	of Red, Atrocitus
			Greed	=	of Orange
			Fear	=	of Yellow, Sinestro
			Will	=	of Green
			Hope	=	of Light Blue
			Compassion	=	of Blue, Indigo
			Love	=	of Purple, Sapphire
			Death	=	of Black
		sf	=	Speedforce
	Users
		#r-5[y]
			Metahuman
			sf	=	Speedforceuser
			e+5	=	Mage
	Artefacts
		#r-4[y]
			#Tech
				#Batman's
				#Luthor's
		#r-5[y]
			#Tech
				#Crypton's`)
add(`Avatar
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Multserial
	Energies
		+5	=	Mana?
	Directions
		Elements
			#Basic
				Fire
				Water
				Earth
				Air
		#Action[y]
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
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Features
		#r-5[y]
			Alchemist
	Features
		#r-5[y]
			Gate of Truth
	Energies
		al	=	Alchemycal?`)
add(`Dozory
	About
		Languages[y]
			Russian
		Authors[y]
			Sergey Lukyanenko
		Inputs[y]
			#Books
	Levels
		!School	=	Other
		0.0	=	No
		1.0	=	Potential
		1.5	=	7
		2.0	=	6
		2.5	=	5
		3.0	=	4
		3.5	=	3
		4.0	=	2
		4.5	=	1
		5.0	=	Higher/Not in categories
		6.0	=	0
	Energies
		em
			dm	=	dark
			lm	=	light
		-1	=	prana?
		+5	=	mana?
	Features
		#r-4[y]
			#w+1	=	Undead
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
	Spells
		#r-5[y]
			#Misc
				#Domestic
					Absolute lock	/*наглухо запирает любые двери
				#Mental
					Absolute Submission	=	Доминанта	/* — заклинание абсолютного подчинения.
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
				Muggle Repelling	=	Сфера Невнимания	/* — заклинание, предохраняющее от излишнего любопытства людей. Не действует на Иных и чувствительных к магии людей.
				#Heal
					Absolute constipation	/*вызывает абсолютный запор у того, к кому оно применяется.
					Avicenna	/* — заклинание исцеления.
					Sleep	=	Morphey	/* — заклинание, усыпляющее людей на определённой площади: благодаря постепенному действию (несколько секунд, примерно пять) позволяет избежать лишних жертв, например связанных с потерей управления автомобилями на ходу и т. п. По этой простой причине предпочитается
				#Illusion
					Disguise	=	Паранджа	/* — заклинание, как правило, накладываемое Тёмными женщинами. Аналог магической косметики.
				#Protection
					Кольцо Шааба	/* — охранное заклинание, завязанное на определённое слово.
					Хрустальный щит	/* — очень мощная защита от физического воздействия на объект. Побочным эффектом дает слабую магическую защиту. Мнение что Щит невозможно продавить подтвердилось после применения Щита Эдгаром против вампира Кости, не сумевшего продавить его, даже будучи Абсолютным Иным ("Сумеречный дозор").
					Хрустальный шар	/* — создает вокруг мага шар из «хрусталя», защищающий его от любого физического воздействия.
					Сфера отрицания	/* — заклинание, используемое как защита против вражеских заклинаний, при сильной подкачке может надёжно защитить даже против заклинаний высших магов. Пропускает физические атаки.
					Mana	=	Mage shield	/* — универсальная защита, мощность зависит от вкладываемой силы.
					Universal	=	Rainbow sphere	/* — достаточно сильная универсальная защита.
					Тайга	/* — очень мощное заклинание, имеющее форму огненной сети, опутывающей противника. Упоминается в «Новом Дозоре» и было использовано чтобы замедлить Тигра, правда воздействие было минимальное, так что настоящий эффект неизвестен.
				#Atack
					Momental Sleep	=	Opium	/* — менее гуманный аналог Морфея, в отличие от последнего усыпляет резко, без промедления, что может вызвать аварии и жертвы среди людей, так как не даёт жертве время остановиться или прекратить занятия.
					White kopiyo — боевое заклинание Светлых. Магическое копье, действует соответственно названию. Упоминается в романе «Последний дозор». В шестом дозоре было использовано Антоном Городецким против Двуединого. "Я видел, ... как загорелось пальто Темного, пробитое "белым копьем"..."
					Марево Трансильвании 	/* — заклинание, магическим способом причиняющее физические увечья путём всестороннего сдавливания объекта заклинания. Применяется только Тёмными Иными. Было применено Зеркалом Виталием Рогозой для отражения атаки Тигренка в «Дневном дозоре».
					Pressure	=	Press	/* — заклинание чистой Силы. Сгущает Силу до осязаемого состояния, используется чтобы давить противника.
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
				#w+1	=	Undead
					Anti
						Серый молебен	/* — заклинание против нежити: вампиров, зомби и т. п. Ослабляет и замедляет вампиров, на большей мощности упокаивает. Скелетов, замби, то есть нежить, не имеющую собственной воли, а подчиняющуюся воле поднявшего их колдуна, развеивает.
			#Elements
				#Other
					Space
						Portal	=	/* — заклинание позволяющее почти мгновенно переносится на большие расстояния при помощи врат, без наводки используется только высшими иными (или зеркалом). При помощи мага в пункте назначения создавать портал проще.
					Time
						Stop	=	Freeze	/* — локальная остановка времени, применяется для иммобилизации противника без причинения ему вреда.
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
	Artefacts
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
			Straight
			Saving
			Artefact
		#Action[y]
			Atack
			Protection
			Heal	=	Healing
		#Misc[y]
			Love	=	Obvorozhenie
			Clairvoyance
				Probability
			Metamorph	=	Oborotnichestvo
				Werewolf
				Turning
		#Creature[y]
			#w-1	=	Necromancy
	Space
		n
			~1.0 ~0.0
			~1.5 ~0.0	=	Twilight
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
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	=	Earth?
				Other`)
add(`Tokyo Ghoul
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Shingeki no Kyojin
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Hataraku Maou-sama!
	About
		Languages[y]
			Japanese
		Inputs[y]
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
					Alciel	=	Shiro Ashiya
					Satan Jakob	=	Sadao Mao
					Lucifer	=	Urushihara Hanzo
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	=	Earth
				Ente Isla`)
add(`To Love-Ru
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`The Gamer
	About
		Languages[y]
			Korean
		Inputs[y]
			#Manhva
	Users
		#r-5[y]
			e+1	=	Kiuser
			Feature
			e+5	=	Mage
		#r-6[y]
			God_4
			gm	=	Gamer's System
				The Gamer
	Features
		Dark soul
	Verse
		@Type
			Uni
		Original
		@Tags
			Gamelit
	Directions
		#Misc[y]
			Clairvoyance
		Elements
			#Basic
				Fire
				Water
				Air
				Earth
		#Forms
			#Misc
				Elemental
	Spells
		#r-5[y]
			#Action
				#Protection
					Mana	=	Mana Shield
	Abilities
		#r-5[y]
			Postup @tshonbo
			Soul heal @yunhon
	Creatures
		#Mind
			#r-5[y]
				#Human
					#l5.0
						Gamer	=	Han Jee Han
						Blood Witch	=	Lolicano Mistrim
	Artefacts
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
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Shells
		atf	=	AT-field
	Creatures
		#r-6[y]
			#Angel_1
			#Eva
	Features
		#r-5[y]
			Kid`)
add(`Master and Margarita
	About
		Authors[y]
			Bulgakov
		Languages[y]
			Russian
		Inputs[y]
			#Books`)
add(`Alice in back side of mirror
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Books`)
add(`Voina i mir
	About
		Authors[y]
			Lev Tolstoy
		Languages[y]
			Russian`)
add(`Gundum
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Ottsy i deti
	About
		Authors[y]
			Turgenev
		Languages[y]
			Russian
		Inputs[y]
			#Books`)
add(`How to stat wizard
	About
		Authors[y]
			Duain Diana
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`12 stuliev
	About
		Languages[y]
			Russian
		Inputs[y]
			#Books`)
add(`Green Mile
	About
		Authors[y]
			Steven King
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`Pobeg is shoushenka
	About
		Authors[y]
			Steven King
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`451 Farengait
	About
		Authors[y]
			Rai bradberry
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`We
	About
		Languages[y]
			Russian
		Inputs[y]
			#Books`)
add(`Oh divniy new world
	About
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`1984
	About
		Authors[y]
			George Oruell
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`Skotniy Dvor
	About
		Languages[y]
			Russian
		Inputs[y]
			#Books`)
add(`The Zadrot
	About
		Authors[y]
			Fil Bandileros
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
	Verse
		@Type
			Uni
		The Gamer`)
add(`Meta-Hobbit
	About
		Authors[y]
			Fil Bandileros
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
	Verse
		@Type
			Meta
		DC
		Lord of Rings
		@Tags
			Gamelit`)
add(`Meta-Gamer
	About
		Authors[y]
			Fil Bandileros
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
	Verse
		@Type
			Meta
		DC
		@Tags
			Gamelit`)
add(`Solaris`)
add(`Thanks for fish
	About
		Authors[y]
			Fil Bandileros
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
	Verse
		@Type
			Multi
		Marvel`)
add(`Atlant raspravil plechi
	About
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`Eyes of other world
	About
		Authors[y]
			Jack Vance
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`Game of Thrones
	About
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`Autostop by galaxy
	About
		Authors[y]
			Duglas adams
		Languages[y]
			English`)
add(`Path of Dark Mage
	About
		Authors[y]
			Sergey Zloy
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
	Verse
		@Type
			Uni
		Potteriana`)
add(`Mage and his shadow`)
add(`Fate of Archmage
	About
		Languages[y]
			Russian
		Inputs[y]
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
	About
		Authors[y]
			Govard Lovecraft
		Languages[y]
			English
		Inputs[y]
			#Books`)

add(`Strugatskie
	About
		Authors[y]
			Strugatskie
		Languages[y]
			Russian
		Inputs[y]
			#Books`)
add(`Antichniy charoplet
	About
		Authors[y]
			Alessiy
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
				1.
				2.
				3.`)
add(`Small Monster
	About
		Authors[y]
			Daimon Agafo
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics`)
add(`King's Battle
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Ranobe`)
add(`Hunger Games
	About
		Authors[y]
			Katlin
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`Voina mirov
	About
		Authors[y]
			Herbert wels
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`Hyperboloid inzhenera garina
	About
		Authors[y]
			Tolstoy
		Languages[y]
			Russian
		Inputs[y]
			#Books`)
add(`Tumannost Andromedy
	About
		Authors[y]
			Efremov
		Languages[y]
			Russian
		Inputs[y]
			#Books
	Space
		w
			<1	=	zero-space`)
add(`Elita
	About
		Authors[y]
			Belyaev
		Languages[y]
			Russian
		Inputs[y]
			#Books`)
add(`Dead souls
	About
		Authors[y]
			Nikolay Gogol
		Languages[y]
			Russian
		Inputs[y]
			#Books`)
add(`Pandora Box`)
add(`Svarog
	About
		Authors[y]
			Buzhkov
		Languages[y]
			Russian
		Inputs[y]
			#Books`)
add(`Deus Ex
	About
		Inputs[y]
			#Games`)
add(`Fallout
	About
		Inputs[y]
			#Games`)
add(`Assasin's Creed
	About
		Inputs[y]
			#Games`)
add(`Megabrain
	About
		Inputs[y]
			#Film`)
add(`Matrix
	About
		Languages[y]
			English
		Inputs[y]
			#Film`)
add(`5 Elements`)
add(`trassa 60`)
add(`Hodyachiy Zamok
	About
		Authors[y]
			Hayao Miadzaki
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Seishun Buta Yaro wa Bunny Girl-senpai no Yume wo Minai
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Love Death Robots
	About
		Inputs[y]
			#Serial`)
add(`Black Mirror
	About
		Inputs[y]
			#Serial`)
add(`Memnoh Devil`)
add(`Will for Life
	About
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics`)
add(`Technomancer
	About
		Languages[y]
			Russian
		Inputs[y]
			#Fanfics
	Verse
		@Type
			Uni
		Systema, Labirint, Bogi, Avanturisti`)
add(`Overlord
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`One Punch Man
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Mob Psyho 100
	About
		Languages[y]
			Japanese
		Inputs[y]
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
			+4	=	Psy`)
add(`Svet za okoshkom
	About
		Authors[y]
			Svyatoslav Loginov
		Languages[y]
			Russian
		Inputs[y]
			#Books
	Features
		#r-4[y]
			Ghost`)
add(`Assasin's Class
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`vosplamenyayushaya vzglyadom
	About
		Authors[y]
			Steven King
		Languages[y]
			English
		Inputs[y]
			#Books`)
add(`Re: Monster
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Manga`)
add(`High School of Dead
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Chronics of Narnia`)
add(`Soul Eater
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime`)
add(`Labirints Eho`)
add(`Labirint Favna`)
add(`Persi Jackson`)
add(`Star Dust`)
add(`Home of strange kid ms peregrin`)
add(`Gravity Falls
	About
		Languages[y]
			English
		Authors[y]
			Alex Hirsh
		Inputs[y]
			#Multserial
				1 Season
				Video chronics
				2 Season
	Artefacts
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
	About
		Languages[y]
			English
		Inputs[y]
			#Mult`)
add(`Infinity Story`)
add(`Collectioner`)
add(`Molchaniye Yagnyat`)
add(`Diplomirovanniy Charodey`)
add(`Wizard Parents`)
add(`Dungeons and Dragons
	About
		Languages[y]
			English
		Inputs[y]
			#Games`)
add(`Volshebnik izumrudnogo goroda
	About
		Languages[y]
			Russian
		Inputs[y]
			#Books
			#Mult`)
add(`Dragon Age
	About
		Languages[y]
			English
		Inputs[y]
			#Games
	Space
		n
			Fade
			~1.0 ~0.0	=	Yav
	Materials
		#Metals
			Lyrium`)
add(`RWBY
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
	Creatures
		#r-5[y]
			#Grimm`)
add(`Death Note
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
			#Manga
	Artefacts
		#r-7[y]
			#Death Notes
	Users
		#r-7[y]
			Death Note	=	Shinigami
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
	About
		Languages[y]
			English`)
add(`League of Legends
	About
		Languages[y]
			English`)
add(`Code Geass
	About
		Languages[y]
			Japanese
		Inputs[y]
			#Anime
		Inputs[y]
			Anime
				R1
				R2
				1
				2
				3
				4
				5
				6
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
	Users
		#r-5[y]
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
				Mental
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
	Artefacts
		#r-5[y]
			#Tech
				#Britanian Imperia's
					#Knightmares`)
