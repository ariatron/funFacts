const randomNumFun = num => {return Math.floor(Math.random() * num)
    //Gets random number through num - 1
};

// object literal
const funNonsense = {
    timePeriod: ['1400s', '1500s', '100 BC', '2000s', '1772'],
    honedSkills: ['archery', 'dancing', 'horseback riding', 'sailing', 'farming'],
    survivalRate: ['dead by 25 (hard life)', 'old age', 'events unknown', 'heart attack', 'the fever']
};

// Store 'history' in an array
let tempStorage = [];

// iterate through the object funNonsense
for (let i in funNonsense) {
    let queueIndex = randomNumFun(funNonsense[i].length)
    console.log(i);

    // Customize the output
    switch(i) {
        case 'timePeriod':
            tempStorage.push(`Your oldest documented ancestor is from ${funNonsense[i][queueIndex]}.`)
            break;
        case 'honedSkills':
            tempStorage.push(`You have an ancestor who was known for ${funNonsense[i][queueIndex]}.`)
            break;
        case 'survivalRate':
            tempStorage.push(`There was one ancestor whose cause of death was ${funNonsense[i][queueIndex]}.`)
            break;
        default:
            tempStorage.push('Need a bit more data, hun.');
    }
}

function formatFunNonsense(details) {
    const cat = [
        ' /\\_/\\ ',
        '( o.o )',
        ' > ^ < '
    ];  
    const formatted = tempStorage.join('\n')
    for (const row of cat) {
        console.log(row);
    }
    console.log(formatted);
}

formatFunNonsense(tempStorage);
