import './App.css';

function App() {
  const name=["Irsh","Arsh","Buddy"];

  const users=[
      {name:"Irsh",
        pic:"https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
      },
      {name:"Arsh" ,
        pic:"https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
      },
      {name:"Buddy",
        pic:"https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs="
      }
  ];

  return (
    <div className="App">
       
       {users.map((usr)=>(
        <User name={usr.name} pic={usr.pic}/>
      ))} 

      {/* <User name="Irsh" pic="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"/>
      <User name="Arsh" pic="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"/>
      <User name="Buddy" pic="https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs="/> */}
      
     {
      name.map((nm) =>(
        <Welcome name={nm.name}/>
      ))
     }
    </div>
  );
}

function User({name,pic}){
  return(
    <section>
      <img  className="_pro" src={pic} alt={name}/>
      <h1 className="user-name">Hello  
        <span className="user_name">{ name}</span>
      </h1>
    </section>
  )
}

function Welcome({name}){
  return(
    <h1 className="user-name">Hello 
    <span className="user_name">{name}</span>
  </h1>
  )
}

//Without Using PROPS

// function User({name,pic}){
//   return(
//     <section>   
//       <img  className="_pro" src={pic} alt={name}/>
//       <h1 className="user-name">Hello <span className="user_name">{name}</span></h1>
//     </section>
//   )
// }

//Using PROPS

// function User(props){
//   return(
//     <section>   
//       <img  className="_pro" src={props.pic} alt={props.name}/>
//       <h1 className="user-name">Hello <span className="user_name">{props.name}</span></h1>
//     </section>
//   )
// }

export default App;
