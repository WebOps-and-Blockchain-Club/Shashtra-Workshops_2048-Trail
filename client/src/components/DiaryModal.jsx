import Modal from "react-bootstrap/Modal";

const DiaryModal = ({ showModal, setModalShow, entry, setModalContent }) => {
    return (
        <>
            <Modal show={showModal} onHide={() => {
                setModalShow(false)
            }}>
                <Modal.Header closeButton>
                    {entry.content.length !== 0 ?
                        <Modal.Title>{entry.message}</Modal.Title>
                        :
                        <Modal.Title className="text-danger">No Entry Found</Modal.Title>
                    }
                </Modal.Header>
                {entry.content.length !== 0 ?
                    <Modal.Body className="text-center">
                        <h4 className="py-2">{entry.content[0].title}</h4>
                        <i>{entry.content[0].date}</i>
                        <p className="py-2">{entry.content[0].content}</p>
                        {entry.content[0]?.image !== "" ?
                            <img src={entry.content[0].image} alt="diary" className="img-fluid" width={150} />
                            :
                            <></>
                        }
                    </Modal.Body>
                    :
                    <Modal.Body>
                        You haven't written your diary for this day 🥲
                    </Modal.Body>}
            </Modal>
        </>
    )
}

export default DiaryModal