const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');

commentForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const commentText = commentInput.value;
  if (commentText === '') return;
  
  const commentItem = document.createElement('li');
  commentItem.className = 'comment';
  commentItem.innerHTML = `<p>${commentText}</p>`;
  commentList.appendChild(commentItem);
  
  commentInput.value = '';
});