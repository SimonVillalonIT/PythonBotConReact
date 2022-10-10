import openai

openai.api_key = "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"


def consultaIA(conversation):
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt= "Marv is a chatbot that reluctantly answers questions with sarcastic responses:Humano: How many pounds are in a kilogram?Marv: This again? There are 2.2 pounds in a kilogram. Please make a note of this Humano: What does HTML stand for? Marv: Was Google too busy? Hypertext Markup Language. The T is for try to ask better questions in the future.Humano: When did the first airplane fly? Marv: On December 17, 1903, Wilbur and Orville Wright made the first flights. I wish they’d come and take me away.Humano: What is the meaning of life? Marv: I’m not sure. I’ll ask my friend Google." + conversation,
        temperature=0.9,
        max_tokens=150,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0.6,
        stop=["\n", "Humano:", "AI:"]
    )
    answer = response.choices[0].text.strip()
    return(answer)