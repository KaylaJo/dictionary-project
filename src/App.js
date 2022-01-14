import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1> Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="queen" />
        </main>
        <footer className="App-footer">
          Coded by Kayla J. Cupp. Open-Source code on{" "}
          <a
            href="https://github.com/KaylaJo/dictionary-project"
            className="Link"
            rel="noreferrer"
          >
            GitHub
          </a>
          . Hosted on Netlify.
        </footer>
      </div>
    </div>
  );
}

export default App;
