//this is totally storage drawers and not functional storage i promise you

ServerEvents.recipes(event => {

//basic oak drawers
    event.shaped('functionalstorage:oak_1', 
        [

            'ABA',
            'CDC',
            'ABA'

        ],
        {

            A:['gtceu:iron_screw'],
            B:['minecraft:oak_slab'],
            C:['minecraft:oak_planks'],
            D:['minecraft:chest']

        })

    event.shaped('functionalstorage:oak_2',
        [

            'EFE',
            'GGG',
            'EFE',

        ],
        {

            E:['gtceu:iron_screw'],
            F:['functionalstorage:oak_1'],
            G:['minecraft:oak_slab']

        }
    )
    event.shaped('functionalstorage:oak_4', 
        [

            'HIH',
            'IKI',
            'HIH'

        ],
        {

            H:['functionalstorage:oak_1'],
            I:['gtceu:iron_screw'],
            K:['minecraft:oak_planks']

        }
    )



//Fluid drawers



//Specialized Drawers

event.shaped('functionalstorage:storage_controller',
    [

        'LML',
        'NON',
        'LML',

    ],
    {

        L:['gtceu:wrought_iron_plate'],
        M:['gtceu:basic_electronic_circuit'],
        N:['functionalstorage:oak_1'],
        O:['gtceu:lv_machine_hull']

    }
).id('functionalstorage:storage_controller')

//tools



//upgrades

})