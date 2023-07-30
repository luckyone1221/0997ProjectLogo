import {Header} from "../Blocks/Header/Header";
import {Sidebar} from "../Blocks/Sidebar/Sidebar";
import {Footer} from "../Blocks/Footer/Footer";
import {ServiceDescr} from "../Blocks/ServiceDescr/ServiceDescr";
import {BackBtn} from "../Blocks/shared/BackBtn";
import {Breadcrumbs} from "../Blocks/shared/Breadcrumbs";

export const ServicePage = (props) => {
  const {configKey} = props;

  return(
    <div className="main-wrapper">
      <Header/>
      <Sidebar/>
      <main>
        <ServiceDescr configKey={configKey}>
          <BackBtn/>
          <Breadcrumbs/>
        </ServiceDescr>
      </main>
      <Footer/>
    </div>
  )
}