



export default function Friend(props){
    const {friend} = props
    
    
    return(<div>
        <h2>{friend.name}</h2>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
    </div>)
}