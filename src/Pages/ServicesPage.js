import {Sidebar} from "../Blocks/Sidebar/Sidebar";
import {Header} from "../Blocks/Header/Header";
import {Dashboard} from "../Blocks/Dashboard/Dashboard";
import {Footer} from "../Blocks/Footer/Footer";
import {ServiceBoard} from "../Blocks/ServiceBoard/ServiceBoard";

export const ServicesPage = (props) => {
  const {name, description, configKey} = props;

  return(
    <div className="main-wrapper">
      <Header/>
      <Sidebar/>
      <main>
        <ServiceBoard name={name} description={description} configKey={configKey} theme="warning"/>
      </main>
      <Footer/>
    </div>
  )
}