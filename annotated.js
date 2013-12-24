function(
    a,      // Input text
    b,      // Number of places to shift each character
    c       // Placeholder for character offset
){
    return a.replace(/[A-z]/g,function(a) {             // Replace all A-Z and a-z characters function (r)
        c = (a = a.charCodeAt()) > 96 ? 97 : 65;        // Set a to the character code. Set the character offset based on it
        return String.fromCharCode(                     // Create a string from the rotated value
            (a + b % 26 + 26 - c) % 26 + c              // Shift the character while making sure it is in the character set
        )
    })
}