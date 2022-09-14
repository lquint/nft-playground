import Footer from "./footer";
import Navbar from "./navbar"

const Layout = ({children}) => {
    return ( 
        <div className="">
            <Navbar/>
                <div className="content h-4/5">
                    {children}
                </div>
            <Footer/>
        </div>
    );
}
 
export default Layout;