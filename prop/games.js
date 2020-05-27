
add(`/Assasin's Creed
	@Sources[y]
		%Games`)
add(`/Deus Ex
	@Sources[y]
		%Games`)
add(`/Dragon Age
	@Languages[y]
		English
	@Sources[y]
		%Games
	Space
		n
			Fade
			~1.0 ~0.0	!=	Yav
	Materials
		%Metals
			Lyrium`)
add(`/Dragonlance
	@Languages[y]
		English`)
add(`/Dungeons and Dragons
	@Languages[y]
		English
	@Sources[y]
		%Games`)
add(`/Fallout
	@Sources[y]
		%Games`)
add(`/League of Legends
	@Languages[y]
		English`)
add(`/Mass Effect
	@Languages[y]
		English
	@Sources[y]
		%Games
	Creatures
		%Mind
			%r-5[y]
				%Human
	Users
		%r-5[y]
			e+4	!=	Biotic
	Energies
		%r-5[y]
			+4	!=	Psy?`)
add(`/Minecraft
	@Authors[y]
		Notch	!=	Markus Persson
		Jebb
		Grum
	@Languages[y]
		English
	@Sources[y]
		%Games
			%Computer
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
			Hell	!=	Nether World
			End
			Matteral	!=	Over World
	Features
		%r-4[y]
			%w-1	!=	Spectator Mode
	Users
		%r-6[y]
			%Immortal	!=	Godmode
		%r-7[y]
			e+7	!=	Creative gamemode, Admin perms
	Creatures
		%r-3[y]
			%Pig
			%Cow
			%Horse
			%Rabbit
			%Sheep
		%r-4[y]
			%w+1	!=	Undead
				%Zombie
				%Skeleton
					%Normal
					%Wither
			Spider
		%r-5[y]
			%Dragon
				%Ender
			%Enderman
			%Creeper
			%Ifrit
			%Wither
			%Ghust
	Objects
		%Artefacts
			%r-5[y]
				%Ender's
					%Eye
					%Egg
					%Perl
	Materials
		%Metals
			Iron
			Gold
			Netherit
		%Powder
			Gun
			Fire
			Light
			Red
			Netherit
			Iron
			Gold
		Obsidian
		Bedrock
		%Gems
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
		%Metals
			Platina
			Silver
Thaumcraft
Bloodmagic
Mekanism
	Materials
		%Metals
			Osmium
		%Alloy
			Steel
Forestry
	Materials
		Apatite
Industrialcraft
	Materials
		%Metals
			Iridium
			Silver
			Tin
			Copper
			Uranium
			Plutonium
		Matter
	Objects
		%Artefacts
			%r-5[y]
				%Armor
					%Quantum
					%Nano
				%Steelarms
					%Nanosaber
				%Weapon
					%Laser
			%r-7[y]
				%Developer Tool	!=	Debug Tool, Adamant Rod
Buildcraft
Ender IO
	Objects
		%Artefacts
			%r-5[y]
				%Armor
					%Ender
				%Steelarms
					%Ender
Gravisuite
	Objects
		%Artefacts
			%r-5[y]
				%Armor
					%Gravi-Chestplate
				%Steelarms
					%Vajra
Gregtech
Terrafirmacraft
Applied Energistics
	Objects
		%Artefacts
			%r-5[y]
				%Appeng
					%Monitors
					%Autocrafts`)
add(`/Warcraft
	@Languages[y]
		English
	@Sources[y]
		%Games
	Creatures
		%Mind
			%r-5[y]
				%Human
				%Orc_2`)
add(`/Portal
	@Languages[y]
		English
	@Sources[y]
		%Games
	Objects
		%Artefacts
			%r-5[y]
				%Portal Gun`)
add(`/Starcraft
	@Sources[y]
		%Games
			%Computer`)
add(`/Dark souls
	@Languages[y]
		English
	@Sources[y]
		%Games`)
add(`/Devil May Cry
	@Languages[y]
		English
	@Sources[y]
		%Games
	Creatures
		%Mind
			%r-5[y]
				%Human
					%l5.0
						Dante`)
add(`/Bioshock
	@Languages[y]
		English
	@Sources[y]
		%Games`)
add(`/Diablo
	@Languages[y]
		English
	@Sources[y]
		%Games
			%Computer
				1
				2
	Objects
		%Artefacts
			%r-6[y]
				Horadrical Cube`)
add(`/Witcher
	@Authors[y]
		Andrzej Sapkowski
	@Languages[y]
		Polish
	@Sources[y]
		%Games
			%Computer
	Creatures
		%r-5[y]
			%Cockatrice
			%Basilisk
		%Mind
			%r-5[y]
				%Human
					%l3.0
						Geralt
	Features
		%r-5[y]
			Witcher
			Mage?
	Directions
		%Languages[y]
			Mudra
	Actions
		%r-5[y]
			%Elements
				%Basic
					Air	!=	Aard
					Water	!=	Aksiy
					Earth	!=	Kven
					Fire	!=	Igni
			%Action[y]
				Protection	!=	Heliotrop
				Pomehi	!=	Irden`)
add(`/Skyrim
	@Languages[y]
		English
	@Sources[y]
		%Games
	Creatures
		%Mind
			%r-5[y]
				%Human
				%Dragon
	Users
		%r-5[y]
			e+5	!=	Mage`)
add(`/Warhammer
	@Languages[y]
		English
	@Sources[y]
		%Games
	Creatures
		%Mind
			%r-5[y]
				%Human
	Materials
		Noktilit
		%Metals
			Adamantium
	Energies
		%r-5[y]
			+4	!=	Psy?
	Users
		%r-5[y]
			e+4	!=	Psyker`)
