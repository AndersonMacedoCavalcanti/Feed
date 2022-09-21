import style from './Siderbar.module.css'
import {PencilLine} from 'phosphor-react'
import {Avatar} from './Avatar.js'

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover}
                 src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=50"
                 alt=""/>
            <div className={style.profile}>
                <Avatar src="https://github.com/AndersonMacedoCavalcanti.png"/>
                <strong><h1>Anderson Macedo</h1></strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}