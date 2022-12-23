import { LightningElement, track, api } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track apiHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer 00D3M0000008olr!ARwAQLUUE4jgX28g8gY_ceYiEKCSZXlHFgaXWG22Koxf3FiICtC_BkmIjUO.ZHDeWxmXveYVOhmEgLaag97y0cBvsV3iWUOl"
    }
    @track programList = [];
    @track courseList = [];

    @api productId;
    
    renderedCallback() {
        if (this.varToUpdate > 0) {
            console.log('svar fra rendered callback');
        }
    }

    connectedCallback() {
        console.log('JS.ConnectedCallback: Henter cartItems');
        this.getCartItems();    
    }

    clickHandler() {

        console.log('JS.clickHandler: Legger til produkt i cart');

        const body = {
            'productId': '01t1t000003en7fAAA',
            'quantity': '1',
            'type': 'Product'
        }

        fetch('https://bicx--compoc.sandbox.my.salesforce.com/services/data/v56.0/commerce/webstores/0ZE3M0000008RSSWA2/carts/0a63M0000008S8kQAE/cart-items', {
            method: 'POST',
            headers: this.apiHeaders,
            body: JSON.stringify(body)
        })
        //.then((response) => response.json())
        .then((response) => {
            if (response.ok) {
                console.log(response);
                this.getCartItems();
            }
        })
        .then((data) => console.log(JSON.stringify(data)));

        this.getCartItems();
    }

    getCartItems() {

        this.programList = [];
        this.courseList = [];

        fetch('https://bicx--compoc.sandbox.my.salesforce.com/services/data/v56.0/commerce/webstores/0ZE3M0000008RSSWA2/carts/active/cart-items?productFields=BIINT_BResidenceName__c', {
            method: 'GET',
            headers: this.apiHeaders
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.cartItems[0].cartItem.productDetails);
            for (const item of data.cartItems) {
                if (item.cartItem.productDetails.fields.BIINT_BResidenceName__c.localeCompare('Enkeltkurs') == 0) {
                    this.courseList.push(item.cartItem);
                } else if (item.cartItem.productDetails.fields.BIINT_BResidenceName__c.localeCompare('Heltid') == 0) {
                    this.programList.push(item.cartItem);
                }
            }
        });
    }

    @api externalPost(productId) {
        console.log('JS.clickHandler: Legger til produkt i cart');

        const body = {
            'productId': productId,
            'quantity': '1',
            'type': 'Product'
        }

        fetch('https://bicx--compoc.sandbox.my.salesforce.com/services/data/v56.0/commerce/webstores/0ZE3M0000008RSSWA2/carts/0a63M0000008S8kQAE/cart-items', {
            method: 'POST',
            headers: this.apiHeaders,
            body: JSON.stringify(body)
        })
        //.then((response) => response.json())
        .then((response) => {
            if (response.ok) {
                console.log(response);
                this.getCartItems();
            }
        })
        .then((data) => console.log(JSON.stringify(data)));

        this.getCartItems();
    }

    postOekad() {

        console.log('JS.clickHandler: Legger til produkt i cart');

        const body = {
            'productId': '01t1t000003ensHAAQ',
            'quantity': '1',
            'type': 'Product'
        }

        fetch('https://bicx--compoc.sandbox.my.salesforce.com/services/data/v56.0/commerce/webstores/0ZE3M0000008RSSWA2/carts/0a63M0000008S8kQAE/cart-items', {
            method: 'POST',
            headers: this.apiHeaders,
            body: JSON.stringify(body)
        })
        //.then((response) => response.json())
        .then((response) => {
            if (response.ok) {
                console.log(response);
                this.getCartItems();
            }
        })
        .then((data) => console.log(JSON.stringify(data)));

        this.getCartItems();
    }
    
    postArbeidsrett() {

        console.log('JS.clickHandler: Legger til produkt i cart');

        const body = {
            'productId': '01t1t000003enxhAAA',
            'quantity': '1',
            'type': 'Product'
        }

        fetch('https://bicx--compoc.sandbox.my.salesforce.com/services/data/v56.0/commerce/webstores/0ZE3M0000008RSSWA2/carts/0a63M0000008S8kQAE/cart-items', {
            method: 'POST',
            headers: this.apiHeaders,
            body: JSON.stringify(body)
        })
        //.then((response) => response.json())
        .then((response) => {
            if (response.ok) {
                console.log(response);
                this.getCartItems();
            }
        })
        .then((data) => console.log(JSON.stringify(data)));

        this.getCartItems();
    }

    postEntreprenoer() {

        console.log('JS.clickHandler: Legger til produkt i cart');

        const body = {
            'productId': '01t1t000003enn6AAA',
            'quantity': '1',
            'type': 'Product'
        }

        fetch('https://bicx--compoc.sandbox.my.salesforce.com/services/data/v56.0/commerce/webstores/0ZE3M0000008RSSWA2/carts/0a63M0000008S8kQAE/cart-items', {
            method: 'POST',
            headers: this.apiHeaders,
            body: JSON.stringify(body)
        })
        //.then((response) => response.json())
        .then((response) => {
            if (response.ok) {
                console.log(response);
                this.getCartItems();
            }
        })
        .then((data) => console.log(JSON.stringify(data)));

        this.getCartItems();
    }

    postMakro() {

        console.log('JS.clickHandler: Legger til produkt i cart');

        const body = {
            'productId': '01t1t0000034ZF5AAM',
            'quantity': '1',
            'type': 'Product'
        }

        fetch('https://bicx--compoc.sandbox.my.salesforce.com/services/data/v56.0/commerce/webstores/0ZE3M0000008RSSWA2/carts/0a63M0000008S8kQAE/cart-items', {
            method: 'POST',
            headers: this.apiHeaders,
            body: JSON.stringify(body)
        })
        //.then((response) => response.json())
        .then((response) => {
            if (response.ok) {
                console.log(response);
                this.getCartItems();
            }
        })
        .then((data) => console.log(JSON.stringify(data)));

        this.getCartItems();
    }

    @api consoleLogger() {
        console.log('test fra BI');
    }
}