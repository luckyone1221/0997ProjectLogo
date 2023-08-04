import {Header} from "../Blocks/Header/Header";
import {Sidebar} from "../Blocks/Sidebar/Sidebar";
import {Footer} from "../Blocks/Footer/Footer";
import {SecurityBox} from "../Blocks/SecurityBox/SecurityBox";

export const SecurityPage = (props) => {
  const {} = props;

  return(
    <div className="main-wrapper">
      <Header/>
      <Sidebar/>
      <main>
        <SecurityBox/>
      </main>
      <Footer/>
    </div>
  )
}