const myButton = document.getElementById('fetch');

//myButton.addEventListener('click', userAction);

//fetch('https://gorest.co.in/public/v2/users')
  //.then((response) => response.json())
  //.then((data) => console.log(data));
  

  const ul = document.getElementById('authors'); 
  const list = document.createDocumentFragment(); 
  const url = 'https://gorest.co.in/public/v2/users';
  
    fetch(url) 
    .then((response) => { return response.json(); }) 
    .then((json) => { json.map(function(author) 
      { 
        let li = document.createElement('li'); 
        let name = document.createElement('h2'); 
        let email = document.createElement('span');
    
        name.innerHTML = `${author.name}`;
        email.innerHTML = `${author.email}`;
    
        li.appendChild(name);
        li.appendChild(email);
        list.appendChild(li);
        ul.appendChild(list);
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  