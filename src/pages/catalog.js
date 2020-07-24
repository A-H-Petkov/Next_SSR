import { useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Modal from 'react-modal';
import Header from '../../components/Header';
import CatalogHeader from '../../components/catalog/CatalogHeader';
import ModalContent from '../../components/catalog/ModalContent';
import CatalogPanel from '../../components/catalog/CatalogPanel';
import DetailsPanel from '../../components/catalog/DetailsPanel';


const modalTypes = {
  ADD: 'Add movie',
  DELETE: 'Delete movie',
  EDIT: 'Edit movie',
};

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(42, 46, 54, 0.7)',
    zIndex: 7,
  },
  content: {
    left: '100px',
    right: '100px',
    backgroundColor: '#232323',
    borderColor: 'black',
    color: 'white',
    bottom: 'auto',
    padding: '20px 40px',
  }
};

const updateMovieList = (list, action, item, data) => {
  if(action === modalTypes.DELETE) {
      return list.map(movie => (
          movie.id === item.id ?
          { ...movie, isActive: false} :
          movie
      ))
  }
  else if(action === modalTypes.ADD) {
      return [
          ...list,
          { ...data, id: list.length + 1}
      ]
  }
  else {
      return list.map(movie => (
          movie.id === item.id ?
          data :
          movie
      ))

  }
}

// ToDo 1. implement all async CRUD operations
// 2. remove container
// 3. fix background image bug on opening single movie

export default function Catalog({ movies = [] }) {
  const [openModal, setOpenModal] = useState('');
  const [movieList, setMovieList] = useState(movies);
  const [stagedMovie, setStagedMovie] = useState(null);
  const [detailedPreview, setDetailedPreview] = useState(null);
  const [filterBy, setFilterBy] = useState({ name: 'ALL', value: '1' });
  const [sortBy, setSortBy] = useState({ name: 'Release date', value: 'year' });

  const prepareModalData = (setType, movie) => {
    setOpenModal(setType); 
    setStagedMovie(movie);
  };

  const closeModal = () => { 
    setOpenModal(''); 
    setStagedMovie(null);
  };

  const closeDetails = () => { 
    console.log('called close details');
    setDetailedPreview(null)
  }

  const confirmModal = (data = {}) => {
    const updatedList = updateMovieList(movieList, openModal, stagedMovie, data);
    setMovieList(updatedList);
    closeModal();
  }

  const openDetailed = (item) => {
    console.log('called open details');
    setDetailedPreview(item)
  }

  return (
    <Layout>
        <div className="App">
        {
          detailedPreview !== null 
          ?
          <DetailsPanel
            movie={detailedPreview}
            closeDetails={closeDetails}
          />   
          :
          <Header>
            <CatalogHeader
              setOpenModal={prepareModalData} 
              modalTypes={modalTypes}
            />
          </Header>
        }
      
       <CatalogPanel 
          sortBy={sortBy}
          filterBy={filterBy}
          movieList={movieList}
          setOpenModal={prepareModalData}
          modalTypes={modalTypes}
          openDetailed={openDetailed}
          setFilter={setFilterBy}
          setSorting={setSortBy}
        />      
      </div>
      <Modal 
        isOpen={openModal !== ''} 
        style={modalStyles}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <ModalContent
          closeModal={closeModal} 
          modalTypes={modalTypes}
          activeType={openModal}
          confirmModal={confirmModal}
          stagedMovie={stagedMovie}
        />
      </Modal>
    </Layout>
  )
}


Catalog.getInitialProps = async () => {
  const res = await axios.get('http://my-json-server.typicode.com/A-H-Petkov/movies/movieList');
  const data = await res.data;
  return {movies: data}
}  