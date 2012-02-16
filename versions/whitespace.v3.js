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

// all the whitespace ops:
var tokens = 
	'  '+ // PUSH,
	'|'+
	' \t '+ // COPY,
	'|'+
	' \t\n'+ // SLICE,
	'|'+
	'\n \t'+ // CALL,
	'|'+
	'\n \n'+ // JUMP,
	'|'+
	'\n\t '+ // JZERO,
	'|'+
	'\n\t\t'+ // JNEG,
	'|'+
	'\n  '+ // MARK,
	'|'+
	' \n '+ // DUP,
	'|'+
	' \n\t'+ // SWAP,
	'|'+
	' \n\n'+ // POP,
	'|'+
	'\n\t\n'+ // RET,
	'|'+
	'\n\n\n'+ // EOF,
	'|'+
	'\t   '+ // ADD,
	'|'+
	'\t  \t'+ // SUB,
	'|'+
	'\t  \n'+ // MUL,
	'|'+
	'\t \t '+ // DIV,
	'|'+
	'\t \t\t'+ // MOD,
	'|'+
	'\t\t '+ // PUT,
	'|'+
	'\t\t\t'+ // GET,
	'|'+
	'\t\n  '+ // PUTC,
	'|'+
	'\t\n \t'+ // PUTN,
	'|'+
	'\t\n\t '+ // GETC,
	'|'+
	'\t\n\t\t'+ // GETN
	'';	
// global regex for the ops
var regex = RegExp(tokens,'g');
// create mapping for op->id
// lambda is longer than the for-each alternative (when minified)
//map=tokens.split('|').reduce(function(o,v,i){o[v]=i;return o;},{});
var map = {};
tokens = tokens.split('|');
for (var index in tokens) map[tokens[index]] = +index;
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
	var token = regex.exec(input)[0];
	pc += token.length;
	var id = map[token];
	//	console.log(['pc',pc,'id', id,'token', token,'len',input.length])

	// compilation
	id== 7 ? labels[getNumber()] = program.length : id<7 ? program.push(id, getNumber()) : program.push(id);
/*
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
	*/
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


var
	PUTC = 20,
	PUTN = 21,
	GETC = 22,
	GETN = 23;

	if (!next) stack.push(program[pc++]);
	if (next==1) stack.push(stack[program[pc++]]);
	if (next==2) {
		var n = program[pc++];
		stack.splice(n, stack.length-(n+1));
	}
	if (next==3) callstack.push(pc), pc = labels[program[pc++]];
	if (next==4) pc = labels[program[pc++]];
	if (next==5) stack.pop() ? ++pc : pc = labels[program[pc]];
	if (next==6) stack.pop()<0 ? pc = labels[program[pc]] : ++pc;
	// 7 = MARK, compile time only
	if (next==8) stack.push(stack[stack.length-1]);
	if (next==9) {
		var a = stack.pop();
		stack.push(stack.pop(),a);
	}
	if (next==10) stack.pop();
	if (next==11) pc = callstack.pop();
	if (next==12) pc = input.length;
	if (next==13) stack.push(stack.pop() + stack.pop());
	if (next==14) stack.push(stack.pop() - stack.pop());
	if (next==15) stack.push(stack.pop() * stack.pop());
	if (next==16) stack.push(stack.pop() / stack.pop());
	if (next==17) stack.push(stack.pop() % stack.pop());
	if (next==18) {
		var val = stack.pop();
		heap[stack.pop()] = val;
	}
	if (next==19) stack.push(heap[stack.pop()]);
	if (next==20) bufOut += String.fromCharCode(stack.pop());
	if (next==21) bufOut += stack.pop();
	if (next==22) {
		stack.push(bufIn.charCodeAt(0));
		bufIn += bufIn.substring(1);
	}
	if (next==23) {
		var n = parseInt(bufIn);
		stack.push(n);
		bufIn = bufIn.substring(String(n).length);
	}
	// else: weird error
}	

console.log("Done");
console.log(bufOut);

