import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useRef, useState } from 'react';

firebase.initializeApp({
    apiKey: ***********************************,
    authDomain: "chatster-d04d4.firebaseapp.com",
    projectId: "chatster-d04d4",
    storageBucket: "chatster-d04d4.appspot.com",
    messagingSenderId: "601832290178",
    appId: ************************************
    })

const auth = firebase.auth();
const firestore = firebase.firestore();


const Chat = props => {

    
    const [user] = useAuthState(auth);

    return (
        <div className="d-inline-flex bg-info w-25 p-3 justify-content-around align-content-center m-5 card mb-5">
        <header>
            <h1>Stock Chat</h1>
            
            <SignOut />
        </header>

        <section>
            {user ? <ChatRoom /> : <SignIn />}
        </section>

        </div>
    );
    }

    function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        
        </>
    )

    }

    function SignOut() {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
    }


    function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
        <main>

        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>

        </main>

        <form onSubmit={sendMessage}>

        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

        <button className = "btn btn-success" type="submit" disabled={!formValue}>Send It</button>

        </form>
    </>)
    }


    function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt= "broken" />
        <p>{text}</p>
        </div>
    </>)
    }


export default Chat;

