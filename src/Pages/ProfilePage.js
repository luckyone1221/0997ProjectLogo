import {Header} from "../Blocks/Header/Header";
import {Sidebar} from "../Blocks/Sidebar/Sidebar";
import {Footer} from "../Blocks/Footer/Footer";
import {ProfileBox} from "../Blocks/ProfileBox/ProfileBox";

export const ProfilePage = (props) => {
  const {} = props;

  return(
    <div className="main-wrapper">
      <Header/>
      <Sidebar/>
      <main>
        <ProfileBox/>
      </main>
      <Footer/>
    </div>
  )
}