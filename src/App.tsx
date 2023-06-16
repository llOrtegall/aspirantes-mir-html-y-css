function App() {

  return (
    <>
      <nav className='flex justify-evenly w-full h-auto py-2 bg-emerald-300'>
        <figure className='flexp'>
          <img width={50} src="../src/assets/logo.png" alt="foto" />
        </figure>
        <ul className='flex'>
          <li className='m-auto mx-6'><a href="#">Home</a></li>
          <li className='m-auto mx-6'><a href="#">Contac</a></li>
          <li className='m-auto mx-6'><a href="#">About</a></li>
          <li className='m-auto mx-6'><a href="#">Products</a></li>
          <li className='m-auto mx-6'><a href="#">Log In</a></li>
        </ul>
      </nav >
    </>
  )
}

export default App
