var grammar = tracery.createGrammar({
    origin: 'Your name is #dragonName#. Your parents are #parent# and #parent#. You live #inAHome#.',

    dragonName: '#_dragonName.capitalize#',
    _dragonName: [
        '#dragonNamePart#',
        '#dragonNamePart##dragonNamePart#',
        '#dragonNamePart##_dragonName#',
    ],
    dragonNamePart: '#dragonNameVowel##dragonNameConsonant#',
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
    dragonNameVowel: [
        'a',
        'æ',
        'e',
        'i',
        'o',
        'u',
        'y',
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
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
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
    ]
})

grammar.addModifiers(baseEngModifiers)