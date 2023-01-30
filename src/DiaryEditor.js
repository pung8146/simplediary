import React,{useState} from 'react'



export default function DiaryEditor () {
  const [author, setAuthor] = useState('');
    const [content,setContent] = useState('')

    return (
    <div className='DiaryEditor'>
        <h2>오늘의 일기</h2>
        <input 
        name='author '
        value={author} onChange={(e)=>{
            console.log(e.target.value)
            setAuthor(e.target.value)
        }}/>
        <div>
            <textarea value={content} onChange={(e)=>{
                setContent(e.target.value)
            }}/>
        </div>
    </div>
  )
}
