import React, { ReactElement, FunctionComponent } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Dashboard: FunctionComponent = (): ReactElement => {
  return (
    <section className="dashboard">
      <Sidebar />
      <div className="dashboard-wrapper">
        <Header />
        <main>DASHBOARD</main>
      </div>
    </section>
  );
};

export default Dashboard;
