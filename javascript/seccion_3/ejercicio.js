document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('next-btn');
    const backBtn = document.getElementById('back-btn');
    const form = document.getElementById('product-form');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const fechaCaducidadContainer = document.getElementById('fecha_caducidad_container');
    const tiempoGarantiaContainer = document.getElementById('tiempo_garantia_container');
    const productList = document.getElementById('product-list');
    const productsUl = document.getElementById('products');

    let products = [];

    nextBtn.addEventListener('click', () => {
        if (form.checkValidity()) {
            step1.classList.add('hidden');
            step2.classList.remove('hidden', 'hidden');
            step2.classList.add('animate__animated', 'animate__fadeInRight');
        } else {
            form.reportValidity();
        }
    });

    backBtn.addEventListener('click', () => {
        step2.classList.add('hidden');
        step1.classList.remove('hidden', 'hidden');
        step1.classList.add('animate__animated', 'animate__fadeInLeft');
    });

    form.addEventListener('change', (e) => {
        if (e.target.name === 'consumible') {
            if (e.target.value === 'si') {
                fechaCaducidadContainer.classList.remove('hidden');
                tiempoGarantiaContainer.classList.add('hidden');
                document.getElementById('tiempo_garantia').value = '';
            } else {
                fechaCaducidadContainer.classList.add('hidden');
                tiempoGarantiaContainer.classList.remove('hidden');
                document.getElementById('fecha_caducidad').value = '';
            }
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            const product = {
                nombre: document.getElementById('nombre').value,
                precio: document.getElementById('precio').value,
                cantidad: document.getElementById('cantidad').value,
                descripcion: document.getElementById('descripcion').value,
                fabricante: document.getElementById('fabricante').value,
                fechaFabricacion: document.getElementById('fecha_fabricacion').value,
                fechaRecibo: document.getElementById('fecha_recibo').value,
                consumible: form.consumible.value,
                fechaCaducidad: form.consumible.value === 'si' ? document.getElementById('fecha_caducidad').value : null,
                tiempoGarantia: form.consumible.value === 'no' ? document.getElementById('tiempo_garantia').value : null
            };
            
            products.push(product);
            form.reset();
            step2.classList.add('hidden');
            step1.classList.remove('hidden', 'hidden');
            step1.classList.add('animate__animated', 'animate__fadeInLeft');
            displayProducts();
            alert('Producto registrado con éxito');
        } else {
            form.reportValidity();
        }
    });

    function displayProducts() {
        productsUl.innerHTML = '';
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.nombre} - ${product.precio} - ${product.cantidad} - ${product.descripcion}`;
            productsUl.appendChild(li);
        });
        productList.classList.remove('hidden');
    }
});
