const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const popupSlide = document.querySelector('#popupSlide');
const sliderItem = document.querySelectorAll('.our_requirements_content_item');
const sliderPhoto = document.querySelector('.our_requirements_img');
const body = document.body;

burger.addEventListener('click', burgerHandler);
popup.addEventListener('click', (e) => {
  burgerHandler(e);
});

sliderItem.forEach((e) => {
  e.addEventListener('click', () => {
    setImage(e, sliderItem);
  });
});

function burgerHandler(e) {
  if (popup.classList.contains('open')) {
    popup.classList.add('close');
    body.classList.remove('noscroll');
    popupSlide.classList.add('slideout');

    setTimeout(() => {
      popup.classList.remove('close');
      popup.classList.remove('open');
      popupSlide.classList.remove('slideout');
      popupSlide.classList.remove('slidein');
    }, 300);
  } else {
    body.classList.add('noscroll');
    popup.classList.add('open');
    popupSlide.classList.add('slidein');
  }
  burger.classList.toggle('active');
}

function setImage(el, elList) {
  const imgId = el.getAttribute('id');

  elList.forEach((elem) => {
    elem.classList.remove('main_item');
  });

  el.classList.add('main_item');
  sliderPhoto.setAttribute('src', `img/our-requirements/${imgId}.jpg`);
}

const moreListingsBut = document.querySelector('.show_more');
const moreListings = document.querySelectorAll('.current_listings_item_description_more');
const hidenButton = document.querySelector('.hiden_button');
const showButWrap = document.querySelector('.link_wrapper_active');
const hideButWrap = document.querySelector('.link_wrapper_hiden');
moreListingsBut.addEventListener('click', () => {
  showMore(moreListings);
});

hidenButton.addEventListener('click', (e) => {
  hideAllListings(moreListings);
});

function showMore(elem) {
  let counter = 0;
  for (let i = 0; i < elem.length && counter !== 6; i++) {
    if (elem[i] && elem[i].classList.contains('show_listing')) {
      elem[i].classList.remove('show_listing');
      counter++;
    } else {
      showButWrap.classList.add('show_listing');
      hideButWrap.classList.remove('show_listing');
    }
  }

  console.log(counter);
}
function hideAllListings(el) {
  el.forEach((el) => {
    el.classList.add('show_listing');
  });
  showButWrap.classList.remove('show_listing');
  hideButWrap.classList.add('show_listing');
}

const sliderItemm = document.querySelectorAll('.testimonials__item');
const sliderWrapper = document.querySelector('.testimonials__items_wrapper');
const nextButton = document.querySelector('.testimonials__button_wrapper_next');
const prevButton = document.querySelector('.testimonials__button_wrapper_prev');
let sliderWidth = (sliderItemm.length - 3) * 646;
let pixelCounter = -646;

nextButton.addEventListener('click', function () {
  if (Math.abs(pixelCounter) < sliderWidth) {
    pixelCounter -= 646;
    sliderWrapper.style.left = pixelCounter + 'px';
  } else {
    sliderWrapper.style.transition = 'none';
    pixelCounter = 0;
    sliderWrapper.style.left = pixelCounter + 'px';
    setTimeout(() => {
      sliderWrapper.style.transition = 'all ease 0.5s';
    }, 10);
    setTimeout(() => {
      pixelCounter = -646;
      sliderWrapper.style.left = pixelCounter + 'px';
    }, 20);
  }
  console.log(pixelCounter);
});

prevButton.addEventListener('click', function () {
  if (pixelCounter < 0) {
    pixelCounter += 646;
    sliderWrapper.style.left = pixelCounter + 'px';
  } else {
    sliderWrapper.style.transition = 'none';

    pixelCounter = -sliderWidth;
    sliderWrapper.style.left = pixelCounter + 'px';

    setTimeout(() => {
      pixelCounter = -sliderWidth + 646;
      sliderWrapper.style.left = pixelCounter + 'px';
      sliderWrapper.style.transition = 'all ease 0.5s';
    }, 20);
  }
  console.log(pixelCounter);
});

// pixelCounter = sliderWidth;
// sliderWrapper.style.left = -pixelCounter + 'px';

// Get the modal
var modal = document.querySelector('#myModal');
var modalImg = document.querySelector('#img01');
var captionText = document.querySelector('#caption');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll('.current_listings_img');
console.log(img);

img.forEach((el) => {
  el.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
modal.onclick = function () {
  modal.style.display = 'none';
};
