import {useState} from 'react'

export default function App() {

const [friends, setFriends] = useState([]);
const [picture, setPicture] = useState("");
const [name, setName] = useState("");

const addFriend = () => {
  const newFriends = [...friends]
  newFriends.push({picture: picture, name: name});
  setFriends(newFriends);

  setPicture('');
  setName('');
};

const friendInfo = friends.map((friend) => {

useEffect(() => {
  axios.get('/api/friends').then(res => {
    setFriends(res.data);
  });
}, [])

return(
   <div key={`${friend.name}`}>
        <img width="100px" src={friend.picture} alt={friend.name} />
        <span>{friend.name}</span>
      </div>
)
})

  return ( <div>

    <label htmlFor="picture">Picture: </label>
    <input 
    id="picture" 
    value={picture} 
    onChange={(e) => setPicture(e.target.value)}/>

    <label htmlFor="name">Name: </label>
    <input 
    id="name" 
    value={name} 
    onChange={(e) => setName(e.target.value)}/>

    <button type="button" onClick={addFriend}>Add Friend</button>

  </div>
  );
  }
