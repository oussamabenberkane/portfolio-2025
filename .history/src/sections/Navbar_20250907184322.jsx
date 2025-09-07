import { useState } from "react"
function Navigation() {
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <a href="/" className="nav-link">Home</a>
            </li>   
            <li className="nav-li">
                <a href="/" className="nav-link">About</a>
            </li>
            <li className="nav-li">
                <a href="/" className="nav-link">Work</a>
            </li>
            <li className="nav-li">
                <a href="/" className="nav-link">Contact</a>
            </li>
        </ul>
    )
}
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="/" className="text-xl font-bold transition-colors
                    text-neutral-400 hover:text-white">
                        Oussama
                    </a>
                    <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            <div className="block overflow-hidden sm:hidden">

            </div>
        </div>
    )
}

export default Navbar