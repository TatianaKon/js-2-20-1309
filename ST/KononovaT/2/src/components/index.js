import {
    Basket,
    Catalog
} from './Lists';

export default () => {
    let basket = new Basket();
    let catalog = new Catalog(basket);
}