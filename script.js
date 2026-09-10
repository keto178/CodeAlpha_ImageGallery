const ACCESS_KEY = "1B6mK1nFFUblgmaNJffvggI5D9gj4hJimk_FWpWJQWM";
const galleryGrid = document.getElementById("galleryGrid");
const categoryButton = document.querySelectorAll('.category-btn');
const search = document.getElementById("searchInput");
const btnSearch = document.getElementById("searchBtn")
let photos = [];


// fetch photos from unsplash API
async function fetchPhotos(query = "all") {
    const url = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${query}&client_id=${ACCESS_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    photos = data.results;
    displayPhotos()
}
fetchPhotos();

//show photos
function displayPhotos() {
    galleryGrid.innerHTML = "";
    photos.map((photo, index) => {
        galleryGrid.innerHTML += `
        <div class="img-box" id="img-box-${index}">
        <img src="${photo.urls.small}" alt="${photo.alt_description}">
        </div>
        `
    });
}

// category buttons functions
categoryButton.forEach((btn)=>{
    btn.addEventListener("click",() => {
        const category = btn.getAttribute("data-category");
        fetchPhotos(category);

    })
})

// search functions
btnSearch.addEventListener("click",()=>{
  const query = search.value.trim() 
    if(query){
        fetchPhotos(query);
        categoryButton.forEach(btn=>btn.classList.remove("active"))
        document.getElementById("searchInput").value = ""
    }
})
search.addEventListener("keydown",(e)=>{
    const query = search.value.trim()
    if(e.key === "Enter"){
        fetchPhotos(query);
        categoryButton.forEach(btn=>btn.classList.remove("active"))
        document.getElementById("searchInput").value = ""
    }
})

//add active class to the clicked button
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});


// ==========================================================================
// Lightbox
// ==========================================================================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = photos[index].urls.regular;
    lightboxImg.alt = photos[index].alt_description || "Photo";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

function showNext() {
    currentIndex = (currentIndex + 1) % photos.length;
    lightboxImg.src = photos[currentIndex].urls.regular;
    lightboxImg.alt = photos[currentIndex].alt_description || "Photo";
}

function showPrev() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    lightboxImg.src = photos[currentIndex].urls.regular;
    lightboxImg.alt = photos[currentIndex].alt_description || "Photo";
}

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
});

galleryGrid.addEventListener("click", (e) => {
    const box = e.target.closest(".img-box");
    if (!box) return;
    const index = parseInt(box.id.replace("img-box-", ""));
    openLightbox(index);
});
