/// <reference no-default-lib="true"/>

interface Array<T> {
    /**
      * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
      */
    //% shim=Array_::length weight=84
    //% blockId="lists_length" block="length of %VALUE" blockBuiltin=true blockNamespace="lists"
    length: number;

    /**
      * Appends new elements to an array.
      * @param items New elements of the Array.
      */
    //% help=lists/push
    //% shim=Array_::push weight=75
    //% blockId="array_push" block="%myList| add value %value| to end" blockNamespace="lists"
    push(item: T): void;

    /**
      * Removes the last element from an array and returns it.
      */
    //% help=lists/pop
    //% shim=Array_::pop weight=74
    //% blockId="array_pop" block="get and remove last value from %myList" blockNamespace="lists"
    pop(): T;

    /**
      * Reverses the elements in an Array. The first array element becomes the last, and the last array element becomes the first.
      */
    //% help=lists/reverse
    //% helper=arrayReverse weight=10 advanced=true
    //% blockId="array_reverse" block="reverse %myList" blockNamespace="lists"
    reverse(): void;

    /**
      * Removes the first element from an array and returns that element. This method changes the length of the array.
      */
    //% help=lists/shift
    //% helper=arrayShift weight=70 advanced=true
    //% blockId="array_shift" block="get and remove first value from %myList" blockNamespace="lists"
    shift(): T;

    /**
      * Adds one element to the beginning of an array and returns the new length of the array.
      * @param element to insert at the start of the Array.
      */
    //% help=lists/unshift
    //% helper=arrayUnshift weight=69 advanced=true
    //% blockId="array_unshift" block="%myList| insert %value| at beginning" blockNamespace="lists"
    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.
    unshift(value:T): number;

    /**
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array. eg: 0
      * @param end The end of the specified portion of the array. eg: 0
      */
    //% help=lists/slice
    //% helper=arraySlice weight=41 advanced=true blockNamespace="lists"
    slice(start: number, end: number): T[];

    /**
      * Removes elements from an array.
      * @param start The zero-based location in the array from which to start removing elements. eg: 0
      * @param deleteCount The number of elements to remove. eg: 0
      */
    //% helper=arraySplice weight=40
    splice(start: number, deleteCount: number): void;

    /**
      * Sorts the elements of an array in place and returns the array. The sort is not necessarily stable.
      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type
      */
    //% helper=arraySort weight=40
    sort(callbackfn?: (value1: T, value2: T) => number): T[];

    /**
      * Calls a defined callback function on each element of an array, and returns an array that contains the results.
      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.
      */
    //% helper=arrayMap weight=40
    map<U>(callbackfn: (value: T, index: number) => U): U[];

    /**
      * Returns the elements of an array that meet the condition specified in a callback function.
      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.
      */
    //% helper=arrayFilter weight=40
    filter(callbackfn: (value: T, index: number) => boolean): T[];

    /**
      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.
      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
    //% helper=arrayReduce weight=40
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;


    /** Removes the first occurence of an object. Returns true if removed. */
    //% shim=Array_::removeElement weight=48
    removeElement(element:T) : boolean;

    /** Removes the object at position index. */
    //% help=lists/removeat
    //% shim=Array_::removeAt weight=49 advanced=true
    //% blockId="array_removeat" block="%myList| remove value at %index" blockNamespace="lists"
    removeAt(index:number) : T;

    /**
     * Insert the value at a particular index, increases length by 1
     * @param index the zero-based position in the list to insert the value, eg: 0
     * @param the value to insert, eg: 0
     */
    //% help=lists/insertat
    //% shim=Array_::insertAt weight=84 advanced=true
    //% blockId="array_insertAt" block="%myList| insert at %index| value %value" blockNamespace="lists"
    insertAt(index:number, value: T) : void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param item The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
      */
    //% help=lists/indexof
    //% shim=Array_::indexOf weight=50 advanced=true
    //% blockId="array_indexof" block="%myList| find index of %value" blockNamespace="lists"
    indexOf(item: T, fromIndex?: number): number;

    /**
     * Gets the value at a particular index
     * @param index the zero-based position in the list of the item, eg: 0
     */
    //% help=lists/get
    //% shim=Array_::getAt weight=85
    get(index: number): T;

    /**
     * Stores the value at a particular index
     * @param index the zero-based position in the list to store the value, eg: 0
     * @param the value to insert, eg: 0
     */
    //% help=lists/set
    //% shim=Array_::setAt weight=84
    set(index: number, value : T) : void;

    [n: number]: T;
}

declare interface String {
    // This block is currently disabled in favor of the built-in Blockly "Create text with" block, which compiles to "" + ""
    // Add % sign back to the block annotation to re-enable
    /**
     * Returns a string that contains the concatenation of two or more strings.
     * @param other The string to append to the end of the string.
     */
    //% shim=String_::concat weight=80
    //% blockId="string_concat" blockNamespace="text"
    // block="join %myList=text|%other"
    concat(other: string): string;

    /**
     * Returns the character at the specified index.
     * @param index The zero-based index of the desired character.
     */
    //% shim=String_::charAt weight=77
    //% blockId="string_get" block="char from %myList=text|at %pos" blockNamespace="text"
    charAt(index: number): string;

    /** Returns the length of a String object. */
    //% property shim=String_::length weight=75
    //% blockId="text_length" block="length of %VALUE" blockBuiltin=true blockNamespace="text"
    length: number;

    /**
     * Returns the Unicode value of the character at the specified location.
     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
     */
    //% shim=String_::charCodeAt
    charCodeAt(index: number): number;

    /**
     * Determines whether relative order of two strings (in ASCII encoding).
     * @param that String to compare to target string
     */
    //% shim=String_::compare
    //% blockId="string_compare" block="compare %myList=text| to %that" blockNamespace="text"
    compare(that: string): number;

    /**
     * Return substring of the current string.
     * @param start first character index; can be negative from counting from the end, eg:0
     * @param length number of characters to extract
     */
    //% shim=String_::substr length.defl=1000000
    //% blockId="string_substr" block="substring of %myList=text|from %start|of length %length" blockNamespace="text"
    substr(start:number, length?:number): string;

    // This block is currently disabled, as it does not compile in some targets
    // Add % sign back to the block annotation to re-enable
    /** Returns a value indicating if the string is empty */
    //% shim=String_::isEmpty
    //% blockId="string_isempty" blockNamespace="text"
    // block="%myList=text| is empty"
    isEmpty() : boolean;

    [index: number]: string;
}

/**
  * Converts A string to an integer.
  * @param s A string to convert into a number.
  */
//% shim=String_::toNumber
//% blockId="string_parseint" block="parse to integer %text" blockNamespace="text"
declare function parseInt(text: string): number;

interface Object {}
interface Function {}
interface IArguments {}
interface RegExp {}

type uint8 = number;
type uint16 = number;
//type uint32 = number;
type int8 = number;
type int16 = number;
type int32 = number;


declare interface Boolean {
    /**
     * Returns a string representation of an object.
     */
    //% shim=Boolean_::toString
    toString(): string;
}

declare namespace String {

    /**
     * Make a string from the given ASCII character code.
     */
    //% help=math/string-from-char-code
    //% shim=String_::fromCharCode
    //% advanced=true
    //% blockNamespace="Math" blockId="stringFromCharCode" block="text from char code %code" weight=1
    function fromCharCode(code: number): string;
}


declare interface Number {
    /**
     * Returns a string representation of a number.
     */
    //% shim=Number_::toString
    toString(): string;
}

declare namespace Math {

    /**
     * Returns the value of a base expression taken to a specified power.
     * @param x The base value of the expression.
     * @param y The exponent value of the expression.
     */
    //% shim=Math_::pow
    function pow(x: number, y: number): number;

    /**
     * Returns a pseudorandom number between 0 and `max`.
     */
    //% shim=Math_::random
    function random(max: number): number;

    /**
     * Returns the square root of a number.
     * @param x A numeric expression.
     */
    //% shim=Math_::sqrt
    function sqrt(x: number): number;
}
