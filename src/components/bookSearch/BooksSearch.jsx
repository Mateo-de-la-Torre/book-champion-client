import { Form } from "react-bootstrap"


export const BooksSearch = ({ searchTerm, onSearchChange }) => {

    const handleInputChange = (e) => {
        onSearchChange(e.target.value)
    }

    return (
        <Form.Group className="mb-3" controlId="searchBook">
            <Form.Control
                type="text"
                placeholder="Buscar libro..."
                value={searchTerm}
                onChange={handleInputChange} />
        </Form.Group>
    )
}

