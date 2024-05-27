
# URL Processor

  

## Description

This Node.js application processes URLs found within square brackets in text input. It makes HTTP GET requests to the detected URLs and extracts the page title and the first email address found (if any), which is then hashed using SHA-256. The results are printed in JSON format.

  

## Setup

  

1. Clone the repository:

```sh

git clone https://github.com/Realman78/ingemark.git

cd ingemark

```

  

2. Install dependencies:

```sh

npm install

```

  

3. Create a `.env` file in the project root with the following content:

```env

IM_SECRET=your_secret_key

```

  

## Usage

  

### From a file

```sh

npm start <path_to_text_file>

```

For a predefined set of URLs, run;
```sh

npm start example.txt

```
### From stdin

```sh

npm start

```

Exit stdin using *Ctrl+D*

## Testing
```sh

npm test

```
The above command runs both the integration and unit tests.

  

### Assumptions for cases that aren't explicitly defined in the assignment:

- Double backwards slash doesn't escape the backward slash. That means that **\\\\[\]** is not a valid square bracket.

- There is no case with unclosed square brackets. Example: *[ [www.first.com www.second.com]* is not valid, *[ [www.first.com\] www.second.com]* is not valid either

- If we have an escaped opening square bracket and we have a higher number of closing square brackets, the first occurenace counts: [\[google.hr marin] parin google.com] becomes [google.hr marin] marin2 google.com]

- If a valid URL has been visited, and that URL should be the one to get visited again in the current bracket pair - ignore it

## Important
- **READ:** When running the program, you will see a more verbose version than the one that's in the assignment. At the very end, all the results will be displayed between a line of "#" signs, along with the failed ones and their respective failure reasons.
	- example final output is at the end of this file.
- When parsing certain URLs that don't have "www", you will encounter an issue. That is because most of them (if not all) return a 301 status which means MOVED PERMANENTLY. One example of that is "ingemark.com".

Example output:
```
######################################
{"url":"https://www.google.hr","title":"Google"}
{"url":"https://www.google.it","title":"Google"}
{"url":"https://www.google.com","title":"Google"}
{"url":"https://www.bbc.com","title":"BBC Home - Breaking News, World News, US News, Sports, Business, Innovation, Climate, Culture, Travel, Video &amp; Audio"}
{"url":"https://www.ingemark.com/contact","title":"Contact - Ingemark","email":"3378863bcb79191548fbc63d26bc07b122820ccc70aa93303f02f27ab31d6f52"}
{"url":"https://www.third.com","title":"GapGun and Vectro Non-Contact Laser Measurement","email":"22dcec55bf4164a20909912b5e1373a404743b54a22eeea66486d480e3209624"}
{"url":"https://www.example.com","title":"Example Domain"}
{"url":"https://www.dev.to","title":"DEV Community"}
{"url":"https://www.geeksforgeeks.org","title":"GeeksforGeeks | A computer science portal for geeks"}
{"url":"https://onecompiler.com/javascript/42ef6hawq","title":"42ef6hawq - JavaScript - OneCompiler"}
{"url":"https://www.stackoverflow.com","title":"Stack Overflow - Where Developers Learn, Share, &amp; Build Careers","email":"bf326e5c274d750ffe5b6024fd34646c9bb10f4667a275fc7ed6c450746a7eb9"}

FAILS:
Failed to fetch www.developer.mozilla.org.com: certificate has expired. Retrying in 60 seconds...
Failed to fetch www.second.com: timeout of 5000ms exceeded. Retrying in 60 seconds...
######################################
```
