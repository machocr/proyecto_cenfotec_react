import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import Search from './Search';
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
    <MDBRow>
      <MDBCol md='12'>
        <MDBRow>
          <MDBCol md='6'>
            <Search />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md='6'>
            md="6"
          </MDBCol>
        </MDBRow>

      </MDBCol>

    </MDBRow>
  </MDBContainer>
  )
}

export default Home;