function greeting(name){
    console.log(`Hola ${name}, Bienvenido al callback`);
}
function introduction(firstName, lastName, callback){
    const fullName = `${firstName} ${lastName}`;

    callback(fullName);
}

introduction('Rodrigo', 'Serrano', greeting);


