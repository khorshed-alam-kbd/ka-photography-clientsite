import React from 'react';

const Blog = () => {
    return (
        <div className='glass py-5'>
            <div className='px-10 py-5'>
                <div className='bg-black rounded-xl p-5'>
                    <p className='text-xl font-semibold '>QUESTION 01 :  Difference between SQL and NoSQL ? </p>
                    <div className='bg-zinc-900 rounded-xl my-5 p-5'>
                        <p className='my-3'><span className='font-semibold' >Answer : </span>
                            <span className='text-gray-300'>
                                SQL: RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage. These databases are best suited for complex queries. Vertically Scalable, Follows ACID property. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc. <br />

                                NoSQL: Non-relational or distributed database system, They have dynamic schema, These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. Horizontally scalable. Follows CAP(consistency. availability, partition tolerance). Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc

                            </span></p>
                    </div>
                </div>
            </div >
            <div className='px-10 py-5'>
                <div className='bg-black rounded-xl p-5'>
                    <p className='text-xl font-semibold '>QUESTION 02 :   What is JWT, and how does it work ? </p>
                    <div className='bg-zinc-900 rounded-xl my-5 p-5'>
                        <p className='my-3'><span className='font-semibold' >Answer : </span>
                            <span className='text-gray-300'>
                                JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />

                                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. </span></p>
                    </div>
                </div>
            </div >
            <div className='px-10 py-5'>
                <div className='bg-black rounded-xl p-5'>
                    <p className='text-xl font-semibold '>QUESTION 03 : What is the difference between javascript and NodeJS ? </p>
                    <div className='bg-zinc-900 rounded-xl my-5 p-5'>
                        <p className='my-3'><span className='font-semibold' >Answer : </span>
                            <span className='text-gray-300'>
                                1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                                As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />

                                2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.<br />

                                3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.<br />

                                4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.<br />

                                Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.<br />

                                5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.</span></p>
                    </div>
                </div>
            </div >
            <div className='px-10 py-5'>
                <div className='bg-black rounded-xl p-5'>
                    <p className='text-xl font-semibold '>QUESTION 04 : How does NodeJS handle multiple requests at the same time? </p>
                    <div className='bg-zinc-900 rounded-xl my-5 p-5'>
                        <p className='my-3'><span className='font-semibold' >Answer : </span>
                            <span className='text-gray-300 break-all'>
                                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</span></p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Blog;