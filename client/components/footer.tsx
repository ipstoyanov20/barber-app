function Footer() {
  return (
    <div>
      <ul style={{ listStyleType: 'none', marginBottom: '490px', padding: 0 }}>

        <li style={{ float: 'right' }}>
          <a
            href="#"
            style={{
              display: 'block',
              color: 'black',
              textAlign: 'center',
              padding: '12px 16px',
              textDecoration: 'none',
              backgroundColor: 'white',
            }}>Contact</a>
        </li>

        <li style={{ float: 'right' }}>
          <a
            href="#"
            style={{
              display: 'block',
              color: 'black',
              textAlign: 'center',
              padding: '12px 16px',
              textDecoration: 'none',
              backgroundColor: 'none',
            }}>Services</a>
        </li>

      </ul>
    </div>
  );
}

export default Footer;
