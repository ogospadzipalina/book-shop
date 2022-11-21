const htmlElement = document.documentElement
const bodyElement = document.body

bodyElement.innerHTML = `
<header>
    <a href = '#'>About</a>
    <a href = '#'>Basket</a>
</header>
<h1> Welcome to our Bookshop</h1>`
const titleElement = document.querySelector('h1')
titleElement.classList.add('title')

const headerElement = document.querySelector('header')
headerElement.classList.add('header')

const links = document.querySelectorAll('a')
for (let link of links) {
    if (links.closest === 'header')
    links.classList.add('header-links')
    else null
}

// books data
fetch('/pages/books.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });