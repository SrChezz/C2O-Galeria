
const grid = document.querySelector('.gallery-grid');
const images = document.querySelectorAll('.image-container');
const categoryButtons = document.querySelectorAll('.category-button a')

var landscapes = [{
    images: ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-wide-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-wide",
    metadata: "Ayacucho - Huamanga"
}]

var portraits = [{
    images: ["images/image-2.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-2.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-2.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-2.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-wide-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-2.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-2.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-2.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-2.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-wide",
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
    images: ["images/image-4.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-4.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-4.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-4.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-wide-tall",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-4.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-4.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-4.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image",
    metadata: "Ayacucho - Huamanga"
}, {
    images: ["images/image-4.jpg", "images/image-2.jpg", "images/image-3.jpg"],
    ratio: "image-wide",
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


function reloadTheater (carousel, metadata, ratio) {

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

    rightArrow.addEventListener('click', () => {
        if (number < inside -1) {

        newNumber = amount - 100;
        carousel.style.transform = `translateX(${amount - 100}%)`;
        amount = newNumber;

        dots.children[number].classList.remove("active")
        number++;
        dots.children[number].classList.add("active")

        }
    })

    leftArrow.addEventListener('click', () => {
        if (number > 0) {

        newNumber = amount + 100;
        carousel.style.transform = `translateX(${amount + 100}%)`;
        amount = newNumber;

        dots.children[number].classList.remove("active")
        number--;
        dots.children[number].classList.add("active")

        }
    })

    for (let i = 0; i < inside; i++) {
        let dot = document.createElement('div');
        dot.classList.add("dot")
        dots.appendChild(dot);
    }

    theater.addEventListener('click', () => {
        
        if( event.target.id=="theater"){
    
            carouselContainer.removeChild(dots)
            carouselContainer.removeChild(carousel)
    
            theater.classList.remove("theater-active");
        }       
    })
}

function addSliding (div, carousel, left, right, dots, n) {

    let amount = 0;
    let number = 0;
    
    let imagesInside = carousel.childNodes

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

            reloadTheater(newCarousel, imageMetadata, imageRatio)
            theater.classList.add('theater-active')
        }
    })

    right.addEventListener('click', () => {
        
        if (number < n -1) {
        newNumber = amount - 100;
        carousel.style.transform = `translateX(${amount - 100}%)`;
        amount = newNumber;

        dots.children[number].classList.remove("active")
        number++;
        dots.children[number].classList.add("active")
        }
    })

    left.addEventListener('click', () => {
        
        if (number > 0) {
        newNumber = amount + 100;
        carousel.style.transform = `translateX(${amount + 100}%)`;
        amount = newNumber;

        dots.children[number].classList.remove("active")
        number--;
        dots.children[number].classList.add("active")
        }
    })

    for (let i = 0; i < n; i++) {
        let dot = document.createElement('div');
        dot.classList.add("dot")
        if (i == 0) {
            dot.classList.add("active")
        }
        dots.appendChild(dot);
    }

}

// Old system that is not dynamic

/* images.forEach(image => {
    
    let amount = 0;
    let number = 0;
    let carousel = image.querySelector(".carousel")
    let imagesInside = image.querySelectorAll(".image");
    let inside = parseInt(image.querySelectorAll(".image").length)
    let leftArrow = image.querySelector(".left")
    let rightArrow = image.querySelector(".right")
    let dots = image.querySelector(".dots")

    image.addEventListener('click', () => {
        if( event.target.classList =="image"){

            let imageMetadata = image.getAttribute("data-metadata");
            let imageRatio = image.getAttribute("data-ratio");
            let newCarousel = document.createElement("div");
            newCarousel.classList.add('carousel');

            imagesInside.forEach(imageInside => {
                let newImage = document.createElement('div');
                newImage.classList.add(imageInside.getAttribute('class'))
                newImage.setAttribute("style", imageInside.getAttribute('style'))
                newCarousel.appendChild(newImage)
            });

            reloadTheater(newCarousel, imageMetadata, imageRatio)
            theater.classList.add('theater-active')
        }
    })

    rightArrow.addEventListener('click', () => {
        
        if (number < inside -1) {
        newNumber = amount - 100;
        carousel.style.transform = `translateX(${amount - 100}%)`;
        amount = newNumber;

        dots.children[number].classList.remove("active")
        number++;
        dots.children[number].classList.add("active")
        }
    })

    leftArrow.addEventListener('click', () => {
        
        if (number > 0) {
        newNumber = amount + 100;
        carousel.style.transform = `translateX(${amount + 100}%)`;
        amount = newNumber;

        dots.children[number].classList.remove("active")
        number--;
        dots.children[number].classList.add("active")
        }
    })

    for (let i = 0; i < inside; i++) {
        let dot = document.createElement('div');
        dot.classList.add("dot")
        if (i == 0) {
            dot.classList.add("active")
        }
        dots.appendChild(dot);
    }

}); */
