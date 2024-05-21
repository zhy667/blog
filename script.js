document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表单提交

    // 获取输入框中的内容
    const commentText = document.getElementById('commentText').value;

    // 添加到留言显示区域
    const commentsList = document.getElementById('commentsList');
    const newComment = document.createElement('li');
    newComment.textContent = commentText;
    commentsList.appendChild(newComment);

    // 清空输入框
    document.getElementById('commentText').value = '';

    // 保存到本地存储
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

// 页面加载时显示留言
window.onload = loadComments;
