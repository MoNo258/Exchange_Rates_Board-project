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

// class News extends React.Component {
//
//
//
//
//     loginXtb = () => {
//         let msg = {};
//         msg.command = "login";
//         let argumentsLogin = {};
//         argumentsLogin.userId = '11261225';
//         argumentsLogin.password = 'xoh14872';
//         msg.arguments = argumentsLogin;
//         console.log('Trying to log in as: ' + msg.arguments.userId);
//         this.send(msg);
//     };
//
//
//
//     url = "wss://ws.xapi.pro/demo";
//     ws = new WebSocket(this.url);
//     // ws;
//     connect = () => {
//         // let ws;
//         // let url = "wss://ws.xapi.pro/demo";
//         console.log('Connecting to: ' + this.url);
//         // ws = new WebSocket(url);
//         this.ws.onopen = () => {
//             console.log('Connected');
//             this.loginXtb();
//         };
//         this.ws.onmessage = (evt) => {
//             console.log("Received: " + evt.data);
//
//             try {
//                 let response = JSON.parse(evt.data);
//                 if (response.status == true) {
//                     if (response.streamSessionId != undefined) {
//                         // We received login response
//                         this.getNews(response.streamSessionId)
//                     } else {
//                         // We received get... response
//                         this.parseGetNews(response.returnData);
//                     }
//                 } else {
//                     alert('Error: ' + response.errorDescr);
//                 }
//             } catch (Exception) {
//                 console.log(Exception)
//                 alert('Fatal error while receiving data! :(');
//             }
//         };
//         this.ws.onclose =  () => {
//             console.log('Connection closed');
//         };
//     };
//
//     disconnect = () => {
//         this.ws.close();
//     };
//
//     send = (jsonMessage) => {
//         try {
//             let msg = JSON.stringify(jsonMessage);
//             this.ws.send(msg);
//             console.log('Sent ' + msg.length + ' bytes of data: ' + msg);
//         } catch (Exception) {
//             console.error('Error while sending data: ' + Exception.message);
//         }
//     };
//
//
//
//
//     getNews = (id) => {
//         let msg = {};
//         msg.command = "getNews";
//         msg.streamSessionId = id;
//         let argumentsRequest = {};
//         argumentsRequest.end = 1593031919182;
//         argumentsRequest.start = 1592859119182;
//         msg.arguments = argumentsRequest;
//         console.log('Getting getNews');
//         console.log('session ID:' + id);
//         this.send(msg);
//     };
//
//     row;
//     parseGetNews = (returnData) => {
//         // For all symbols
//         for (let i = 10; i >= 0; i--) {
//             // for (let i = returnData.length - 1; i >= 0; i--) {
//             let symbol = returnData[i].symbol;
//             let body = returnData[i].body;
//             let key = returnData[i].key;
//             let time = returnData[i].time;
//             let title = returnData[i].title;
//             // let row = '<tr><td>' + title + '<br></td><td>' + time + '<br></td><td>' + body + '</td></tr>';
//             // this.row = '<div className="typography-line"><h4>' + title + '</h4></div><div><span>' + time + '</span></div><div className="typography-line"><span>News:</span><p className="text-info">' + body + '</p></div>';
//             // this.row = '<div className="typography-line"><h4>' + title + '</h4></div><div><span>' + time + '</span></div><div className="typography-line"><span>News:</span><p className="text-info">' + body + '</p></div>';
//             // console.log(this.row);
//
//             // Append to instruments table
//             // $('#instruments').append($(row));
//         }
//         console.log(returnData[1].title);
//         return this.row = <div>returnData[1].title</div>;
//     };
//
//
//     componentDidMount() {
//
//         this.connect();
//
//     }
//
//     render() {
//         return (
//             <>
//                 <div className="content">
//                     <Row>
//                         <Col md="12">
//                             <Card>
//                                 <CardHeader className="mb-5">
//                                     <h5 className="card-category">Black Table Heading</h5>
//                                     <CardTitle tag="h3">
//                                         Created using Poppins Font Family
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardBody>
//                                     {this.row}
//
//
//                                 </CardBody>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </div>
//             </>
//         );
//     }
// }
//
// export default News;


const News = () => {
    const [news, setNews] = useState([]);


    const loginXtb = () => {
        let msg = {};
        msg.command = "login";
        let argumentsLogin = {};
        argumentsLogin.userId = '11261225';
        argumentsLogin.password = 'xoh14872';
        msg.arguments = argumentsLogin;
        console.log('Trying to log in as: ' + msg.arguments.userId);
        send(msg);
    };


    const url = "wss://ws.xapi.pro/demo";
    const ws = new WebSocket(url);
    // ws;
    const connect = () => {
        // let ws;
        // let url = "wss://ws.xapi.pro/demo";
        console.log('Connecting to: ' + url);
        // ws = new WebSocket(url);
        ws.onopen = () => {
            console.log('Connected');
            loginXtb();
        };
        ws.onmessage = (evt) => {
            console.log("Received: " + evt.data);

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
                console.log(Exception)
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
        argumentsRequest.end = 1593031919182;
        argumentsRequest.start = 1592859119182;
        msg.arguments = argumentsRequest;
        console.log('Getting getNews');
        console.log('session ID:' + id);
        send(msg);
    };

    let row;
    const parseGetNews = (returnData) => {
        console.log(returnData[0].title);
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
                                <h5 className="card-category">Black Table Heading</h5>
                                <CardTitle tag="h3">
                                    Created using Poppins Font Family
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div>This is body
                                    {news.map((oneNews, id) => {
                                        return (
                                            <>
                                                <div className="typography-line"><h4> {oneNews.title}</h4></div>
                                                <div><span> {oneNews.time} </span></div>
                                                <div className="typography-line"><span>News:</span></div>
                                                <p className="text-info"
                                                   dangerouslySetInnerHTML={{__html: oneNews.body}}/>

                                            </>

                                        )
                                    })}

                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default News;
