add(`/Assassination Classroom
	@Sources	!	Supernatural.Jarse.Assassination Classroom
	Creatures
		%Mind
			%TentacleMoster
				Koro`)
1
add(`/Atack on Titan
	@Sources	!	Supernatural.Jarse.Atack on Titan`)
1
add(`/Berserk
	@Sources	!	Supernatural.Jarse.Berserk`)
1
add(`/Bleach
	@Sources	!	Supernatural.Jarse.Bleach
	Users
		%r-5[nowhere]
			e+2	!=	Reatsu
	Energies
		%r-5[nowhere]
			+2	!=	Reatsu
	Features
		%r-5[nowhere]
			Hollow
			Quincy
			Shinigami
			Sword of Soul`)
1
add(`/Blue exorcist
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
	Features
		%r-5[nowhere]
			Demon
			%w-1	!=	Spirit
				Brownie
	Dimension
		Gienna	!=	Demonic
		Alis	!=	Human`)
1
add(`/Claymore
	@Sources	!	Supernatural.Fiction.Manga.Claymore
	Energies
		%r-5[nowhere]
			yo	!=	Yoki
	Creatures
		%Mind
			%r-5[nowhere]
				%Human
				%Claymore
				%Yoma`)
1
add(`/Code Geass
	@Sources	!	Supernatural.Jarse.Code Geass
	Creatures
		%Mind
			%r-5[nowhere]
				%Human
					%l3.0
						Roland
						Mao
					%l5.0
						Lelouch
						Charlz
						Marianna
						C.C.
	Actions
		%r-5[nowhere]
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
		%r-6[nowhere]
			Code Geass
				@C.C.
				@V.V.
				@Charlz
				@Lelouch
	Materials
		Sakuradait
	Objects
		%Artefacts
			%r-5[nowhere]
				%Tech
					%Britanian Imperia's
						%Knightmares`)
1
add(`/Death Note
	@Sources	!	Supernatural.Jarse.Death Note
	Objects
		%Artefacts
			%r-7[nowhere]
				%Death Notes
	Users
		%r-7[nowhere]
			Death Note	!=	Shinigami
	Creatures
		%Mind
			%r-7[nowhere]
				%Human
					%l0.0
						Yagami Light
						L Lawliet
						Amane Misa
				%Shinigami
					Ryuk
					Rem
					Death King`)
1
add(`/Dragonball
	@Sources	!	Supernatural.Jarse.Dragonball
	Energies
		%r-5[nowhere]
			+1	!=	Ki?
	Objects
		%Artefacts
			%r-6[nowhere]
				%Dragon Balls`)
1
add(`/Fairy Tail
	@Sources	!	Supernatural.Jarse.Fairy Tail
	Verse
		@Type
			Uni
		Original
			@Worlds
				Other?
	Users
		%r-5[nowhere]
			e+5	!=	Mage?
	Energies
		%r-5[nowhere]
			+5	!=	Mana?`)
1
add(`/Fate
	@Sources	!	Supernatural.Jarse.Fate
	Actions
		%r-5[nowhere]
			%Action
				%Vampiring
					Blood Citadel?
	Energies
		%r-5[nowhere]
			-1	!=	Prana
			+5	!=	Mana
	Users
		%r-5[nowhere]
			e+5	!=	Mage
	Objects
		%Artefacts
			%r-6[nowhere]
				%The Holy Grail
	Creatures
		%Mind
			%r-6[nowhere]
				%Servant`)
1
add(`/Fullmetal Panic
	@Sources	!	Supernatural.Jarse.Fullmetal Panic
	Organizations
		Mithrill`)
1
add(`/Gurren Lagann
	@Sources	!	Supernatural.Jarse.Gurren Lagann`)
1
add(`/Hellsing
	@Sources	!	Supernatural.Jarse.Hellsing
	Features
		%r-5[nowhere]
			Vampire
		%r-4[nowhere]
			%w+1	!=	Undead`)
1
add(`/Inuyasha
	@Sources	!	Supernatural.Jarse.Inuyasha`)
1
add(`/JoJo Bizzare
	@Sources	!	Supernatural.Jarse.JoJo Bizzare`)
1
add(`/Macademy Wasshoi
	@Sources	!	Supernatural.Jarse.Macademy Wasshoi
	Users
		%r-5[nowhere]
			e+5	!=	Mage`)
1
add(`/My hero academy
	@Sources	!	%Fiction.%Anime.My hero academy
	Worlds
		Original
			Paths	!	Tech-Energy
	Creatures
		%Mind
			%Quirk-Human
				Izuku Midoriya
	Features
		%r-5[nowhere]
			%Abilities
				%/Quirk
					One for All
						Power save
						Power return
						Give it for other
						@Midoriya Izuku
					All for One
						Take abilities
						Give abilities
						Multiability
					@Ectoplasm
						Shadow Clone
						Izuku Midoriya Anime PortraitIzuku
					@Katsuki Bakugo
						Nitroglycerin generation
						Explosion
					@Shoto Todoroki
						Fire
						Ice
						Hot
						Cold
						Temperature
					@Fumikage Tokoyami
					@Ochaco Uraraka
						Zero-gravity field
					@Kyoka Jiro
					@All Might
					@Endeavor
					@Hawks
					@Mirio Togata
					@Nejire Hado
					@Eri Anime
					@Tomura Shigaraki Portal
					@Kurogiri Portal
					@Dabi
					@Hood High-End
					@Gentle Criminal
					@La Brava
					@Racer
					@Portal
					@Laser
					@Kamui
					@Mountain Lady
					@Links[nl]	!	function(line){return {ref:line.content.indexOf("[nl]")!=-1?false:"https://bokunoheroacademia.fandom.com/wiki/"+line.content.replace(/[@%?]/g,"").replace(/[ ]/g,"_"),text:"fandom.com/wiki"}
					Quirk-Destroying Drug
					#
					Acid
					Acid Sweat
					Air Cannon
					Air Walk
					All For One (Quirk)
					Amplivolt
					Anivoice
					Anthropomorph
					Arbor
					Assault Dust
					Barrier
					Bat
					Beams From His Eyes
					Beast
					Bendy Fingers
					Big Fist
					Big Horn
					Binging Ball
					Black
					Black Hole
					Blackwhip
					Blade-Tooth
					Blast
					Blood Control
					Bloodcurdle
					Boomerang
					Brainwashing
					Brown Bear
					Bubble
					Cell Activation
					Cemedine
					Cement
					Centipede
					Cephalopod
					Chest Hair
					Chimera (Quirk)
					Chronostasis (Quirk)
					Cleaning
					Clones
					Cloud
					Comic
					Compress
					Confession
					Copy
					Cow
					Creation
					Crystallize
					Dark Shadow
					Decay
					Dog
					Double
					Dragon
					Dupli-Arms
					Dust
					Earphone Jack
					Earth Flow
					Eel
					Elasticity
					Electricity Generation
					Electrification
					Electromagnetic Bullets
					Engine
					Erasure
					Eruption
					Explosion
					Extend-o-Hair
					Eye-brows
					Fan
					Fat Absorption
					Fiber Master
					Fierce Wings
					Flight
					Float
					Fly Swatter
					Foldabody
					Food
					Forced Quirk Activation
					Foresight
					Frog
					Gas
					Gatling
					Gecko
					Gigantification
					Glamour
					Glide and Slide
					Glycerin
					Good Ear
					Good Face
					Gyrate
					Hair-Raiser
					Half-Cold Half-Hot
					Hardening
					Heal
					Hedgehog
					Hellflame
					High Spec
					Hologram
					Homing
					Horn Cannon
					Hula Hoop
					Hypertrophy
					Impact Recoil
					Incite
					Infrared Ray
					Invisibility
					IQ
					Iron Claws
					Jet
					Kinetic Booster
					King Slam
					Landmine
					Larceny
					Laser
					Leafipulation
					Leap
					Life Force
					Liquification
					Lizard Tail Splitter
					Lock Down
					Longleg
					Love
					Magnetism
					Manifest
					Meatball
					Metal Manipulation
					Mimicry
					Monster Cat (Quirk)
					Muddiness
					Multiplier
					Mummification
					Muscle Augmentation
					Mushroom
					Navel Laser
					Object Gigantification
					Octopus
					One For All
					Orcinus
					Outburst
					Overclock
					Overhaul (Quirk)
					Permeation
					Pliabody
					Poison Gas
					Poltergeist
					Polygraph
					Pop Off
					Power
					Quad Arms
					Queen Beam
					Queen Bee
					Quirk Singularity
					Rabbit
					Razor Sharp
					Rewind
					Rivet
					Rocket Thrust
					Rupture
					Saber
					Sacred Tears
					Scales
					Scissors
					Search
					Self-Detonation
					Serpentress
					Shame
					Shield
					Shock Absorption
					Shoulder-Mounted Jets
					Size
					Slice (Quirk)
					Slide and Glide
					Sloshed
					Soccer
					Softening
					Solid Air
					Somnambulist
					Spearlike Bones
					Spike
					Spotted Seal
					Springlike Limbs
					Steel
					Stiffening
					Stock
					Strength Enhancer
					Stress
					Strongarm
					Sugar Rush
					Suicide Bomb
					Super Regeneration
					Swan
					Tail
					Tape
					Telepath
					Telescopic
					Toho
					Tongue Tank
					Transform
					Transforming Arms
					Twin Impact
					Vibrate
					Vines
					Viral Cosmos
					Vitality Stealing
					Voice
					Warp Gate
					Warping
					Wave Motion
					Weather Manipulation
					Weld
					Whale
					Whirlwind
					White Line
					Whole-Body Lens
					Wooden Swords From His Hands
					Yell
					Zero Gravity
					"Zombie Virus"
					"Zoom"
					Attraction of Small Objects
					Chart
					Control Horn
					Cremation
					Fire Breath
					Flash Bang Sweat
					Paralysis
					Sandstorm
					Smoke
					Storage
					Tool Arms`)
1
add(`/Naruto
	Worlds
		Original
			Paths
				Energy
				Tech
			Satellites
	@Sources	!	Supernatural.Jarse.Naruto
	Verse
		@Type
			Uni
		Original
	Creatures
		%Mind
			%r-5[nowhere]
				%Human
					%l5.0
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
				%Frog
				%Snake
				%Monkey
				%Cat
				%Dog
				%Raven
				%Bijuu
					%Enot
						Shukaku
					%Cat
						Matatabi
					%Turtle
						?
					%Monkey
						?
					%Slug
						?
					%zhuk
						?
					%Octopus
						?
							@KiraBi
					%Fox
						Kurama
							@Naruto
	Energies
		%r-5[nowhere]
			+1+2	!=	Chakra
	Features
		%r-5[nowhere]
			%Genetic
				Uzumaki
				Uchiha
				Hyuga
				Senju
				Ootsutsuki
				Kurama
				Kaguya
			Dojutsu
				%Byaku tree
					Byakugan
					Tenseigan
				%Sharin tree
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
				Lava	!=	Fire+Earth?
				Boil	!=	Fire+Water?
				Heat	!=	Fire+Air?
				Tree	!=	Earth+Water Moku
				Earth+Air	!=	Sand
				Water+Air	!=	Ice
	Elements
		%Basic
			Fire	!=	Katon
			Water	!=	Suiton
			Earth	!=	Doton
			Air	!=	Fuuton
			Electrizity	!=	Raiton
		%Misc
			In	!=	Inton
			Yan	!=	Yanton
			Inyan	!=	Inyanton
	Directions
		%Languages[nowhere]
			Technique	!=	Nin
			Fuin
			Mudra
		%Types[nowhere]
			%Action
				Summon
				Sensor	!=	Kanchi
				Absorption
				Displacement
				Arms	!=	Tai
				Steelarms	!=	Ken
				Flying
				Sealing in
				Senjutsu	!=	Sen
				Illusion
					Genjutsu	!=	Gen
			%Object
				Artefact
		%Creatures
			Doppel	!=	Kage Bunshin
			Marionette
	Actions
		%Categories
			Feel of Look
			Yaki
			Want of Blood
			Step
				Tree
				Water
		%r-5[nowhere]
			%Misc[nowhere]
				Telescope
	Organizations
		%Gakurezato
			%Fire
				Konoha
					ANBU
						Normal
						Root
			%Water
			%Fog
			%Lightning
			%Air
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
		%Artefacts
			%r-5[nowhere]
				Star
				%Swords of Fog`)
1
add(`/One Punch Man
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime`)
1
add(`/One Piece
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
	Features
		%r-5[nowhere]
			Fruits`)
1
add(`/Overlord
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime`)
1
add(`/Ranma 1:2
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime`)
1
add(`/Sword Art Online
	@Sources
		%Fiction
			%Ranobe.Sword Art Online
			%Anime.Sword Art Online
	Verse
		@Type
			Uni
		Original
		@Tags
			Virworld
				Gamelit
	Objects
		%Artefacts
			%r-4[nowhere]
				%Neurohelmets
				%Amuspheres`)
1
add(`/UQ Holder
	@Sources	!	Supernatural.Jarse.UQ Holder`)
1
add(`/The Rising of the Shield Hero
	@Sources	!	%Fiction.%Anime
	Verse
		@Type
			Multi
		Original
		@Tags
			Gameworld`)
1
add(`/Rave Master
	@Sources	!	%Fiction.%Anime`)
1
add(`/Pokemon
	@Sources	!	%Fiction.%Anime
	Creatures
		%r-4[nowhere]
			%Pokemon
	Objects
		%Artefacts
			%r-5[nowhere]
				%Pokeballs`)
1
add(`/Rosario to Vampire
	@Sources	!	%Fiction.%Anime
	Features
		%r-5[nowhere]
			Vampire`)
1
add(`/The Law of Ueki
	@Sources	!	%Fiction.%Anime`)
1
add(`/Hunter x Hunter
	@Sources	!	%Fiction.%Anime`)
1
add(`/Tenjou Tenge
	@Sources	!	%Fiction.%Anime`)
1
add(`/Fullmetal Alchemist
	@Sources	!	%Fiction.%Anime
	Features
		%r-5[nowhere]
			Alchemist
			Gate of Truth
	Energies
		%r-5[nowhere]
			al	!=	Alchemycal?`)
1
add(`/The Gamer
	@Sources	!	%Fiction.%Manhva.The Gamer
	Users
		%r-5[nowhere]
			e+1	!=	Kiuser
			Feature
			e+5	!=	Mage
		%r-6[nowhere]
			God_4
			gm	!=	Gamer's System
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
		%Basic
			Fire
			Water
			Air
			Earth
	Directions
		%Types[nowhere]
			%Action
				Clairvoyance
	Actions
		%r-5[nowhere]
			Postup @tshonbo
			Soul heal @yunhon
			%Action
				%Protection
					Mana	!=	Mana Shield
	Creatures
		Elemental
		%Mind
			%r-5[nowhere]
				%Human
					%l5.0
						Gamer	!=	Han Jee Han
						Blood Witch	!=	Lolicano Mistrim
	Objects
		%Artefacts
			%r-5[nowhere]
				%Broomsticks
				%Soul Stones / SS
			%r-7[nowhere]
				Sword Dan
				%Divine
					Bereza
					Mirror
					???
	Organizations
		Bezdna
			Aukcion`)
1
add(`/KonoSuba: God's Blessing on this Wonderful World!
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	!=	Earth?
				Other`)
1
add(`/Tokyo Ghoul
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime`)
1
add(`/The Devil Is a Part-Timer!
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
	Features
		%r-6[nowhere]
			Demon_0
			Fallen
			Angel_0
	Creatures
		%Mind
			%r-6[nowhere]
				%Demon
					Alciel	!=	Shiro Ashiya
					Satan Jakob	!=	Sadao Mao
					Lucifer	!=	Urushihara Hanzo
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	!=	Earth
				Ente Isla`)
1
add(`/High School DxD
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
	Creatures
		%Mind
			%r-5[nowhere]
				%Human
				%Dragon
	Objects
		%Artefacts
			%r-6[nowhere]
				%Evil Pieces
				%Sacred Gear
				%Holy Swords
	Users
		%r-5[nowhere]
			e+5	!=	Mage?
		%r-6[nowhere]
			dm	!=	Demon
			lm	!=	Angel_0
			fm	!=	Fallen
		%r-7[nowhere]
			e+7	!=	God_?`)
1
add(`/To Love Ru
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime`)
1
add(`/Neon Genesis Evangelion
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
	Shells
		atf	!=	AT-field
	Creatures
		%r-6[nowhere]
			%Angel_1
			%Eva
	Features
		%r-5[nowhere]
			Kid`)
1
add(`/Highschool of the Dead
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime`)
1
add(`/Gundam
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime`)
1
add(`/Howl's Moving Castle
	@Authors[nowhere]
		Hayao Miadzaki
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime`)
1
add(`/Mob Psycho 100
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
	Creatures
		%Mind
			%r-5[nowhere]
				%Human
					%l0.0
						Mob's teacher
					%l5.0
						Mob
	Energies
		%r-5[nowhere]
			+4	!=	Psy?`)
1
add(`/Noragami
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
		%Manga
	Users
		%r-4[nowhere]
			e+0+2	!=	Sword-Soul
	Actions
		%r-5[nowhere]
			Line
	Features
		%r-4[nowhere]
			%w-1	!=	Spirit
				Ghost
				Demon-Loa
				God_0`)
1
add(`/Re: Monster
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Manga`)
1
add(`/RWBY
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
	Creatures
		%r-5[nowhere]
			%Grimm`)
1
add(`/Sailor Moon
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
	Creatures
		%Mind
			%r-5[nowhere]
				%Human
				%Reptiloid
	Objects
		%Artefacts
			%r-5[nowhere]
				Moon Diadema`)
1
add(`/Rascal Does Not Dream of Bunny Girl Senpai
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime`)
1
add(`/Slayers
	@Sources[nowhere]
		%Fiction
			%Anime
				Slayers
	Creatures
		%Mind
			%r-5[nowhere]
				%Human
					%l6.0?
						Lina Invers
	Users
		%r-5[nowhere]
			e+5	!=	Mage
	Energies
		%r-5[nowhere]
			+5	!=	Mana?`)
1
add(`/Soul Eater
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime`)
1
add(`/A Certain Magical Index
	@Sources	!	Supernatural.Jarse.%A Certain Magical Index
	Verse
		@Type
			Meta
		Original
			@Worlds
				Our	!=	Earth-2052?
	Energies
		%r-5[nowhere]
			+5	!=	Mana
		%r-6/7[nowhere]
			tl	!=	Telesma?
	Shells
		aimf	!=	AIM-field
	Schools
		Academ-City
	Levels
		0.0
			=Zero-esper	!#, don't have ability
		1.0
			=Weak	!# esper, can destroy 1 cube meter
		2.0
			=Simple	!# esper, can destroy room
		3.0
			=Normal	!# esper, can destroy house
		4.0
			=Strong	!# esper, can destroy town
		5.0
			=Very strong	!# esper, can destroy country
		5.5
			=Sub-Angel(Immortal)	!#esper, can destroy continent
		6.0
			=Insane, Angel(Immortal)	!# power of esper, can destroy planet's surface; not exist
	Directions
		%Languages[nowhere]
			Ritual
			Rune
			Spell
		%Types[nowhere]
			%Object
				Enchanted
	Users
		%r-5[nowhere]
			e+4	!=	Esper
				%l1.0
				%l2.0
				%l3.0
				%l4.0
					%Action
						Teleport
							%Needs
								Touch
									@Sirai Kuruku
								Look
									@Awaki
				%l5.0
					%Misc
						Super strength
							@Rank_Seven
								@Rank	!	7
						6
							@Rank_Six
								@Rank	!	6
						%Mental
							%Control
								@Mentalout
									@Rank	!	5
					%Elements
						%Misc
							Plasma
								@Meltdowner
									@Rank	!	4
				%l5.5
					%Elements
						%Misc
							Electromagnetism
								@Railgun
									@Rank	!	3
							Ether	!=	Dark matter
								@Darkmatter
									@Rank	!	2
						Motion
							Direction
								@Accelerator
									@Rank	!	1
									%Needs
										Touch
			e+5	!=	Mage
				Index
					@Index
				@Styl Magnus
		%r-6[nowhere]
			Angel_0
			Imagine Breaker
				@Kamijo Touma
					%Needs
						Touch
		%r-7[nowhere]
			e+7	!=	God_?
	Actions
		%r-5[nowhere]
			%Action
				Protection
					Vector
						@Accelerator
	Objects
		%Artefacts
			%r-5[nowhere]
				%Grimoires
					%Forbidden index's
				Cross?
				Sword of space?
	Creatures
		%Mind
			%r-5[nowhere]
				%Human
					%l0.0
						Kamijo Touma
					%l4.0
						Sirai Kuroku
						Kongo Mitsuko
						Styl Magnus
						Index
					%l5.0
						Rank_Seven	!=	Sogiita Gunha
							@Rank
								7
						Rank_Six	!=	Aihana Etsu
							@Rank
								6
						Mentalout	!=	Shokuhou Misaki
							@Rank
								5
						Meltdowner	!=	Mugino Sizuri
							@Rank
								4
					%l5.5
						Railgun		!=	Misaka Mikoto
							@Rank
								3
						Darkmatter	!=	Kakine Teitoku
							@Rank
								2
						Accelerator
							@Rank
								1
					%l6.0
						Alister Crowley`)
1
add(`/Toriko
	@Sources	!	Supernatural.Jarse.Toriko`)
1
add(`/The Familiar of Zero
	@Languages[nowhere]
		Japanese
	@Sources[nowhere]
		%Anime
	Energies
		%r-5[nowhere]
			+3+5	!=	Wizardy?
	Elements
		%Basic
			Fire
			Water
			Air
			Earth
		%Misc
			Void
	Directions
		%Languages[nowhere]
			Spell
			Rune
			Ritual
		%Types[nowhere]
			%Action
				Summon
				Alchemy
			%Object
				Elixir
					Potion
		%Creatures
			Animal
				Familiar
	Objects
		%Elixirs
			%Potions
				Love
		%Artefacts
			%r-5[nowhere]
				%Wands
				%Flying Ships
				%Rings
					of Water
					of Air
	Users
		%r-5[nowhere]
			e+3+5	!=	Wizard
	Features
		%r-5[nowhere]
			Gandalf
			Lifrasir
			Sidalf
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	!=	Earth-2007?
				Other?
	Creatures
		%Mind
			%r-5[nowhere]
				%Human
				%Elv
				%Changeling
		%r-5[nowhere]
			%Wyvern
			%Salamander
			%Beholder
	Features
		%r-4[nowhere]
			%w-1	!=	Spirit
				Loa?`)
1
