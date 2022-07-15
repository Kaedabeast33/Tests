let password ="bigsnowman123!"

if(password.length >=10){
    if(password.includes("a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L")){
        if(password.includes (1,2,3,4,5,6,7,8,9,0)){
            /// special characters
            if(password.includes("!","@","#","$","%","^","&")){
                /// password doesn' include a " "
                if(!password.includes(" ")){
                console.log ("successful password creation")}   
                else{console.log("Password Error")}}
            else{console.log("Password Error")}}
        else{console.log("Password Error")}}
    else{console.log("Password Error")}}
else{console.log("Password Error")}


