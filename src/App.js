import "./App.css";

// redux-----
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./redux/Home";
import Login from "./redux/Login";
import Contact from "./redux/Contact";
import { Provider } from "react-redux";
import { store } from "./Store";


// import Form from "./components/Form";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// lec 10 
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";
// import Contact from "./pages/Contact";
// import Navbar from "./Navbar";
// import { useState, createContext } from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// export const AppContext = createContext();
// lec 10 




// import GenerateExcuse from "./components/GenerateExcuse";
// import FetchDataApi from "./components/FetchDataApi";
// import PredictAge from "./components/PredictAge";
// import VideoSix from "./components/VideoSix";
// import ConditionalRendering from "./components/ConditionalRendering";
// import List from "./components/List";
// import Job from "./components/Job";
// import Planet from "./components/Planet";
// import StateHooks from "./components/StateHooks";

// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  // const age = 14;
  // const isGreen = true;
  // const isGreen = false;

  // if(age >= 18){
  //     return <h1>Over age</h1>
  // }
  // else{
  //   return <h1>Under age</h1>
  // }


  // lec 10----------
  // const client = new QueryClient({
  //   defaultOptions:{
  //     queries:{
  //       refetchOnWindowFocus: false,
  //     }
  //   }
  // });
  // const [username, setUsername] = useState("Umar");
  return (
    <>
      {/* redux----- */}
      <div >
        <Provider store={store}>
          <Router>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/contact'>Contact</Link>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </Provider>
      </div>

      {/* <Form /> */}

      {/* lec 10------------- */}
      {/* <div>
        <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername }}>
          <Router>
            <Navbar />
            <Routes>
            
              {/* after useContext hook */}
      {/* <Route path="/" element={<Home username={username} />} /> */}
      {/* <Route path="/profile" element={<Profile username={username} setUsername={setUsername} />} /> */}


      {/* <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<h2 style={{ backgroundColor: 'black' }}>Error: 404 || PAGE NOT FOUND!</h2>} />
            </Routes>
          </Router>
        </AppContext.Provider>
        </QueryClientProvider>
      </div> */}
      {/* lec 10-------------- */}



      {/* <ConditionalRendering /> */}
      {/* <List /> */}

      {/* {age >= 18 ? <h1>Over age</h1> : <h1>Under age</h1>}
      <h1 style={{ color: isGreen ? "green" : "purple" }}>Is this isGreen?</h1>

      {isGreen && <p>its now green</p>} */}

      {/* <Navbar title="TextUtils" aboutLink="About Us" />
      <TextForm Heading="Enter the text below to analyze" /> */}
      {/* <Friend name="Rohan" />
      <Job salary="3000" experience="3" postion="React developer" />
      <Planet /> */}
      {/* <StateHooks /> */}



      {/* lecture 6 */}
      {/* life cycle, useEffect */}
      {/* <VideoSix /> */}



      {/* lecture 7 */}
      {/* how to fetch data from an api in react */}
      {/* <FetchDataApi /> */}
      {/* <PredictAge /> */}
      {/* Exercise */}
      {/* <GenerateExcuse /> */}
    </>
  );
}

// const Friend = (props) => {
//   return (
//     <>
//       <div className="friend">
//         <h4>{props.name}</h4>
//         <h4>21</h4>
//         <h4>rohan@rohan.com</h4>
//       </div>
//     </>
//   );
// }

export default App;
