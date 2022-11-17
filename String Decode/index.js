const decoder = (string) => {
    let decoded = '';
    for(let i = 0; i < string.length; i++)
    {
        if(!isNaN(string[i]))
        {
            decoded += string[i + parseInt(string[i]) + 1];
            i += parseInt(string[i]) + 1;
        }
    }
    return decoded;
}

console.log(decoder('0h2xce5ngbrdy'));
console.log(decoder('3vdfn'));
console.log(decoder('0r'));
console.log(decoder('2bna0p1mp2osl0e'));
console.log(decoder('0y4akjfe0s'));