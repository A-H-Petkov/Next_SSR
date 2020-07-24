import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const moviePrimer = { 
  id: null,
  title: '', 
  poster: '', 
  year: '',
  overview: '', 
  genres: [],
  url: '',
  isActive: true,
};

export const modalTypes = {
  ADD: 'Add movie',
  DELETE: 'Delete movie',
  EDIT: 'Edit movie',
};


const Header = (props) => {

  const { setOpenModal, modalTypes } = props;

  return (
    <React.Fragment>
        <Button 
          className="add-movie-btn" 
          onClick={() => { setOpenModal(modalTypes.ADD, moviePrimer)}}
        >
          + ADD MOVIE
        </Button>
        <div className="search-panel">
          <h3 className="search-panel-title">
            FIND YOUR MOVIE
          </h3>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="What do you want to watch?"
              aria-label="What do you want to watch?"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button id="basic-addon2">SEARCH</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
    </React.Fragment>    
  );
}

export default Header;
