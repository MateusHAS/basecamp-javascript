function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value == 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Mateus', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Luiz', 'Admin');

console.log(getAdmins(usuarios));