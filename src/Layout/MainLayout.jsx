import { Outlet } from 'react-router-dom';
import Navber2 from './Navber2';
import Footer from '../Pages/Footer';
import Services from '../Pages/Services';

const MainLayout = () => {
    return (
        <div>
            <div >
                <Navber2></Navber2>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default MainLayout;