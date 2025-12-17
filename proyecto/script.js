// ANDRES
        const mockAPI = () => {
            const genres = ["RPG", "Acción", "Deportes", "Shooter", "Estrategia"];
            const platforms = ["PS5", "Xbox Series X", "PC", "Switch"];
            let products = [];
products.push({
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    price: 59.99,
    genre: "Aventura",
    platform: "Nintendo Switch",
    developer: "Nintendo",
    releaseDate: "2017",
    rating: "5/5",
    players: 1,
    pegi: "12+",
    stock: 30,
    image:"https://m.media-amazon.com/images/I/81KGsbq8ekL.jpg",
    description:"Explora un vasto mundo abierto lleno de aventuras y secretos."
  
});

products.push({
    id: 2,
    name: "God of War Ragnarök",
    price: 69.99,
    genre: "Acción",
    platform: "PS5",
    developer: "Santa Monica Studio",
    releaseDate: "2022",
    rating: "5/5",
    players: 1,
    pegi: "18+",
    stock: 25,
    image:"https://m.media-amazon.com/images/I/81w7IxU+h+L._AC_UF1000,1000_QL80_.jpg",
    description:"Kratos regresa en una épica aventura mitológica nórdica."
});

products.push({
    id: 3, name: "Elden Ring", price: 59.99,  genre: "RPG",  platform: "PS5 / Xbox / PC",developer: "FromSoftware",releaseDate: "2022", rating: "5/5", players: 1,  pegi: "16+",  stock: 40,image:"https://media.vandal.net/m/102076/elden-ring-20216121316990_1.jpg",description:"RPG de mundo abierto con combates desafiantes y épica narrativa."
   
});

products.push({
    id: 4, name: "Red Dead Redemption 2", price: 49.99,genre: "Acción", platform: "PS/Xbox/PC", developer: "Rockstar Games",releaseDate: "2018",  rating: "5/5",  players: 1,  pegi: "18+",  stock: 20,image:"https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440",description:"Sumérgete en el Salvaje Oeste con historia y paisajes impresionantes."

});

products.push({
    id: 5, name: "Minecraft", price: 26.95,   genre: "Sandbox", platform: "Multiplataforma",  developer: "Mojang Studios", releaseDate: "2011",  rating: "5/5",players: 4, pegi: "7+", stock: 50,image:"https://assets-prd.ignimgs.com/2021/12/14/minecraft-1639513933156.jpg",description:"Construye, explora y sobrevive en un mundo generado por bloques."
});

products.push({
    id: 6, name: "Fortnite", price: 0.00, genre: "Battle Royale", platform: "Multiplataforma", developer: "Epic Games", releaseDate: "2017", rating: "4/5", players: 100, pegi: "12+", stock: 999,image:"https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cm9wwjg2r2n9e08n4hrfeouns",description:"Battle Royale divertido con construcción, acción rápida y eventos en vivo."
});

products.push({
    id: 7, name: "Grand Theft Auto V",price: 29.99, genre: "Acción", platform: "PS/Xbox/PC", developer: "Rockstar Games", releaseDate: "2013", rating: "5/5", players: 1, pegi: "18+",stock: 35,image:"https://i.pinimg.com/736x/5c/09/09/5c0909173a1524c8270bf87557e1a7c6.jpg",description:"Acción y crimen en una ciudad abierta llena de misiones y caos."
});

products.push({
    id: 8, name: "The Witcher 3: Wild Hunt",  price: 39.99, genre: "RPG", platform: "PS/Xbox/PC", developer: "CD Projekt Red",   releaseDate: "2015",  rating: "5/5",  players: 1, pegi: "18+", stock: 28,image:"https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/qezXTVn1ExqBjVjR5Ipm97IK.png",description:"Aventuras épicas como cazador de monstruos en un mundo fantástico."

});

products.push({
    id: 9, name: "Hollow Knight", price: 14.99, genre: "Metroidvania",  platform: "PS/Switch/Xbox/PC", developer: "Team Cherry",  releaseDate: "2017", rating: "5/5", players: 1,  pegi: "7+",  stock: 60, image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/274px-Hollow_Knight_first_cover_art.webp.png",description:"Explora un reino subterráneo lleno de secretos y combates precisos."
});

products.push({
    id: 10, name: "League of Legends",price: 0.00, genre: "MOBA", platform: "PC", developer: "Riot Games", releaseDate: "2009", rating: "4/5", players: 10, pegi: "12+",stock: 999,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjhEFB-rLqjpngcNE_OphUUihQg01hon1wcQ&s",description:"Juego MOBA competitivo con campeones únicos y estrategia en equipo."
   
});

products.push({
    id: 11,  name: "Horizon Forbidden West",price: 59.99,  genre: "Aventura",  platform: "PS5",  developer: "Guerrilla Games",   releaseDate: "2022",rating: "5/5",   players: 1,   pegi: "16+", stock: 22,image:"https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Horizon_Forbidden_West_cover_art.jpg/250px-Horizon_Forbidden_West_cover_art.jpg",description:"Aventúrate en un mundo postapocalíptico dominado por máquinas."

});

products.push({
    id: 12,  name: "Super Mario Odyssey", price: 59.99, genre: "Plataformas",platform: "Nintendo Switch",  developer: "Nintendo",  releaseDate: "2017",rating: "5/5", players: 1,  pegi: "7+",  stock: 40,image:"https://resources.claroshop.com/medios-plazavip/t1/1712861893odysseyjpg",description:"Viaja por mundos coloridos resolviendo puzzles y recolectando lunas."
});

products.push({
    id: 13, name: "Bloodborne", price: 19.99, genre: "RPG", platform: "PS4",  developer: "FromSoftware", releaseDate: "2015",  rating: "5/5", players: 1,  pegi: "16+",  stock: 30,image:"https://image.api.playstation.com/vulcan/img/rnd/202010/2614/NVmnBXze9ElHzU6SmykrJLIV.png",description:"RPG de acción oscuro con combates desafiantes y atmósfera gótica."

});

products.push({
    id: 14, name: "Call of Duty: Modern Warfare",price: 59.99, genre: "Shooter", platform: "PS/Xbox/PC",developer: "Infinity Ward", releaseDate: "2019",   rating: "4/5",  players: 12,  pegi: "18+",  stock: 30,image:"https://image.api.playstation.com/cdn/UP0002/CUSA03522_00/t7SHaSjuUXFZ3VHl6U4FuSFrDMtkOIyP.png",description:"Modern Warfare Shooter moderno con acción intensa y misiones tácticas."
});

products.push({
    id: 15, name: "Cyberpunk 2077", price: 49.99, genre: "RPG", platform: "PS5 / Xbox / PC", developer: "CD Projekt Red", releaseDate: "2020", rating: "4.5/5", players: 1,   pegi: "18+", stock: 20,image:"https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg",description:"Explora Night City en un RPG futurista lleno de decisiones y acción."
    
});

products.push({
    id: 16,name: "Resident Evil Village",  price: 39.99, genre: "Survival Horror",  platform: "PS/Xbox/PC", developer: "Capcom",  releaseDate: "2021",  rating: "4.5/5", players: 1,   pegi: "18+",stock: 22,image:"https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png",description:"Survival horror con enemigos aterradores y una historia intrigante."
   
});

products.push({
    id: 17, name: "Dark Souls III", price: 29.99, genre: "RPG",  platform: "PS/Xbox/PC",  developer: "FromSoftware",  releaseDate: "2016", rating: "5/5",  players: 1,  pegi: "16+",  stock: 33,image:"https://image.api.playstation.com/cdn/UP0700/CUSA03388_00/v8JlD8KcQUtTqaLBmpFnj1ESRR5zMkLk.png",description:"RPG desafiante con combates estratégicos y ambientación oscura."
    
});

products.push({
    id: 18,name: "Monster Hunter: World", price: 29.99, genre: "Acción", platform: "PS/Xbox/PC",  developer: "Capcom",   releaseDate: "2018",  rating: "5/5",  players: 4, pegi: "12+",  stock: 30,image:"https://image.api.playstation.com/vulcan/img/rnd/202010/0106/IyY3JSzHNCVoh7FultMPaE8F.jpg",description:"Caza monstruos gigantes solo o en equipo en un mundo vivo."

});

products.push({
    id: 19, name: "Halo Infinite", price: 59.99,genre: "Shooter", platform: "Xbox Series X / PC",  developer: "343 Industries",   releaseDate: "2021",   rating: "4/5",   players: 16,  pegi: "16+", stock: 25,image:"https://cdn.gameplanet.com/wp-content/uploads/2022/09/04153521/jeilo_soplas_infinito_1.jpg",description:"Shooter futurista con campaña épica y multijugador competitivo."
    
});

products.push({
    id: 20, name: "Assassin’s Creed Valhalla", price: 59.99, genre: "Aventura",   platform: "PS/Xbox/PC",   developer: "Ubisoft", releaseDate: "2020",   rating: "4/5",   players: 1,   pegi: "18+",stock: 28,image:"https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Assassin%27s_Creed_Valhalla_cover.jpg/250px-Assassin%27s_Creed_Valhalla_cover.jpg",description:"Vive como vikingo explorando Inglaterra con batallas y saqueos."
    
});



            
            return products;
        };

        let inventory = []; // Base de datos 
        let cart = {}; // Objeto para el carrito: { id: {qty: 1, item: Obj} }
        let currentViewingProduct = null; // Para saber qué producto estamos viendo en detalle

        $(document).ready(function() {
            // 2. Simular llamada AJAX para obtener productos
            // Usamos setTimeout para simular latencia de red
            setTimeout(() => {
                inventory = mockAPI();
                renderProducts(inventory);
            }, 500);
        });

        // Renderizar productos en la grilla principal
        function renderProducts(data) {
            const container = $('#products-container');
            container.empty();

            data.forEach(product => {
                const card = `
                    <div class="product-card">
                        <div class="product-img">
    <img src="${product.image}" alt="${product.name}">
</div>

                        <h3>${product.name}</h3>
                        <p style="color: #eede54; font-weight: bold;">$${product.price}</p>
                        <p style="font-size: 0.9em;">${product.platform}</p>
                        <button class="btn btn-add" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Añadir
                        </button>
                        <button class="btn btn-details" onclick="showDetails(${product.id})">
                            Ver Detalles
                        </button>
                    </div>
                `;
                container.append(card);
            });
        }

        // 3. Funciones del Carrito
        function addToCart(id) {
            const product = inventory.find(p => p.id === id);
            
            if (cart[id]) {
                cart[id].qty++;
            } else {
                cart[id] = {
                    qty: 1,
                    data: product
                };
            }
            updateCartUI();
            
            // Efecto visual simple
            const btn = event.target;
            const originalText = $(btn).html();
            $(btn).html('<i class="fas fa-check"></i> Agregado').prop('disabled', true);
            setTimeout(() => {
                $(btn).html(originalText).prop('disabled', false);
            }, 1000);
        }

        function updateCartUI() {
            let totalCount = 0;
            let totalAmount = 0;
            
            // Resetear vista del carrito
            $('#cart-items').empty();

            $.each(cart, function(id, item) {
                totalCount += item.qty;
                totalAmount += item.qty * parseFloat(item.data.price);
                
                $('#cart-items').append(`
                    <div class="cart-item">
                        <div>
                            <strong>${item.data.name}</strong> (${item.data.platform})<br>
                            <small>Cant: ${item.qty} x $${item.data.price}</small>
                        </div>
                        <div style="align-self: center;">
                            $${(item.qty * item.data.price).toFixed(2)}
                        </div>
                    </div>
                `);
            });

            $('#cart-count').text(totalCount);
            $('#cart-total').text(totalAmount.toFixed(2));
        }

        // 4. Función Ver Detalles (8 Características)
        function showDetails(id) {
            const p = inventory.find(item => item.id === id);
            currentViewingProduct = p; // Guardamos referencia para el contacto

            $('#modal-title').text(p.name);
            
            // Construcción de las 8 características requeridas
            const detailsHtml = `
                <div class="product-img" style="height: 200px;"><i class="fas fa-tv fa-4x"></i></div>
                <ul class="detail-list" style="padding-left: 0; margin-top: 15px;">
                    <li><strong>Plataforma:</strong> ${p.platform}</li>
                    <li><strong>Género:</strong> ${p.genre}</li>
                    <li><strong>Precio:</strong> $${p.price}</li>
                    <li><strong>Desarrollador:</strong> ${p.developer}</li>
                    <li><strong>Fecha Lanzamiento:</strong> ${p.releaseDate}</li>
                    <li><strong>Clasificación:</strong> ${p.rating} Estrellas</li>
                    <li><strong>Jugadores:</strong> ${p.players}</li>
                    <li><strong>PEGI:</strong> ${p.pegi}</li>
                </ul>
                <p><em>ID de Producto: #${p.id}</em></p>
            `;
            
            $('#modal-body').html(detailsHtml);
            
            // Configurar el botón de añadir dentro del modal
            $('#modal-add-btn').off('click').on('click', function() {
                addToCart(p.id);
            });

            $('#productModal').fadeIn().css('display', 'flex');
        }

        // Funciones de UI (Sidebar y Modales)
        function toggleSidebar() {
            const sidebar = document.getElementById("mySidebar");
            if (sidebar.style.left === "0px") {
                sidebar.style.left = "-250px";
            } else {
                sidebar.style.left = "0px";
            }
        }

        function closeModal(modalId) {
            $('#' + modalId).fadeOut();
        }

        function openCart() {
            $('#cartModal').fadeIn().css('display', 'flex');
            toggleSidebar(); // Cerrar sidebar si está abierto
        }

        function openContact() {
            $('#contact-subject').val(''); // Limpiar asunto
            $('#contactModal').fadeIn().css('display', 'flex');
            toggleSidebar();
        }

        // Función especial para contactar sobre un producto específico
        function openContactWithSubject() {
            closeModal('productModal');
            if (currentViewingProduct) {
                $('#contact-subject').val(`Consulta sobre: ${currentViewingProduct.name} (ID: ${currentViewingProduct.id})`);
            }
            $('#contactModal').fadeIn().css('display', 'flex');
        }

        // Cerrar modales al hacer clic fuera
        $(window).click(function(event) {
            if ($(event.target).hasClass('modal')) {
                $('.modal').fadeOut();
            }
        });

        function showDetails(id) {
    const product = inventory.find(p => p.id === id);

    if (!product) return;

    document.getElementById("detail-image").src = product.image;
    document.getElementById("detail-name").textContent = product.name;
    document.getElementById("detail-description").textContent = product.description;
    document.getElementById("detail-genre").textContent = product.genre;
    document.getElementById("detail-platform").textContent = product.platform;
    document.getElementById("detail-price").textContent = product.price;

    document.getElementById("detailsModal").style.display = "block";
}
function closeDetails() {
    document.getElementById("detailsModal").style.display = "none";
}
