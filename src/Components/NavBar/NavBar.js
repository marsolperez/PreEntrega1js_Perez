import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav> 
            <h3> E Commerce</h3>
            <div>
                <button> Cursos</button> 
                <button> Materiales</button> 
                <button> Clases</button> 
            </div>
            <CartWidget />
        </nav>
    ) 
}

export default NavBar