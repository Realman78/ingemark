const isValidURL = urlString => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return !!urlPattern.test(urlString);
}

const charCount = (text, character) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === character) {
            count++;
        }
    }
    return count;
};

const extractUrls = async (text, seenUrls, urlQueue) => {
    text = text.replace(/\\\[/g, " ").replace(/\\\]/g, " ").trim();
    const urls = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "[") {
            let tempStartingPoint = i + 1;
            let closingIndex;
            let levels = 0;

            while (true) {
                closingIndex = text.indexOf("]", tempStartingPoint);
                if (closingIndex < 0) {
                    // Unclosed square bracket. Not permitted
                    throw new Error("PANIC!");
                }

                let tempBracketSubstring = text.substring(tempStartingPoint, closingIndex);
                levels += charCount(tempBracketSubstring, "[");
                if (levels-- <= 0) break;

                tempStartingPoint = closingIndex + 1;
                if (tempStartingPoint > text.length) {
                    // We over-indexed the string. Not permitted
                    throw new Error("PANIC!");
                }
            }

            let bracketSubstring = text.substring(i + 1, closingIndex).trim();

            // replacing all "\", "[" and "]" with a space
            bracketSubstring = bracketSubstring.replace(/[\[\]]/g, " ");
            bracketSubstring = bracketSubstring.replace(/\\/g, " ");
            bracketSubstring = bracketSubstring.replace(/\s+/g, " ");

            const elements = bracketSubstring.split(" ").filter((el) => el.length > 0);
            
            i = closingIndex;
            for (let j = elements.length - 1; j >= 0; j--) {
                if (isValidURL(elements[j])) {
                    // in the assignment, it states "As soon as the URL is detected, the script should make a HTTP GET request towards it"
                    // thats why I'm sending a request ASAP
                    const url = elements[j];
                    if (!seenUrls.has(url)) {
                        seenUrls.add(url);
                        urlQueue.push({ url });
                        urls.push(url)
                    }
                    break;
                }
            }
        }
    }
    // testing purposes
    return urls;
}

export {
    isValidURL,
    charCount,
    extractUrls
};