let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  function randomQuote()  {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    
  };
  
  document.querySelector('#quote-title').addEventListener('click', randomQuote) 
  
  
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    
    randomQuote();
  
    
    
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
  
    // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
  
    function changeTitleText() {
  
    const title = document.querySelector('#main-title')
  
    title.textContent = `Welcome to DOM's Website!`
  
    }
    changeTitleText()
  
  
  
  
  
    // Part 2
  
    // Select the body and change the background-color to a new color of your choice.
  
    function changeBackgroundColor () {
  
    const body = document.querySelector('body')
  
    body.style.backgroundColor = 'skyblue'
  
    }
    changeBackgroundColor()
  
  
  
  
    // Part 3
  
    // Select DOM's Favorite Things list and remove the last list item.
    
    function removeLastElement () {
  
    const removeItem = document.querySelector('#favorite-things')
  
    removeItem.removeChild(removeItem.lastElementChild)
  
    }
  
    removeLastElement()
   
  
  
    // Part 4
  
    // Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements
  
    function changeFontSize () {
  
    const list = document.querySelectorAll('.special-title')
  
    for (let i = 0; i < list.length; i++) {
         list[i].style.fontSize = '2rem'
    }
  }
    changeFontSize()
  
  
    // Part 5
  
    // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
    
    function removeElement() {
  
    const pastRaceList = document.querySelector('#past-races')
  
    const elements = pastRaceList.childNodes[7]
  
    elements.remove()
  
    // console.log(elements)
    }
    removeElement()
  
    
  
  
    // Part 6
  
    // Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
  
    function addToRaceList () {
  
    const createLi = document.createElement('li')
  
    const RaceList = document.querySelector('#past-races')
  
    const text = createLi.textContent = 'New York'
  
    RaceList.append(text)
    }
    addToRaceList()
  
  
  
  
    // Part 7
  
    // Create a new .blog-postcorresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.
  
    // create the div
    const createDiv = document.createElement('div')
  
    // need to append div to exsiting dom element
  
    const sideBar = document.querySelectorAll('.side-bar')
    
    sideBar[1].appendChild(createDiv)
  
    const createH2 = document.createElement('h2')
  
    const paragraph = document.createElement('p')
  
    createDiv.className = 'blog-post'
  
    createH2.textContent = 'New York Blog post'
  
    paragraph.textContent = 'something'
    createDiv.appendChild(createH2)
    createDiv.appendChild(paragraph)
    
    
  
  
    console.log(createDiv)
  
  
  
    
     
  
    // Part 9
  
    // Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouse out events while the second handler should be listening for mouse enter events.
    // const blogEl = document.querySelectorAll('.blog-post')
  
  
    // Not sure How to do this yet
  
    const blogEl = document.querySelectorAll('.blog-post')
     
  
    blogEl.classList.toggle('.purple')
    
  
    // for (i = 0; blogEl.length; i++) {
    //    blogEl[i].addEventListener('mouseout', mouseOut => {
    //         blogEl.classList.toggle('.purple')
    //    })
  
    //   blogEl[i].addEventListener('mouseenter', mouseEnter => {
    //        
    //   })
      
  
    
    
  
  
  
  });
  