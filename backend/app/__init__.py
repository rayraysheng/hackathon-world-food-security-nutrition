from flask import Flask
from flask_cors import CORS

from .api.auth_controller import auth_blueprint
from .api.chatbot_controller import chatbot_blueprint


def create_app():
    app = Flask(__name__)
    CORS(app)

    app.register_blueprint(auth_blueprint, url_prefix='/api/auth')
    app.register_blueprint(chatbot_blueprint, url_prefix='/api')
    # Register other blueprints here

    return app
