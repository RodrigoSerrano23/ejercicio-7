var promesa1 = function() {
    return new Promise(function(resolver, cancelar) {
        setTimeout(function() {
            console.log("han pasado 4 segundos");
            resolver();
        }, 4000);
    });
}
var promesa2 = function() {
    return new Promise(function(resolver, cancelar) {
        setTimeout(function() {
            console.log("ha pasado 1 segundo");
            resolver();
        }, 1000);
    });
}

promesa1().then(promesa2).then(function() {
    console.log("se termino la promesa");
});

