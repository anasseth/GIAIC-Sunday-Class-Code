const enum ROLE {
    TEACHER = 33,
    STUDENT = 45,
    EXAMINER = 232,
    SECURITY_GUARD = 68
}

let ROLE_Object = {
    TEACHER: 33,
    STUDENT: 45,
    EXAMINER: 232,
    SECURITY_GUARD: 68
}

let userId = 1;

if (userId == ROLE.TEACHER) {
    // Do this
}
else if (userId == ROLE.STUDENT) {
    // 
}

// Compiled in JS without const key
if (userId == ROLE.STUDENT) {
    // 
}

// Compiled in JS with const key
if (userId == 45) {
    // 
}
