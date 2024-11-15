import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Banner from './banner/banner';


function Home() {
  return (
  <MDBContainer>
    <MDBRow>
      <MDBCol md='12'>
        <div className='pb-3'>
          <Banner />
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  )
}

export default Home;