var grammar = tracery.createGrammar({
    origin: 'Your name is #dragonName#. Your parents are #parent# and #parent#. You live #inAHome#. #prizedThingSentence#',

    dragonName: '#_dragonName.capitalize#',
    _dragonName: [
        '#dragonNamePart##dragonNameFinalVowel#',
        '#dragonNamePart##dragonNameFinalPart#',
        '#dragonNamePart##_dragonName#',
    ],
    dragonNamePart: '#dragonNameVowel##dragonNameConsonant#',
    dragonNameFinalPart: '#dragonNameVowel##dragonNameFinalConsonant#',
    dragonNameConsonant: [
        'b',
        'c',
        'm',
        'r',
        's',
        'sh',
        't',
        'th',
        'v',
        'w',
        'y',
        'z',
    ],
    dragonNameFinalConsonant: [
        'b',
        'c',
        'm',
        'r',
        's',
        'sh',
        't',
        'th',
        // no v
        // no w
        // no y
        // no z
    ],
    dragonNameVowel: [
        'a',
        'aa',
        'æ',
        'au',
        'e',
        'ea',
        'i',
        'ii',
        'o',
        'u',
        'y',
    ],
    dragonNameFinalVowel: [
        'a',
        // no aa
        'æ',
        // no au
        'e',
        'ea',
        // no i
        // no ii
        // no o
        'u',
        // no y
    ],

    parent: '#dragonName# the #dragon#',
    dragon: '#dragonType# dragon',
    dragonType: [
        '#color#',
        '#gem#',
        '#metal#',
        '#unusualDragonType#',
    ],
    color: [
        'black',
        'blue',
        'brown',
        'cyan',
        'grey',
        'green',
        'magenta',
        'purple',
        'red',
        'yellow',
        'white',
    ],
    gem: [
        'amethyst',
        'diamond',
        'emerald',
        'ruby',
        'sapphire',
        'topaz',
        '#unusualGem#',
    ],
    unusualGem: [
        'aquamarine',
        'bismuth',
        'bloodstone',
        'fluorite',
        'garnet',
        'jade',
        'jasper',
        'lapislazuli',
        'malachite',
        'moonstone',
        'obsidian',
        'onyx',
        'opal',
        'pearl',
        'peridot',
        'spinel',
        'turquoise',
    ],

    metal: '#[damaged:tarnished][#setMetal#]_metal#',
    _metal: '#maybeDamaged##name#',
    maybeDamaged: [
        '', '', '', '', '', '', '', '', '',
        '#damaged# ',
    ],
    setMetal: [
        '[name:brass]',
        '[name:bronze]',
        '[name:copper]',
        '[name:gold]',
        '[name:iron][damaged:rusted]',
        '[name:silver]',
        '[name:steel][damaged:rusted]',
        '#unusualMetal#',
    ],
    unusualMetal: [
        '[name:adamantium][damaged:faded]',
        '[name:mercury][damaged:contaminated]',
        '[name:mithryl][damaged:faded]',
        '[name:platinum]',
        '[name:titanium]',
    ],

    unusualDragonType: [
        'fairy',
        'galaxy',
        '#color# glitter',
        'pseudo',
        'rainbow',
        'translucent',
    ],
    inAHome: 'in #prefixedHome.a#',
    prefixedHome: '#homePrefix# #home#',
    homePrefix: [
        'abandoned',
        'burnt',
        'flooded',
        'forgotten',
        'frozen',
        'haunted',
        'remote',
        'uncharted',
    ],
    home: [
        'cave',
        '#dungeon#',
        '#forest#',
        'grotto',
        '#house#',
        'mountain',
        'swamp',
        '#town#',
        'valley',
        '#activeOrInactive# volcano',
    ],
    dungeon: [
        'dungeon',
        'shrine',
        'temple',
    ],
    forest: [
        'clearing',
        'forest',
        'grove',
        'mushroom forest',
        'wood',
    ],
    house: [
        'cottage',
        'house',
        'hut',
        'mansion',
        'shack',
    ],
    town: [
        'city',
        'hamlet',
        'metropolis',
        'thorp',
        'town',
        'village',
    ],
    activeOrInactive: [
        'active',
        'inactive',
    ],

    prizedThingSentence: [
        "#prizedThing.capitalize# is what you hold most dear.",
        "Of all the things in the world, you most treasure #prizedThing#.",
        "The thing you prize most is #prizedThing#.",
        "You assign the most value out of all things to #prizedThing#.",
    ],
    prizedThing: [
        "books",
        "#fairness#",
        "#food#",
        "#power#",
        "#riches#",
        "#vengeance#",
    ],
    fairness: [
        "fairness",
        "justice",
    ],
    food: [
        "food",
        "good food",
        "sustenance",
    ],
    power: [
        "might",
        "power",
        "strength",
    ],
    riches: [
        "gems",
        "gold",
        "jewels",
        "riches",
        "treasure",
    ],
    vengeance: [
        "revenge",
        "vengeance",
    ],
})

grammar.addModifiers(baseEngModifiers)
