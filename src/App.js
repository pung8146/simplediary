import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
// {
//   id:1,
//   author:"홍길동",
//   content:"의로운 의적",
//   created_date: new Date().getTime(),
//   emotion: 1,
// },
// {
//   id:2,
//   author:"이순신",
//   content:"멋진 장군님",
//   created_date: new Date().getTime(),
//   emotion: 2,
// },{
//   id:3,
//   author:"삼방울",
//   content:"상방울 자매",
//   created_date: new Date().getTime(),
//   emotion: 3,
// },
// {
//   id:4,
//   author:"홍길동4",
//     content:"의로운 의적",
//   created_date: new Date().getTime(),
//   emotion: 1,
// },
// ]

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, emotion, content) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제 되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId,newContent) => {
    setData(
      data.map((it) => it.id === targetId ? {...it, content:newContent}: it)
    )
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
