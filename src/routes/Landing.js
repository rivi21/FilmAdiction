import './Landing.css'

export default function Landing() {
    return (
        <div className=" row contenedor bg-dark">
            <img src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80"
                className="d-block w-100" alt="..." />
            <div className='encima'>Upcoming</div>
            <div className='abajo'>Movies</div>
        </div>
    )
}
