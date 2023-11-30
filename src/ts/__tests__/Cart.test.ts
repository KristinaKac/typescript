import Cart from '../service/Cart';
import Phone from '../domain/Phone';
import Book from '../domain/Book';
import Laptop from '../domain/Laptop';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
    const cart = new Cart();

    expect(cart.items.length).toBe(0);
});

test('add new card', () => {
    const cart = new Cart();
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

    expect(cart.items).toEqual([{ "author": "Leo Tolstoy", "id": 1001, "name": "War and Piece", "pages": 1225, "price": 2000 }]);
});

test('adding a new card if there is already one (1), ', () => {
    const cart = new Cart();
    cart.add(new Movie(1020, 'The Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'thriller', 137));
    cart.add(new Movie(1020, 'The Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'thriller', 137));

    expect(cart.items).toEqual([{
        "country": "USA", "genre": "thriller", "id": 1020, "name": "The Avengers", "price": 1500, "tagline": "Avengers Assemble", "time": 137, "year": 2012,
    }]);
});

test('adding a new card if there is already one {2}, ', () => {
    const cart1 = new Cart();
    cart1.add(new Laptop(451, 'Laptop', 5000, 'Samsung', 'Game'));
    cart1.add(new Laptop(451, 'Laptop', 5000, 'Samsung', 'Game'));

    expect(cart1.items).toEqual([{ "id": 451, "name": "Laptop", "price": 5000, "producer": "Samsung", "type": "Game", },
    { "id": 451, "name": "Laptop", "price": 5000, "producer": "Samsung", "type": "Game", }])
});

test('testing the amount without discount, ', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1020, 'The Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'thriller', 137));
    cart.add(new Movie(1020, 'The Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'thriller', 137));
    cart.add(new Phone(450, 'Phone', 2500, 'Samsung', 'Black'));
    cart.add(new Phone(450, 'Phone', 2500, 'Samsung', 'Black'));

    const result = cart.getSumWithoutDiscount();

    expect(result).toBe(7400);
});

test('testing the amount with discount, ', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1020, 'The Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'thriller', 137));
    cart.add(new Movie(1020, 'The Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'thriller', 137));
    cart.add(new Phone(450, 'Phone', 2500, 'Samsung', 'Black'));
    cart.add(new Phone(450, 'Phone', 2500, 'Samsung', 'Black'));

    const result = cart.getSumWithDiscount(30);

    expect(result).toBe(5180);
});

test('testing of removing of unit item, ', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1020, 'The Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'thriller', 137));
    cart.add(new Movie(1020, 'The Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'thriller', 137));
    cart.add(new Phone(450, 'Phone', 2500, 'Samsung', 'Black'));
    cart.add(new Phone(450, 'Phone', 2500, 'Samsung', 'Black'));

    cart.removeUnitItem(450);

    expect(cart.items.length).toBe(3);
});

test('testing of removing item, ', () => {
    const cart = new Cart();
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.add(new Movie(1020, 'The Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'thriller', 137));
    cart.add(new Movie(1020, 'The Avengers', 1500, 2012, 'USA', 'Avengers Assemble', 'thriller', 137));
    cart.add(new Phone(450, 'Phone', 2500, 'Samsung', 'Black'));
    cart.add(new Phone(450, 'Phone', 2500, 'Samsung', 'Black'));

    cart.removeItem(1008);

    expect(cart.items.length).toBe(3);
});