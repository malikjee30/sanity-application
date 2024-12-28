// sanity/product.ts
export const  Product = {
    name: 'Product',
    type: 'document',
    title: 'product',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
    
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        }
    ]
}