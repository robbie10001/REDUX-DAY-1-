REDUX 

// React is trying to render elements to our browser screen.
// React also wants to handle user interaction. 
// In React, we have the concept of component level state. But this doesn’t really fit in with the main goal of react. 
// Handling data is not really Reacts strong suit! 
// What if we could give all our data handling to something besides react? 
// If we need a token six levels deep, we have to pass it through six times. 
// What if we had something, that just handled all the data and gave it to the components that needed it? This is redux. This is a state management library at a global level. State will be accessible throughout our application. State will be on a global level. This makes life a lot easier. We can set state in form and access it elsewhere within our program. 
// It helps us write applications that behave consistently, run in different environments and are easy to test. It provides a great developer experiences, such as live code editing combined with a time travelling debugger.
// Redux has a lifestyle that we need to understand. 
// The main part of understanding REDUX is how we should set it up. 
// The redux lifecycle.
// 1. Action creator - this is a simple function. The main purpose of the action creator is to create an action. ( ) => { }
// 2. An action - All an action is, is an object. For an action to be an action it needs a property called type. This object is given to a function call dispatch.  { type: } 
// 3. A dispatch - Dispatch takes this action/or object and gives it to reducer. 
// ( )
// 4.reducer -A reducer is just a function that returns an object, and this object is just a state. We will have many reducers. 
// Datatype normally an object, {  } 
// 5. state - State is just an object of reducers it has global scope. { reducers } 

//STARTING REDUX 

//1. npm install redux react-redux 

//REACT REDUX 
//React Redux gives us two components that help us glue stuff together.
//1. We get a provider that helps us keep track of state (state is also called store within Redux)
//2. It also provides a connection for us. 

//1. We create a new directory called actions. 
//within our action directory put all our action creators in it.
//we create an index.js  
//All an action creator is, is a function 

//1. Action Creator,
//4. The action creator takes as an argument the value of our payload which is the data we want to send through.
//5. We can pass an object with multiple values as a payload. 

//actions.index.js 

export const setAuthToken = (token) => { 
    return {
    //2. Action, the below object will be based to ever reducer. 
        type: "AUTH_TOKEN",
    //3. The payload is just the data we are sending through.
        payload: token 
    }
    //6. reducers are just pieces of state.
    //reducer rules 1: A reducer must always return a value, it can never return undifined. 
    //reducer rules 2: A reducer cannot reach outside of itself to find value. It should never be talking to anything outside its own action. 
    //reducer rules 3:  Just like in react we never mutate state, we never get state directly. 
}
//2. We create a new directory called reducers. 
//within our reducers we put all our reducers in it. 
//we create an index.js 
//we create another file called auth_reducer.js 


//these arguments are 

//we want to define all of the properties of defaultState within this method. 

//auth_reducer.js 

const defaultState = { 

};
//1. state - we 
//2. action - every single action we create, is going to be handed to every single reducer that we make. 
//3. Within our reducers we have to determine if a give reducer should handle an action. 
//4. We determine this by using switch(action.type)



export default (state = defaultState, action  ) => {
    switch(action.type) {
        case "Auth_Token": 
        //make a copy 
            let newState = {...state};
        //change the copy 
            new.State.token = action.payload; 
        //return the copy 
            return newState

//when ever return state, we want to return something that is not mutated. 
//we always want to return either the original state or a brand new piece of state. 
//in redux, we have to create a brand new object. 

        default: 
            return state; 
    }
}

//we need to import 

//index.js 

//import { Provider } from "react-redux"; 
//our provide becomes our top level component! It is what glues together our react and our redux! 
//import store from "./store"
//the store is the global state, we are telling our react that you are aware of redux. 
//now we are able to import state anywhere within our project. 


//we not set state by calling our actioncreator. 

//RegisterForm.js 

//import { setAuthToken } from "./../..actions"; 
//import { connnect } from "react-redux";
//if we want our component to connect to react-redux we have to call it! 

//export default connect(null, { setAuthToken })(RegistrationForm); 
//what this does is automatically connect us to dispatch.  
