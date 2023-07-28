import {Sidebar} from "../Blocks/Sidebar/Sidebar";
import {Header} from "../Blocks/Header/Header";
import {Dashboard} from "../Blocks/Dashboard/Dashboard";

export const DashboardPage = (props) => {
  const {} = props;


  return(
    <div className="main-wrapper">
      <Header/>
      <Sidebar/>
      <main>
        <Dashboard/>
      </main>
    </div>
  )
}