import { Outlet } from "react-router"
import { Header } from "./Layouts"
import { NavLink } from "react-router-dom"

export const Home  = () => {
    return(
        <>
        <Header/>
        <main>
            <section className="hero">
                <div className="container">
                    <ul className="hero-list">
                        <li className="hero-item">
                            <NavLink className={({isActive}) => isActive ? "hero-link-active": "hero-link" } to={"/google"}>Google</NavLink>
                        </li>
                        <li className="hero-item">
                            <NavLink className={({isActive}) => isActive ? "hero-link-active": "hero-link" } to={"/instagram"}>Instagram</NavLink>
                        </li>
                        <li className="hero-item">
                            <NavLink className={({isActive}) => isActive ? "hero-link-active": "hero-link" } to={"/twitter"}>Twitter</NavLink>
                        </li>
                        <li className="hero-item">
                            <NavLink className={({isActive}) => isActive ? "hero-link-active": "hero-link" } to={"/twitter1"}>Twitter1</NavLink>
                        </li>
                        <li className="hero-item">
                            <NavLink className={({isActive}) => isActive ? "hero-link-active": "hero-link" } to={"/vk"}>VK</NavLink>
                        </li>
                        <li className="hero-item">
                            <NavLink className={({isActive}) => isActive ? "hero-link-active": "hero-link" } to={"/yandex"}>Yandex</NavLink>
                        </li>
                    </ul>
                    <Outlet/>
                </div>
            </section>
        </main>
        </>
    )
}