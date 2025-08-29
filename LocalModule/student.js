
// Local modules

const getName = () =>{
    return "Arafa akter";
}
const getAge = () =>{
    return "23";
}

// we can also access variable using import and export.

const result = 3.75;


// this module export system is not orginized.

// exports.getName = getName;
// exports.getAge = getAge;
// exports.result = result;


// we use this procedure
module.exports ={getName,getAge,result}