interface Animal {
    name: string
}

interface Human {
    firstName: string,
    lastName: string
}

const getDisplayName = (item : Animal | Human) : {displayName: string} => {
    if ('name' in item) {
        return {
            displayName: item.name
        }
    }
    return {
        displayName: item.firstName + ' ' + item.lastName
    }
} 

// type AnimalOrHuman<T extends Human | Animal> = T extends Human ? {humanName: string} : {animalName: string}

// const getDisplayName = <TItem extends Animal | Human> (item : TItem) : AnimalOrHuman <TItem> => {
//     if ('name' in item) {
//         return {
//             animalName: item.name
//         } as AnimalOrHuman <TItem>
//     }
//     return {
//         humanName: item.firstName + ' ' + item.lastName
//     } as  AnimalOrHuman <TItem>
    
// }

const result = getDisplayName({name: 'Patch'})

const result2 = getDisplayName({
    firstName: 'Matt',
    lastName: 'Robert'
})

console.log({result2})
