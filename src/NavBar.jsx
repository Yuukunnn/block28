import { useNavigate } from 'react-router-dom'

const Navigation = () => {

    const navigate = useNavigate()

    return (
        <div id="navbar">
            <button onClick={()=> navigate('/')}>Home</button>
            <button onClick={()=> navigate('/blue')}>Blue</button>
            <button onClick={()=> navigate('/red')}>Red</button>
        </div>
    )
}

export default Navigation;