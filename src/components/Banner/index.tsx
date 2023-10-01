import "./Banner.css";

interface BannerProps {
    enderecoImagem: string,
    textoAlternativo?: string,
}
const Banner = ({ enderecoImagem, textoAlternativo, }: BannerProps) => {
    return (
        <section className="banner">
            <img src={enderecoImagem} alt={textoAlternativo} />
        </section>
    )
}

export default Banner