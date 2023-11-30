import Buyable from '../domain/Buyable';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        const checkCart = this._items.find(el => el.id === item.id);
        if (checkCart) {
            if (item instanceof (Book) || item instanceof (Movie) || item instanceof (MusicAlbum)) {
                return;
            }
        }
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }
    getSumWithoutDiscount(): number {
        return this._items.reduce((sum, current) => { return sum + current.price }, 0);
    }
    getSumWithDiscount(discount: number): number {
        const summa = this._items.reduce((sum, current) => { return sum + current.price }, 0);
        const sumWithDiscount = summa - ((summa * discount) / 100);
        return sumWithDiscount;
    }
    removeUnitItem(id: number): void {
        const result = this._items.findIndex((item) => id === item.id);
        this._items.splice(result, 1);
    }
    removeItem(id: number): void {
        this._items = this._items.filter(item => id !== item.id);
    }
}