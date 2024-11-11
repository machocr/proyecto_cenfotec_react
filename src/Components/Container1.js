import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

function Container1() {
  return (
    <MDBContainer>
    <MDBRow className='mb-4'>
      <MDBCol size='5'>
        <MDBRipple
          className='bg-image hover-overlay shadow-1-strong rounded'
          rippleTag='div'
          rippleColor='light'
        >
          <img src='https://mdbootstrap.com/img/new/fluid/city/113.webp' className='w-100' />
          <a href='#!'>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
          </a>
        </MDBRipple>
      </MDBCol>
      <MDBCol size='7'>
        <h1 className="mb-4">Centro deportivo</h1>
        <p>
          Un club deportivo, club de deportes o club atlético es un club dedicado a la práctica del deporte. Algunos clubes poseen equipos que compiten en torneos oficiales, en tanto que otros clubes se limitan a actividades lúdicas.
        </p>
        <hr className="my-3" />
        <p>
          La mayoría de los clubes deportivos centran su actividad en un deporte o en unas disciplinas deportivas específicas, y reciben denominaciones propias de esas especialidades, como club de fútbol, club náutico o club de campo. No obstante, existen clubes que se han destacado en diversas competencias y se denominan clubes multideportivos o polideportivos cuando se practican múltiples deportes.
        </p>
        <MDBBtn className='me-1'>Primary</MDBBtn>
        <MDBBtn outline>
          <MDBIcon fas icon="shopping-cart me-2" />{"  "}Buy now</MDBBtn>
      </MDBCol>
    </MDBRow>
    <MDBRow className='mb-3'>
      <MDBCol md="4">
        <MDBCard>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            <MDBBtn href='#'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/112.webp' fluid alt='...' />
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            <MDBBtn href='#'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="4">
        <MDBCard>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/113.webp' fluid alt='...' />
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
            <MDBBtn href='#'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>



  );
}

export default Container1;