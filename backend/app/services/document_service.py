from flask import current_app
from flask_pymongo import PyMongo

mongo = PyMongo()

def init_app(app):
    mongo.init_app(app)

def retrieve_documents(query):
    # Search the MongoDB database for documents that match the query
    documents = mongo.db.myCollection.find({"$text": {"$search": query}})
    
    # Convert the documents to a list and return them
    return [doc['content'] for doc in documents]