import { Col } from "react-bootstrap";

function ProjectCards ({title, description, imgUrl}) {
    return (
        <Col xs={12} md={12} xl={12} className="d-flex justify-content-center">
            <div className='proj-imgbx'>
                <img src={imgUrl} alt="Fara's project" />
                <div className='proj-txtx'>
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCards;