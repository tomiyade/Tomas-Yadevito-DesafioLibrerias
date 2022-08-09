class Zapatilla {
    constructor(marca, precio, talle) {
        this.marca = marca
        this.precio = precio
        this.talle = talle
    }
}

const zapatilla1 = new Zapatilla("Nike Air Max 97", 40000, 42)
const zapatilla2 = new Zapatilla("Adidas Yeezy", 35000, 40)
const zapatilla3 = new Zapatilla("New Balance 550", 20000, 38)
const zapatilla4 = new Zapatilla("Nike Air Force", 18000, 43)
const zapatilla5 = new Zapatilla("Nike Air Uptempo", 45000, 42)
const zapatilla6 = new Zapatilla("Nike Air Jordan 4", 42000, 44)

const zapatillas = [zapatilla1, zapatilla2, zapatilla3, zapatilla4, zapatilla5, zapatilla6]

const botonCarrito = document.getElementById("carrito")
const divZapatillas = document.getElementById("divZapatillas")

zapatillas.forEach((zapatilla, indice) => {
    divZapatillas.innerHTML += `
    <div class="card border-secondary mb-3" id= "zapatilla${indice}" style="max-width: 20rem; margin: 30px;" >
        <div class="card-header">Model: ${zapatilla.marca}</div>
            <div class="card-body">
                <h4 class="card-title">Precio: ${zapatilla.precio}</h4>
                <p class="card-text">Talle: ${zapatilla.talle}</p>
                <button clas="btn btn-secondary"><i class="fas fa-cart-plus"></i></button>
            </div>
    </div>
    `
})


zapatillas.forEach((zapatilla, indice) => {
    document.getElementById(`zapatilla${indice}`).lastElementChild.lastElementChild.addEventListener("click", () => {
        Toastify({
        text: "Se ha agregado la zapatilla al carrito",
        duration: 3500,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
    })
})

