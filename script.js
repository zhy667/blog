document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const commentText = document.getElementById('commentText').value;


    const commentsList = document.getElementById('commentsList');
    const newComment = document.createElement('li');
    newComment.textContent = commentText;
    commentsList.appendChild(newComment);

    document.getElementById('commentText').value = '';

    
    saveComment(commentText);
});

function saveComment(comment) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentsList = document.getElementById('commentsList');
    comments.forEach(comment => {
        const newComment = document.createElement('li');
        newComment.textContent = comment;
        commentsList.appendChild(newComment);
    });
}


window.onload = loadComments;
