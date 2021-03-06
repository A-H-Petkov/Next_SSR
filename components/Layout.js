import Head from 'next/head';
import Navigation from './Navigation';


export default function Layout(props) {
  return (
    <div className="container">
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
      </Head>

      <Navigation />

      {props.children}

      <footer className="app-footer">
        <img src="./site-logo.png" alt="My_movies" className="app-footer-logo" />
        <div className="posters-panel"></div>
      </footer>

      <style jsx global>{`
        body {
          background-color: #282c34;
        }
        
        .App {
          /* text-align: center; */
          margin: 0;
        }
        
        .App-logo {
          height: 40vmin;
          pointer-events: none;
        }
        
        .App-header,
        main {
          background-color: transparent;
          min-height: 50vh;
          padding: 40px 60px;
          position: relative;
          /* display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white; */
        }
        
        .app-logo {
          width: 140px;
          float: left;
          background-color: rgba(0, 0, 0, 0.14);
          border-radius: 8px;
        }
        
        .add-movie-btn {
          float: right;
        }
        
        .search-panel {
          clear: both;
          padding: 30px;
        }
        
        .search-panel-title,
        .modal-title,
        .details-title {
          color: #61dafb;
          font-size: 28px;
          font-weight: 200;
          margin-bottom: 24px;
        }
        
        .posters-panel {
          background-image: url(./Movie_Posters.jpg);
          
          /*Add blur effect*/
          filter: blur(8px);
          -webkit-filter: blur(8px);
        
          /* Full height */
          height: 100%;
        
          /* Center and scale the image nicely */
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: -1;
        }
        
        .catalog-controls {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        
        .sorting-label {
          color: antiquewhite;
          font-size: 18px;
          line-height: 38px;
          margin-right: 20px;
        }
        
        .catalog-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: flex-end;
          margin: 0 -18px;
        }
        
        .catalog-item {
          margin: 16px;
          flex: 1 1 30%;
          position: relative;
        }
        
        .movie-title-row h6, 
        .movie-title-row span {
          display: inline-block;
        }
        
        .movie-title-row span {
          float: right;
          padding: 2px 8px;
          border: 1px solid gray;
          border-radius: 4px;
        }
        
        .app-footer {
          position: relative;
          padding: 24px;
        }
        
        .app-footer-logo {
          width: 160px;
          display: block;
          margin: 0 auto;
          background-color: rgba(0, 0, 0, 0.14);
          border-radius: 8px;
        }
        
        .item-dot-menu {
          position: absolute;
          top: 20px;
          right: 20px;
          background-color: rgba(0, 0, 0, 0.5)!important;
          text-align: center;
          border-radius: 50%;
          color: whitesmoke;
          font-size: 38px;
          line-height: 16px;
          /* -webkit-transform:rotate(90deg);
          -moz-transform:rotate(90deg);
          -o-transform: rotate(90deg);
          -ms-transform:rotate(90deg);
          transform: rotate(90deg); */
          display: none;
        }
        
        .item-dot-menu-trigger {
        
        
          height: 40px;
          width: 40px;
          background-color: rgba(0, 0, 0, 0.5)!important;
          text-align: center;
          border-radius: 50%;
          color: whitesmoke;
          font-size: 28px;
          line-height: 16px;
        }
        
        button.item-dot-menu-trigger::after {
          display: none;
        }
        
        .catalog-item:hover .item-dot-menu {
          display: block;
        }
        
        .close-modal-btn {
          color: white;
          font-size: 24px;
          line-height: 24px;
          background-color: transparent;
          border: none;
          float: right;
        }
        
        .form-input {
          background-color: #282c34;
          border-color: #007bff;
          color: white;
        }
        
        .modal-form-reset,
        .modal-form-submit {
          float: right;
        }
        
        .modal-form-submit {
          margin-left: 22px;
        }
        
        .darker-back {
          background-color: rgba(0, 0, 0, 0.7);
        }
        
        .details-poster {
          width: 208px;
          margin-right: 40px;
        }
        
        .details-overview {
          color: white;
        }
        
        .detail-stats span {
          color: #61dafb;
          display: inline-block;
          margin-right: 24px;
        }
        
        .color-sienna {
          color: sienna;
        }
        
        .app-navigation {
          height: 48px;
          padding-top: 12px;
          text-align: center;
        }
        
        .app-navigation a {
          display: inline-block;
          text-transform: uppercase;
          margin: 0 20px;
        }
        
        .movie-page {
          background-color: #282c34;
          min-height: 500px;
          padding: 30px 20%;
        }
      `}</style>
    </div>
  )
}
