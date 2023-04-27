//Import function Link to react router
import {Link} from 'react-router-dom'

//Image Icon to Navbar

function NavBar(){
    return (
        <div className='fixed left-0 top-0 w-full flex justify-between bg-black border-b-2 border-white items-center'>
            <div className='items-center pt-2'>
                <a><Link to="/"><span className="px-2 w-2  material-symbols-rounded text-slate-100 hover:text-orange-500">home</span></Link></a>
            </div>
            <div className='text-white  pr-3'>
                <a className='px-2 hover:text-orange-500'><Link to="/HistoryUbuntu">History to Ubuntu</Link></a>
                <a className='px-2 hover:text-orange-500'><Link to="/FamousUbuntu">Famous to Ubuntu</Link></a>
                <a className='px-2 hover:text-orange-500'><Link to="/Contact">Contact</Link></a>
            </div>    
        </div>
    )
}

export default NavBar