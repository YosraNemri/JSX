import "./App.css";
import myimage from "./spring bird.jpg";
import "./style.css";

function App() {
    return (
        <div className="App">
            <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
                <h1 className="title red">Yosra</h1>
                <br />
                <img src={myimage} alt="image not found" width="50%" />
                <br />
                <img src="/notanimage" alt="this is not an image" width="50%" />
            </div>
            <br />
            <video width={720} height={440} controls>
                <source src="myVideo.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
