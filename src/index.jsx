import { useState } from "react"

function Header(props) {
  return <h1>{createTitle(props.title)}</h1>
}
function Paragraph() {
  return (<p>https://nextjs.org/learn/foundations/from-javascript-to-react/displaying-data-with-props</p>)
}

function createTitle(title) {
  if (title) {
    return title;
  }
  return 'Default title';
}

function HomePage() {
  const [likes, setLikes] = useState(0);
  const names = [
    'Ada Lovelace'
    , 'Grace Hopper'
    , 'Margaret Hamilton'
    , 'Toonypep'];

  function handleClick() {
    setLikes(likes + 1);
  }
  function handleUnClick() {
    setLikes(likes - 1);
  }

  return (
    <div id="test">
      {/* Nesting the Header component */}
      <Header title="React title" />
      <Header title="2nd title" />
      <Header />
      <Paragraph />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like</button>
      <p>{likes}</p>
      <button onClick={handleUnClick}>UnLike</button>
    </div>
  );
}