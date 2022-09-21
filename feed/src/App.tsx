import {Header} from './components/Header.js'

import './globalStyled.css'
import styles from './app.module.css'
import {Sidebar} from "./components/Sidebar";
import {Post} from './components/Post.js';


const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/AndersonMacedoCavalcanti.png',
            name: 'Anderson Cavalcanti',
            role: 'Web Developer'
        },
        content: [

            {type: 'paragraph', content: 'Fala galeraaa'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portfolio. e um projeto que fiz no NLW Return, evento da RocketSeat'
            },
            {type: 'link', content: 'Anderson.design/doctorcare'},
        ],
        publishedAt: new Date('2022-05-10 20:00:00')
    },

    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CIO RocketSeat'
        },
        content: [

            {type: 'paragraph', content: 'Fala galeraaa'},
            {
                type: 'paragraph',
                content: 'o projeto que fiz no NLW Return, evento da RocketSeat foi muito inspirador'
            },
            {type: 'link', content: 'Anderson.design/doctorcare'},
        ],
        publishedAt: new Date('2022-05-10 20:00:00')
    }
]


function App() {


    return (
        <>
            <Header/>
            <div className={styles.wrapper}>
                <aside>
                    <Sidebar/>
                </aside>
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </>
    )
}

export default App
