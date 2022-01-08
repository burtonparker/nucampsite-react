import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Random, Fade } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>
    }
    return (
        <Random minDelay={50} maxDelay={150} in>
            <Fade>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </Fade>
        </Random>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard 
                    item={props.campsite}
                    isLoading={props.campsitesLoading}
                    errMess={props.campsitesErrMess} />
                </div>
                <div className="col-md m-1">
                    <RenderCard 
                        item={props.promotion}
                        isLoading={props.promotionLoading}
                        errMess={props.promotionErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard 
                    item={props.partner}
                    isLoading={props.partnersLoading}
                    errMess={props.partnersErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;