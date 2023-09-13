
import random

chat_up_lines = [
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Is your name Google? Because you have everything I've been searching for.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Excuse me, but I think you dropped something: my jaw.",
    "Is your dad a baker? Because you're a cutie pie!",
    "If you were a vegetable, you'd be a 'cute-cumber.'",
    "Do you believe in love at first sight, or should I walk by again?",
    "Are you a camera? Because every time I look at you, I smile.",
    "Is your name Wi-Fi? Because I'm really feeling a connection.",
    "Is your dad a boxer? Because you're a knockout!",
]

def get_chat_up_line():
    return random.choice(chat_up_lines)

# Example usage:
line = get_chat_up_line()
print(line)