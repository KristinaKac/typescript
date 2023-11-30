import Buyable from './Buyable';

export default class Laptop implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly producer: string,
        readonly type: string,
    ) { }
}