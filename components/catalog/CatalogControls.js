import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export const filterOptions = [
  { name: 'ALL', value: '1' },
  { name: 'COMEDY', value: '2' },
  { name: 'DRAMA', value: '3' },
  { name: 'CRIME', value: '4' },
  { name: 'HORROR', value: '5' },
  { name: 'ACTION', value: '6' },
  { name: 'SCI-FI', value: '7' },
  { name: 'DOCUMENTARY', value: '8' },
];

export const sortingOptions = [
  { name: 'Release date', value: 'year' },
  { name: 'Rating', value: 'rating' },
  { name: 'Runtime', value: 'runtime' }
]


const CatalogControls = ({  
  sortValue,
  setSorting,
  filterValue,
  setFilter
}) => {

  return (
    <div className="catalog-controls">
      <ButtonGroup toggle="true" aria-label="Basic example">
        {filterOptions.map((radio, idx) => (            
          <ToggleButton
            key={idx}
            type="radio"
            variant="outline-primary"
            name="radio"
            value={radio.value}
            checked={filterValue.name === radio.name}
            onChange={(e) => { setFilter(radio)}}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <ButtonGroup>          
        <span className="sorting-label">SORT BY: </span>
        <DropdownButton id="dropdown-basic-button" title={sortValue.name.toUpperCase()}>
          {sortingOptions.map((option, idx) => (
            <Dropdown.Item 
              key={idx}
              value={option.value}
              onClick={(e) => { console.log(option, 'seting sort'); setSorting(option)}}
            >
              {option.name.toUpperCase()}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </ButtonGroup>
    </div>    
  );
}

export default CatalogControls;
