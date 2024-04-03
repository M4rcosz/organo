import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <ul>
                <li><img src="/images/fb.png" alt="logo do facebook" /></li>
                <li><img src="/images/tw.png" alt="logo do twitter" /></li>
                <li><img src="/images/ig.png" alt="logo do instagram" /></li>
            </ul>
            <img src="/images/logo.png" alt="logo organo" />
            <h6>Desenvolvido por Marcos Paulo.</h6>
            <svg xmlns="http://www.w3.org/2000/svg" width="95" height="91" viewBox="0 0 95 91" fill="none" className="svg1">
                <circle cx="55.5" cy="55.5" r="54.5" stroke="#95FFD4" strokeWidth="2" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none" className="svg2">
                <circle cx="44.5" cy="44.5" r="43.5" stroke="white" strokeWidth="2" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none" className="svg3">
                <path d="M2.81174 25.642L92.319 1.65864L68.3356 91.1659L2.81174 25.642Z" stroke="#95FFD4" strokeWidth="2" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="78" height="68" viewBox="0 0 78 68" fill="none" className="svg4">
                <path d="M1.76091 66.5L39 2L76.2391 66.5H1.76091Z" stroke="#95FFD4" strokeWidth="2" />
            </svg>
        </footer>
    )
}

export default Footer