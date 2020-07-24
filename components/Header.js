const Header = (props) => {
  
    return (
      <React.Fragment>
        <header className="App-header">
          <img src="./site-logo.png" alt="My_movies" className="app-logo" />
          <div className="posters-panel"></div>
          {props.children}
        </header>  
      </React.Fragment>    
    );
}
  
export default Header;