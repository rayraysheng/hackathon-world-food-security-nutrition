from flask import Blueprint, request, jsonify

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login', methods=['POST'])
def login():
    # Extract 'type' parameter from the incoming JSON request
    data = request.get_json()
    user_type = data.get('type', 'Unknown')  # Default to 'Unknown' if not provided

    # Return a message indicating which type of user logged in
    return jsonify({'message': f'{user_type} user logged in'})
