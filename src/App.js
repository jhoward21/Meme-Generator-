import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import TodoItem from "./components/TodoItem"
import ContactCard from "./components/ContactCard"
import Joke from "./components/Joke"

function App() {
    return (
      <div>
        <Header />
        <MainContent />
        <ContactCard 
            name="Mr. Whiskerson" 
            imgUrl="https://placekitten.com/300/200" 
            phone="(212) 555-1234" 
            email="mr.whiskaz@catnap.memow"
            />
        <ContactCard 
            name="Fluffykins"
            imgUrl="http://placekitten.com/400/200"
            phone="(212) 555-2345"
            email="fluff@me.com"
            />
        <ContactCard 
            name="Destroyer"
            imgUrl="http://placekitten.com/400/300"
            phone="(212) 555-3456"
            email="ofworlds@yahoo.com"
        />
        <ContactCard 
            name="Felix"
            imgUrl="http://placekitten.com/200/100"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
        />
        <Joke question="Why did the chicken cross the road?" punchline="Because there where snakes in the grass!"/>
        <Joke question="Why does Saturn lay on it's side?" punchline="Because it's tired!"/>
        <Joke question="Hear about the new restaurant called Karma?" punchline="There's no menu: You get what you deserve."/>
        <Joke question="Did you hear the actor who fell through the floorboards?" punchline="He was just going through a stage."/>
        <Joke question="Why do ducks lay golden eggs?" punchline="Because the they're made of gold!"/>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <Footer />
      </div>
    )
}

export default App
