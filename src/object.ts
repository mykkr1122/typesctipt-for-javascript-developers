export {};

// objectは制約が甘い
let profile1: object = {name: 'Ham' };
profile1 = { birthYear: 1976};

let profile2: { 
   name: string 
} = {name: 'Ham' };
// profile2 = { birthYear: 1976};
profile2 = { name: 'Nami'};
