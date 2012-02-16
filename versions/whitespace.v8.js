/*
putc -> # 
push 1 putc -> #
putn -> #
push 1 putn -> #
getc -> #
push 1 getc -> #
getn -> #
push 1 getn -> #
*/

// ♡♥
// tab: ♡
// ret: ♥
// spc: 0
// tab: 1


test();

function test(){
	console.log([
// push
//		['   ♡ ♡♥♥♥♥', function(stack, heap, input, output){ return stack[0]==5; }],

// copy
//    [' ♡  ♡♡♥♥♥♥', function(stack, heap, input, output){ return stack[0]==0; }],
//    ['   ♡♥ ♡  ♡♡♥♥♥♥', function(stack, heap, input, output){ return stack[0]==1 && stack[1]==0; }],
//    ['   ♡♥   ♡ ♥ ♡  ♡♡♥♥♥♥', function(stack, heap, input, output){ return stack[0]==1 && stack[1]==2 && stack[2]==0; }],
//    ['   ♡♥   ♡ ♥   ♡♡♥ ♡  ♡♡♥♥♥♥', function(stack, heap, input, output){ return stack[0]==1 && stack[1]==2 && stack[2]==3 && stack[3]==1; }],

// slice
//    [' ♡♥ ♡ ♥♥♥♥', function(stack, heap, input, output){ return stack.length == 0; }],
//    ['   ♡ ♡♥ ♡♥ ♡ ♥♥♥♥', function(stack, heap, input, output){ return stack.length == 1 && stack[0] == 5; }],
//    ['   ♡ ♡♥   ♡♡♥ ♡♥ ♡ ♥♥♥♥', function(stack, heap, input, output){ return stack.length == 1 && stack[0] == 3; }],
//    ['   ♡ ♡♥   ♡♥   ♡♡♥ ♡♥ ♡ ♥♥♥♥', function(stack, heap, input, output){ return stack.length == 1 && stack[0] == 3; }],
//    ['   ♡ ♡♥   ♡♡♡♥   ♡♥   ♡♡♥ ♡♥ ♡ ♥♥♥♥', function(stack, heap, input, output){ return stack.length == 2 && stack[0] == 5 && stack[1] == 3; }],

// mark
//      ['♥   ♡♥♥♥♥', function(stack, heap, input, output, labels){ return stack.length == 0 && '1' in labels && labels[1] === 0; }],
// call
//      ['♥ ♡ ♡♥♥   ♡♥♥♥♥', function(stack, heap, input, output, labels, cstack){ return cstack.length == 2 && cstack[1] == 1; }],
// ret
//      ['♥ ♡ ♡♡♥♥♥♥♥   ♡♡♥♥♡♥', function(stack, heap, input, output, labels, cstack){ return cstack.length == 1; }],
// jump
//      ['♥ ♥ ♡♥♥   ♡♥♥♥♥', function(stack, heap, input, output, labels){ return true; }],
// jzero
//      ['   ♡♥♥♡  ♡♥♥   ♡♥♥♥♥', function(stack, heap, input, output, labels){ return stack.length == 0; }],
//      ['    ♥♥♡  ♡♥♥   ♡♥♥♥♥', function(stack, heap, input, output, labels){ return stack.length == 0; }],
//      ['  ♡♡♥♥♡  ♡♥♥   ♡♥♥♥♥', function(stack, heap, input, output, labels){ return stack.length == 0; }],
// jneg
//      ['   ♡♥♥♡♡ ♡♥♥   ♡♥♥♥♥', function(stack, heap, input, output, labels){ return stack.length == 0; }],
//      ['    ♥♥♡♡ ♡♥♥   ♡♥♥♥♥', function(stack, heap, input, output, labels){ return stack.length == 0; }],
//      ['  ♡♡♥♥♡♡ ♡♥♥   ♡♥♥♥♥', function(stack, heap, input, output, labels){ return stack.length == 0; }],
// dup
//    [' ♥ ♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0]==0; }],
//    ['   ♡ ♡♥ ♥ ♥♥♥', function(stack, heap, input, output){ return stack.length==2 && stack[0]==5 && stack[1] == 5; }],
// swap
//    [' ♥♡♥♥♥', function(stack, heap, input, output){ return stack.length==2 && stack[0]==0 && stack[1]==0; }],
//    ['   ♡ ♡♥ ♥♡♥♥♥', function(stack, heap, input, output){ return stack.length==2 && stack[0]==5 && stack[1]==0; }],
//    ['   ♡♡♥   ♡ ♡♥ ♥♡♥♥♥', function(stack, heap, input, output){ return stack.length==2 && stack[0]==5 && stack[1]==3; }],
// pop
//    [' ♥♥♥♥♥', function(stack, heap, input, output){ return stack.length==0; }],
//    ['   ♡ ♡♥ ♥♥♥♥♥', function(stack, heap, input, output){ return stack.length==0; }],
// eof
//    ['♥♥♥', function(stack, heap, input, output){ return stack.length==0; }],
// add
//    ['♡   ♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 0; }],
//    ['   ♡♡  ♥♡   ♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 12; }],
//    ['   ♡♡  ♥   ♡  ♥♡   ♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 16; }],
// sub
//    ['♡  ♡♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 0; }],
//    ['   ♡♡  ♥♡  ♡♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 12; }],
//    ['   ♡♡  ♥   ♡  ♥♡  ♡♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == -8; }],
// mul
//    ['♡  ♥♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 0; }],
//    ['   ♡♡  ♥♡  ♥♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 0; }],
//    ['   ♡♡  ♥   ♡  ♥♡  ♥♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 48; }],
// div
//    ['♡ ♡ ♥♥♥', function(stack, heap, input, output){ return stack.length==1 && isNaN(stack[0]); }],
//    ['   ♡♡  ♥♡ ♡ ♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == Infinity; }],
//    ['   ♡♡  ♥   ♡  ♥♡ ♡ ♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 0; }],
//    ['   ♡  ♥   ♡♡  ♥♡ ♡ ♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 3; }],
// mod
//    ['♡ ♡♡♥♥♥', function(stack, heap, input, output){ return stack.length==1 && isNaN(stack[0]); }],
//    ['   ♡♡  ♥♡ ♡♡♥♥♥', function(stack, heap, input, output){ return stack.length==1 && isNaN(stack[0]); }],
//    ['   ♡♡  ♥   ♡  ♥♡ ♡♡♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] == 4; }],
// put
//    ['♡♡ ♥♥♥', function(stack, heap, input, output){ return stack.length==0 && heap.length == 1 && heap[0] === 0; }],
//    ['   ♡♡♥♡♡ ♥♥♥', function(stack, heap, input, output){ return stack.length==0 && heap.length == 1 && heap[0] === 3; }],
//    ['   ♡ ♡♥   ♡♡♥♡♡ ♥♥♥', function(stack, heap, input, output){ return stack.length==0 && heap.length == 6 && heap[5] === 3; }],
// get
//    ['♡♡♡♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] === 0; }],
//    ['   ♡ ♡♥♡♡♡♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] === 0; }],
//    ['   ♡♡♥   ♡ ♡♥♡♡    ♡♡♥♡♡♡♥♥♥', function(stack, heap, input, output){ return stack.length==1 && stack[0] === 5; }],
// putc
//    ['♡♥  ♥♥♥', function(stack, heap, input, output){ console.log('out',output.length,output); return stack.length==0 && output == '\x00'; }], // works properly but you cant put \0 in <pre>.innerHTML's :/
//    ['   ♡ ♡♥♡♥  ♥♥♥', function(stack, heap, input, output){ console.log('out',output.length,output); return stack.length==0 && output == '\x05'; }],
// putn
//    ['♡♥ ♡♥♥♥', function(stack, heap, input, output){ console.log('out',output); return stack.length==0 && output == '0'; }],
//    ['   ♡ ♡♥♡♥ ♡♥♥♥', function(stack, heap, input, output){ console.log('out',output); return stack.length==0 && output == '5'; }],
// getc
//    ['♡♥♡ ♥♥♥', function(stack, heap, input, output){ return stack.length==0 && input == '5' && heap.length == 1 && heap[0] == 50; }],
//    ['   ♡♡♥♡♥♡ ♥♥♥', function(stack, heap, input, output){ return stack.length==0 && input == '5' && heap.length == 4 && heap[3] == 50; }],
// getn
//    ['♡♥♡♡♥♥♥', function(stack, heap, input, output){ return stack.length==0 && input == '' && heap.length == 1 && heap[0] == 25; }],
//    ['   ♡♡♥♡♥♡♡♥♥♥', function(stack, heap, input, output){ console.log(heap); return stack.length==0 && input == '' && heap.length == 4 && heap[3] == 25; }],
// all
    ['   ♡ ♡♥ ♡  ♡♡♥   ♡♥ ♡  ♡♡♥   ♡♥   ♡ ♥ ♡  ♡♡♥   ♡♥   ♡ ♥   ♡♡♥ ♡  ♡♡♥ ♡♥ ♡ ♥   ♡ ♡♥ ♡♥ ♡ ♥   ♡ ♡♥   ♡♡♥ ♡♥ ♡ ♥   ♡ ♡♥   ♡♥   ♡♡♥ ♡♥ ♡ ♥   ♡ ♡♥   ♡♡♡♥   ♡♥   ♡♡♥ ♡♥ ♡ ♥♥   ♡♥♥ ♡ ♡♥♥   ♡♥♥ ♡ ♡♡♥♥♥♥♥   ♡♡♥♥♡♥♥ ♥ ♡♥♥   ♡♥   ♡♥♥♡  ♡♥♥   ♡♥    ♥♥♡  ♡♥♥   ♡♥  ♡♡♥♥♡  ♡♥♥   ♡♥   ♡♥♥♡♡ ♡♥♥   ♡♥    ♥♥♡♡ ♡♥♥   ♡♥  ♡♡♥♥♡♡ ♡♥♥   ♡♥ ♥    ♡ ♡♥ ♥  ♥♡   ♡ ♡♥ ♥♡   ♡♡♥   ♡ ♡♥ ♥♡ ♥♥   ♡ ♡♥ ♥♥♡      ♡♡  ♥♡      ♡♡  ♥   ♡  ♥♡   ♡  ♡   ♡♡  ♥♡  ♡   ♡♡  ♥   ♡  ♥♡  ♡♡  ♥   ♡♡  ♥♡  ♥   ♡♡  ♥   ♡  ♥♡  ♥♡ ♡    ♡♡  ♥♡ ♡    ♡♡  ♥   ♡  ♥♡ ♡    ♡  ♥   ♡♡  ♥♡ ♡ ♡ ♡♡   ♡♡  ♥♡ ♡♡   ♡♡  ♥   ♡  ♥♡ ♡♡♡♡    ♡♡♥♡♡    ♡ ♡♥   ♡♡♥♡♡ ♡♡♡   ♡ ♡♥♡♡♡   ♡♡♥   ♡ ♡♥♡♡    ♡♡♥♡♡♡♡♥     ♡ ♡♥♡♥  ♡♥ ♡   ♡ ♡♥♡♥ ♡♡♥♡    ♡♡♥♡♥♡ ♡♥♡♡   ♡♡♥♡♥♡♡',
				function(stack, heap, input, output){ return stack.length==0 && input == '' && heap.length == 4 && heap[3] == 25; }],


	].map(function(o){
	  return o[1].apply(null, go(o[0], '25')); 
	}));
}

function go(test, input){

var a,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y,z,A,B,C,D,E,Z;

A="children"
B="replace"
C="length"
D="value"
E="innerHTML"
s=String
y=parseInt
b[E] = 'in<input><p>go</p>out<pre></pre><textarea>'
Z=b[A]

var names=[
	'PUSH',
	'COPY',
	'SLICE',
	'CALL',
	'JUMP',
	'JZERO',
	'JNEG',
	
	'MARK',
	
	'DUP',
	'SWAP',
	'POP',
	'RET',
	'EOF',
	'ADD',
	'SUB',
	'MUL',
	'DIV',
	'MOD',
	'PUT',
	'GET',
	'PUTC',
	'PUTN',
	'GETC',
	'GETN'
];

function f(s){ v = s[B](/\n/g,'♥')[B](/	/g,'♡'); }

// hello world
f('   	♥♥   	     		♥ ♥ 	♥ 	   	 	 ♥	♥     	♥	    ♥    	 		♥	  	♥	  	    	 	♥♥ ♥ 	     		♥♥   	    	 	♥ ♥♥♥♥♥')
Z[3][D] = v
// ask for name and print it
f('♥    ♥   ♡ ♡    ♥♡♡    ♡♥   ♡♡ ♡♡  ♥♡♡    ♡ ♥   ♡♡  ♡ ♡♥♡♡    ♡♡♥   ♡♡    ♡♥♡♡    ♡  ♥   ♡♡♡  ♡♡♥♡♡    ♡ ♡♥   ♡♡  ♡ ♡♥♡♡    ♡♡ ♥   ♡     ♥♡♡    ♡♡♡♥   ♡♡  ♡ ♡♥♡♡    ♡   ♥   ♡♡ ♡♡♡ ♥♡♡    ♡  ♡♥   ♡♡♡ ♡  ♥♡♡    ♡ ♡ ♥   ♡♡  ♡ ♡♥♡♡    ♡ ♡♡♥   ♡♡♡  ♡ ♥♡♡    ♡♡  ♥   ♡     ♥♡♡    ♡♡ ♡♥   ♡♡♡♡  ♡♥♡♡    ♡♡♡ ♥   ♡♡ ♡♡♡♡♥♡♡    ♡♡♡♡♥   ♡♡♡ ♡ ♡♥♡♡    ♡    ♥   ♡♡♡  ♡ ♥♡♡    ♡   ♡♥   ♡     ♥♡♡    ♡  ♡ ♥   ♡♡ ♡♡♡ ♥♡♡    ♡  ♡♡♥   ♡♡    ♡♥♡♡    ♡ ♡  ♥   ♡♡ ♡♡ ♡♥♡♡    ♡ ♡ ♡♥   ♡♡  ♡ ♡♥♡♡    ♡ ♡♡ ♥   ♡♡♡ ♡ ♥♡♡    ♡ ♡♡♡♥   ♡     ♥♡♡    ♡♡   ♥    ♥♡♡    ♡♡♡♡ ♥   ♡  ♡   ♥♡♡    ♡♡♡♡♡♥   ♡♡  ♡ ♡♥♡♡    ♡     ♥   ♡♡ ♡♡  ♥♡♡    ♡    ♡♥   ♡♡ ♡♡  ♥♡♡    ♡   ♡ ♥   ♡♡ ♡♡♡♡♥♡♡    ♡   ♡♡♥   ♡     ♥♡♡    ♡  ♡  ♥    ♥♡♡     ♥♥ ♡ ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡♥   ♡♡  ♡  ♥♥ ♡ ♡♡♡  ♡  ♡♡  ♡ ♡ ♡♡    ♡ ♡♡  ♡  ♥   ♡♡♡♡ ♥♥ ♡ ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡♥   ♡♡  ♡  ♥♥ ♡ ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡♥♥ ♡ ♡♡ ♡♡♡  ♡♡  ♡ ♡ ♡♡♡ ♡♡♡ ♡♡ ♡♡   ♡♡ ♡  ♡ ♡♡ ♡♡♡  ♡♡  ♡ ♡♥♥♥♥♥   ♡♡    ♡ ♡♡  ♡   ♡♡  ♡  ♥♡   ♥♡♥♥   ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡♥ ♥ ♡♡♡ ♥ ♥♡  ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡ ♡ ♡♡♡♡♡ ♡♡  ♡ ♡ ♡♡ ♡♡♡  ♡♡  ♡  ♥♡♥     ♡♥♡   ♥ ♥ ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡♥♥   ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡ ♡ ♡♡♡♡♡ ♡♡  ♡ ♡ ♡♡ ♡♡♡  ♡♡  ♡  ♥ ♥♥ ♥♥♥♡♥♥   ♡♡♡  ♡  ♡♡  ♡ ♡ ♡♡    ♡ ♡♡  ♡  ♥ ♥  ♥ ♡♥♡ ♡♡♡ ♥    ♡ ♡ ♥♡  ♡♥♡  ♡♡♡  ♡  ♡♡  ♡ ♡ ♡♡    ♡ ♡♡  ♡   ♡ ♡♡♡♡♡ ♡♡  ♡ ♡ ♡♡ ♡♡♡  ♡♡  ♡  ♥ ♥♥   ♡♥♡   ♥ ♥ ♡♡♡  ♡  ♡♡  ♡ ♡ ♡♡    ♡ ♡♡  ♡  ♥♥   ♡♡♡  ♡  ♡♡  ♡ ♡ ♡♡    ♡ ♡♡  ♡   ♡ ♡♡♡♡♡ ♡♡  ♡ ♡ ♡♡ ♡♡♡  ♡♡  ♡  ♥ ♥♥   ♡♥♡       ♥♡♡ ♥♡♥♥   ♡♡ ♡♡♡  ♡♡  ♡ ♡ ♡♡♡ ♡♡♡ ♡♡ ♡♡   ♡♡ ♡  ♡ ♡♡ ♡♡♡  ♡♡  ♡ ♡♥   ♡ ♡ ♥   ♡♡ ♡♥♡♥  ♡♥  ♥♡♥')
Z[3][D] = v
// fib
f('   ♡  ♡   ♥♡♥     ♡♡ ♡♡♡♡♥♡♥     ♡♡♡ ♡♡♡♥♡♥     ♡     ♥♡♥     ♡♡ ♡♡ ♡♥♡♥     ♡♡    ♡♥♡♥     ♡♡ ♡♡♡ ♥♡♥     ♡♡♡♡  ♡♥♡♥     ♡♡♡♡♡♡♥♡♥     ♡     ♥♡♥     ♡ ♥♡♥♡♡    ♥   ♡♥ ♥ ♡♥ ♡   ♡ ♡ ♥♡♥  ♥  ♡♥ ♥    ♡♥ ♥♡♡♡ ♡      ♡♥♡♡♡ ♥♡ ♥ ♡♥ ♡   ♡ ♡ ♥♡♥     ♡ ♥♡♡♡   ♡♥♡  ♡ ♥    ♡ ♥ ♥♡♡♡ ♥♡♡♡ ♥♥ ♥♡♥♥  ♡ ♥♥')
Z[3][D] = v
Z[3][D] = test
Z[0][D] = input

return Z[1].onclick = function(){
	c = Z[0][D]
	f('  | 	 | 	♥|♥ 	|♥ ♥|♥	 |♥		|♥  | ♥ | ♥	| ♥♥|♥	♥|♥♥♥|	   |	  	|	  ♥|	 	 |	 		|		 |			|	♥  |	♥ 	|	♥	 |	♥		')
	n = v
	e = RegExp(n,z='g'),
	a = {};
	n = n.split('|');
	for (m in n) a[n[m]] = +m;
	f(Z[3][D])
	d = Z[3][D] = v[B](/[^ ♡♥]+/g, '');
	h = i = [];
	with(i) while(h<d[C]){
		console.log(h, d.length, d.slice(h,10))
		e.lastIndex = h; // regex is global, exec will start searching at pc position
		j = e.exec(d)[0];
		h += j[C];
		m = a[j];
		m<8 ?
			(
				p = /[10]+/.exec(d.slice(++h)[B](/ /g,0)[B](/♡/g,1))[0],
				q = (d[h-1]==' '?1:-1) * y(p, 2),
				console.log(names[m], q),
				h += p[C] + 1,
				m == 7 ? a[q] = length : push(m, q)
			)
		: console.log(names[m])&push(m);

		k=pop.bind(o = []);
		l=push.bind(o);
	}

	r = [h = t = []];
	console.warn("start");
	T='n=k(m=k()|0)|0,'
	while (h<i[C]) (
	 console.log(
	   Number(h),
		 i[Number(h)],
		 names[i[Number(h)]], 
		 (i[h]|0)<=7?('next:'+ i[h+1]):'', 
		 'stack',o.slice(0), 
		 'heap',t.slice(0).map(function(n){ return n+'('+(String.fromCharCode(n)||'♡')+')'; }).join('')
	 ), 
	 eval(
		// CANNOT CONTAIN A 'g'! it is the delimiter
		(
		  'l(i[h++])g'+ // push
			'l(o[o[C]-i[h++]]|0)g'+ // copy
      'm=Math.min(i[h++],o[C]-1),o.splice(-m-1,m)g'+ // slice
      'r.push(h),h=a[i[h]]g'+ // call
      'h=a[i[h]]g'+ // jump
      'k()?++h:h=a[i[h]]g'+ // jzero
			'k()<0?h=a[i[h]]:++hg'+ // neg
      'g'+ // mark
      'l(o[o[C]-1]|0)g'+ // dup
      'l(k()|0,k()|0)g'+ // swap
      'k()g'+ // pop
      'h=r.pop()+1g'+ // ret
      'h=d[C]g'+ // eof
      ''+T+'l(m+n)g'+ // add
      ''+T+'l(m-n)g'+ // sub
      ''+T+'l(m*n)g'+ // mul
      ''+T+'l(Math.round(m/n))g'+ // div
      ''+T+'l(m%n)g'+ // mod
      't[k(m=k())|0]=m|0g'+ // put
      'l(t[k()]|0)g'+ // get
      '(Z[2][E]+=s.fromCharCode(k()|0)),console.warn("wtf",Z[2][E][C])g'+ // putc
      'Z[2][E]+=k()|0g'+ // putn
      't[k()|0]=c.charCodeAt(0),c=c.slice(1)g'+ // getc
		  't[k()|0]=(m=y(c,10)),c=c.slice(c.indexOf(m)+s(m)[C])' // getn
		)
		.split(z)
		[i[h++]]
	 )
	);

return [o, t, c, Z[2][E], a, r];
}()

};