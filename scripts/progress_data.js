function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
}

progressData = {

    "2022-02-01":[
        ['ReviewExisting', 'Review Existing Systems', "Requirements",
        new Date(2021, 10, 26), null, daysToMilliseconds(7),  100,  null],

        ['Interview1', 'Conduct Interview', "Requirements",
        new Date(2021, 10, 29), null, daysToMilliseconds(1),  100,  ""],

        ['WriteUpRequirements', 'Write Up Requirements', "Requirements",
        null, null, daysToMilliseconds(7),  100,  "Interview1"],

        ['Design', 'Design', "Design",
        new Date(2021, 11, 2), null, daysToMilliseconds(15),  100,  "Interview1,ReviewExisting"],

        ['libgdx', 'Setup libGDX', "Implementation",
        new Date(2021, 11, 2), null, daysToMilliseconds(2),  100,  "Interview1"],

        ['intro', 'Setup Splashscreen', "Implementation",
        null, null, daysToMilliseconds(4),  100,  "libgdx"],

        ['resClass', 'Setup ResourceUtil Class', "Implementation",
        new Date(2021, 11, 11), null, daysToMilliseconds(4),  100,  "libgdx"],

        ['entClass', 'Setup Entity Class', "Implementation",
        new Date(2022, 00, 06), null, daysToMilliseconds(3), 100,  "resClass"],

        ['shipClass', 'Setup Ship Class', "Implementation",
        null, null, daysToMilliseconds(4),  100,  "entClass"],

        ['control', 'Setup Control System', "Implementation",
        null, null, daysToMilliseconds(2),  100,  "shipClass"],

        ['debug', 'Setup Debug System', "Implementation",
        new Date(2022, 00, 06), null, daysToMilliseconds(2),  100,  "libgdx"],

        ['worldClass', 'Setup World Class', "Implementation",
        new Date(2022, 00, 10), null, daysToMilliseconds(9),  100,  "libgdx,resClass"],

        ['minimap', 'Setup Minimap', "Implementation",
        null, null, daysToMilliseconds(3),  100,  "worldClass,resClass"],

        ['collisions', 'Setup World-Ent Collisions', "Implementation",
        null, null, daysToMilliseconds(2),  100,  "worldClass,entClass"],

        ['enemyAI', 'Setup AI-Controlled Ships', "Implementation",
        null, null, daysToMilliseconds(5),  100,  "worldClass,shipClass"],

        ['collegeClass', 'Setup College Classes', "Implementation",
        null, null, daysToMilliseconds(2),  100,  "entClass"],

        ['collegePlacement', 'Setup College Placement', "Implementation",
        null, null, daysToMilliseconds(1),  100,  "collegeClass,worldClass"],

        ['collegeCombat', 'Setup College (non-ship) Combat', "Implementation",
        null, null, daysToMilliseconds(5),  100,  "collegePlacement,cannonballs"],

        ['cannonballs', 'Setup Cannonball Firing System', "Implementation",
        null, null, daysToMilliseconds(2),  100,  "shipClass"],

        ['Deploy', 'Release Game', "Deploy",
		null, null, daysToMilliseconds(1), 100, "collegeCombat,enemyAI"]
    ],

    "2022-01-22":[
        ['ReviewExisting', 'Review Existing Systems', "Requirements",
        new Date(2021, 10, 26), null, daysToMilliseconds(7),  100,  null],

        ['Interview1', 'Conduct Interview', "Requirements",
        new Date(2021, 10, 29), null, daysToMilliseconds(1),  100,  ""],

        ['WriteUpRequirements', 'Write Up Requirements', "Requirements",
        null, null, daysToMilliseconds(7),  30,  "Interview1"],

        ['Design', 'Design', "Design",
        new Date(2021, 11, 2), null, daysToMilliseconds(15),  100,  "Interview1,ReviewExisting"],

        ['libgdx', 'Setup libGDX', "Implementation",
        new Date(2021, 11, 2), null, daysToMilliseconds(2),  100,  "Interview1"],

        ['intro', 'Setup Splashscreen', "Implementation",
        null, null, daysToMilliseconds(4),  100,  "libgdx"],

        ['resClass', 'Setup ResourceUtil Class', "Implementation",
        new Date(2021, 11, 11), null, daysToMilliseconds(4),  100,  "libgdx"],

        ['entClass', 'Setup Entity Class', "Implementation",
        new Date(2022, 00, 06), null, daysToMilliseconds(3), 90,  "resClass"],

        ['shipClass', 'Setup Ship Class', "Implementation",
        null, null, daysToMilliseconds(4),  90,  "entClass"],

        ['control', 'Setup Control System', "Implementation",
        null, null, daysToMilliseconds(2),  100,  "shipClass"],

        ['debug', 'Setup Debug System', "Implementation",
        new Date(2022, 00, 06), null, daysToMilliseconds(2),  100,  "libgdx"],

        ['worldClass', 'Setup World Class', "Implementation",
        new Date(2022, 00, 10), null, daysToMilliseconds(9),  100,  "libgdx,resClass"],

        ['minimap', 'Setup Minimap', "Implementation",
        null, null, daysToMilliseconds(3),  100,  "worldClass,resClass"],

        ['collisions', 'Setup World-Ent Collisions', "Implementation",
        null, null, daysToMilliseconds(2),  100,  "worldClass,entClass"],

        ['enemyAI', 'Setup AI-Controlled Ships', "Implementation",
        null, null, daysToMilliseconds(5),  0,  "worldClass,shipClass"],

        ['collegeClass', 'Setup College Classes', "Implementation",
        null, null, daysToMilliseconds(2),  0,  "entClass"],

        ['collegePlacement', 'Setup College Placement', "Implementation",
        null, null, daysToMilliseconds(1),  0,  "collegeClass,worldClass"],

        ['collegeCombat', 'Setup College (non-ship) Combat', "Implementation",
        null, null, daysToMilliseconds(5),  0,  "collegePlacement,cannonballs"],

        ['cannonballs', 'Setup Cannonball Firing System', "Implementation",
        null, null, daysToMilliseconds(2),  80,  "shipClass"],

        ['Deploy', 'Release Game', "Deploy",
		null, null, daysToMilliseconds(1), 0, "collegeCombat,enemyAI"]
    ],
    
    "2022-01-14":[
        ['ReviewExisting', 'Review Existing Systems', "Requirements",
        new Date(2021, 10, 26), null, daysToMilliseconds(7),  100,  null],

        ['Interview1', 'Conduct Interview', "Requirements",
        new Date(2021, 10, 29), null, daysToMilliseconds(1),  100,  ""],

        ['WriteUpRequirements', 'Write Up Requirements', "Requirements",
        null, null, daysToMilliseconds(7),  30,  "Interview1"],

        ['Design', 'Design', "Design",
        new Date(2021, 11, 2), null, daysToMilliseconds(15),  100,  "Interview1,ReviewExisting"],

        ['libgdx', 'Setup libGDX', "Implementation",
        new Date(2021, 11, 2), null, daysToMilliseconds(2),  100,  "Interview1"],

        ['intro', 'Setup Splashscreen', "Implementation",
        null, null, daysToMilliseconds(4),  100,  "libgdx"],

        ['resClass', 'Setup ResourceUtil Class', "Implementation",
        new Date(2021, 11, 11), null, daysToMilliseconds(4),  20,  "libgdx"],

        ['entClass', 'Setup Entity Class', "Implementation",
        new Date(2022, 00, 06), null, daysToMilliseconds(3),  50,  "resClass"],

        ['shipClass', 'Setup Ship Class', "Implementation",
        null, null, daysToMilliseconds(4),  0,  "entClass"],

        ['control', 'Setup Control System', "Implementation",
        null, null, daysToMilliseconds(2),  0,  "shipClass"],

        ['debug', 'Setup Debug System', "Implementation",
        new Date(2022, 00, 17), null, daysToMilliseconds(2),  0,  "libgdx"],

        ['worldClass', 'Setup World Class', "Implementation",
        new Date(2022, 00, 13), null, daysToMilliseconds(9),  15,  "libgdx,resClass"],

        ['minimap', 'Setup Minimap', "Implementation",
        null, null, daysToMilliseconds(3),  0,  "worldClass,resClass"],

        ['collisions', 'Setup World-Ent Collisions', "Implementation",
        null, null, daysToMilliseconds(2),  0,  "worldClass,entClass"],

        ['enemyAI', 'Setup AI-Controlled Ships', "Implementation",
        null, null, daysToMilliseconds(5),  0,  "worldClass,shipClass"],

        ['collegeClass', 'Setup College Classes', "Implementation",
        new Date(2022, 00, 06), null, daysToMilliseconds(2),  0,  "resClass"],

        ['collegePlacement', 'Setup College Placement', "Implementation",
        null, null, daysToMilliseconds(1),  0,  "collegeClass,worldClass"],

        ['collegeCombat', 'Setup College (non-ship) Combat', "Implementation",
        null, null, daysToMilliseconds(5),  0,  "collegePlacement,cannonballs"],

        ['cannonballs', 'Setup Cannonball Firing System', "Implementation",
        null, null, daysToMilliseconds(2),  0,  "shipClass"],

        ['Deploy', 'Release Game', "Deploy",
		null, null, daysToMilliseconds(1), 0, "collegeCombat,enemyAI"]
    ],

    "2021-10-26":[
        ['ReviewExisting', 'Review Existing Systems', "Requirements",
        new Date(2021, 10, 26), null, daysToMilliseconds(7),  10,  null],

        ['Interview1', 'Conduct Interview', "Requirements",
        new Date(2021, 10, 29), null, daysToMilliseconds(1),  100,  ""],

        ['Prototype', 'Low-fidelity Prototype', "Requirements",
        null, null, daysToMilliseconds(3),  0,  "Interview1,ReviewExisting"],

        ['Interview2', 'Conduct 2nd Interview', "Requirements",
        null, null, daysToMilliseconds(1),  0,  "Prototype"],

        ['WriteUpRequirements', 'Write Up Requirements', "Requirements",
        null, null, daysToMilliseconds(7),  0,  "Interview2"],

        ['DesignBack', 'Design Backend', "Design",
        null, null, daysToMilliseconds(20),  4,  "Interview1,ReviewExisting"],

        ['DesignFront', 'Design Frontend', "Design",
        null, null, daysToMilliseconds(20),  0,  "Interview1,ReviewExisting"],

        ['ImplementBack', 'Implement Backend', "Implementation",
        null, null, daysToMilliseconds(7*4),  4,  "Prototype"],

        ['ImplementFront', 'Implement Frontend', "Implementation",
        null, null, daysToMilliseconds(7*4),  1,  "Prototype"],

        ['Deploy', 'Release Game', "Deploy",
		null, null, daysToMilliseconds(1), 0, "ImplementBack,ImplementFront"]
    ]





}