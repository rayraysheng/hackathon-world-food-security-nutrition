from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

import os

def connect_to_mongodb():
    """Connect to MongoDB and return the client object."""
    try:
        # Adjust the connection string as needed
        client = MongoClient('mongodb://localhost:27017/', serverSelectionTimeoutMS=5000)
        
        # Attempt to retrieve server information as a connection test
        client.server_info()  # This forces a call to the server.
        print("Connected to MongoDB server successfully.")
        
        return client
    except ConnectionFailure as e:
        print(f"MongoDB connection failed: {e}")
        return None

def query_all_documents(db_name, collection_name):
    """Query and print all documents from a specified collection."""
    client = connect_to_mongodb()
    if client is not None:
        db = client[db_name]
        collection = db[collection_name]
        
        documents = collection.find()
        
        for doc in documents:
            print(doc)

def store_content_in_mongodb(content, file_name):
    """Stores the provided content in a MongoDB database."""
    # Connect to the MongoDB server (adjust the connection string as needed)
    client = MongoClient('mongodb://localhost:27017/')
    
    # Select the database and collection
    db = client['hackathon280']
    collection = db['pdf']
    
    # Insert the document with filename
    document = {'file_name': file_name, 'content': content}
    result = collection.insert_one(document)
    
    print(f"Document inserted for {file_name} with _id: {result.inserted_id}")

def process_documents(folder_path):
    """Reads all documents in the given folder and stores their content in MongoDB."""
    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)
        if os.path.isfile(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as file:
                    content = file.read()
                    store_content_in_mongodb(content, file_name)
            except Exception as e:
                print(f"Error reading file {file_name}: {e}")

if __name__ == '__main__':
    db_name = 'hackathon280'
    collection_name = 'pdf'
    # query_all_documents(db_name, collection_name)

    folder_path = 'documents'
    # process_documents(folder_path)
