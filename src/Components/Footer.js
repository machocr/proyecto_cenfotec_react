import {
  MDBFooter
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-left' >
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Derechos:{' '}
        <a className='text-dark' href='#'>
          admin_centros_dptos@test.com
        </a>
      </div>
    </MDBFooter>
  );
}