import React from "react";
import Card from "./Card";

const CardSection=() => {

    return (
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">
                    We love new friends!
                </h2>
                <div className="row">
                    <div className="col-4">
                        <Card title="LCO" buttonText="My LCO App" desc="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    </div>
                    <div className="col-4">
                    <Card title="LCO1" buttonText="My LCO App" desc="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    </div>
                    <div className="col-4">
                    <Card title="LCO" buttonText="My LCO App" desc="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default CardSection;