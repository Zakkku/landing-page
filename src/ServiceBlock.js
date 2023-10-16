export default function ServiceBlock(props) {
    return (
        <div className="service-block">
            <img src={props.block.imgURL} alt={props.block.alt}></img>
            <p>{props.block.text}</p>
        </div>
    )
};