import ReactDOM from "react-dom";

const ModalOnPortals = (props) => {
    const container = document.getElementById('portal');
    return ( ReactDOM.createPortal(
        props.children,
        container
    ) );
}

export default ModalOnPortals;
