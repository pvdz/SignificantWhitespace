var tokens, regex, index, program, pc, labelAndOps, token, id, p, q, stack, callstack, heap, bufIn, bufOut, next, m, k, l, b
s=String,n=parseInt,
b.innerHTML = 'in<input><a>go</a><textarea></textarea><textarea>';
input = b.children[2].value = '   	\n\n   	     		\n \n 	\n 	   	 	 \n	\n     	\n	    \n    	 		\n	  	\n	  	    	 	\n\n \n 	     		\n\n   	    	 	\n \n\n\n\n\n'
b.children[1].onclick = function(){
	bufIn=b.children[0].value;
	tokens = '  | 	 | 	\n|\n 	|\n \n|\n	 |\n		|\n  | \n | \n	| \n\n|\n	\n|\n\n\n|	   |	  	|	  \n|	 	 |	 		|		 |			|	\n  |	\n 	|	\n	 |	\n		',
	regex = RegExp(tokens,'g'),
	labelAndOps = {};
	tokens = tokens.split('|');
	for (index in tokens) labelAndOps[tokens[index]] = +index;
	input = input.replace(/[^ 	\n]+/g, bufOut=''); // filter out non-whitespaces
	pc = program = [];
	with(program) while(pc<input.length){
		regex.lastIndex = pc; // regex is global, exec will start searching at pc position
		token = regex.exec(input)[0];
		pc += token.length;
		id = labelAndOps[token];
		id<8 ?
			(
				p = /[10]+/.exec(input.slice(++pc).replace(/ /g,'0').replace(/	/g,'1'))[0],
				q = (input[pc-1]==' '?1:-1) * n(p, 2),
				pc += p.length + 1,
				id== 7 ? labelAndOps[q] = length : push(id, q)
			)
		: push(id);

		k=pop.bind(stack = []);
		l=push.bind(stack);
	}

	callstack = [pc = heap = []];
	
	while (pc<program.length)
	//	if (++limit > 20) process.exit();
		next = program[pc++],
		!next ? l(program[pc++]) :
		next<2 ? l(stack[program[pc++]]) :
		next<3 ? stack.splice(m = program[pc++], stack.length-(m+1)) :
		next<4 ? (callstack.push(pc), pc = labelAndOps[program[pc++]]) :
		next<5 ? pc = labelAndOps[program[pc++]] :
		next<6 ? (k() ? ++pc : pc = labelAndOps[program[pc]]) :
		next<7 ? (k()<0 ? pc = labelAndOps[program[pc]] : ++pc) :
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

	b.children[3].value = bufOut;
}

