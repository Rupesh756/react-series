 function Profile (props) {
    return (
    <div>
        <ProfileCard
        name ="Rupesh_Kumar"
        age={22}
        greeting ={
            <div>
                <strong>Hello, I am " " and I am  years old.</strong>
            </div>
        }
        >
            <p>Hobbies:Music,waliking, singing</p>
            <button>Contact</button>
            </ProfileCard>
            </div>
    );
};
export default Profile;

function ProfileCard({name, age, greeting, children}) {
    // const {name, age, greeting} = props;
    return(
        <>
        <h2>Name:{name}</h2>
        <p>Age: {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}