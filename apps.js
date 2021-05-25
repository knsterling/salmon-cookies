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


// CONSTRUCTOR FUNCTIONS
const hours = ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm'];
const shops = [];
let table;

function cookieStand(name, minCustPerHour, maxCustPerHour, avgCustPerHour) {
    this.name = name;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCustPerHour = avgCustPerHour;
    this.id = name.replace('', '').toLowerCase();
    this.hourlyCookies = [];
    this.dailyCookies = 0;
    shops.push(this);

    this.generateHourly();
}

cookieStand.prototype.generateRandom = function (min, max) {
    return Math.random() * (max - min) + min;
};

cookieStand.prototype.generateHourly = function () {
    for (let i = 0; i < hours.length; i++) {
        const cookie = Math.floor(this.avgCustPerHour * this.generateRandom(this.minCustPerHour,
            this.maxCustPerHour));
        this.hourlyCookies.push(cookie);
        this.dailyCookies += cookie;
    }
};

function renderTable() {
    tbl = document.createElement('table');
    tbl.id = 'table';

    const tHead = document.createElement('tHead');
    // tHead.id = 't-Head';
    const tBody = document.createElement('tbody');
    tBody.id = 't-Body';
    const tFoot = document.createElement('tFoot');
    tFoot.id = 't-Foot';

    const trEl_one = document.createElement('tr');
    const thEl_one = document.createElement('th');
    thEl_one.textContent = '';
    trEl_one.appendChild(thEl_one);

    for (let i = 0; i < hours.length; i++) {
        const thEl_two = document.createElement('th');
        thEl_two.textContent = hours[i];
        trEl_one.appendChild(thEl_two);
    }

    const thEl_three = document.createElement('th');
    thEl_three.textContent = 'Totals';
    trEl_one.appendChild(thEl_three);

    tHead.appendChild(tHead);

    tbl.appendChild(tHead);
    tbl.appendChild(tBody);
    tbl.appendChild(tFoot);

    document.getElementById('store_data').appendChild(tbl);
}

function renderStore(store) {
    const tableBody = document.getElementById('t-body');
    const trEl_two = document.createElement('tr');
    const thEl_four = document.createElement('th');
    thEl_four.textContent = store.name;
    trEl_two.id = store.id;
    trEl_two.appendChild(thEl_four);

    for (let j = 0; j < hours.length; j++) {
        const tdEl_one = document.createElement('td');
        tdEl_one.textContent = store.hourlyCookies[j];
        trEl_two.appendChild(tdEl_one);
    }

    const tdEl_two = document.createElement('td');
    tdEl_two.textContent = store.dailyCookies;
    trEl_two.appendChild(tdEl_two);

    tableBody.appendChild(trEl_two);
}

function renderAllStores() {
    const tBody = document.getElementById('t-body');
    tBody.innerHTML = '';

    for (let i = 0; i < shops.length; i++) {
        renderStore(shops[i]);
    }

    renderTotals();
}

function renderNew(name, minimum, maximum, average) {
    new CookieStand(name, minimum, maximum, average);
    renderAllStores();
}

function renderUpdate(shop, min, max, avg) {
    const trEl = document.getElementById(shop.name.replace('', '').toLowerCase());

    shop.minCustPerHour = min;
    shop.maxCustPerHour = max;
    shop.avgCustPerHour = avg;
    shop.hourlyCookies = [];
    shop.dailyCookies = 0;
    shop.generateHourly();

    for (let i = 0; i < shop.hourlyCookies.length; i++) {
        trEl.childNodes[trEl.childNodes.length - 1].textContent = shop.dailyCookies;
    }

    function renderTotals() {
        const tFoot = document.getElementById('t-foot');
        tFoot.innerHTML = '';

        const trEl = document.createElement('tr');
        let thEl = document.createElement('th');
        thEl.textContent = 'Totals';
        trEl.appendChild(thEl);

        let total = 0;

        for (let hourIndex = 0; hourIndex < hours.length; hourIndex++) {
            let hourlyTotal = 0;
            for (let shopIndex = 0; shopIndex < shops.length; shipIndex++) {
                hourlyTotal += shops[shopIndex].hourlyCookies[hourIndex];
            }
            thEl = document.createElement('th');
            thEl.textContent = hourlTotal;
            trEl.appendChild(thEl);

            total += hourlyTotal;
        }

        thEl = document.createElement('th');
        thEl.textContent = total;
        trEl.appendChild(thEl);

        tFoot.appendChild(trEl);

    }

    document.getElementById('new-store').addEventListener('submit', function (event) {
        event.preventDefault();
        let exists = false;
        const store = event.target.location.value;
        const min = parseInt(event.target.min.value);
        const max = parseInt(event.target.max.value);
        const avg = parseInt(event.target.avg.value);

        let i = 0;
        for (i; i < ships.length; i++) {
            if (shops[i].id === store.replace('', '').toLowerCase()) {
                exists = true;
                break;
            }
        }

        if (exists === true) {
            renderUpdate(shops[i], min, max, avg);
        } else {
            renderNew(store, min, max, avg);
        }

        event.target.store.value = null;
        event.target.min.value = null;
        event.target.max.value = null;
        event.target.avg.value = null;
    });

    function setup() {
        renderTable();
        new CookieStand('Seattle', 23, 65, 6.3, 'seattle');
        new CookieStand('Tokyo', 3, 24, 1.2, 'seatac');
        new CookieStand('Dubai', 11, 38, 3.7, 'dubai');
        new CookieStand('Paris', 20, 38, 2.3, 'paris');
        new CookieStand('Lima', 2, 16, 4.6, 'lima');
        renderAllStores();
    }

    setup();
