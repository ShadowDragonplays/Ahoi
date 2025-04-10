# https://cookbook.openai.com/examples/structured_outputs_intro
import openai
from openai import OpenAI
import json
from textwrap import dedent
from IPython.display import Math, display


def print_math_response(response):
    result = json.loads(response)
    steps = result['steps']
    final_answer = result['final_answer']
    for i in range(len(steps)):
        print(f"Step {i+1}: {steps[i]['explanation']}\n")
        display(Math(steps[i]['output']))
        print("\n")

    print("Final answer:\n\n")
    display(Math(final_answer))

# client = OpenAI()
# MODEL = "gpt-4o-2024-08-06"


# MODEL = "deepseek-coder-v2:latest"
MODEL = "qwen2.5max:latest"
client = OpenAI(
    base_url='http://localhost:11434/v1',
    api_key='ollama',  # required, but unused
)

math_tutor_prompt = '''
    You are a helpful math tutor. You will be provided with a math problem,
    and your goal will be to output a step by step solution, along with a final answer.
    For each step, just provide the output as an equation use the explanation field to detail the reasoning.
'''


def get_math_solution(question):
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {
                "role": "system",
                "content": dedent(math_tutor_prompt)
            },
            {
                "role": "user",
                "content": question
            }
        ],
        response_format={
            "type": "json_schema",
            "json_schema": {
                "name": "math_reasoning",
                "schema": {
                    "type": "object",
                    "properties": {
                        "steps": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "explanation": {"type": "string"},
                                    "output": {"type": "string"}
                                },
                                "required": ["explanation", "output"],
                                "additionalProperties": False
                            }
                        },
                        "final_answer": {"type": "string"}
                    },
                    "required": ["steps", "final_answer"],
                    "additionalProperties": False
                },
                "strict": True
            }
        }
    )

    # return response
    return response.choices[0].message


# print_math_response(get_math_solution("What is 2 + 2?"))
print(get_math_solution("What is 2 + 2?"))
