import React from "react";
import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";

const Home = () => {
  return (
    <main>
      <h1 style={{ textAlign: "center", marginTop: "1.6rem" }}>
        Zucker Hospital
      </h1>
      <Doctors />
      <AppointmentList />
    </main>
  );
};

export default Home;
