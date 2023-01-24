import React,{useState} from 'react';
import './AddBooks.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';




const AddBooks = () => {

  const [Data, setData] = useState({
    BookTitle:'',
    Author:'',
    Price:'',
    Category:''
  });
  const [validated, setValidated] = useState(false);
  
  const change = (e) => {
    const {name,value} = e.target;
    setData({...Data,[name]: value })
  }
  const submit = async() => {
    await axios.post('https://mern-curd-book-store-backend.vercel.app/api/v1/add', Data)
    .then((res) => {
        console.log(res)
        axios.get('https://mern-curd-book-store-backend.vercel.app/api/v1/getBooks')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
        
    });
    setData(
      {
        BookTitle:"",
        Author:"",
        Price: "",
        Category: "",
      }
    )
  }

  const cancel = () => {
    setData({
      BookTitle:"",
        Author:"",
        Price: "",
        Category: "",
    })
}
  const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

    setValidated(true);
  };


  console.log(Data)
  return (
   
    <div className='container w-100 d-flex align-items-center justify-content-center ' style={{minHeight:'80.5vh'}}>
     <div className=' w-50'>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-6">
        <Form.Group controlId="BookTitle">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder='Enter Book Title' 
            name='bookTitle' 
            value={Data.bookTitle} 
            onChange={change}

          />
          <Form.Control.Feedback type="invalid">
              Please Add Book Title
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group  controlId="Author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder = 'Enter Book Author Name' 
            value={Data.author} 
            name='author' 
            onChange={change}
          />
          <Form.Control.Feedback type="invalid">
              Please Add Author
            </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="number"
              placeholder='Enter The Price'  
              name='price' 
              value={Data.price} 
              onChange={change}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Add Price
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId="BookTitle" >
      <Form.Label>Category</Form.Label>
      <InputGroup >
      <Form.Select 
      as="select"
      type="select"
      name='category' 
      value={Data.category} 
      onChange={change}
      defaultValue={'Categories'}
      
      >
      
     
      <option selected disabled>Categories</option>
        <option value='Action'>Action</option>
        <option value='Horror'>Horror</option>
        <option value='Adventure'>Adventure</option>
        <option value='Classic'>Classic</option>
        <option value='Friction'>Friction</option>
        <option value='Novel'>Novel</option>
        <option value='Romance'>Romance</option>
        <option value='Tragedy'>Tragedy</option>
        <option value='Mystery'>Mystery</option>
        <option value='Crime'>Crime</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
              Please Add Category
            </Form.Control.Feedback>
          </InputGroup>
          </Form.Group>
        </Row>
        <Button className='me-2 m-2' type="submit" variant='primary' onClick={submit}  >Submit</Button>
      <Button type='reset' variant='danger' onClick={cancel}  >Cancel</Button>
        </Form>        
  
      </div>
</div>
  )
}

export default AddBooks