var a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,x,y,A,B,C,D,E,Z;

A="children"
B="replace"
C="length"
D="value"
E="innerHTML"
s=String
y=parseInt
b[E] = 'in<input><p>go</p>out<pre></pre><textarea>'
Z=b[A]

function f(s){ return s[B](/\n/g,'♥')[B](/	/g,'♡')[B](/ /g,'♦'); }

Z[3][D] = f('   	♥♥   	     		♥ ♥ 	♥ 	   	 	 ♥	♥     	♥	    ♥    	 		♥	  	♥	  	    	 	♥♥ ♥ 	     		♥♥   	    	 	♥ ♥♥♥♥♥')

Z[1].onclick = function(){
	c = f(Z[0][D]);
	n = f('  | 	 | 	♥|♥ 	|♥ ♥|♥	 |♥		|♥  | ♥ | ♥	| ♥♥|♥	♥|♥♥♥|	   |	  	|	  ♥|	 	 |	 		|		 |			|	♥  |	♥ 	|	♥	 |	♥		'),
	e = RegExp(n,'g'),
	a = {};
	n = n.split('|');
	for (m in n) a[n[m]] = +m;
	d = Z[3][D][B](/[^♦♡♥]+/g, g='');
	h = i = [];
	with(i) while(h<d[C]){
		e.lastIndex = h; // regex is global, exec will start searching at pc position
		j = e.exec(d)[0];
		h += j[C];
		m = a[j];
		m<8 ?
			(
				p = /[10]+/.exec(d.slice(++h)[B](/♦/g,0)[B](/♡/g,1))[0],
				q = (d[h-1]=='♦'?1:-1) * y(p, 2),
				h += p[C] + 1,
				m == 7 ? a[q] = length : push(m, q)
			)
		: push(m);

		k=pop.bind(o = []);
		l=push.bind(o);
	}
	
	r = [h = t = []];
	
	T='n=k(m=k()),'
	var counter = 0;
	while (h<i[C])
		(counter++>1000&&fail),
		x = i[h++],
		eval([
			'l(i[h++])',
			'l(o[i[h++]])',
			'o.splice(m=i[h++],o[C]-(m+1))',
			'r.push(h),h=a[i[h++]]',
			'h=a[i[h++]]',
			'k()?++h:h=a[i[h]]',
			'k()<0?h=a[i[h]]:++h',
			,
			'l(o[o[C]-1])',
			'l(k(m=k()),m)',
			'k()',
			'h=r.pop()',
			'h=d[C]',
			T+'l(m+n)',
			T+'l(m-n)',
			T+'l(m*n)',
			T+'l(m/n)',
			T+'l(m%n)',
			't[k(m=k())]=m',
			'l(t[k()])',
			'g+=s.fromCharCode(k())',
			'g+=k()',
			'l(c.charCodeAt(c=c.slice(1)))',
			'l(m=y(c,10,c=c.slice(s(m)[C])))'
		][x]);
		
	Z[2][E] = g;
}