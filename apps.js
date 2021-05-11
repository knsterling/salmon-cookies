const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

const seattle = {
    name: 'Seattle',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    avgCookiesPerSale: 6.3,
    custEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour))
        }
    },

    calcCookiesEachHour: function () {
        this.calcCustEachHour();
        for (let i = 0; i < hours.length; i++) {
            const oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale)
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies += oneHour;
        }
    },

    render() {
        this.calcCookiesEachHour();
        // grabbed the id from the DOM <ul> </ul>
        const unorderedList = document.getElementById('seattle')
        for (let i = 0; i < hours.length; i++) {
            // <li>6am: cookies</li>
            const listItem = document.createElement('li')
            // 6am: 16 cookies
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'
            unorderedList.appendChild(listItem);

            console.log(listItem)
        }
        // <li>Total: 34543 cookies</li>
        const listItem = document.createElement('li')
        listItem.textContent = 'total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem)
    }
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const allShops = [seattle,
    // tokyo, 
    // dubai, 
    // paris, 
    // lima
];
(function renderAllShops() {
    for (let i = 0; i < allShops.length; i++) {
        allShops[i].render();
    }
})()
//     calcCustEachHour: function () {
//         console.log(this.randomCust + this.avgCookiesPerSale)
//     },
//     render() {
//         document.createElement()
//         Element.addEventListener('hover', this.calcCookiesEachHour)
//         Element.addEventListener('submit', calcCustEachHour)
//     }
// };

const tokyo = {
    name: 'Tokyo',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerSale: 1.2,
    custEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,

    calcCustEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour))
        }
    },

    calcCookiesEachHour: function () {
        this.calcCustEachHour();
        for (let i = 0; i < hours.length; i++) {
            const oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale)
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies += oneHour;
        }
    },

    render() {
        this.calcCookiesEachHour();
        // grabbed the id from the DOM <ul> </ul>
        const unorderedList = document.getElementById('tokyo')
        for (let i = 0; i < hours.length; i++) {
            // <li>6am: cookies</li>
            const listItem = document.createElement('li')
            // 6am: 16 cookies
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'
            unorderedList.appendChild(listItem);

            console.log(listItem)
        }
        // <li>Total: 34543 cookies</li>
        const listItem = document.createElement('li')
        listItem.textContent = 'total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem)
    }
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const allShops2 = [tokyo,
    // seattle, 
    // dubai, 
    // paris, 
    // lima
];
(function renderAllShops2() {
    for (let i = 0; i < allShops2.length; i++) {
        allShops2[i].render();
    }
})()

//     calcCustEachHour: function () {
//         console.log(this.randomCust + this.avgCookiesPerSale)
//     },
//     render() {
//         document.createElement
//         Element.addEventListener('hover', this.calcCookiesEachHour)
//         Element.addEventListener('submit', calcCustEachHour)
//     }
// };

const dubai = {
    name: 'Dubai',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookiesPerSale: 3.7,
    custEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour))
        }
    },

    calcCookiesEachHour: function () {
        this.calcCustEachHour();
        for (let i = 0; i < hours.length; i++) {
            const oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale)
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies += oneHour;
        }
    },

    render() {
        this.calcCookiesEachHour();
        // grabbed the id from the DOM <ul> </ul>
        const unorderedList = document.getElementById('dubai')
        for (let i = 0; i < hours.length; i++) {
            // <li>6am: cookies</li>
            const listItem = document.createElement('li')
            // 6am: 16 cookies
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'
            unorderedList.appendChild(listItem);

            console.log(listItem)
        }
        // <li>Total: 34543 cookies</li>
        const listItem = document.createElement('li')
        listItem.textContent = 'total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem)
    }
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const allShops3 = [
    // tokyo
    // seattle, 
    dubai
    // paris, 
    // lima
];
(function renderAllShops3() {
    for (let i = 0; i < allShops3.length; i++) {
        allShops3[i].render();
    }
})()

//     calcCustEachHour: function () {
//         console.log(this.randomCust + this.avgCookiesPerSale)
//     },
//     render() {
//         document.createElement
//         Element.addEventListener('hover', this.calcCookiesEachHour)
//         Element.addEventListener('submit', calcCustEachHour)
//     }
// };

const paris = {
    name: 'Paris',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookiesPerSale: 2.3,
    custEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour))
        }
    },

    calcCookiesEachHour: function () {
        this.calcCustEachHour();
        for (let i = 0; i < hours.length; i++) {
            const oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale)
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies += oneHour;
        }
    },

    render() {
        this.calcCookiesEachHour();
        // grabbed the id from the DOM <ul> </ul>
        const unorderedList = document.getElementById('paris')
        for (let i = 0; i < hours.length; i++) {
            // <li>6am: cookies</li>
            const listItem = document.createElement('li')
            // 6am: 16 cookies
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'
            unorderedList.appendChild(listItem);

            console.log(listItem)
        }
        // <li>Total: 34543 cookies</li>
        const listItem = document.createElement('li')
        listItem.textContent = 'total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem)
    }
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const allShops4 = [
    // tokyo
    // seattle, 
    // dubai
    paris
    // lima
];
(function renderAllShops4() {
    for (let i = 0; i < allShops4.length; i++) {
        allShops4[i].render();
    }
})()

//     calcCustEachHour: function () {
//         console.log(this.randomCust + this.avgCookiesPerSale)
//     },
//     render() {
//         document.createElement
//         Element.addEventListener('hover', this.calcCookiesEachHour)
//         Element.addEventListener('submit', calcCustEachHour)
//     }
// };

const lima = {
    name: 'Lima',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookiesPerSale: 4.6,
    custEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.custEachHour.push(random(this.minCustPerHour, this.maxCustPerHour))
        }
    },

    calcCookiesEachHour: function () {
        this.calcCustEachHour();
        for (let i = 0; i < hours.length; i++) {
            const oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerSale)
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies += oneHour;
        }
    },

    render() {
        this.calcCookiesEachHour();
        // grabbed the id from the DOM <ul> </ul>
        const unorderedList = document.getElementById('lima')
        for (let i = 0; i < hours.length; i++) {
            // <li>6am: cookies</li>
            const listItem = document.createElement('li')
            // 6am: 16 cookies
            listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies'
            unorderedList.appendChild(listItem);

            console.log(listItem)
        }
        // <li>Total: 34543 cookies</li>
        const listItem = document.createElement('li')
        listItem.textContent = 'total: ' + this.totalDailyCookies + ' cookies';
        unorderedList.appendChild(listItem)
    }
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const allShops5 = [
    // tokyo
    // seattle, 
    // dubai
    // paris
    lima
];
(function renderAllShops5() {
    for (let i = 0; i < allShops5.length; i++) {
        allShops5[i].render();
    }
})()


//     calcCustEachHour: function () {
//         console.log(this.randomCust + this.avgCookiesPerSale)
//     },
//     render() {
//         document.createElement
//         Element.addEventListener('hover', this.calcCookiesEachHour)
//         Element.addEventListener('submit', this.calcCustEachHour)
//     }
// };

// CONSTRUCTOR FUNCTIONS
function cookieStand(name, minCustPerHour, maxCustPerHour, avgCookiesPerSale,
    custEachHour, cookiesEachHour, totalDailyCookies) {
    this.country = name;
    this.minimum = minCustPerHour;
    this.maximum = maxCustPerHour;
    this.average = avgCookiesPerSale;
    this.customer = custEachHour;
    this.cookies = cookiesEachHour;
    this.total = totalDailyCookies;
}

const cookieLima = new cookieStand('lima', 2, 16, 4.6, [], [], 0)
const cookieParis = new cookieStand('paris', 20, 38, 2.3, [], [], 0)
const cookieDubai = new cookieStand('dubai', 11, 38, 3.7, [], [], 0)
const cookieTokyo = new cookieStand('tokyo', 3, 24, 1.2, [], [], 0)
const cookieSeattle = new cookieStand('seattle', 23, 65, 6.3, [], [], 0)

cookieStand.prototype.location = function () {
    return this.country + '' + this.minimum
}



