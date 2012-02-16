// example below http://compsoc.dur.ac.uk/whitespace/tutorial.php
var input = 
	'   	\n'+ //	 Put a 1 on the stack
	'\n   	     		\n'+ //	Set a Label at this point
	' \n '+ //	Duplicate the top stack item
	'	\n 	'+ //	Output the current value
	'   	 	 \n'+ //	Put 10 (newline) on the stack...
	'	\n  '+ //	...and output the newline
	'   	\n'+ //	Put a 1 on the stack
	'	   '+ //	Addition. This increments our current value.
	' \n '+ //	Duplicate that value so we can test it
	'   	 		\n'+ //	Push 11 onto the stack
	'	  	'+ //	Subtraction. So if we've reached the end, we have a zero on the stack.
	'\n	  	    	 	\n'+ //	If we have a zero, jump to the end
	'\n \n 	     		\n'+ //	Jump to the start
	'\n   	    	 	\n'+ //	Set the end label
	' \n\n'+ //	Discard our accumulator, to be tidy
	'\n\n\n';

// just for development, we will inline these. note that their value corresponds with the position of that op in the string/regex. no coincedence
var
	PUSH = 0,
	DUP = 1,
	SWAP = 2,
	POP = 3,
	COPY = 4,
	SLICE = 5,
	MARK = 6,
	CALL = 7,
	JUMP = 8,
	JZERO = 9,
	JNEG = 10,
	RET = 11,
	EOF = 12,
	ADD = 13,
	SUB = 14,
	MUL = 15,
	DIV = 16,
	MOD = 17,
	PUT = 18,
	GET = 19,
	PUTC = 20,
	PUTN = 21,
	GETC = 22,
	GETN = 23;

// all the whitespace ops:
var tokens = '  | \n | \n\t| \n\n| \t | \t\n|\n  |\n \t|\n \n|\n\t |\n\t\t|\n\t\n|\n\n\n|\t   |\t  \t|\t  \n|\t \t |\t \t\t|\t\t |\t\t\t|\t\n  |\t\n \t|\t\n\t |\t\n\t\t';
// global regex for the ops
var regex = RegExp(tokens,'g');
// create mapping for op->id
// lambda is longer than the for-each alternative (when minified)
//map=tokens.split('|').reduce(function(o,v,i){o[v]=i;return o;},{});
var map = {};
tokens = tokens.split('|');
for (index in tokens) map[tokens[index]] = +index;
// remove any whitespace chars that are not space, tabs and newlines. they are whitespace
input = input.replace(/[^ 	\n]+/g, ''); // filter out non-whitespaces
// first we need to compile the code. we'll put it in an array
var program = [];
// pc tracks where we are in the input
var pc = 0;
// labels are the only pesky reason for compilation :/
var labels = {};
// numbers are spaces and tabs, delimited with newlines
function getNumber(){
	// first char always signifies flag
	var flag = input[pc++];
	// use parseInt trick where it will keep eating numbers till the next is not a number
	// it will return the value of the string parsed so far
	// since we removed any non-whitespace earlier, we can safely replace all spaces
	// and tabs with zeroes and ones and then start parsing. the newline will still act
	// as the delimiter for parseInt and we parse in base 2, so immediately get the 
	// proper number back. hurray for science!
	// the slice is not very efficient, but short.
	var p = /[10]+/.exec(input.slice(pc).replace(/ /g,'0').replace(/\t/g,'1'))[0];
	var n = parseInt(p,2);
	pc += p.length+1; // +1 for delimiter
	// dont forget to apply the flag
	return flag == ' ' ? n : -n;
}

// now we compile the program
while (pc<input.length) {
	// i use the regex to figure out what op follows
	// it prevents me having to define a huge switch for it
	regex.lastIndex = pc; // regex is global, exec will start searching at pc position
	var t = regex.exec(input);
	var token = t[0];
	pc += token.length;
	var id = map[token];
//	console.log(['pc',pc,'id', id,'token', token,'len',input.length])
	switch (id) {
		case MARK:
			var id = getNumber();
			labels[id] = program.length;
			break;
		case PUSH:
		case COPY:
		case SLICE:
		case CALL:
		case JUMP:
		case JZERO:
		case JNEG:
			program.push(id, getNumber());
			break;
		default:
			program.push(id);
			// if not one of these...
			// DUP, SWAP, POP, RET, EOF, ADD, SUB, MUL, DIV, MOD, PUT, GET, PUTC, PUTN, GETC, GETN
			// throw Error('Unable to proceed, how in the world did you manage this');
	}
}

console.log(program)


var stack = [];
var callstack = [];
var heap = [];

var bufIn = 'abcdefg';
var bufOut = '';

var pc = 0;

while (pc<program.length) {
//	if (++limit > 20) process.exit();
	var next = program[pc++];
//console.log('next:',next,'stack:','['+stack.join(',')+']','out:',bufOut.replace(/\n/g,'\u23CE'));
	switch (next) {
		case PUSH:
			stack.push(program[pc++]);
			break;
		case DUP:
			stack.push(stack[stack.length-1]);
			break;
		case SWAP:
			var a = stack.pop();
			var b = stack.pop();
			stack.push(a,b);
			break;
		case POP:
			stack.pop();
			break;
		case COPY:
			stack.push(stack[program[pc++]]);
			break;
		case SLICE:
			var n = program[pc++];
			stack.splice(n, stack.length-(n+1));
			break;
		case CALL:
			callstack.push(pc);
			pc = labels[program[pc++]];
			break;
		case JUMP:
			pc = labels[program[pc++]];
			break;
		case JZERO:
			var test = stack.pop();
			var label = labels[program[pc++]];
			if (test == 0) pc = label;
			break;
		case JNEG:
			var test = stack.pop();
			var label = labels[program[pc++]];
			if (test < 0) pc = label;
			break;
		case RET:
			pc = callstack.pop();
			break;
		case EOF:
			pc = input.length;
			break;
		case ADD:
			stack.push(stack.pop() + stack.pop());
			break;
		case SUB:
			stack.push(stack.pop() - stack.pop());
			break;
		case MUL:
			stack.push(stack.pop() * stack.pop());
			break;
		case DIV:
			stack.push(stack.pop() / stack.pop());
			break;
		case MOD:
			stack.push(stack.pop() % stack.pop());
			break;
		case PUT:
			var val = stack.pop();
			heap[stack.pop()] = val;
			break;
		case GET:
			stack.push(heap[stack.pop()]);
			break;
		case PUTC:
			bufOut += String.fromCharCode(stack.pop());
			break;
		case PUTN:
			bufOut += stack.pop();
			break;
		case GETC:
			stack.push(bufIn.charCodeAt(0));
			bufIn += bufIn.substring(1);
			break;
		case GETN:
			var n = parseInt(bufIn);
			stack.push(n);
			bufIn = bufIn.substring(String(n).length);
			break;
		default:
			throw Error('Unable to proceed, how in the world did you manage this ['+next+']');
	}
}	

console.log("Done");
console.log(bufOut);

