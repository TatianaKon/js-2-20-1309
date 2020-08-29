import {
    CatalogItem,
    BasketItem
} from './Items.js';

let classes = {
    'Catalog': CatalogItem,
    'Basket': BasketItem
}

export default class List {
    constructor(url, container) {
        this.items = [];
        this.container = document.querySelector(container);
        this.url = url;
        this._init();
    }
    _init() {
        let url = 'https://github.com/TatianaKononova/js-2-20-1309/tree/master/ST/KononovaT/Project' + this.url;
        this._get(url)
            .then(data => {
                this.items = this.basket ? data : data.content;
            })
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }

    _get(url) {
        return fetch(url).then(d => d.json());
    }

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new classes[this.constructor.name](item).render();
        });
        this.container.innerHTML = htmlStr;
    }
}