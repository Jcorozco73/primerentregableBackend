class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1
    }

    addProduct(product){
        if(this.isProductValid(product)){
            console.log("Error: El producto no es valido")
            return
        }
        if(this.isCodeDuplicate(product.code)) {
            console.log("Error: El producto ya esta siendo utilizado")
            return;
        }
        product.id= this.nextId++
        this.products.push(product)
    }
    getProducts(){
        return [...this.products] //copia de la lista para evitar modificarla accident
    }
    getProductById(id){
        const product = this.products.find((p) => p.id === id)
        if(product) {
            return product
        }else{
            console.log("Producto no encontrado")
        }

    }
    isProductValid(product) {
        return(
            product.title &&
            product.descrption &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )

    }
    isCodeDuplicate(code) {
        this.products.some((p) => p.code === code)
    }
    
}

    const productManager = new ProductManager()

    productManager.addProduct( {
        title:"Camiseta",
        description:"Camisa con estampada en el cuello.",
        price: 15,
        thumbnail: "https://i.imgur.com/e9f2b6v.",
        stock : 5,
        code: "P001"

    })
    productManager.addProduct( {
        title:"Pantalon",
        description:"Pantalon con estampada en el cuello.",
        price: 12,
        thumbnail: "https://i.imgur.com/e9f2b6v.",
        stock : 3,
        code: "P002"

    })

    const productsList = productManager.getProducts()
    console.log(productsList)

    const productId = productManager.getProductById(2)
    console.log(productId)

    const noProduct = productManager.getProductById(8)
    