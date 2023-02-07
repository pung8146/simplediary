import React, { useState } from 'react';

const DiaryItem = ({onRemove,author, content, created_date, emotion, id}) => {

  const [isEdit,setIsEdit] = useState(false)
  const toggleIsEdit = () => setIsEdit(!isEdit)

  const [localContent,setLocalContent] = useState("");

  const handleRemove = () => {
    if(window.confirm(`${id}번째 일기를 정말 삭제할까요?`)){
      onRemove(id)
  }
  }

    return (
        <div className="DiaryItem">
        <div className="info">
          <span className="author_info">
            작성자 : {author} | 감정점수 : {emotion}
          </span>
          <br />
          <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
        <div className="content">{isEdit ? <><textarea value={localContent} onChange={(e) => setLocalContent(e.target.value)}/></> : <>{content}</>}</div>
        {isEdit ? <button
            onClick={handleRemove}
        > 삭제하기</button> 
        :
        <button onClick={toggleIsEdit}>수정하기</button> }
        <button
            onClick={handleRemove}
        >
          삭제하기
        </button>
        <button onClick={toggleIsEdit}>수정하기</button>
      </div>
    );
};

export default DiaryItem;