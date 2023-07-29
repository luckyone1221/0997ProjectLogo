import {Header} from "../Blocks/Header/Header";
import {Sidebar} from "../Blocks/Sidebar/Sidebar";
import {ServiceDescr} from "../Blocks/ServiceDescr/ServiceDescr";
import {BackBtn} from "../Blocks/shared/BackBtn";
import {Breadcrumbs} from "../Blocks/shared/Breadcrumbs";
import {Footer} from "../Blocks/Footer/Footer";
import {WorkSpaceText} from "../Blocks/WorkSpaceText/WorkSpaceText";

export const TextWorkspacePage = (props) => {
  const {} = props;

  return(
    <div className="main-wrapper">
      <Header/>
      <Sidebar/>
      <main>
        <WorkSpaceText>
          <BackBtn/>
          <Breadcrumbs/>
        </WorkSpaceText>
      </main>
      <Footer/>
    </div>
  )
}