import style from './Commment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.js";
import {useState} from "react";

interface propsComment {
    content: string,
    deleteComment: (comment: string) => void;
}

export function Comment(props: propsComment) {

    const [likeCount, setLikeCount] = useState(0)


    function deleteComment(comment: string) {
        props.deleteComment(comment)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/AndersonMacedoCavalcanti.png"/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Anderson Cavalcanti</strong>
                            <time dateTime="2022-05-22 12:40:00" title="2022-05-22 12:40:00">Cerca de 1h atras</time>
                        </div>
                        <button title="Deletar comentario" onClick={() => deleteComment(props.content)}>
                            <Trash/>
                        </button>
                    </header>
                    <p>{props.content}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span id="valueAplaudir">{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}