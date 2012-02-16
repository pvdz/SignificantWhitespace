var a,c,d,e,f,h,i,j,m,n,o,p,q,r,t,u,v,x,y,z,A,B,C,D,E,F,G,H,M,Z;
//var names=[
//	'PUSH',
//	'COPY',
//	'SLICE',
//	'CALL',
//	'JUMP',
//	'JZERO',
//	'JNEG',
//	
//	'MARK',
//	
//	'DUP',
//	'SWAP',
//	'POP',
//	'RET',
//	'EOF',
//	'ADD',
//	'SUB',
//	'MUL',
//	'DIV',
//	'MOD',
//	'PUT',
//	'GET',
//	'PUTC',
//	'PUTN',
//	'GETC',
//	'GETN'
//];
b.innerHTML = 'in<input><p>go</p>out<pre></pre><textarea>'

f=function(s){ v = s.replace(/\n|/g,'♥').replace(/	/g,'♡'); }

// 1~10
f('   	   	     		  	 	   	 	 	     		        	 			  		  	    	 	  	     		   	    	 	 ')
// ask for name and print it
//f('♥    ♥   ♡ ♡    ♥♡♡    ♡♥   ♡♡ ♡♡  ♥♡♡    ♡ ♥   ♡♡  ♡ ♡♥♡♡    ♡♡♥   ♡♡    ♡♥♡♡    ♡  ♥   ♡♡♡  ♡♡♥♡♡    ♡ ♡♥   ♡♡  ♡ ♡♥♡♡    ♡♡ ♥   ♡     ♥♡♡    ♡♡♡♥   ♡♡  ♡ ♡♥♡♡    ♡   ♥   ♡♡ ♡♡♡ ♥♡♡    ♡  ♡♥   ♡♡♡ ♡  ♥♡♡    ♡ ♡ ♥   ♡♡  ♡ ♡♥♡♡    ♡ ♡♡♥   ♡♡♡  ♡ ♥♡♡    ♡♡  ♥   ♡     ♥♡♡    ♡♡ ♡♥   ♡♡♡♡  ♡♥♡♡    ♡♡♡ ♥   ♡♡ ♡♡♡♡♥♡♡    ♡♡♡♡♥   ♡♡♡ ♡ ♡♥♡♡    ♡    ♥   ♡♡♡  ♡ ♥♡♡    ♡   ♡♥   ♡     ♥♡♡    ♡  ♡ ♥   ♡♡ ♡♡♡ ♥♡♡    ♡  ♡♡♥   ♡♡    ♡♥♡♡    ♡ ♡  ♥   ♡♡ ♡♡ ♡♥♡♡    ♡ ♡ ♡♥   ♡♡  ♡ ♡♥♡♡    ♡ ♡♡ ♥   ♡♡♡ ♡ ♥♡♡    ♡ ♡♡♡♥   ♡     ♥♡♡    ♡♡   ♥    ♥♡♡    ♡♡♡♡ ♥   ♡  ♡   ♥♡♡    ♡♡♡♡♡♥   ♡♡  ♡ ♡♥♡♡    ♡     ♥   ♡♡ ♡♡  ♥♡♡    ♡    ♡♥   ♡♡ ♡♡  ♥♡♡    ♡   ♡ ♥   ♡♡ ♡♡♡♡♥♡♡    ♡   ♡♡♥   ♡     ♥♡♡    ♡  ♡  ♥    ♥♡♡     ♥♥ ♡ ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡♥   ♡♡  ♡  ♥♥ ♡ ♡♡♡  ♡  ♡♡  ♡ ♡ ♡♡    ♡ ♡♡  ♡  ♥   ♡♡♡♡ ♥♥ ♡ ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡♥   ♡♡  ♡  ♥♥ ♡ ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡♥♥ ♡ ♡♡ ♡♡♡  ♡♡  ♡ ♡ ♡♡♡ ♡♡♡ ♡♡ ♡♡   ♡♡ ♡  ♡ ♡♡ ♡♡♡  ♡♡  ♡ ♡♥♥♥♥♥   ♡♡    ♡ ♡♡  ♡   ♡♡  ♡  ♥♡   ♥♡♥♥   ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡♥ ♥ ♡♡♡ ♥ ♥♡  ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡ ♡ ♡♡♡♡♡ ♡♡  ♡ ♡ ♡♡ ♡♡♡  ♡♡  ♡  ♥♡♥     ♡♥♡   ♥ ♥ ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡♥♥   ♡♡♡ ♡♡♡ ♡♡♡  ♡  ♡♡ ♡  ♡ ♡♡♡ ♡   ♡♡  ♡ ♡ ♡ ♡♡♡♡♡ ♡♡  ♡ ♡ ♡♡ ♡♡♡  ♡♡  ♡  ♥ ♥♥ ♥♥♥♡♥♥   ♡♡♡  ♡  ♡♡  ♡ ♡ ♡♡    ♡ ♡♡  ♡  ♥ ♥  ♥ ♡♥♡ ♡♡♡ ♥    ♡ ♡ ♥♡  ♡♥♡  ♡♡♡  ♡  ♡♡  ♡ ♡ ♡♡    ♡ ♡♡  ♡   ♡ ♡♡♡♡♡ ♡♡  ♡ ♡ ♡♡ ♡♡♡  ♡♡  ♡  ♥ ♥♥   ♡♥♡   ♥ ♥ ♡♡♡  ♡  ♡♡  ♡ ♡ ♡♡    ♡ ♡♡  ♡  ♥♥   ♡♡♡  ♡  ♡♡  ♡ ♡ ♡♡    ♡ ♡♡  ♡   ♡ ♡♡♡♡♡ ♡♡  ♡ ♡ ♡♡ ♡♡♡  ♡♡  ♡  ♥ ♥♥   ♡♥♡       ♥♡♡ ♥♡♥♥   ♡♡ ♡♡♡  ♡♡  ♡ ♡ ♡♡♡ ♡♡♡ ♡♡ ♡♡   ♡♡ ♡  ♡ ♡♡ ♡♡♡  ♡♡  ♡ ♡♥   ♡ ♡ ♥   ♡♡ ♡♥♡♥  ♡♥  ♥♡♥')
// fib
//f('   ♡  ♡   ♥♡♥     ♡♡ ♡♡♡♡♥♡♥     ♡♡♡ ♡♡♡♥♡♥     ♡     ♥♡♥     ♡♡ ♡♡ ♡♥♡♥     ♡♡    ♡♥♡♥     ♡♡ ♡♡♡ ♥♡♥     ♡♡♡♡  ♡♥♡♥     ♡♡♡♡♡♡♥♡♥     ♡     ♥♡♥     ♡ ♥♡♥♡♡    ♥   ♡♥ ♥ ♡♥ ♡   ♡ ♡ ♥♡♥  ♥  ♡♥ ♥    ♡♥ ♥♡♡♡ ♡      ♡♥♡♡♡ ♥♡ ♥ ♡♥ ♡   ♡ ♡ ♥♡♥     ♡ ♥♡♡♡   ♡♥♡  ♡ ♥    ♡ ♥ ♥♡♡♡ ♥♡♡♡ ♥♥ ♥♡♥♥  ♡ ♥♥')
// all test
//f('   ♡ ♡♥ ♡  ♡♡♥   ♡♥ ♡  ♡♡♥   ♡♥   ♡ ♥ ♡  ♡♡♥   ♡♥   ♡ ♥   ♡♡♥ ♡  ♡♡♥ ♡♥ ♡ ♥   ♡ ♡♥ ♡♥ ♡ ♥   ♡ ♡♥   ♡♡♥ ♡♥ ♡ ♥   ♡ ♡♥   ♡♥   ♡♡♥ ♡♥ ♡ ♥   ♡ ♡♥   ♡♡♡♥   ♡♥   ♡♡♥ ♡♥ ♡ ♥♥   ♡♥♥ ♡ ♡♥♥   ♡♥♥ ♡ ♡♡♥♥♥♥♥   ♡♡♥♥♡♥♥ ♥ ♡♥♥   ♡♥   ♡♥♥♡  ♡♥♥   ♡♥    ♥♥♡  ♡♥♥   ♡♥  ♡♡♥♥♡  ♡♥♥   ♡♥   ♡♥♥♡♡ ♡♥♥   ♡♥    ♥♥♡♡ ♡♥♥   ♡♥  ♡♡♥♥♡♡ ♡♥♥   ♡♥ ♥    ♡ ♡♥ ♥  ♥♡   ♡ ♡♥ ♥♡   ♡♡♥   ♡ ♡♥ ♥♡ ♥♥   ♡ ♡♥ ♥♥♡      ♡♡  ♥♡      ♡♡  ♥   ♡  ♥♡   ♡  ♡   ♡♡  ♥♡  ♡   ♡♡  ♥   ♡  ♥♡  ♡♡  ♥   ♡♡  ♥♡  ♥   ♡♡  ♥   ♡  ♥♡  ♥♡ ♡    ♡♡  ♥♡ ♡    ♡♡  ♥   ♡  ♥♡ ♡    ♡  ♥   ♡♡  ♥♡ ♡ ♡ ♡♡   ♡♡  ♥♡ ♡♡   ♡♡  ♥   ♡  ♥♡ ♡♡♡♡    ♡♡♥♡♡    ♡ ♡♥   ♡♡♥♡♡ ♡♡♡   ♡ ♡♥♡♡♡   ♡♡♥   ♡ ♡♥♡♡    ♡♡♥♡♡♡♡♥     ♡ ♡♥♡♥  ♡♥ ♡   ♡ ♡♥♡♥ ♡♡♥♡    ♡♡♥♡♥♡ ♡♥♡♡   ♡♡♥♡♥♡♡')
//b.children[0].value='js1k'

b.children[3].value = v

b.children[1].onclick = function(s){
	c = b.children[0].value
	f('  | 	 | 	| 	| |	 |		|  |  | 	| |	||	   |	  	|	  |	 	 |	 		|		 |			|	  |	 	|		 |			')
	e = RegExp(n=v,z='g'),
	a = {},
	n = n.split('|');
	for (m in n) a[n[m]] = +m;
	f(b.children[3].value)
	d = b.children[3].value = v.replace(/[^ ♡♥]+/g, '');
	h = i = [];
	while(h<d.length){
//		console.log(h, d.length, d.slice(h,10))
		e.lastIndex = h;
		j = e.exec(d)[0];
		h += j.length;
		m = a[j];
		m<8 ?
			(
				p = /[10]+♥/.exec(d.slice(++h).replace(/ /g,0).replace(/♡/g,1))[0],
				q = (d[h-1]==' '?1:-1) * parseInt(p, 2),
//				console.log(names[m], q),
				h += p.length,
				m == 7 ? a[q] = i.length : i.push(m, q)
			)
		:
//		console.log(names[m]) ||
		i.push(m)
	}

	r = [h = t = []];
	o = []
	while (h<i.length) 
//	 console.log(
//	  Number(h),
//	  i[Number(h)],
//	  names[i[Number(h)]], 
//	  (i[h]|0)<=7?('next:'+ i[h+1]):'', 
//	  'stack',o.slice(0), 
//	  'heap',t.slice(0).map(function(n){ return n+'('+(String.fromCharCode(n)||'♡')+')'; }).join('')
////	  ,i.slice(h,h+5)
//	 ),
		[
			function(s){o.push(i[h++])}, // push
			function(s){o.push(o[o.length-i[h++]]|0)}, // copy
			function(s){
				// either is fine...
//				m=Math.min(i[h++]+1,o.length);
				m=((i[h++]+1)<o.length?i[h-1]+1:o.length);
				
				o.splice(-m, m-1)
			}, // slice
			function(s){r.push(h),h=a[i[h]]}, // call
			function(s){h=a[i[h]]}, // jump
			function(s){o.pop()?++h:h=a[i[h]]}, // jzero
			function(s){o.pop()<0?h=a[i[h]]:++h}, // neg
			, // mark
			function(s){o.push(o[o.length-1]|0)}, // dup
			function(s){o.push(o.pop()|0,o.pop()|0)}, // swap
			function(s){o.pop()}, // pop
			function(s){h=r.pop()+1}, // ret
			function(s){(h=d.length)}, // eof
			function(s){n=o.pop(m=o.pop()|0)|0,o.push(m+n)}, // add
			function(s){n=o.pop(m=o.pop()|0)|0,o.push(m-n)}, // sub
			function(s){n=o.pop(m=o.pop()|0)|0,o.push(m*n)}, // mul
			function(s){n=o.pop(m=o.pop()|0)|0,o.push(Math.round(m/n))}, // div
			function(s){n=o.pop(m=o.pop()|0)|0,o.push(m%n)}, // mod
			function(s){t[o.pop(m=o.pop())|0]=m|0}, // put
			function(s){o.push(t[o.pop()]|0)}, // get
			function(s){b.children[2].innerHTML+=String.fromCharCode(o.pop()|0)}, // putc
			function(s){b.children[2].innerHTML+=o.pop()|0}, // putn
			function(s){t[o.pop()|0]=c.charCodeAt(0),c=c.slice(1)}, // getc
			function(s){t[o.pop()|0]=(m=parseInt(c,10)),c=c.slice(c.indexOf(m)+String(m).length)} // getn
		]
		[i[h++]]()

//return [o, t, c, b.children[2].innerHTML, a, r];
}

