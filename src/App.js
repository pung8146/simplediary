import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:"홍길동",
    content:"의로운 의적",
    created_date: new Date().getTime(),
    emotion: 1,
  },
  {
    id:2,
    author:"이순신",
    content:"멋진 장군님",
    created_date: new Date().getTime(),
    emotion: 2,
  },{
    id:3,
    author:"삼방울",
    content:"상방울 자매",
    created_date: new Date().getTime(),
    emotion: 3,
  },
  {
    id:4,
    author:"홍길동4",
      content:"의로운 의적",
    created_date: new Date().getTime(),
    emotion: 1,
  }, 
  
]

function App() {
  return (
    <div className="App">  
      <DiaryEditor  />
      <DiaryList diaryList={dummyList}/>
      </div>
  );
}

export default App;
