function HeaderContact() {
  return (

 <div className="flex items-center">
  <div className="ml-5 mr-5 flex items-center gap-2">
    <img src="locationpin.png" width="20" height="20" alt="Location Pin"/>
    Lalitpur, Nepal
</div>

  <div className="mr-5 flex items-center gap-2">
    <img src="phone.png" width="20" height="20" alt="Phone" />
    01-0000000 / 9808331479
  </div>

  <div className="mr-5 flex items-center gap-2">
    <img src="email.png" width="20" height="20" alt="Email" />
    stonesrestro@gmail.com
  </div>

  <div className="ml-auto mr-5 flex items-center gap-2">
    <a href="https://www.facebook.com/">
      <img src="facebook.png" width="20" height="20" alt="Facebook" />
    </a>
    <a href="https://www.instagram.com/">
      <img src="Instagram-Logo.png" width="20" height="20" alt="Instagram" />
    </a>
  </div>
</div>

  )
}

export default HeaderContact;