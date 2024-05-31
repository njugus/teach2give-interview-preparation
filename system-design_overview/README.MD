<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [System Design](#system-design)
  - [Why do you need system design?](#why-do-you-need-system-design)
  - [Exploring Essential Design Methods in System Design](#exploring-essential-design-methods-in-system-design)
- [Diving Deeper into System Design Concepts](#diving-deeper-into-system-design-concepts)
  - [Performance vs Scalability](#performance-vs-scalability)
  - [Latency vs Throughput](#latency-vs-throughput)
  - [Consistency Patterns and Availability Patterns](#consistency-patterns-and-availability-patterns)
    - [Consistency <br>](#consistency-br)
    - [Availability<br>](#availabilitybr)
- [Advanced Concepts in System Design](#advanced-concepts-in-system-design)
  - [1. CDN](#1-cdn)
  - [2. DNS](#2-dns)
  - [3. Caching](#3-caching)
  - [4. Proxies](#4-proxies)
- [Components of System Design](#components-of-system-design)
- [Approaching System Design Interview Questions](#approaching-system-design-interview-questions)
- [Sample System Design Interview Questions and Solutions](#sample-system-design-interview-questions-and-solutions)
    - [Requirements Clarification](#requirements-clarification)
    - [Approach:](#approach)
    - [Requiements Clarification](#requiements-clarification)
    - [Approach](#approach)
- [Resources For Further Learning](#resources-for-further-learning)
  - [System Design Interview Roadmap By Design Guru](#system-design-interview-roadmap-by-design-guru)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# System Design

System design is a step-by-step process of defining a particular software's architecture, modules, components, etc. It is a base concept in software engineering and is vital in building scalable and reliable software.


System design is a crucial process in software engineering that involves defining a software's architecture, modules, and components to build scalable and reliable applications. Major tech companies like Google, Microsoft, and Amazon emphasize system design in their interview processes to evaluate a candidate's ability to architect applications from scratch.

Understanding system design concepts is essential for preparing for these interviews. This system design primer covers everything from basic to advanced topics and includes tips and resources to help you prepare for you.

## Why do you need system design?

When starting a software development project, the first step is to gather the business owners' requirements, both functional and non-functional, such as scalability, high availability, and consistency. After understanding these requirements, system design begins. This involves creating the application's architecture, like choosing between SQL or NoSQL databases and planning for scalability to handle increased traffic. For instance, companies like Google and Facebook use multiple servers worldwide to efficiently serve resources to users, which is a key aspect of system design.

## Exploring Essential Design Methods in System Design
Here, I've covered some of the system design methods commonly used by developers.

1) __Architectural Design__ 
The architectural design is the base of the system design. It describes the infrastructure, model, view, components, and interaction.The architectural design includes client-server interaction, microservices, etc.

2) __ERD Diagram__
The ERD diagram is an acronym for the entity-relationship diagram. The ERD diagram is mainly used in designing the _application's database structure_.

3) __UML Diagram__
Unified Modeling Language (UML) diagrams are essential tools in system design used to visually represent the structure and behavior of a system

4) __Class Diagrams__
The class diagrams are used to represent the classes. The class diagram can also contain the class's attributes, methods, and relationships between multiple classes.
Basically, the class diagram provides an overview of the system's data and functionality.

5) __Sequence Diagrams__
The sequence diagrams represent the interaction between the various components of the system. It is used to model the behavior of the system.



# Diving Deeper into System Design Concepts

 ## Performance vs Scalability 
__Performance__ : We have websites that take long to load and others load within a fraction of a second.Slow loading reduces traffic as users prefer to go to other websites.Mechanisms like caching can be used to increase the application's performance and serve resources faster. 

__Scalability__ : The term scalability refers to the ability to scale the application.You can scale your application by distributing the load across multiple servers or increasing the single server's capacity.

 ##  Latency vs Throughput
The latency and throughput affect the efficiency of the system.

__Latency__ : In simple words, latency is a network delay that occurs due to Geographical distance, transport protocol, or network infrastructure. It is measured in the Milliseconds.Lower latency is required for the best experience.

__Throughput__: On the other hand, throughput is the number of operations the system can handle in a particular time or the number of data passed via network request in a given time.It is measured in megabytes (MB) per second. It is used to check the capability of the systems.

## Consistency Patterns and Availability Patterns

### Consistency <br>
 Consistency ensures that all nodes in the system read the same data at a particular time.
Some of the consistency patterns include: 
1) __Strong consistency__ :  Strong consistency ensures that each request should get the most recent data.
2) __Eventual Consistency__ : Eventual consistency allows temporary inconsistencies to be resolved soon.

3) __Weak Consistency__ : In the weak consistency pattern, the user may get fresh data after writing the data.

### Availability<br>

 The system's availability ensures that each request receives a response either with fresh or old data. The availability is important when high uptime is needed.Some of the availability patterns include: 

 1) __Load Balancing__ : The upcoming request can be distributed across multiple servers to achieve high availability.

 2) __Retry and timeout strategie__ : You can implement the retry mechanism to process the request after every interval if the system fails or is not available.


 # Advanced Concepts in System Design
 Lets look at some advanced concepts in system design: 

 ## 1. CDN
 This stands for Content Delivery Networks, which refers to a network of servers, located in diffrent geoLocations responsible for delivering content e.g images, data to clients.The CDN serves resources faster(through caching), enhance application performance and 
deacreases Latency.

## 2. DNS
This stands for Domain Name System. Initially, you were required to know the ip address of a website to access it, and as more and more websites were created,  knowing ip addresses of this sites become tedious and hard.This led to the Domain Name System e.g www.example.com....which allows users to access a website and its resources via a domain name.

## 3. Caching
Also known as high speed storage.
Stores frequently accessed resources, thus serves resources faster.
It works between web applications and sources of data e.g databases, servers etc.

## 4. Proxies
A Proxy is also known as a proxy server.
When a user requests for resources from the internet, the request is sent to the proxy server and then the server fetches the resource from the internet and delivers them back to the Application User.
The proxy servers can also be used for caching.



# Components of System Design

1) ## __Microservices and Service Discovery__ 
    Microservices architecture is one of the most used system design approaches to prepare software architecture. The microservices break down complex applications into small services, such that each service works independently and accomplishes specific tasks.

2) ## __Database Systems: RDBMS and NoSQL__
     There are two primary categories of the database: RDBMS and NoSQL.

     1) __RDBMS__ <BR>
    The RDBMS stands for the relational database management system. The SQL databases are built on the top of the RDBMS. When you need to store structured data, you can choose the RDBMS for the software or application.It's easy to retrieve data from a RDBMS database.

    2) __NOSQL__ <br>
    The NoSQL database means a non-SQL database. It stores the data in the key-value pair instead of in table format. You can use the NoSQL database when you are required to store unstructured data in the database.

3) ## Communication Protocols
Protocols mean rules and communication protocols refer to the rules to communicate or exchange the data between two systems. 
We have various comminication protocls.<BR>
1) __HTTP/HTTPS__: 

    They are used in web-based communication.
    Use HTTPS for security reasons.

1) __TCP/IP__:
    The TCP protocol is used to communicate over the internet. For example, it is used in the chatting application.

3) __UDP__:
    Acronym for User Datagram Protocol.
    It is mainly used for live streaming, video calls, etc.
    
4) __Web Sockets__:
The web sockets are used for bi-directional duplex communication. It builds the connection between two web applications.


# Approaching System Design Interview Questions

Here is a step to step guide on how to approach system design interviews.

1) ### __Requirements Clarification__
       Before you prepare a system design for any software, it is important to know the requirements.Two types of requirements:
    1) __Functional Requirements__
        What functions and services does a user expect from a system.
    2) __Non-Functional Requirements__
        These are the properties a system is required to have so that it can provide services to the users efficiently.
        This includes things like Availability, Consistency etc.

2) ### __Estimation of resources__
   The next step is deciding what kind of resources you should use to build the application.E.g. Deciding how much data you will need to store in the database.

3) ### __System interface definition__
    The third step is designing the system interface. For example, defining the API endpoints and what to expect from each API endpoint.

4) ### __Defining Data model__
     The next important part is selecting a database for the application.
If you need to store the structured data and tables are pre-determined, you can use the relational database. For storing the unstructured data, you should use NoSQL databases like MongoDB.
 
5) ### __High-level design__
    Design High Level componets and how they will connect with one another e.g.For example, connecting the server with the database, connecting the server with the client, and integrating the third-party tools with the applications.



6) ### __Detailed Design__
    After creating the basic design of the application, you need to improve the system design.Here We consider Non-Functional Requrements.

7) ### __Identifying and resolving bottlenecks__
   At last, you should identify the bottlenecks in your system design and discuss the solutions to resolve them with the interviewer.
    Some of the key Bottlenecks include: 
    * Can the system fail in any scenario? If yes, how will you handle it?
    * How do you monitor the performance of the system and issues in the system?


# Sample System Design Interview Questions and Solutions

1) ## __How would you design a URL Shortening service similar to TinyURL?__

 ### Requirements Clarification

* When you give a long URL as an input, it should return the shortened URL.<br>
* When you click the shortened URL, it should redirect to the original URL.<br>
* Consider 500 requests per second, and make scalable accordingly.<br>
* Delete the expired URLs.<br>
* Track the number of clicks on the URL.

### Approach:
* How you will use the REST API to communicate with the server.
* How will you handle the 500 requests every second  via load balancing?
* You can discuss using the relational database, as it doesn’t require horizontal scaling.
* You can discuss how you will prepare a table for relational database to map long URLs with short URLs.
* The critical point is how to shorten the long URL by providing a unique id to each shortened URL.


2) ## __How would you design Facebook and Instagram?__

### Requiements Clarification
 * User signup/sign-in
 * Allowing users to publish posts and short videos
 * Followers and following features
 * Direct messaging
 * Showing the latest posts from their followers
 * Showing trending posts in the feed

 ### Approach
* Talk about how you will handle the relationship between users in the database.
* Talk about how you will implement the chat features. You may talk about integrating third-party chatting applications.
* Furthermore, you can discuss how you will implement the authentication.
* Discuss algorithms to show trending or latest posts.
* Talk about handling user’s data in the database, as users will publish multiple posts.
* Discuss database replication to handle failures.
* Discuss data caching and load balancing.


# Resources For Further Learning

## System Design Interview Roadmap By Design Guru

The [system design interview roadmap](https://www.designgurus.io/path/system-design-interview-playbook) is prepared by the team of experts at DesignGurus.io. It covers the fundamentals and advanced concepts of the system design in detail. The course contains a total 59 chapters and 103 lessons. Each lesson covers a wide information about a particular topic.

Here, we suggested a few resources for the interview preparation. However, you can also follow some books or good resources from the internet.

 * [System Design Interview Survival Guide (2024):  Preparation Strategies and Practical Tips](https://medium.com/gitconnected/system-design-interview-survival-guide-2023-preparation-strategies-and-practical-tips-ba9314e6b9e3)

 * [The Complete Guide to Ace the System Design Interview](https://www.designgurus.io/blog/complete-guide-sys-design).

 * [Ace Your System Design Interview with 7 Must-Read Papers in 2024](https://www.designgurus.io/blog/sys-design-papers)