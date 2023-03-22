# Design
All my programs follow a similar pattern:
- An html file with a user interface. It includes a text box or multiple text boxes to capture the input and a field to present an output message
- A javascript file loaded by the html. Most of the javasctipt files for my programs follow the pattern:
  - A function that interacts with html:
    - Read a text from the input text boxes
    - Perform validations
    - Invoke the function with the program logic
    - Print the message to the output field (either an error message or result of calculations)
  - A function with the core logic.
    The function takes the input parameters and returns the result of calculations

# Implemented tasks

## Roman Numerals
The algorithm:

Let's take 45 as an example. Set outlyingNumber to 45

1. Build the dictionary with roman numerals
```
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I" 
```

2. Iterate the table from smallest to largest and find the nearest smallest number
   - 1 
   - 4 
   - 5 
   - 9 
   - 10
   - 40 
   - 50 - too big, take 40 ("XL")

3. Set outlyingNumber = 45 - 40 = 5. Set the romanNumeral to XL

4. Go back to step 2.
   - 1
   - 4
   - 5
   - 9 - too big, take 5 ("V")

5. Set outlyingNumber = 5-5=0. Set romanNumberal to romanNumeral + "V" = "XLV"

6. The outlyingNumber = 0. We break the loop. Return "XLV"

## morse code converter
Algorithm

1. build the dictionary with the morse code
```
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
```
2. itterates through each letter of the sentence

3. it converts each letter to uppercase

4. finds the letter in the dictionary

5. appends the morse code to the output text

6. returns the output text

# Link to the website with the working code

https://o-august.github.io/Task-1-Coding-Problems/SDD%20Task%201/index.html

# Biblography

- W3C website - html tutorials. https://www.w3schools.com/html/
- W3C website - JavaScript tutorials. https://www.w3schools.com/js/
- StackOverflow - solving some common problems I've faced during work. https://stackoverflow.com/
- I was using this website to validate if answers in my application are correct. https://www.romannumerals.org/converter
- GitHub documentetion - installing and using Git. Publishing my website