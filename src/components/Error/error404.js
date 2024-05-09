import '../Error/_error404.scss'

function Error404() {
    return (
        <section className="error404">
            <h1 className="error404-title">404</h1>
            <p className="error404-text">Oups! La page que vous demandez n'existe pas.</p>
            <a className="error404-homelink" href="/">Retourner sur la page d’accueil</a>
        </section>
    );
}

export default Error404