export const photos = [];

fetch('https://tranquil-temple-58736.herokuapp.com/photo-gallery')
  .then(res => res.json())
  .then(data => {
    data.forEach(photo => {
      photos.push(photo);
    });
  });

