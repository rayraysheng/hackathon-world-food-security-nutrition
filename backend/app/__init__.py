from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo

from .api.auth_controller import auth_blueprint
from .api.chatbot_controller import chatbot_blueprint

from .services.document_service import init_app as init_mongo_app


def create_app():
    app = Flask(__name__)
    app.config["MONGO_URI"] = "mongodb://localhost:27017/hackathon280"
    init_mongo_app(app)
    CORS(app)

    app.register_blueprint(auth_blueprint, url_prefix='/api/auth')
    app.register_blueprint(chatbot_blueprint, url_prefix='/api')
    # Register other blueprints here

    return app
