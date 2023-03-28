import { useState } from "react"

function Header(props) {
  return <h1
    style={{ color: 'blue' }}
    className="title"
    link href="index.css"
    rel="stylesheet" >
    {createTitle(props.title)}
  </h1>
}
function Paragraph(props) {
  return (
    <p>{props.title ?
      props.title
      :
      ""}
    </p>)
}
function MyButton(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert('You clicked me ' + count + ' times!');
  }

  return (
    <button onClick={handleClick}>{props.title}</button>
  );
}

function createTitle(title) {
  if (title) {
    return title;
  }
  return 'Default title';
}
function UnorderedList(props) {
  const listItems = props.array.map(item =>
    <li
      key={item.id}
      style={{ color: item.isFruit ? 'lightgreen' : 'green' }}
    >{item.title}</li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
export default function HomePage() {
  const [likes, setLikes] = useState(0);
  const [unlikes, setUnlikes] = useState(0);
  const names = [
    { title: 'Manjonein', isFruit: false, id: 1 },
    { title: 'Toonypep', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  function handleClick() {
    setLikes(likes + 1);
  }
  function handleUnClick() {
    setUnlikes(unlikes - 1);
  }

  return (
    // <head link href="index.css" rel="stylesheet" >
    <div id="test">
      <Header title="React title" />
      <Header title="2nd title" />
      <Header />
      <Paragraph title="https://nextjs.org/learn/foundations/from-react-to-nextjs/next-steps" />

      <UnorderedList array={names} />

      <Paragraph title="Testknop :" />
      <MyButton title="Testknop 1" />
      <MyButton title="Testknop 2" />
      <Paragraph />
      <button onClick={handleClick}>Like {likes}</button>
      <button onClick={handleClick}>Like {likes}</button>
      <p>{likes} vs {unlikes}</p>
      <button onClick={handleUnClick}>UnLike {unlikes}</button>
    </div>
    // </head>
  );
}