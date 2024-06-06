'use strict';
import images from './images.js';
import Gallery from './Class.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log('hello gallery');

const gallery = new Gallery('.gallery', images);
gallery.init();
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});