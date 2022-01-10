const api = "http://localhost:3000/producto";
const productos = document.getElementById("productos");
const apiconsul = "http://localhost:3000/producto/"
let content1 = JSON.parse(localStorage.getItem('key')) || []

const peticion = async (producto) => {
    const buscar = await fetch(producto)
    const jsno = await buscar.json()
    muestra(jsno)
}

peticion(api)

const muestra = (producto) => {
    productos.innerHTML = ""
    producto.forEach(element => {
        const {id,name,precio,img} = element
            const div = document.createElement("div");
            div.classList.add("container")
            

            div.innerHTML += `
            <div class="col d-flex justify-content-center mb-4">
                <div class="card shadow mb-1 bg-light rounded" style="width: 20rem;">
                    <h5 class="card-title pt-2 "><button class="dto">32% dto.</button></h5>
                        <img src="${img}" class="card-img-top" alt="...">
                            <h4 class="text-dark">${precio}<span class="text-secondary">$26.82/kg</span></h4>
                                <p class="card-text text-dark-50 description">${name}</p>
                                    <div class="d-grid gap-2">
                                    <a href="#"><button class="btn  button" onclick="btn(${id})">Agregar</button></a>
            </div>
                </div>
                                    </div>
           
                       
            `
            productos.appendChild(div)
    });
}

const btn = async (idbtn) => {
    // alert(idbtn)

    const buton = await fetch(apiconsul)
    const butoncar = await buton.json()

    buscarproduc = butoncar.find(producto => producto.id == idbtn)
     const {id,name,precio,img} = buscarproduc
     const arreglo = {
        id,name,precio,img
     }

     content1.unshift(arreglo)
     localStorage.setItem("key",JSON.stringify(content1))
}

