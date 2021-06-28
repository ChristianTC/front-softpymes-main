/*
INSTRUCCIONES:

Crear una función tomando la variable "companies" como parámetro y reemplazar:

1. Todos los valores "undefined" en "usuarios" por un string vacío.

2. El nombre de cada "company" debe tener la primer letra en mayúscula.

3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.

4. Las "companies" deben ordenarse por su total de "user" (orden decreciente).

5. Los "users" de cada "company" deben aparecer en orden alfabético.
*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const companies = createAll();

exercise1(companies);

cleanConsole(1, companies);
console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ');


// VIEW USERS
// for (let index = 0; index < companies.length; index++) {
//     console.log(companies[index]);
// }

// FUNCTIONS OF THE EXERCICE 1
function exercise1(companies) {

    undefinedToString(companies);

    firstLetterToCapitalLetter(companies);

    firstLetterToCapitalLetterUsers(companies);

    order(companies);

    orderUsers(companies);

    return companies;
}

// 1. FUNCTION TO CONVERT "UNDEFINED" TO STRING FOR COMPANIES USERS
function undefinedToString(companies) {
    for (let i = 0; i < companies.length; i++) {
        let company = companies[i];
        for (let j = 0; j < company['users'].length; j++) {
            if(companies[i]['users'][j]['firstName'] === undefined) companies[i]['users'][j]['firstName'] = ''
            if(companies[i]['users'][j]['lastName'] === undefined) companies[i]['users'][j]['lastName'] = ''
            if(companies[i]['users'][j]['age'] === undefined) companies[i]['users'][j]['age'] = ''
            if(companies[i]['users'][j]['car'] === undefined) companies[i]['users'][j]['car'] = ''
            if(companies[i]['users'][j]['id'] === undefined) companies[i]['users'][j]['id'] = ''
        }
    }
}

// 2. FUNCTION TO CONVERT FIRST LETTER OF THE COMPANY TO CAPITAL LETTER
function firstLetterToCapitalLetter(companies) {
    for (let i = 0; i < companies.length; i++) {
        companies[i]['name'] = companies[i]['name'][0].toUpperCase() + companies[i]['name'].slice(1);
        // console.log(companies[i]['name']);
    }
}

// 3. FUNCTION TO CONVERT FIRST LETTER OF THE USERS
function firstLetterToCapitalLetterUsers(companies) {
    for (let i = 0; i < companies.length; i++) {
        let company = companies[i];
        for (let j = 0; j < company['users'].length; j++) {
            let firstName = companies[i]['users'][j]['firstName'];
            let lastName = companies[i]['users'][j]['lastName'];
            companies[i]['users'][j]['firstName'] = firstName.charAt(0).toUpperCase() + firstName.slice(1);
            companies[i]['users'][j]['lastName'] = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        }
    }
}

// 4. ORDER
function order(companies) {
    for (let k = 1; k < companies.length; k++) {
        for (let i = 0; i < (companies.length - k); i++) {
            if (companies[i]['usersLength'] < companies[i + 1]['usersLength']) {
                let aux = companies[i];
                companies[i] = companies[i + 1];
                companies[i + 1] = aux;
            }
        }
    }
}

// 5. ORDER USERS (firstName)
function orderUsers(companies) {
    for (let index = 0; index < companies.length; index++) {
        for (let k = 1; k < companies[index]['users'].length; k++) {
            for (let i = 0; i < (companies[index]['users'].length - k); i++) {
                if (companies[index]['users'][i]['firstName'] > companies[index]['users'][i + 1]['firstName']) {
                    let aux = companies[index]['users'][i];
                    companies[index]['users'][i] = companies[index]['users'][i + 1];
                    companies[index]['users'][i + 1] = aux;
                }
            }
        }
    }
}
