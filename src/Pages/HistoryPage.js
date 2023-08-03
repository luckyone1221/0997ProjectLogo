import {Header} from "../Blocks/Header/Header";
import {Sidebar} from "../Blocks/Sidebar/Sidebar";
import {Plans} from "../Blocks/Plans/Plans";
import {Footer} from "../Blocks/Footer/Footer";
import {History} from "../Blocks/History/History";

export const HistoryPage = (props) => {
  const {} = props;

  return(
    <div className="main-wrapper">
      <Header/>
      <Sidebar settings={true}/>
      <main>
        <History/>
      </main>
      <Footer/>
    </div>
  )
}