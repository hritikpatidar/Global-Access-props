import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { StudentContext } from './StudentContext';

const student_name = [  // Array of objects
                      {
                        name:"ritik",
                        surname:"patidar"
                      },
                      {
                        name:"avinash",
                        surname:"bilawat"
                      },
                      {
                        name:"ayushi",
                        surname:"sharma"
                      }
                   ]
ReactDOM.render(
  <React.StrictMode>
      <StudentContext.Provider value={student_name}>
        <App />
      </StudentContext.Provider>
      
  </React.StrictMode>,
  document.getElementById('root')
);
