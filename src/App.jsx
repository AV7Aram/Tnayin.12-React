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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
