export default function findInvalidValues(entry) {
    let invalidValues = [];
    if (!validateName(entry.firstName)) invalidValues.push("First Name");
    if (!validateName(entry.lastName)) invalidValues.push("Last Name");
    if (!validatePhoneNumber(entry.phoneNumber)) invalidValues.push("Phone Number");
    return invalidValues;
}

function validateName(value) {
    return value !== ""
}

function validatePhoneNumber(value) {
    return /^[+]{1}[0-9]{2}[ ]{1}[0-9]{2}[ ]{1}[0-9]{6,}$/.test(value)
}
