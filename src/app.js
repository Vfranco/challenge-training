var scanf = require('scanf');

var contactList = [];

console.log('Mi Agenda Telefonica');
console.log();

console.log('1. Agregar Contacto');
console.log('2. Ver mi lista de contactos');
console.log('3. Eliminar un Contacto');
console.log('4. Salir');
console.log();

console.log('Escoje tu opción:');
let choosedOption;
let goOut;

do {
    choosedOption = scanf('%d');
    goOut = choosedOption;

    switch (choosedOption) {
        case 1:
            console.log('Ingresa el nombre de tu contacto:');
            let contactName = scanf('%S');
            console.log('Ingresa el número de tu contacto:');
            let phoneContact = scanf('%S');

            let schedule = {};

            schedule['name'] = contactName;
            schedule['phone'] = phoneContact;

            contactList.push(schedule);
            break;
        case 2:
            console.log('Mi Lista de Contactos');
            console.log();

            contactList.forEach((schedule, index) => {
                console.log(`${index}: ${schedule.name} - ${schedule.phone}`)
            });
            break;
        case 3:
            console.log('Ingrese el nombre del contacto a eliminar:');
            let findContactName = scanf('%S');

            let indexFound = contactList.findIndex(schedule => schedule.name.toLocaleLowerCase().includes(findContactName));
            contactList.splice(indexFound, 1);

            break;
        default:
            console.log('Error: no existe esa opción');
            break;
    }
} while (goOut !== 4)

