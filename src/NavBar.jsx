import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate()
   

    const goToHomePage = () =>{
        navigate('/');
    }

    const goToBluePage = () =>{
        navigate('/blue');
    }

    const goToRedPage = () =>{
        navigate('/red');
    } 
    

    return (
        <div id="navbar">
            <button onClick={goToHomePage}>Home</button>
            <button onClick={goToBluePage}>Blue</button>
            <button onClick={goToRedPage}>Red</button>
        </div>
    )
}

export default Navigation;