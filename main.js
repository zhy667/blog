// import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = 'https://uputmkigkfrypbuckdhv.supabase.co'  // 替换为你的Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwdXRta2lna2ZyeXBidWNrZGh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczOTk1NDUsImV4cCI6MjAzMjk3NTU0NX0.nmlyYwttUbCtfVESJTJlU6ROJ6-hs2F493pJgqnq8xQ'  // 替换为你的Supabase API密钥
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

const commentForm = document.getElementById('commentForm')
const commentList = document.getElementById('commentList')

// Fetch and display comments
async function fetchComments() {
  const { data: comments, error } = await supabaseClient
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching comments:', error)
  } else {
    commentList.innerHTML = ''
    comments.forEach(comment => {
      const commentElement = document.createElement('div')
      commentElement.className = 'comment'
      commentElement.innerHTML = `
        <h4>${comment.username}</h4>
        <p>${comment.content}</p>
        <small>${new Date(comment.created_at).toLocaleString()}</small>
      `
      commentList.appendChild(commentElement)
    })
  }
}

// Post a new comment
commentForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const username = document.getElementById('username').value
  const content = document.getElementById('content').value

  const { data, error } = await supabaseClient
    .from('comments')
    .insert([{ username, content }])

  if (error) {
    console.error('Error posting comment:', error)
  } else {
    fetchComments()  // Refresh the comments list
    commentForm.reset()
  }
})

// Listen for new comments in real-time
// supabaseClient
//   .from('comments')
//   .on('INSERT', payload => {
//     fetchComments()  // Refresh the comments list
//   })
//   .subscribe()

// Initial fetch of comments
fetchComments()
