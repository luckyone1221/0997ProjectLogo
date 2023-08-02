import {Header} from "../Blocks/Header/Header";
import {Sidebar} from "../Blocks/Sidebar/Sidebar";
import {Footer} from "../Blocks/Footer/Footer";
import {Plans} from "../Blocks/Plans/Plans";

export const PlansPage = (props) => {
  const {} = props;

  return(
    <div className="main-wrapper">
      <Header/>
      <Sidebar/>
      <main>
        <Plans/>
      </main>
      <Footer/>
    </div>
  )
}