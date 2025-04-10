# https://cookbook.openai.com/examples/structured_outputs_intro
import openai
from openai import OpenAI
import json
import re




# client = OpenAI()
# MODEL = "gpt-4o-2024-08-06"


# MODEL = "deepseek-coder-v2:latest"
MODEL = "qwen2.5max:latest"
client = OpenAI(
    base_url='http://localhost:11434/v1',
    api_key='ollama',  # required, but unused
)

def complete(prompt):
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
            "role": "user",
            "content": prompt
            }
        ],
    )
    return response.choices[0].message.content

# print_math_response(get_math_solution("What is 2 + 2?"))
print(complete("What is 2 + 2?"))
