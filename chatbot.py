import openai

openai.api_key = "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"


def consultaIA(conversation):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt= conversation,
        temperature=0.9,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0.6,
        stop=["\n", "Humano:", "AI:"]
    )
    answer = response.choices[0].text.strip()
    return(answer)
