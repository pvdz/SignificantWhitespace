var
	PUSH = 'PUSH',
	DUP = 'DUP',
	SWAP = 'SWAP',
	POP = 'POP',
	COPY = 'COPY',
	SLICE = 'SLICE',
	MARK = 'MARK',
	LABEL = 'LABEL',
	CALL = 'CALL',
	JUMP = 'JUMP',
	JZERO = 'JZERO',
	JNEG = 'JNEG',
	RET = 'RET',
	EOF = 'EOF',
	ADD = 'ADD',
	SUB = 'SUB',
	MUL = 'MUL',
	DIV = 'DIV',
	MOD = 'MOD',
	PUT = 'PUT',
	GET = 'GET',
	PUTC = 'PUTC',
	PUTN = 'PUTN',
	GETC = 'GETC',
	GETN = 'GETN';

var x = {
	// stack
	'  ': PUSH,
	' \n ': DUP,
	' \n\t': SWAP,
	' \n\n': POP,
	' \t ': COPY,
	' \t\n': SLICE,
	// flow
	'\n  ': MARK,
	'\n \t': CALL,
	'\n \n': JUMP,
	'\n\t ': JZERO,
	'\n\t\t': JNEG,
	'\n\t\n': RET,
	'\n\n\n': EOF,
	// arithmetic
	'\t   ': ADD,
	'\t  \t': SUB,
	'\t  \n': MUL,
	'\t \t ': DIV,
	'\t \t\t': MOD,
	// heap
	'\t\t ': PUT,
	'\t\t\t': GET,
	// io
	'\t\n  ': PUTC,
	'\t\n \t': PUTN,
	'\t\n\t ': GETC,
	'\t\n\t\t': GETN
};


// example below http://compsoc.dur.ac.uk/whitespace/tutorial.php
var input = 
	'   \t\n'+ //	 Put a 1 on the stack
	'\n   \t     \t\t\n'+ //	Set a Label at this point
	' \n '+ //	Duplicate the top stack item
	'\t\n \t'+ //	Output the current value
	'   \t \t \n'+ //	Put 10 (newline) on the stack...
	'\t\n  '+ //	...and output the newline
	'   \t\n'+ //	Put a 1 on the stack
	'\t   '+ //	Addition. This increments our current value.
	' \n '+ //	Duplicate that value so we can test it
	'   \t \t\t\n'+ //	Push 11 onto the stack
	'\t  \t'+ //	Subtraction. So if we've reached the end, we have a zero on the stack.
	'\n\t  \t    \t \t\n'+ //	If we have a zero, jump to the end
	'\n \n \t     \t\t\n'+ //	Jump to the start
	'\n   \t    \t \t\n'+ //	Set the end label
	' \n\n'+ //	Discard our accumulator, to be tidy
	'\n\n\n';




input = input.replace(/[^ \t\n]+/g, ''); // filter out non-whitespaces


function compile(input){
	var limit = 0;
	var program = [];
	var pc = 0;
	program.labels = {};

	function statementType(){
		var next = x[input[pc]];
		if (next) ++pc;
		else {
			next = x[input[pc]+input[pc+1]];
			if (next) pc += 2;
			else {
				next = x[input[pc]+input[pc+1]+input[pc+2]];
				if (next) pc += 3;
				else {
					next = x[input[pc]+input[pc+1]+input[pc+2]+input[pc+3]];
					if (next) pc += 4;
					else throw Error('Unable to proceed, unexpected input at '+pc);
				}
			}
		}
		return next;
	}
	function getNumber(){
var SP = ' ';
var TB = '\t';
var LF = '\n';

var POS = SP;
var NEG = TB;

var ZERO = SP;
var ONE = TB;
		
		var flag = input[pc++] == NEG ? NEG : POS;
		var bits = '';
		while (input[pc] != LF) {
			if (input[pc] == ZERO) bits += '0';
			else if (input[pc] == ONE) bits += '1';
			++pc;
		}
		++pc;
		var val = (flag==POS?1:-1) * parseInt(bits,2);
		return val;
	}

	while (pc<input.length) {
	//	if (++limit > 20) process.exit();
		var next = statementType();
		switch (next) {
			case PUSH:
				program.push(PUSH, getNumber());
				break;
			case DUP:
				program.push(DUP);
				break;
			case SWAP:
				program.push(SWAP);
				break;
			case POP:
				program.push(POP);
				break;
			case COPY:
				program.push(COPY, getNumber());
				break;
			case SLICE:
				program.push(SLICE, getNumber());
				break;
			case MARK:
				var id = getNumber();
				program.labels[id] = program.length;
				program.push('LABEL', id);
				break;
			case CALL:
				program.push(CALL, getNumber());
				break;
			case JUMP:
				program.push(JUMP, getNumber());
				break;
			case JZERO:
				program.push(JZERO, getNumber());
				break;
			case JNEG:
				program.push(JNEG, getNumber());
				break;
			case RET:
				program.push(RET);
				break;
			case EOF:
				program.push(EOF);
				break;
			case ADD:
				program.push(ADD);
				break;
			case SUB:
				program.push(SUB);
				break;
			case MUL:
				program.push(MUL);
				break;
			case DIV:
				program.push(DIV);
				break;
			case MOD:
				program.push(MOD);
				break;
			case PUT:
				program.push(PUT);
				break;
			case GET:
				program.push(GET);
				break;
			case PUTC:
				program.push(PUTC);
				break;
			case PUTN:
				program.push(PUTN);
				break;
			case GETC:
				program.push(GETC);
				break;
			case GETN:
				program.push(GETN);
				break;
			default:
				throw Error('Unable to proceed, how in the world did you manage this');
		}
	}
	
	return program;
}

function interpret(program){
	var stack = [];
	var callstack = [];
	var heap = [];
	
	var bufIn = 'abcdefg';
	var bufOut = '';
	
	var pc = 0;
	
	while (pc<program.length) {
	//	if (++limit > 20) process.exit();
		var next = program[pc++];
	console.log('next:',next,'stack:','['+stack.join(',')+']','out:',bufOut.replace(/\n/g,'\u23CE'));
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
				pc = program.labels[program[pc++]];
				break;
			case JUMP:
				pc = program.labels[program[pc++]];
				break;
			case JZERO:
				var test = stack.pop();
				var label = program.labels[program[pc++]];
				if (test == 0) pc = label;
				break;
			case JNEG:
				var test = stack.pop();
				var label = program.labels[program[pc++]];
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
				var addr = stack.pop();
				heap[addr] = val;
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
			case LABEL:
				++pc;
				break; // ignore
			default:
				throw Error('Unable to proceed, how in the world did you manage this ['+next+']');
		}
	}	

	console.log("Done");
	console.log(bufOut);
}

var program = compile(input);
interpret(program);
