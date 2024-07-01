// Define Our Tuple
let ourTuple: [number, boolean, string] = [0, true, "Test",];
// Modification / Mutable
ourTuple.push("");
// Re-assigning
ourTuple = [0, false, "UI"];


// Define our Tuple2
const ourTuple2: [number, boolean, string] 
= [0, true, "Test"];
// Modification / Mutable
ourTuple2.push("");
// Re-assigning
ourTuple2 = [0, false, "UI"];


// Define Our tuple3
const ourTuple3: readonly [number, boolean, string] = [0, true, "Test"];
// Modification / Mutable
ourTuple3.push("");
// Re-assigning
ourTuple3 = [0, false, "UI"];


// Define Our tuple3
let ourTuple4: readonly [number, boolean, string] = [0, true, "Test"];
// Modification / Mutable
ourTuple4.push("");
// Re-assigning
ourTuple4 = [0, false, "UI"];