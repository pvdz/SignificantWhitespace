var tokens, regex, map, index, program, pc, labels, token, id, p, q, stack, callstack, heap, bufIn, bufOut, next, m, n, k, l,
// example below http://compsoc.dur.ac.uk/whitespace/tutorial.php
input = '';//'   	\n\n   	     		\n \n 	\n 	   	 	 \n	\n     	\n	    \n    	 		\n	  	\n	  	    	 	\n\n \n 	     		\n\n   	    	 	\n \n\n\n\n\n';
/*
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
	'\n\n\n',
*/
//x=a,y=b,z=c
s=String,n=parseInt,

// all the whitespace ops:
tokens = '  | 	 | 	\n|\n 	|\n \n|\n	 |\n		|\n  | \n | \n	| \n\n|\n	\n|\n\n\n|	   |	  	|	  \n|	 	 |	 		|		 |			|	\n  |	\n 	|	\n	 |	\n		',
// global regex for the ops
regex = RegExp(tokens,'g'),
// create mapping for op->id
// lambda is longer than the for-each alternative (when minified)
//map=tokens.split('|').reduce(function(o,v,i){o[v]=i;return o;},{});
map = {};
tokens = tokens.split('|');
for (index in tokens) map[tokens[index]] = +index;
// remove any whitespace chars that are not space, tabs and newlines. they are whitespace
input = input.replace(/[^ 	\n]+/g, ''); // filter out non-whitespaces
// first we need to compile the code. we'll put it in an array
program = [];
// pc tracks where we are in the input
pc = 0;
// labels are the only pesky reason for compilation :/
labels = {};

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
			p = /[10]+/.exec(input.slice(++pc).replace(/ /g,'0').replace(/	/g,'1'))[0],
			// get the value
			q = (input[pc-1]==' '?1:-1) * n(p, 2),
			// move the PC
			pc += p.length + 1,
			// register a label or push ops+parameter on the stack
			id== 7 ? labels[q] = program.length : program.push(id, q)
		)
	// op is not followed by number
	: program.push(id);
}

k=[bufIn = bufOut = ''].pop.bind(stack = []);
l=[callstack = [pc = heap = []]].push.bind(stack);
while (pc<program.length)
//	if (++limit > 20) process.exit();
	next = program[pc++],
	!next ? l(program[pc++]) :
	next<2 ? l(stack[program[pc++]]) :
	next<3 ? stack.splice(m = program[pc++], stack.length-(m+1)) :
	next<4 ? (callstack.push(pc), pc = labels[program[pc++]]) :
	next<5 ? pc = labels[program[pc++]] :
	next<6 ? (k() ? ++pc : pc = labels[program[pc]]) :
	next<7 ? (k()<0 ? pc = labels[program[pc]] : ++pc) :
	next<9 ? l(stack[stack.length-1]) :
	next<10 ? l(k(m = k()),m) :
	next<11 ? k() :
	next<12 ? pc = callstack.pop() :
	next<13 ? pc = input.length :
	next<18 ? (n=k(m=k()),l(next==13?m+n:next==14?m-n:next==15?m*n:next==16?m/n:m%n)) :
	next<19 ? heap[k(m = k())] = m :
	next<20 ? l(heap[k()]) :
	next<21 ? bufOut += s.fromCharCode(k()) :
	next<22 ? bufOut += k() :
	next<23 ? l(bufIn.charCodeAt(bufIn = bufIn.slice(1))) :
		l(m = n(bufIn,10, bufIn = bufIn.slice(s(m).length))) ;
	// else: weird error


//console.log("Done");
//console.log("Program:",program)
//console.log(bufOut);

