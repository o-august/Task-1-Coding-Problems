# About

This project is an assessment task for school.

# Implemented tasks

## Roman Numerals
The algorithm:

Let's take 45 as an example. Set outlyingNumber to 45

1. Build the table with roman numerals
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

# Biblography

- W3C website - html tutorials. https://www.w3schools.com/html/
- W3C website - JavaScript tutorials. https://www.w3schools.com/js/
- StackOverflow - solving some common problems I've faced during work. https://stackoverflow.com/
- I was using this website to validate if answers in my application are correct. https://www.romannumerals.org/converter
- GitHub documentetion - installing and using Git. Publishing my website