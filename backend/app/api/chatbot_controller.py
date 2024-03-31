from flask import Blueprint, request, jsonify
from ..services.chatbot_service import ChatbotService

chatbot_blueprint = Blueprint('chatbot', __name__)

@chatbot_blueprint.route('/chatbot', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message')
    
    if not message:
        return jsonify({'error': 'Message is required'}), 400

    response = ChatbotService.get_response(message)
    return jsonify({'message': response})
