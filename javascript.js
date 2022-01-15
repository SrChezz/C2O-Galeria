
const grid = document.querySelector('.gallery-grid');
const images = document.querySelectorAll('.image-container');
const categoryButtons = document.querySelectorAll('.category-button a')

var landscapes = [{
    images: ["images/Landscape/Paisajes-1-1.jpg", "images/Landscape/Paisajes-1-2.jpg", "images/Landscape/Paisajes-1-3.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Landscape/Paisajes-2-1.jpg", "images/Landscape/Paisajes-2-2.jpg", "images/Landscape/Paisajes-2-3.jpg", "images/Landscape/Paisajes-2-4.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Landscape/Paisajes-3-1.jpg", "images/Landscape/Paisajes-3-2.jpg", "images/Landscape/Paisajes-3-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Landscape/Paisajes-4-1.jpg", "images/Landscape/Paisajes-4-2.jpg", "images/Landscape/Paisajes-4-3.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Landscape/Paisajes-5-1.jpg", "images/Landscape/Paisajes-5-2.jpg", "images/Landscape/Paisajes-5-3.jpg", "images/Landscape/Paisajes-5-4.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Landscape/Paisajes-6-1.jpg", "images/Landscape/Paisajes-6-2.jpg", "images/Landscape/Paisajes-6-3.jpg", "images/Landscape/Paisajes-6-4.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Landscape/Paisajes-7-1.jpg", "images/Landscape/Paisajes-7-2.jpg", "images/Landscape/Paisajes-7-3.jpg", "images/Landscape/Paisajes-7-4.jpg"],
    ratio: "image-wide-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Landscape/Paisajes-8-1.jpg", "images/Landscape/Paisajes-8-2.jpg", "images/Landscape/Paisajes-8-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Landscape/Paisajes-9-1.jpg", "images/Landscape/Paisajes-9-2.jpg"],
    ratio: "image-wide",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Landscape/Paisajes-10-1.jpg", "images/Landscape/Paisajes-10-2.jpg", "images/Landscape/Paisajes-10-3.jpg", "images/Landscape/Paisajes-10-4.jpg"],
    ratio: "image-wide",
    metadata: "Ayacucho - Huamanga"
}]

var portraits = [{
    images: ["images/Portraits/Retrato-1-1.jpg", "images/Portraits/Retrato-1-2.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Portraits/Retrato-2-1.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Portraits/Retrato-3-1.jpg", "images/Portraits/Retrato-3-2.jpg", "images/Portraits/Retrato-3-3.jpg", "images/Portraits/Retrato-3-4.jpg", "images/Portraits/Retrato-3-5.jpg", "images/Portraits/Retrato-3-6.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}]

var events = [{
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-wide-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-wide",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-3.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}]

var products = [{
    images: ["images/Products/Producto-1-1.jpg", "images/Products/Producto-1-2.jpg", "images/Products/Producto-1-3.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Products/Producto-2-1.jpg", "images/Products/Producto-2-2.jpg"],
    ratio: "image-wide",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Products/Producto-3-1.jpg", "images/Products/Producto-3-2.jpg", "images/Products/Producto-3-3.jpg"],
    ratio: "image-wide-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Products/Producto-4-1.jpg", "images/Products/Producto-4-2.jpg", "images/Products/Producto-4-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Products/Producto-5-1.jpg", "images/Products/Producto-5-2.jpg", "images/Products/Producto-5-3.jpg", "images/Products/Producto-5-4.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Products/Producto-6-1.jpg", "images/Products/Producto-6-2.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/Products/Producto-7-1.jpg", "images/Products/Producto-7-2.jpg", "images/Products/Producto-7-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}]


landscapes.forEach(landscape => {
    let newDiv = document.createElement('div');
    newDiv.classList.add("image-container", landscape.ratio)
    /* newDiv.setAttribute('class', 'image-container') */
    newDiv.setAttribute('data-metadata', landscape.metadata)
    newDiv.setAttribute('data-ratio', landscape.ratio)

    createCarousel(newDiv, landscape.images)
    grid.appendChild(newDiv);
}); 



categoryButtons.forEach(button => {
    var category = button.getAttribute("data-categorie")

    button.addEventListener('click', () => { 

        relaodGrid(window[category]) 
        
    })

    function relaodGrid (currentCategory) {
        grid.innerHTML = ""
        currentCategory.forEach(image => {
            let newDiv = document.createElement('div');
            newDiv.classList.add("image-container", image.ratio)
            newDiv.setAttribute('data-metadata', image.metadata)
            newDiv.setAttribute('data-ratio', image.ratio)

            createCarousel(newDiv, image.images)
            grid.appendChild(newDiv)
        });
    }
});



function createCarousel (div, images) {
    let carousel = document.createElement("div")
    carousel.classList.add("carousel") 

    let dots = document.createElement("div")
    dots.classList.add("dots") 

    let left = document.createElement("i")
    left.classList.add("left", "arrow", "fas", "fa-chevron-left") 

    let right = document.createElement("i")
    right.classList.add("right", "arrow", "fas", "fa-chevron-right") 

    let n = 0;

    images.forEach(image => {
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("image") 
        imageDiv.setAttribute('style', `background-image: url('${image}');`)
        carousel.appendChild(imageDiv)
        n++
    })

    div.appendChild(carousel)
    
    div.appendChild(left)
    div.appendChild(right)
    div.appendChild(dots)

    addSliding(div, carousel, left, right, dots, n)
    
}


function reloadTheater (carousel, metadata, ratio, n) {

    const theater = document.getElementById('theater');
    const carouselContainer = theater.querySelector('.image-theater-inner')
    const metadataContainer = theater.querySelector('.bold-text')

    let amount = 0;
    let number = 0;
    
    /* carouselContainer.classList.add(ratio) */
    carouselContainer.setAttribute("class", `image-theater-inner ${ratio}`)

    let dots = document.createElement("div")
    dots.classList.add("dots") 
    carouselContainer.appendChild(carousel)
    carouselContainer.appendChild(dots)

    metadataContainer.innerText = metadata;



    let inside = parseInt(carouselContainer.querySelectorAll(".image").length)

    let leftArrow = carouselContainer.querySelector(".left")
    let rightArrow = carouselContainer.querySelector(".right")

    for (let i = 0; i < n; i++) {
        let dot = document.createElement('div');
        dot.classList.add("dot")
        if (i == 0) {
            dot.classList.add("active")
        }
        dots.appendChild(dot);
    }

    theater.addEventListener('click', () => {
        
        if( event.target.id=="theater"){
    
            carouselContainer.removeChild(dots)
            carouselContainer.removeChild(carousel)
    
            theater.classList.remove("theater-active");
        }       
    })

    rightArrow.addEventListener('click', function() { swipeMovement("right"); }, false)
    leftArrow.addEventListener('click', function() { swipeMovement("left"); } , false)

    function swipeMovement(direction) {

        dots.children[number].classList.remove("active")
        
        if (direction == "right") {
            number = (number + 1) % n;
        } else if (direction == "left") {
            number = (number - 1);
            if (number < 0) number = n - 1;
        }      

        carousel.style.transform = `translateX(${number * -100}%)`;

        
        dots.children[number].classList.add("active")
    }

    carouselContainer.addEventListener('touchstart', handleTouchStart, false);        
    carouselContainer.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;  
    var yDown = null;                                                           

    function getTouches(evt) {
    return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }                                                     

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;    
        var yUp = evt.touches[0].clientY;                                

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) && Math.abs( xDiff ) > 10) {
            if ( xDiff > 0 ) {

                swipeMovement("right")
                    
            } else {

                swipeMovement("left")

            }
        }
        /* reset values */
        xDown = null;  
        yDown = null;                                            
    };
}

function addSliding (div, carousel, left, right, dots, n) {

    let amount = 0;
    let number = 0;
    
    let imagesInside = carousel.childNodes

    for (let i = 0; i < n; i++) {
        let dot = document.createElement('div');
        dot.classList.add("dot")
        if (i == 0) {
            dot.classList.add("active")
        }
        dots.appendChild(dot);
    }

    div.addEventListener('click', () => {
        if( event.target.classList =="image"){

            let imageMetadata = div.getAttribute("data-metadata");
            let imageRatio = div.getAttribute("data-ratio");
            let newCarousel = document.createElement("div");
            newCarousel.classList.add('carousel');

            for (let i = 0; i < imagesInside.length; i++) {
                let newImage = document.createElement('div');
                newImage.classList.add(imagesInside[i].getAttribute('class'))
                newImage.setAttribute("style", imagesInside[i].getAttribute('style'))
                newCarousel.appendChild(newImage)
            }

            reloadTheater(newCarousel, imageMetadata, imageRatio, n)
            theater.classList.add('theater-active')
        }
    })

    right.addEventListener('click', function() { swipeMovement("right"); }, false)
    left.addEventListener('click', function() { swipeMovement("left"); } , false)

    function swipeMovement(direction) {

        dots.children[number].classList.remove("active")
        
        if (direction == "right") {
            number = (number + 1) % n;
        } else if (direction == "left") {
            number = (number - 1);
            if (number < 0) number = n - 1;
        }      

        carousel.style.transform = `translateX(${number * -100}%)`;

        
        dots.children[number].classList.add("active")
    }

    

    div.addEventListener('touchstart', handleTouchStart, false);        
    div.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;  
    var yDown = null;                                                            

    function getTouches(evt) {
    return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }                                                     

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;    
        var yUp = evt.touches[0].clientY;                                

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) && Math.abs( xDiff ) > 10) {
            if ( xDiff > 0 ) {

                swipeMovement("right")
                    
            } else {

                swipeMovement("left")

            }
        }
        /* reset values */
        xDown = null;  
        yDown = null;                                            
    };
}


