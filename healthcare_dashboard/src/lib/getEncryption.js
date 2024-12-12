export function getEncryptedAuth() {
    const username = "coalition";
    const password = "skills-test";
    const encodedCredentials = btoa(`${username}:${password}`); // Base64 encoding
    return `Basic ${encodedCredentials}`;
}
