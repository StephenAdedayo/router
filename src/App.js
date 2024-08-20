// import React from 'react'
// import Developer from './components/Developer'

// const App = () => {
//   const foods = ["Amala", "Pounded Yam", "Smoky jollof rice", "Eba", "Semo", "Egusi Soup", "Okro Soup", "Ewedu", "Wheat", "Akara"]
//   const animals = ["cheetah", "lion", "goat", "dog", "domestic fowl", "monkey", "donkey", "camel", "peacock", "ostrich"]
//   return (
//     <div>
//       <Developer propName = "Stephen" propJob = "Full stack Developer" propWage = "5000" />
//       <Developer propName="Trent" propJob="Frontend Developer" propWage="2500" />
//       <Developer propName="Ayo" propJob="Backend Developer" propWage="3000" />
//       <Developer propName="Skimaa" propJob="Mobile App Developer" propWage="3500" />

//      <ul className='mt-[50px]'>
//       {foods.map(food => (
//         <li key={food}>{food}</li>
//       ))}
//      </ul>

//      <ol className='mt-[50px]'>
//    {
//     animals.map((animal) => (
//       <li>{animal}</li>
//     ))
//    }

//      </ol>

//     </div>
//   )
// }

// export default App



import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
    </div>
  )
}

export default App
