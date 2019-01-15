#CLIENT-SERVER ARCHITECTURE
* Client-server architecture (client/server) is a network architecture in which each computer or process on the network is either a client or a server.
Servers are powerful computers or processes dedicated to managing disk drives (file servers), printers (print servers), or network traffic (network servers).
* Clients are PCs or workstations on which users run applications. Clients rely on servers for resources, such as files, devices, and even processing power.

* Client/server architecture is also known as a networking computing model or client/server network because all the requests and services are delivered over a network.

* Client/server architecture is a producer/consumer computing architecture where the server acts as the producer and the client as a consumer. The server houses and provides high-end, computing-intensive services to the client on demand. These services can include application access, storage, file sharing, printer access and/or direct access to the server’s raw computing power.



##How it works

* Client computer sends a 'Process Request' to web server through web browser.
* Which is then processed by the web server and gives the first response related to that request.
*  Web server process that request to application server.
* Then application server process the request and check which type of request it is(Image,Document,URL,Login) and according to that type transfer it to related database server.
* Then database server process that request and response with related output to application server.
* Application server response to web server with that output.
* And last web server represent that output in web browser to client.

