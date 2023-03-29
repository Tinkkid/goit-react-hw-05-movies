import toast from 'react-hot-toast';
import {
  FormWrap,
  SearchInput,
  SearchBtn,
  FormContainer,
} from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const handleSubmitForm = event => {
    event.preventDefault();
    if (event.target.elements.query.value.trim() === '') {
      toast.error('Please enter your search query');
    }
    onSubmit(event.target.elements.query.value);
    event.target.elements.query.value = '';
  };

  return (
    <FormContainer>
      <FormWrap onSubmit={handleSubmitForm}>
        <SearchInput name="query" type="text" placeholder="Search movies..." />
        <SearchBtn type="submit"></SearchBtn>
      </FormWrap>
    </FormContainer>
  );
};

export default SearchForm;
