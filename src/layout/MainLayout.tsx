

const MainLayout = ({children}:any) => {
  return (
   <div className='MainContainer'>
   <div className="text-3xl text-white">
   <a href="/">QuizzO'clock</a> 
   </div>
   <div className='ChildCard'>{children}</div>
   </div>
  )
}

export default MainLayout