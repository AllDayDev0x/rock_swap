import api  from '../utils/api'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Accordion} from 'react-bootstrap';

function Faq() {
  const [faqs, setFaqs] = useState([])
  const [success, setSuccess] = useState(false)
  useEffect(()=> {
    async function fetchData() {
      const res = await api.get('/faq');
      console.log(res.data)
      setSuccess(res.data.status)
      setFaqs(res.data.faqs)
      // handle the data
    }
    fetchData();
  },[success])
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleToggle(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }
  return (
    <>
      <div style={{"background-image": "url('./assets/images/faq.png')", "background-color": "#1e1e1e", "background-size": "cover", "height": "100%", "minHeight": "100vh"}}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <div style={{textAlign:"right"}}>             
              <button
                type="button"
                className="close_btn_buymodal"
                style={{marginRight:"2rem", marginTop:"2rem"}}
                data-bs-dismiss="modal"
                aria-label="Close"><span><img src="/assets/images/close.png" alt="no img" style={{width:"15px"}}/></span>
              </button>
            </div>
          </Link>
          <h1 className="text-brightyellow faq__title" style={{"padding-top": "16px"}}>FAQ</h1>
          <div className="container">
              {success === 'success' && faqs.map((item, index) => {
                return(
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header >+ {item.question}</Accordion.Header>
                      <Accordion.Body className='text-red'>
                        {item.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  // <div className="container" key={index}>
                  //   <button className={`accordion display-3 ${index === activeIndex ? 'active' : ''}`} onClick={() => handleToggle(index)}>+ <span>{item.question}</span></button>
                  //   <div style={{display: index === activeIndex ? 'block' : 'none' }}>
                  //       <p className="text-red" style={{marginLeft:"2.5rem"}}>{item.answer}</p>
                  //   </div>
                  // </div>
                )
              })}
          </div>
      </div>
    </>
  );
  }
  
  export default Faq;
  