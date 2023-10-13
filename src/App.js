import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Pages/Users";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Calendar from "./Pages/Calendar";
import Login from "./Pages/Login";
import CheckAuth from "./Components/CheckAuth/CheckAuth";
import Record from "./Pages/Record";
import Form from "./Pages/Form";
import EventsCalendar from "./Components/EventsCalendar/EventsCalendar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/publicEvents" element={<EventsCalendar />} />
          <Route path="/record" element={<Record />} />
          <Route path="/form1" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <CheckAuth>
                <Home />
              </CheckAuth>
            }
          />
          <Route
            path="/calendar"
            element={
              <CheckAuth>
                <Calendar />
              </CheckAuth>
            }
          />
          <Route
            path="/users"
            element={
              <CheckAuth>
                <Users />
              </CheckAuth>
            }
          />
          <Route
            path="/settings"
            element={
              <CheckAuth>
                <Settings />
              </CheckAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
