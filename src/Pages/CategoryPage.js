import {Sidebar} from "../Blocks/Sidebar/Sidebar";
import {Header} from "../Blocks/Header/Header";
import {Dashboard} from "../Blocks/Dashboard/Dashboard";
import {Footer} from "../Blocks/Footer/Footer";
import {ServiceBoard} from "../Blocks/ServiceBoard/ServiceBoard";

export const CategoryPage = (props) => {
  const {name, description, configKey, theme} = props;

  return(
    <div className="main-wrapper">
      <Header/>
      <Sidebar/>
      <main>
        <ServiceBoard name={name} description={description} configKey={configKey} theme={theme}/>
      </main>
      <Footer/>
    </div>
  )
}