from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from .api.auth_controller import auth_blueprint
    app.register_blueprint(auth_blueprint, url_prefix='/api/auth')

    # Register other blueprints here

    return app
