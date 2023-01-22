import Modal from "react-bootstrap/Modal";

const DiaryModal = ({ showModal, setModalShow }) => {
    return (
        <>
            <Modal show={showModal} onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal>
        </>
    )
}

export default DiaryModal