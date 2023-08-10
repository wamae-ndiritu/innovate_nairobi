javascript
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Do something with the response data
  })
  .catch(error => {
    // Handle any errors that occur during the request
  });