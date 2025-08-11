import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const BookItem = ({ title, author, rating, pageCount, imageUrl, onSelect }) => {

  const handleSelectBook = () => {
    onSelect(title);
  };


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>
          {rating} Estrellas
        </Card.Text>
        <Card.Text>
          {pageCount} Páginas
        </Card.Text>
        <Button onClick={handleSelectBook}>Selecionar libro</Button>
      </Card.Body>
    </Card>
  )
}

