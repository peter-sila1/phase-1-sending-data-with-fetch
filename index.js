// Add your code here
function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = { name, email };
  
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, config)
      .then(response => response.json())
      .then(data => {
        appendIdToDOM(data.id);
        return data;
      })
      .catch(error => {
        displayErrorToDOM(error.message);
      });
  }
  
  function appendIdToDOM(id) {
    const responseElement = document.createElement('div');
    responseElement.textContent = `Response ID: ${id}`;
    responseElement.id = 'responseId';
    document.body.appendChild(responseElement);
  }
  
  function displayErrorToDOM(errorMessage) {
    const errorElement = document.createElement('div');
    errorElement.textContent = `Error: ${errorMessage}`;
    errorElement.id = 'errorId';
    document.body.appendChild(errorElement);
  }
  