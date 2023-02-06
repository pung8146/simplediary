import React from 'react';

const DiaryItem = ({author, content, created_date, emotion, id}) => {
    return (
        <div className="DiaryItem">
            <div key={id}> 
                    <span>작성자 : {author}</span>
                    <span> | 감정점수 : {emotion}</span>
                    <span> | 일기 : {content}</span>
                    <span> | 작성시간 : {new Date(created_date).toLocaleString()}</span>
                </div>
        </div>
    );
};

export default DiaryItem;