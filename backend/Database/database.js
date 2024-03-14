
export const addCredential = async (email, hsh) => {
    return 1;
}
export const getUserhash = async (email) => {
    if(email==="developer@test.com"){
        return {
            userid: 1,
            hashedpassword: "cdm"
        }
    }
    else{
        return {};
    }
}
export const getUserById = async (id) => {
    return "em";
}