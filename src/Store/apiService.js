
export const signIn = async (email, password) => {
    const response = await fetch('https://localhost:7189/api/auth/signIn', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Sign-in failed');
    }

    var temp = await response.json();

    return temp;
};

export const signUp = async (username, email, password) => {
    console.log("sign up fetch started");

    const response = await fetch('https://localhost:7189/api/Auth/signUp', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
    }).catch(err => { console.error(err); });


    if (!response.ok) {
        throw new Error('Sign-up failed');
    }

    var temp = await response.json();
    console.log(temp);

    return temp;
};