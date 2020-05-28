add(`/Academy Wasshoi
	@Sources[y]
		%Anime.Adacademy Wasshoi
	Users
		%r-5[y]
			e+5	!=	Mage`)
add(`/Assassination Classroom
	@Sources[y]	!=	%Fiction.%Anime.Assassination Classroom
	Creatures
		%Mind
			%TentacleMoster
				Koro`)
add(`/Atack on Titan
	@Sources[y]
		%Anime.Atack on Titan`)
add(`/Berserk
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Toriko
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Bleach
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Users
		%r-5[y]
			e+2	!=	Reatsu
	Energies
		%r-5[y]
			+2	!=	Reatsu
	Features
		%r-5[y]
			Hollow
			Quincy
			Shinigami
			Sword of Soul`)
add(`/Code Geass
	@Sources[y]
		%Fiction
			%Anime
				Code Geass
	Creatures
		%Mind
			%r-5[y]
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
		%r-5[y]
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
		%r-6[y]
			Code Geass
				@C.C.
				@V.V.
				@Charlz
				@Lelouch
	Materials
		Sakuradait
	Objects
		%Artefacts
			%r-5[y]
				%Tech
					%Britanian Imperia's
						%Knightmares`)
add(`/Death Note
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
		%Manga
	Objects
		%Artefacts
			%r-7[y]
				%Death Notes
	Users
		%r-7[y]
			Death Note	!=	Shinigami
	Creatures
		%Mind
			%r-7[y]
				%Human
					%l0.0
						Yagami Light
						L Lawliet
						Amane Misa
				%Shinigami
					Ryuk
					Rem
					Death King`)
add(`/Fairy Tail
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Verse
		@Type
			Uni
		Original
			@Worlds
				Other?
	Users
		%r-5[y]
			e+5	!=	Mage?
	Energies
		%r-5[y]
			+5	!=	Mana?`)
add(`/UQ Holder
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/JoJo Bizzare
	@Languages[y]
		Japanese`)
add(`/Fate
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Actions
		%r-5[y]
			%Action
				%Vampiring
					Blood Citadel?
	Energies
		%r-5[y]
			-1	!=	Prana
			+5	!=	Mana
	Users
		%r-5[y]
			e+5	!=	Mage
	Objects
		%Artefacts
			%r-6[y]
				%The Holy Grail
	Creatures
		%Mind
			%r-6[y]
				%Servant`)
add(`/Claymore
	@Languages[y]
		Japanese
	@Sources[y]
		%Manga
	Energies
		%r-5[y]
			yo	!=	Yoki
	Creatures
		%Mind
			%r-5[y]
				%Human
				%Claymore
				%Yoma`)
add(`/Guren Lagan
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Naruto
	@Sources[y]
		%Fiction
			%Jarse
				Naruto
	Verse
		@Type
			Uni
		Original
			@Worlds
				Naruto's
					Satellites
	Creatures
		%Mind
			%r-5[y]
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
		%r-5[y]
			+1+2	!=	Chakra
	Features
		%r-5[y]
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
		%Languages[y]
			Technique	!=	Nin
			Fuin
			Mudra
		%Types[y]
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
		%r-5[y]
			%Misc[y]
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
			%r-5[y]
				Star
				%Swords of Fog`)
add(`/Fullmetal Panic
	@Languages[y]
		Japanese
	Organizations
		Mithrill`)
add(`/Ranma One Half
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Inuyasha
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Blue exorcist
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Features
		%r-5[y]
			Demon
			%w-1	!=	Spirit
				Brownie
	Dimension
		Gienna	!=	Demonic
		Alis	!=	Human`)
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
			%r-4[y]
				%Neurohelmets
				%Amuspheres`)
add(`/Hellsing
	@Sources	!	%Fiction.%Anime
	Features
		%r-5[y]
			Vampire
		%r-4[y]
			%w+1	!=	Undead`)
add(`/Voshozhdeniye geroya shita
	@Sources	!	%Fiction.%Anime
	Verse
		@Type
			Multi
		Original
		@Tags
			Gameworld`)
add(`/Rave Master
	@Sources	!	%Fiction.%Anime`)
add(`/Pokemon
	@Sources	!	%Fiction.%Anime
	Creatures
		%r-4[y]
			%Pokemon
	Objects
		%Artefacts
			%r-5[y]
				%Pokeballs`)
add(`/Rosario to Vampire
	@Sources	!	%Fiction.%Anime
	Features
		%r-5[y]
			Vampire`)
add(`/The Law of Ueki
	@Sources	!	%Fiction.%Anime`)
add(`/Hunter x Hunter
	@Sources	!	%Fiction.%Anime`)
add(`/Tenjou Tenge
	@Sources	!	%Fiction.%Anime`)
add(`/Fullmetal Alchemist
	@Sources	!	%Fiction.%Anime
	Features
		%r-5[y]
			Alchemist
			Gate of Truth
	Energies
		%r-5[y]
			al	!=	Alchemycal?`)
add(`/My hero academy
	@Sources	!	%Fiction.%Anime.My hero academy
	Creatures
		%Mind
			%Quirk-Human
				Izuku Midoriya
	Features
		%r-5[y]
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
add(`/The Gamer
	@Sources	!	%Fiction.%Manhva.The Gamer
	Users
		%r-5[y]
			e+1	!=	Kiuser
			Feature
			e+5	!=	Mage
		%r-6[y]
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
		%Types[y]
			%Action
				Clairvoyance
	Actions
		%r-5[y]
			Postup @tshonbo
			Soul heal @yunhon
			%Action
				%Protection
					Mana	!=	Mana Shield
	Creatures
		Elemental
		%Mind
			%r-5[y]
				%Human
					%l5.0
						Gamer	!=	Han Jee Han
						Blood Witch	!=	Lolicano Mistrim
	Objects
		%Artefacts
			%r-5[y]
				%Broomsticks
				%Soul Stones / SS
			%r-7[y]
				Sword Dan
				%Divine
					Bereza
					Mirror
					???
	Organizations
		Bezdna
			Aukcion`)
add(`/Kono Subarashii Sekai ni Shukufuku o
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Verse
		@Type
			Multi
		Original
			@Worlds
				Our	!=	Earth?
				Other`)
add(`/Tokyo Ghoul
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Hataraku Maou-sama
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Features
		%r-6[y]
			Demon_0
			Fallen
			Angel_0
	Creatures
		%Mind
			%r-6[y]
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
add(`/High School DxD
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Creatures
		%Mind
			%r-5[y]
				%Human
				%Dragon
	Objects
		%Artefacts
			%r-6[y]
				%Evil Pieces
				%Sacred Gear
				%Holy Swords
	Users
		%r-5[y]
			e+5	!=	Mage?
		%r-6[y]
			dm	!=	Demon
			lm	!=	Angel_0
			fm	!=	Fallen
		%r-7[y]
			e+7	!=	God_?`)
add(`/To Love-Ru
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Neon Genesis Evangelion
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Shells
		atf	!=	AT-field
	Creatures
		%r-6[y]
			%Angel_1
			%Eva
	Features
		%r-5[y]
			Kid`)
add(`/High School of Dead
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Gundum
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Hodyachiy Zamok
	@Authors[y]
		Hayao Miadzaki
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Mob Psyho 100
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Creatures
		%Mind
			%r-5[y]
				%Human
					%l0.0
						Mob's teacher
					%l5.0
						Mob
	Energies
		%r-5[y]
			+4	!=	Psy?`)
add(`/Noragami
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
		%Manga
	Users
		%r-4[y]
			e+0+2	!=	Sword-Soul
	Actions
		%r-5[y]
			Line
	Features
		%r-4[y]
			%w-1	!=	Spirit
				Ghost
				Demon-Loa
				God_0`)
add(`/One Punch Man
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/One Piece
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Features
		%r-5[y]
			Fruits`)
add(`/Overlord
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Re: Monster
	@Languages[y]
		Japanese
	@Sources[y]
		%Manga`)
add(`/RWBY
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Creatures
		%r-5[y]
			%Grimm`)
add(`/Seilor Moon
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Creatures
		%Mind
			%r-5[y]
				%Human
				%Reptiloid
	Objects
		%Artefacts
			%r-5[y]
				Moon Diadema`)
add(`/Dragonball
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Energies
		%r-5[y]
			+1	!=	Ki?
	Objects
		%Artefacts
			%r-6[y]
				%Dragon Balls`)
add(`/Seishun Buta Yaro wa Bunny Girl-senpai no Yume wo Minai
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Soul Eater
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime`)
add(`/Slayers
	@Sources[y]
		%Fiction
			%Anime
				Slayers
	Creatures
		%Mind
			%r-5[y]
				%Human
					%l6.0?
						Lina Invers
	Users
		%r-5[y]
			e+5	!=	Mage
	Energies
		%r-5[y]
			+5	!=	Mana?`)
add(`/Toaru Majutsu no Index
	@Sources[y]
		%Fiction
			%Jap
				Toaru
					%Ranobe
						"Toaru Majutsu no Index"
						"Toaru Kagaku no Accelerator"
						"Toaru Kagaku no Railgun"
						"Shinyaku Toaru Majutsu no Index"
					%Manga
						"Toaru Majutsu no Index"
						"Toaru Kagaku no Accelerator"
						"Toaru Kagaku no Railgun"
					%Anime
						"Toaru Majutsu no Index"
						"Toaru Kagaku no Accelerator"
						"Toaru Kagaku no Railgun"
	Verse
		@Type
			Meta
		Original
			@Worlds
				Our	!=	Earth-2052?
	Energies
		%r-5[y]
			+5	!=	Mana
		%r-6/7[y]
			tl	!=	Telesma?
	Shells
		aimf	!=	AIM-field
	Schools
		Academ-City
	Levels
		0.0	!=	Zero-esper	!#, don't have ability
		1.0	!=	Weak	!# esper, can destroy 1 cube meter
		2.0	!=	Simple	!# esper, can destroy room
		3.0	!=	Normal	!# esper, can destroy house
		4.0	!=	Strong	!# esper, can destroy town
		5.0	!=	Very strong	!# esper, can destroy country
		5.5	!=	Sub-Angel(Immortal)	!#esper, can destroy continent
		6.0	!=	Insane, Angel(Immortal)	!# power of esper, can destroy planet's surface; not exist
	Directions
		%Languages[y]
			Ritual
			Rune
			Spell
		%Types[y]
			%Object
				Enchanted
	Users
		%r-5[y]
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
									@?
				%l5.0
					%Misc
						Super strength
							@Rank_Seven
								@Rank
									7
						6
							@Rank_Six
								@Rank
									6
						%Mental
							%Control
								@Mentalout
									@Rank
										5?
					%Elements
						%Misc
							Plasma
								@Meltdowner
									@Rank
										4
				%l5.5
					%Elements
						%Misc
							Electromagnetism
								@Railgun
									@Rank
										3
							Ether	!=	Dark matter
								@Darkmatter
									@Rank
										2
					%Elements
						%Other
							Motion
								Vector
									Direction
										@Accelerator
											@Rank
												1
											%Needs
												Touch
			e+5	!=	Mage
				Index
					@Index
				@Styl Magnus
		%r-6[y]
			Angel_0
			Imagine Breaker
				@Kamijo Touma
					%Needs
						Touch
		%r-7[y]
			e+7	!=	God_?
	Actions
		%r-5[y]
			%Action
				Protection
					Vector
						@Accelerator
	Objects
		%Artefacts
			%r-5[y]
				%Grimoires
					%Forbidden index's
				Cross?
				Sword of space?
	Creatures
		%Mind
			%r-5[y]
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
add(`/Zero no Tsukaima
	@Languages[y]
		Japanese
	@Sources[y]
		%Anime
	Energies
		%r-5[y]
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
		%Languages[y]
			Spell
			Rune
			Ritual
		%Types[y]
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
			%r-5[y]
				%Wands
				%Flying Ships
				%Rings
					of Water
					of Air
	Users
		%r-5[y]
			e+3+5	!=	Wizard
	Features
		%r-5[y]
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
			%r-5[y]
				%Human
				%Elv
				%Changeling
		%r-5[y]
			%Wyvern
			%Salamander
			%Beholder
	Features
		%r-4[y]
			%w-1	!=	Spirit
				Loa?`)
