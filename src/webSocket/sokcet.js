import SockJS from 'sockjs-client'
import {Stomp} from '@stomp/stompjs'


let stompClient = null
const handlers = []

export function connect() {
    const socket = new SockJS('http://localhost:8081/rest/gs-guide-websocket')
    stompClient = Stomp.over(socket)
    stompClient.connect({}, frame => {
        console.log('Connected: ' + frame)
        stompClient.subscribe('/rest/topic/activity', message => {
            handlers.forEach(handler => handler(JSON.parse(message.body)))
        })
    })
}

export function addHandler(handler) {
    handlers.push(handler)
}

export function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect()
    }
    console.log("Disconnected")
}

export function sendMessage(message) {
    stompClient.send("/rest/app/changeMessage", {}, JSON.stringify(
        {
            value: "Hello!",
            author: {
                id: 2014

            }
        }
    ))
}


/*
let stompClient;

    let onMessageReceived = (payload) => {
        console.log("onMessageReceived");
        let message = JSON.parse(payload.body);
    }

    let onConnected = () => {
        console.log("onConnected");
        // Subscribe to the Public Topic
        stompClient.subscribe("/rest/topic/activity");

        // Tell your username to the server
        stompClient.send(
            "/rest/app/changeMessage",
            {},
            JSON.stringify({
                value: "Hello!",
                author: {
                    id: 2014

                }
            })
        );
    }

    let connect = () => {
        let socket = new SockJS("http://localhost:8081/rest/gs-guide-websocket");
        stompClient = Stomp.over(socket);
        stompClient.connect({}, onConnected);
    }

connect();
*/
/*{
        "value": "Hello world",
            "author": {
        "id": 2014
    }
    }*/