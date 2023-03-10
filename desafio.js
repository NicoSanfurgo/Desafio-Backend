class ProductManager {
    constructor() {
        this.products = []
    }
    generadorIds = () => {
        const count = this.products.length
        if (count === 0) {
            return 1
        } else {
            return (this.products[count - 1].id) + 1
        }
    }

    getProducts = () => {
        return this.products
    }


    addProducts = (title, description, price, thumbnail, code, stock) => {
        const id = this.generadorIds()
        if (this.products.find(elem => elem.code === code)) {
            console.error("El producto ya existe");
            return
        }
        
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.error("El producto no se puede agregar porque le faltan datos");
            return
        }
    
        this.products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
    }
}

const productManager = new ProductManager()
productManager.addProducts('Gorra', 'Buena calidad', 400 , 'https://i0.wp.com/miscellaneousbycaff.com.ar/wp-content/uploads/2021/05/gorra-negra-NY.jpg?fit=901%2C768&ssl=1' ,4004, 230)
console.log(productManager.getProducts())
productManager.addProducts('Remera', 'Demasiada calidad', 350 , 'https://http2.mlstatic.com/D_NQ_NP_837591-MLA50891162952_072022-O.webp' ,4005, 230)
//Ejemplo de "CODE" Repetido
productManager.addProducts('Remera', 'Demasiada calidad', 400 , 'https://http2.mlstatic.com/D_NQ_NP_837591-MLA50891162952_072022-O.webp' ,4005, 230)
productManager.addProducts('Zapatillas', 'Calidad de Nike', 700 , 'https://http2.mlstatic.com/D_NQ_NP_640781-MLA51180372449_082022-O.jpg' ,4006, 230)
//Ejemplo de Falta de datos
productManager.addProducts('Reloj', 650 , 'https://cdn-xiaomi.waugi.com.ar/1100-thickbox_default/xiaomi-mi-smart-band-6-smart-watch-reloj-inteligente.jpg' ,4007, 230)


console.log(productManager.getProductsById())