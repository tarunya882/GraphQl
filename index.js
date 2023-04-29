const { ApolloServer }=require("apollo-server-express");
const express=require('express')
const cors=require('cors');
const app=express()
const {typeDefs}=require("./Schema/TypeDefs");
const {resolvers}=require("./Schema/Resolvers");
const server=new ApolloServer({typeDefs,resolvers})
server.applyMiddleware({app})


app.use(cors());

app.listen({port:3001},()=>{
    console.log("Running on port 3001");
});