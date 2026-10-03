function HeaderMain(){
    return(
    <>
    <div className="flex flex-row justify-between items-center ">
        <div className='flex justify-start gap-10 items-center'>
         <img src="Name.png" alt="Name" className='w-20 h-10' />
            <span>Home</span>
            <span>Menu</span>
            <span>About Us</span>
        </div>
        <div className="flex justify-end gap-8">
        <img src="search.png" alt="Search" className='w-5 h-5' />
        <input type="text" placeholder='Search' className='border rounded-xl'/>
        <button onClick={()=>{
            console.log("Account button clicked");
        }}><img src="account.jpg" alt="account" className='w-8 h-8' /></button>
        </div>
    </div>
    </>
    )
}
export default HeaderMain;