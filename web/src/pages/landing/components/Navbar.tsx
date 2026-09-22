
const Navbar = () => {
  return (

    <nav className="flex items-center justify-between px-8 py-5">

      <div><img src="./logo/logo.jpg" alt="" /><h1 className="text-2x1 font-bold">FORGE</h1></div>

      <div className="flex gap-8 items-center">
        <a href="#" className="text-sm font-medium">HOME</a>

        <a href="#" className="text-sm font-medium">ABOUT US</a>

        <a href="#" className="text-sm font-medium">PROGRAM</a>

        <button className="rounded-lg bg-lime-400 px-5 py-4 text-sm font-black">SIGN UP</button>
      </div>
    </nav>
      
  )
}

export default Navbar