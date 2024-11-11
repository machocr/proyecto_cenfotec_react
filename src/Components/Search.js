import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Search() {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="description aqui"
        className="me-2"
        aria-label="Search" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  );
}

export default Search;