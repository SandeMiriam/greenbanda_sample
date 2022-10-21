import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import carrot from '../imgvegies/carrots-1.jpg'

export function ProductCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

