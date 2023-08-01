import {Header} from "../Blocks/Header/Header";
import {Sidebar} from "../Blocks/Sidebar/Sidebar";
import {ServiceDescr} from "../Blocks/ServiceDescr/ServiceDescr";
import {BackBtn} from "../Blocks/shared/BackBtn";
import {Breadcrumbs} from "../Blocks/shared/Breadcrumbs";
import {Footer} from "../Blocks/Footer/Footer";
import {TxtEditor} from "../Blocks/TxtEditor/TxtEditor";

export const TxtEditorPage = (props) => {
  const {} = props;

  return(
    <div className="main-wrapper">
      <Header/>
      <Sidebar/>
      <main>
        <TxtEditor/>
      </main>
      <Footer/>
    </div>
  )
}