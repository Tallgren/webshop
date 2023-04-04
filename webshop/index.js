const urlAPI = 'https://fakestoreapi.com/products/';

fetch(urlAPI)
  .then(resp => resp.json())
  .then(data => startPageRender(data))
  .catch(err => console.error(err));


function startPageRender(data) {
  const randomIndexes = [];
  const randomImages = [];
  const titles = [];
  const descriptions = [];

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    randomIndexes.push(randomIndex);
    randomImages.push(data[randomIndex].image);
    titles.push(data[randomIndex].title);
    descriptions.push(data[randomIndex].description);
  }

  document.getElementById('examplePicture').src = randomImages[0];
  document.getElementById('examplePicture2').src = randomImages[1];
  document.getElementById('examplePicture3').src = randomImages[2];

  document.getElementById('h1_1').innerHTML = titles[0];
  document.getElementById('h1_2').innerHTML = titles[1];
  document.getElementById('h1_3').innerHTML = titles[2];

  document.getElementById('p_1').innerHTML = descriptions[0];
  document.getElementById('p_2').innerHTML = descriptions[1];
  document.getElementById('p_3').innerHTML = descriptions[2];
}
