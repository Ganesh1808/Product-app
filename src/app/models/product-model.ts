export class ProductModel {
    productId: number;
    productName: string;
    unitPrice: number;
    unitsInStock: number;

    constructor(pId, pName, price, stock) {
        this.productId = pId;
        this.productName = pName;
        this.unitPrice = price;
        this.unitsInStock = stock;
    }
}
