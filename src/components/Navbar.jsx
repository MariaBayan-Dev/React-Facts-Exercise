import logoReact from '../assets/react.svg'

export default function NavBar(){
    return(
        <header>
            <nav>
                <img src={logoReact} alt="" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}