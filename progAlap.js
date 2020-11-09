const num = 10 // number
let string = 'Mate'; // string
let tomb = [3, 5, 3, 43, 12, -4]; // array, tomb
let objektum = { nev: 'Feri', kor: 29 }; // objektum
let logikai = false; // logikai ertek, boolean

/* 2. FELADAT:
A const deklaralt valtozok erteket nem tudjuk megvaltoztatni, let eseteben igen.
*/

/* 3. FELADAT A referencia szerinti atadas soran a valtozo eredeti erteke/tartalma is modosul, ilyen pl
 a tomb es objektum. Veluk ellentetben a primitiv valtozok, mint pl. a string vagy number eredeti erteke nem modosul
 a fuggvenymeghivast kovetoen.
*/

// 4. FELADAT:
const eldontes = (arr, szam) => {
    let containsElement = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === szam) {
            containsElement = true;
        };
    };
    return containsElement;
};

// 5. FELADAT:
let tombObj = [
   {name: 'Avocado', age: 2},
   {name: 'Korte', age: 4},
   {name: 'Alma', age: 1}
];

const maximum = (arr) => {
    let max = arr[0].age;
    let name = arr[0].name;
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i].age) {
            max = arr[i].age;
            name = arr[i].name;
        };
    };
    return name;
};

// 6. FELADAT:
const doubleDigits = () => {
    for (let i = 10; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
};

// 7. FELADAT:
tomb5 = [3, 5, 77, 2, 34, 1];
tomb6 = [43, 1, 23, 4, 42, 6];

const metszet = (arr1, arr2) => {
    let section = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let k = 0; k < arr2.length; k++) {
            if (arr1[i] === arr2[k] && !section.includes(arr1[i])) {
                section.push(arr1[i]);
            }
        };
    };
    return section;
};

// 9. FELADAT: 
const indices = (a, b) => {
    let dest = new Array(a);
    for (let i = 0; i < a; i++) {
        dest[i] = new Array(b);
    }
    for (let i = 0; i < a; i++) {
        for (let k = 0; k < b; k++) {
            dest[i][k] = i * k;
        };
    };
    return dest;
};