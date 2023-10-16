import logo from '@/assets/imagenes/logo.png';
import menu from '@/assets/imagenes/menu.png'
import carrito from '@/assets/imagenes/carrito.png'
import x from '../assets/imagenes/x.png'
import { useState } from 'react';

const Navbar =() => {
    const [navClass, setNavClass] = useState(" hidden font-bold  md:mr-auto md:flex md:flex-row md:gap-4 md:static md:p-0 ");

    const handleOpenMenu =() => {
        setNavClass(" absolute top-0 left-0 h-full p-8 gap-y-[21px] font-bold w-4/5  bg-white flex flex-col md:mr-auto md:flex md:flex-row md:gap-4 md:static md:p-0 ");
    };
   const handleCloseMenu = () =>{
     setNavClass(" hidden font-bold  md:mr-auto md:flex md:flex-row md:gap-4 md:static md:p-0 ")
   }
 

  return (
    <header className="  container  mx-auto flex items-center gap-8 bg-slate-200 px-4 py-8 ">
        <button className="md:hidden" onClick={handleOpenMenu}>
            <img src={menu} alt="" className=" w-4 m-3" />
        </button>
            <img src={logo}alt="logo" className="mr-auto mb-1 h-5 md:mr-0  "  />

       <nav className={navClass}>
        <button>
            <img src={x} alt=""  className="w-3 h-15 mb-10  md:hidden" onClick={handleCloseMenu}/>
        </button>
            <a href='#'>Camisas</a>
            <a href='#'>Descuentos</a>
            <a href='#'>Combos</a>
            <a href='#'>Sacos</a>
            <a href='#'>Sobre Nosotros</a>
       </nav>
  
       <button className="mr-4">
            <img src={carrito} alt=""  className=" w-8 h-6"  />
       </button>

  </header>
  )
}

export default Navbar
