// Like Button
const likeButton = document.getElementById('likeButton');
const emojiContainer = document.getElementById('emojiContainer');
let liked = true;
let selectedEmoji = '';

likeButton.addEventListener('mouseenter', () => {
  emojiContainer.style.display = 'block';
});

likeButton.addEventListener('mouseleave', () => {
  emojiContainer.style.display = 'none';
});

emojiContainer.addEventListener('mouseenter', () => {
  emojiContainer.style.display = 'block';
});

emojiContainer.addEventListener('mouseleave', () => {
  emojiContainer.style.display = 'none';
});

likeButton.addEventListener('click', () => {
  if (liked) {
    likeButton.style.backgroundColor = '#3b5998';
    likeButton.style.color = 'white';
    liked = false;
  } 
});

emojiContainer.addEventListener('click', (event) => {
  const target = event.target;
  

  
  if (target.classList.contains('emoji')) {
    
    const emoji = target.textContent;
    
    if (liked && selectedEmoji === emoji) {
      likeButton.innerHTML = 'Like';
      
      liked = false;
    } else {
      likeButton.innerHTML = emoji;
    

      liked = true;
    }
    
    selectedEmoji = emoji;
    emojiContainer.style.display = 'none';
  
    
  }
});


