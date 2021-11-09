from question import Question

question_prompts = [
    "What do you feel is your purpose in life?\n(a) To protect those I care about.\n(b) To seek out adventure.\n(c) To maintain a sense of morality.\n(d) To fully understand who I truly am as a person.\n\n",
    "Which animal do you think is the most impressive?\n(a) Wolf\n(b) Bear\n(c) Snake\n(d) Dragon\n\n",
    "What is your biggest flaw?\n(a) Being disloyal.\n(b) Always yearning for more power.\n(c) Never allowing others to help me.\n(d) Giving up too much of myself for others.\n\n",
    "What motivates you to work hard?\n(a) To be the best at everything I do.\n(b) To find the fullfillment I am longing for.\n(c) The knowledge that people are counting on me.\n(d) To bring honor to my family and friends.\n\n",
    "Would you say you're a kid at heart?\n(a) Absolutely not!\n(b) On the surface it may seem that way, but in reality, no.\n(c) I suppose so, but I can be mature when it is needed.\n(d) Yup, all the way!\n\n"
]
questions = [
    Question(question_prompts[0], 'a' or 'b' or 'c' or 'd'),
    Question(question_prompts[1], 'a' or 'b' or 'c' or 'd'),
    Question(question_prompts[2], 'a' or 'b' or 'c' or 'd'),
    Question(question_prompts[3], 'a' or 'b' or 'c' or 'd'),
    Question(question_prompts[4], 'a' or 'b' or 'c' or 'd')
]


def run_test(questions):
    game = 0
    lord = 0
    harry = 0
    percy = 0
    for question in questions:
        answer = input(question.prompt)
        if answer == 'a':
            game += 1
        elif answer == 'b':
            lord += 1
        elif answer == 'c':
            harry += 1
        elif answer == 'd':
            percy += 1
    print(game)
    print(lord)
    print(harry)
    print(percy)
    if game > lord and harry and percy:
        print('You got: Game of Thrones!')
    elif lord > game and harry and percy:
        print('You got: Lord of the Rings!')
    elif harry > game and lord and percy:
        print('You got: Harry Potter!')
    elif percy > game and harry and lord:
        print('You got: Percy Jackson!')


run_test(questions)
