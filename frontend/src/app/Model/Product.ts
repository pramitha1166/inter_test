export interface Product {
    product_id: number,
    name: string,
    price: number,
    quantity: number,
    status: string
}

export interface AllProductResult {
    result: Array<Product>
}

export interface ProductResult {
    result: Product
}