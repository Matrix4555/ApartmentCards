import { ADD_CARD, LIKE } from "./types";

export function addCard() {
    return async dispatch => {

        const url = 'https://jsonplaceholder.typicode.com/posts/';
        let entities;
        try {
            const response = await fetch(url);
            entities = await response.json();
        } catch {
            alert('NO CONNECTION');
            return;
        }

        entities = entities[getRandom(0, 100)];         // get random data from an array in the range 0-100
        const rooms = getRandom(1, 4);

        const newCard = {
            img: getImage(),
            street: getStreet(entities.title),
            description: entities.body,
            price: getPrice(rooms),
            rooms: rooms,
            phone: getPhone(),
            like: false
        }

        await dispatch({
            type: ADD_CARD,
            payload: newCard
        });
    }
}

export function like(index) {
    return {
        type: LIKE,
        payload: index
    }
}

function getStreet(title) {

    const street = title.split(' ');
    const part1 = street[0].charAt(0).toUpperCase() + street[0].slice(1);
    const part2 = street[1].charAt(0).toUpperCase() + street[1].slice(1);

    const number = getRandom(1, 100);
    const random = getRandom(0, 2);
    const secondNumber = random ? getRandom(1, 100) : null;

    return `${part1} ${part2} Street, ${number}${random ? '/' + secondNumber : ''}`;
}

function getPrice(rooms) {
    const addition1 = getRandom(1, 10);
    const addition2 = getRandom(1, 10);
    let price = 100000 * rooms;
    price += 10000 * addition1;
    price += 1000 * addition2;
    return `$${price}`;
}

function getPhone() {
    let number = '';
    let count = 10;
    while(count--) {
        const digit = getRandom(1, 9);
        number = number + digit.toString();
    }
    number = '+1(' + number.slice(0, 3) + ')' + number.slice(3);
    return number;
}

function getRandom(from, to) {
    return Math.floor(Math.random() * to) + from;
}

function getImage() {
    const option = getRandom(0, 2);
    const url = `https://cdn${option + 1}.kvartelia.ru/small/`;
    const base = option ? [
        '001780/17804787', '002053/20532492', '003289/32895460',
        '003127/31270529', '001929/19299948', '001661/16611715',
        '003165/31651333', '003177/31779811', '001830/18309046',
        '003210/32100020', '001661/16611715', '003122/31229981'
    ] : [
        '002958/29580879', '002608/26084050', '002939/29396661',
        '002647/26474683', '003033/30334424', '002939/29396760',
        '002817/28179045', '002922/29221379', '002642/26425240',
        '002729/27295404', '002766/27662820', '002480/24809072'
    ];
    return url + base[getRandom(0, base.length)] + '.jpg';
}
