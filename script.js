let searchForm = document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('queryInput').value;
  
    fetch(`https://pixabay.com/api/?key=24090419-925e057925ba4cc124682bb5f&q=${query}`)
      .then(response => response.json())
      .then(data => displayImages(data.hits))
      .catch(error => console.error('Error:', error));
  });
  
  function displayImages(images) {
    const imageResults = document.getElementById('imageResults');
    imageResults.innerHTML = '';
  
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.webformatURL;
      imgElement.alt = image.tags;
      imageResults.appendChild(imgElement);
    });
  }
  