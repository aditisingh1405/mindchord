import Button from 'react-bootstrap/Button';
import '../css/Home.css'

function Home() {
    return (
        <div className="Home vertical-center">
            <div className="container">
                <h1>Music<br></br>Therapy</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6 border-right">
                        <p>Get music <br></br>suggestions</p>
                    </div>
                    <div className="col-md-6">
                        <p>Connect<br></br>with experts</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <a href='/survey'><Button className="test-btn">TAKE THE TEST</Button></a>
                </div>
            </div>
        </div>
    );
}
  
export default Home;