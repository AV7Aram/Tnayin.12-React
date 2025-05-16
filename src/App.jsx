import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'

import { Posts } from './components/Posts/Posts'
import { Comments } from './components/Comments/Comments'
import { Albums } from './components/Albums/Albums'
import { Photos } from './components/Photos/Photos'
import { Todos } from './components/Todos/Todos'
import { Users } from './components/Users/Users'

import './App.css'

function App({ posts, comments, albums, photos, todos, users }) {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts  posts={posts}/> } />
        <Route path="/comments" element={<Comments comments={comments}/>} />
        <Route path="/albums" element={<Albums albums={albums}/>} />
        <Route path="/photos" element={<Photos photos={photos}/>} />
        <Route path="/todos" element={<Todos todos={todos}/>} />
        <Route path="/users" element={<Users users={users}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
