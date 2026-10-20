import AnchorTemporaryDrawer from '../../UI/driwer/Driver'
import Icons from '../../UI/icons/Icons'

const Navbar = () => {
  return (
    <>
    

  <nav className="flex w-full justify-between items-center p-2 radius-modalWindow bg-secondary-bg text-main-text shadow-(--medium_shadow) rounded-t-none">
<div className="flex items-center gap-2">
<img src="./quadrodesk-icon-extracted-3d.svg" alt="logo" className='w-8 ' />
<p className='font-bold'>QuadroDesk</p>
</div>




<AnchorTemporaryDrawer/>
</nav>


    
    
    </>
  )
}

export default Navbar