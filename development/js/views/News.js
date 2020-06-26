/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect, useState} from "react";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col} from "reactstrap";


const News = () => {
    const [news, setNews] = useState([]);
    const [currDate, setCurrDate] = useState(new Date().getTime());

    //WebSocket
    //used WS is secured: wss://ws.xapi.pro/demo
    //certificate can be checked here: https://ws.xapi.pro/demo

    const loginXtb = () => {
        let msg = {};
        msg.command = "login";
        let argumentsLogin = {};
        argumentsLogin.userId = '11261225';
        argumentsLogin.password = 'xoh14872';
        msg.arguments = argumentsLogin;
        // console.log('Trying to log in as: ' + msg.arguments.userId);
        send(msg);
    };

    const url = "wss://ws.xapi.pro/demo";
    const ws = new WebSocket(url);
    const connect = () => {
        console.log('Connecting to: ' + url);
        ws.onopen = () => {
            console.log('Connected');
            loginXtb();
        };
        ws.onmessage = (evt) => {
            // console.log("Received: " + evt.data);
            try {
                let response = JSON.parse(evt.data);
                if (response.status == true) {
                    if (response.streamSessionId != undefined) {
                        // We received login response
                        getNews(response.streamSessionId)
                    } else {
                        // We received get... response
                        parseGetNews(response.returnData);
                    }
                } else {
                    alert('Error: ' + response.errorDescr);
                }
            } catch (Exception) {
                console.log(Exception);
                alert('Fatal error while receiving data! :(');
            }
        };
        ws.onclose = () => {
            console.log('Connection closed');
        };
    };

    const disconnect = () => {
        ws.close();
    };

    const send = (jsonMessage) => {
        try {
            let msg = JSON.stringify(jsonMessage);
            ws.send(msg);
            console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
        } catch (Exception) {
            console.error('Error while sending data: ' + Exception.message);
        }
    };

    const getNews = (id) => {
        let msg = {};
        msg.command = "getNews";
        msg.streamSessionId = id;
        let argumentsRequest = {};
        argumentsRequest.end = currDate;
        argumentsRequest.start = 1592859119182;
        msg.arguments = argumentsRequest;
        console.log('Getting getNews');
        // console.log('session ID:' + id);
        send(msg);
    };

    const parseGetNews = (returnData) => {
        setNews(returnData);
    };

    useEffect(() => {
        connect();
    }, []);

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader className="mb-5">
                                <CardTitle tag="h1">
                                    Financial NEWS from around the world
                                </CardTitle>
                            </CardHeader>
                            <div>
                                {news.map((oneNews, id) => {
                                    return (
                                        <CardBody key={id}>
                                            <div className="typography-line"><h2 className="text-info"> {oneNews.title}</h2></div>
                                            <div className="typography-line"><h6><span> {oneNews.timeString} </span></h6>
                                            </div>
                                            <div className="typography-line">
                                                <span>News: </span>
                                                <p dangerouslySetInnerHTML={{__html: oneNews.body}}/>
                                            </div>
                                        </CardBody>
                                    )
                                })}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default News;
