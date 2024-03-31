import openai
# from openai import OenAI
from dotenv import load_dotenv
import os

class ChatbotService:
    @staticmethod
    def get_response(message):
        try:
            # Load the API key from the .env file
            load_dotenv()
            openai.api_key = os.getenv('OPENAI_API_KEY')

            # Create an OpenAI client
            client = openai.OpenAI()

            # Send the message as a prompt to the GPT-3 API
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {
                        "role": "system",
                        "content": "You are a helpful assistant."
                    },
                    {
                        "role": "user",
                        "content": message
                    }
                ]
            )

            # Extract the generated text from the response
            generated_text = response.choices[0].message.content

            return generated_text
        except Exception as e:
            print(f"Error: {e}")
            return str(e)