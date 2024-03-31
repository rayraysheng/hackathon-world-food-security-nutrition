from flask import Blueprint, request, jsonify
from ..services.chatbot_service import ChatbotService
from ..services.document_service import retrieve_documents

chatbot_blueprint = Blueprint('chatbot', __name__)


@chatbot_blueprint.route('/chatbot', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message')
    
    if not message:
        return jsonify({'error': 'Message is required'}), 400

    # Retrieve relevant documents from the MongoDB database
    #documents = retrieve_documents(message)

    # Use the documents as context for the GPT-3 chat model
    #context = ' '.join(documents)
    response = ChatbotService.get_response(message)

    return jsonify({'message': response})