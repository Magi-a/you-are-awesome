// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    //console.log(propertyName);
    return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {


    Object.defineProperty(Object.prototype, propertyName, {
        get: function() { 
            return result; 
        },
        set: function(value) { 
            result = value;    
        },
          enumerable: true,
          configurable: true                       
        });
        return propertyName;
        

    //console.log(Object.getOwnPropertyNames(Object));

    //return propertyName;
};

const createProtoMagicObject = () => {

    var temp = new Function();

    //console.log(typeof(temp));

    //console.log(temp.__proto__);

    //console.log(temp.prototype);

    temp.__proto__ = temp.prototype;

    return temp;


};

const incrementor = () => {

    if(incrementor.val === undefined){
        incrementor.val = 1;
    }

    function f() {
        incrementor.val++;
        //console.log(incrementor.val);
        return f;
    }

    f.valueOf = function() {
        return incrementor.val++;
    };
    
    return f;
};

//error
const asyncIncrementor = () => {

    if(Object.val === undefined){
        Object.val = 1;
    }

    function f() {
        Object.val++;
        console.log(Object.val);
        return f;
    }

    f.valueOf = function() {
        return Object.val++;
    };
    
    return f;


};


const createIncrementer = () => {

    var a = [];
    a.value = 0;
    a.next = function() {
        this.value++;
        //console.log(this.value);
        return this;
    }
    
    return a;

};
















// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;