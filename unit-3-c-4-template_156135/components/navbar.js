function navbar(){
    return`
    <input type="text" id="search_box" placeholder="Search">
      
       <div id="country_links">
        <h3 id="in">India</h3>
        <h3 id="us">Usa</h3>
        <h3 id="ch">China</h3>
        <h3 id="uk">UK</h3>
        <h3 id="nz">New Zealand</h3>

      
      </div>

    
      <div id="sidebar">
        <img id="user_img" src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png">
        <h2 id="user_name">rahul</h2>
        <h2 id="user_email">rahulnishad977@gmail.com</h2>
        <h2 id="user_country">India</h2>
        
      </div>
    `
}

export default navbar;