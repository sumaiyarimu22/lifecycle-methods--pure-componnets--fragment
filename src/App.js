// import React from "react";

// // import LifeCycleUpdating from "./Components/LifeCycleUpdating";
// // import LifeCycleMounting from "./Components/LifeCycleMounting";

// const App = () => {
//   return (
//     <div>
//       {/* <LifeCycleMounting /> */}
//       {/* <LifeCycleUpdating /> */}
//     </div>
//   );
// };

// export default App;

import React from "react";
import ParentComp from "./Components/ParentComp";
const App = () => {
  return <div>{<ParentComp />}</div>;
};

export default App;

// import React from "react";

// function App() {
//   return (
//     <>
//       <div>
//         <h1>Lorem ipsum dolor sit amet.</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
//           cupiditate.
//         </p>
//       </div>
//       <div>
//         <h1>Lorem ipsum dolor sit amet.</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
//           cupiditate.
//         </p>
//       </div>
//     </>
//   );
// }

// export default App;
