import Link from "next/link"

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" href="/user/create">Meus Dados</Link>
                        <Link className="nav-link active" aria-current="page" href="/pet/create">Cadastro Pet</Link>
                        <Link className="nav-link active" aria-current="page" href="/pet/list">Adote</Link>
                        <Link className="nav-link active" aria-current="page" href="">Pedidos em analise</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}