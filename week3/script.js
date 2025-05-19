// Change what we see
// Change text of heading:
// 1 find element
let heading = document.querySelector('h1')
// 2. change text
heading.innerText = 'New heading'
// will parse html tags:
heading.innerHTML = '<span>Text in a tag</span>'

// data to use for the html elements: 

let books = [
  {
    title: 'Künstliche Intelligenz',
    authors: 'H. L Dreyfus & S. E Dreyfus',
    year: '1986',
    description: 'a great book about AI',
    haveRead: false,
  }, {
    title: 'Neuromancer',
    authors: 'William Gibson',
    year: '1984',
    description: 'a classic cyberpunk novel',
    haveRead: false,
  },
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    authors: 'Douglas Adams',
    year: '1979',
    description: 'a hilarious science fiction classic',
    haveRead: true,
  },
]

// Generate html elements - cards for books

books.forEach(book => {
  // Create the element
  let bookCard = document.createElement('div')
  // add styling
  bookCard.classList.add('bookCard')
  // add more tags and content to the bookCard
  bookCard.innerHTML = `
  <h3 class='title'>${book.title}</h3>
      <p>${book.authors}</p>
      <p>${book.description}</p>
      <button class='bookStatus'>Want to read this book</button>
      `
  // Find parent to append created element to
  let bookListContainer = document.querySelector('.bookList')
  // add element
  bookListContainer.appendChild(bookCard)
})

// Interactivity - on button, input fields
// find the buttons
let statusButtons = document.querySelectorAll('.bookStatus')

// add function to trigger on click, will change text of button
statusButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    let buttonIClickedOn = event.target
    // if the text is Want to read this book, change it to 'Have read this book!', else, change it back to want to read
    if (buttonIClickedOn.innerText == 'Want to read this book') {
      buttonIClickedOn.innerText = 'Have read this book!'
    } else {
      buttonIClickedOn.innerText = 'Want to read this book'
    }
  })
})