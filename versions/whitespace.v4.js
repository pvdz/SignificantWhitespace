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
var token,id,p,q;
// now we compile the program
while (pc<input.length) {
	// i use the regex to figure out what op follows
	// it prevents me having to define a huge switch for it
	regex.lastIndex = pc; // regex is global, exec will start searching at pc position
	token = regex.exec(input)[0];
	pc += token.length;
	id = map[token];
	// only parse a number for certain ops
	id<8 ? 
		(
			// first actually parse a substr
			p = /[10]+/.exec(input.slice(++pc).replace(/ /g,'0').replace(/\t/g,'1'))[0],
			// get the value
			q = (input[pc-1]==' '?1:-1) * parseInt(p, 2),
			// move the PC
			pc += p.length + 1,
			// register a label or push ops+parameter on the stack
			id== 7 ? labels[q] = program.length : program.push(id, q)
		)
	// op is not followed by number
	: program.push(id);
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

