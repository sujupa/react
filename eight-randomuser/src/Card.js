import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa";

const Cards = ({detail}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150" className="rounded-circle img-thumbnail border-danger" src={detail.picture?.large}/>
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">{detail.name?.title}&nbsp;</span>
                        <span>{detail.name?.first}&nbsp;</span>
                        <span>{detail.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt />
                    {detail.location?.city}
                    <p>{detail.phone}</p>
                </CardText>
            </CardBody>
        </Card>
    )
}

export default Cards;