import style from './Post.module.css';
import {Comment} from "./Comment";
import {Avatar} from "./Avatar.js";
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {ChangeEvent, FormEvent, InvalidEvent, useState} from "react";

interface propsPost {
    author: { avatarUrl: string, name: string, role: string },
    publishedAt: Date
    content: Content[]
}

interface Content {
    type: string,
    content: string
}

export function Post({author, publishedAt, content}: propsPost) {

    const [comments, setComments] = useState([
        "Eae Dev, Parabens"
    ])
    const [newCommentText, setNewCommentText] = useState("")

    const publishedDateFromatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {locale: ptBR})

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleDeleteComment(comment: string) {
        const updateComments = comments.filter(value => value !== comment)
        setComments(updateComments)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse Campo e obrigatorio ')
    }

    const isNewCommentEmpty = newCommentText.length === 0


    return (
        <>
            <article className={style.post}>
                <header>
                    <div className={style.author}>
                        <Avatar src={author.avatarUrl}/>
                        <div className={style.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>

                    <time dateTime={publishedAt.toISOString()}
                          title={publishedDateFromatted}>{publishedDateRelativeToNow}</time>
                </header>

                <div className={style.content}>
                    {content.map(content => {
                        if (content.type === 'paragraph') {
                            return <p key={content.content}>{content.content}</p>
                        } else if (content.type === 'link') {
                            return <a key={content.content} href="">{content.content}</a>

                        }
                    })}
                </div>

                <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                    <strong>Deixe seu Feedback</strong>
                    <textarea name="comment" placeholder="Deixe um Comentario" onChange={handleNewCommentChange}
                              value={newCommentText} onInvalid={handleNewCommentInvalid} required/>
                    <footer>
                        <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                    </footer>
                </form>

                <div className={style.commentList}>

                    {comments.map((comments, index) => {
                        return (
                            <Comment key={index} content={comments} deleteComment={handleDeleteComment}/>
                        )
                    })}

                </div>
            </article>
        </>
    )
}