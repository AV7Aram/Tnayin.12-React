import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { posts, comments, albums, photos, todos, users } from './db/db.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App 
      posts={posts} 
      comments={comments} 
      albums={albums}
      photos={photos}
      todos={todos}
      users={users}
    />
  </BrowserRouter>
)

