import Plainheader from "./components/Plain-header";
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Clientdashboard({ children }){
return(
<>
 <Plainheader />
 <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          {children}
        </div>
      </div>
    </div>
</>
);
}
export default Clientdashboard;

