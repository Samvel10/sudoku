let array = [];
let start_cout=0;
let level_a = null;
let count = 0;
let Hayk = 0;
let size = 9;
let wrong = 0;
let array_num = [];
for(let d = 0; d<size; d++){
	array_num[d]=0;
}
let address = null;
document.write("<div class='flex'>");
document.write("<div>");
document.write("<div class='flex'>");
document.write("<button onclick='start(1, this)'>easy</button>");
document.write("<button onclick='start(2, this)'>middle</button>");
document.write("<button onclick='start(3, this)'>high</button>");
document.write("<button onclick='start(4, this)'>impossible</button>");
document.write("</div>");
document.write("<table>");
for(let i=0; i<size; i++){
    document.write("<tr>");
    for(let j=0; j<size; j++){
    	document.write("<td class='datark'  onclick='chose(this)'  id='"+i+"_"+j+"'></td>");
    }
    document.write("</tr>");
}
document.write("</table>");
document.write("<div class='flex' id='numb'>");
for(let i=1; i<=size; i++){
    document.write("<h2 class='num' onclick='hair(this)'>"+i+"</h2>");
}
document.write("</div>");
document.write("</div>");
document.write("<div id='right'>");
document.write("<h2 style='margin-left: 20px;'>Enter Name</h2>");
document.write("<input type='text' id='name' placeholder='Your name...'>");
document.write("<h3 id='TIME'>Time: 00 min 00 sec 000 mil</h3>");
document.write("<h3 id='wrong'>wrong: 0</h3>");
document.write("<div id='re'");
document.write("<h2>Records</h2>");
document.write("<hr>");
document.write("</div>");

document.write("</div>");
document.write("</div>");

for(let a=0; a<size; a++){
	array[a] = [];
	for(let b=0; b<size; b++){
		array[a][b] = 0;
	}
}
let level = "easy";

function print(){
	for(let a=0; a<size; a++){
		let s = "";
		for(let b=0; b<size; b++){
			s += array[a][b]+" ";
		}
		console.log(s);
	}
}

let minute=0;
let second=0;
let mil=0;
let timer;
let value=0;
let name;
function time(){
	let y=document.getElementById('TIME');
	let ee=document.getElementById("name");
	name=ee.value;
	timer = setInterval(() => {
		if(second===60){
			minute++;
			second=0;
		}
		if (mil==100) {
			mil=0;
			second++;
		}
		if (second<10) {
			if (mil<10) {
				y.innerHTML = `Time: 0${minute} min 0${second} sec 00${mil++} mil`;
			}else  {
				y.innerHTML = `Time: 0${minute} min 0${second} sec 0${mil++} mil`;
			}
		}else{
			if (mil<10) {
				y.innerHTML = `Time: 0${minute} min ${second} sec 00${mil++} mil`;
			}else  {
				y.innerHTML = `Time: 0${minute} min ${second} sec 0${mil++} mil`;
			}
		}
		
	}, 10);
}

function check(row, col, g){
	let number = Math.floor(Math.random() * 9) + 1;
	for(let f = 0; f<g.length; f++){
		if (g[f]===number) {
			return check(row, col, g);
		}
	}
	g.push(number);
	let temp = true;
	for(let a=0; a<size; a++){
		if (array[row][a]===number || array[a][col]===number) {
			temp = false;
			break;
		}
	}

	if (temp) {
		let r;
		let c;
		if (row%3===0) {
			r = row; 
		}else if ((row-1) % 3===0) {
			r = row-1;
		}else{
			r = row-2;
		}
		if (col%3===0) {
			c = col; 
		}else if ((col-1) % 3===0) {
			c = col-1;
		}else{
			c = col-2;
		}

		for(let a = r; a<r+3; a++){
			for(let b = c; b<c+3; b++){
				if (array[a][b]!=null) {
					if (array[a][b]===number) {
						temp = false;
						break;
					}
				}
					
			}
		}

	}

	if (temp) {
		return number;
	}else if (g.length === size) {
		Hayk++;
		return 0;
	}else{
		return check(row, col, g);
	}
}

function create(){
	for(let a=0; a<size; a++){
		for(let b=0; b<size; b++){
			array[a][b] = check(a, b, []);
			if (array[a][b]===0 && Hayk===3) {
				for(let i=a-1; i<size; i++){
					array[i] = [];
					for(let j=0; j<size; j++){
						array[i][j] = 0;		
					}
				}
				a-=1;
				b=-1;
				Hayk = 0;
			}else if (array[a][b]===0) {
				for(let h = 0; h<size; h++){
					array[a][h]=0;
				}
				b=-1;
			}
		}
	}
}

function start(k, j){
	let doc = document.getElementById("numb").children;
	for (let c of doc) {
	    c.className = "num";
	    c.onclick = function (event) {
	        event.preventDefault(); 
	        hair(this); 
	    };
	}

	count=0;
	if (level_a!=null) {
		level_a.className = "";
	}
	j.className = "temp1";
	level_a = j;
	for(let a=0; a<size; a++){
		array[a] = [];
		for(let b=0; b<size; b++){
			array[a][b] = 0;
		}
	}
	for(let a=0; a<size; a++){
		for(let b=0; b<size; b++){
			document.getElementById(a+'_'+b).innerHTML = "";
		}
	}
	create();	
	if (k===1) {
		for(let f = 0; f<size; f++){
			for(let b = 0; b<size; b++){
				let number = Math.floor(Math.random() * 9) + 1;
				if (number>4) {
					count++;
					document.getElementById(f+'_'+b).innerHTML = array[f][b];
					array_num[(array[f][b]-1)]++;
				}
			}
		}
	}else if (k===2) {
		for(let f = 0; f<size; f++){
			for(let b = 0; b<size; b++){
				let number = Math.floor(Math.random() * 9) + 1;
				if (number>5) {
					count++;
					document.getElementById(f+'_'+b).innerHTML = array[f][b];
					array_num[(array[f][b]-1)]++;
				}
			}
		}
	}else if(k===3){
		for(let f = 0; f<size; f++){
			for(let b = 0; b<size; b++){
				let number = Math.floor(Math.random() * 9) + 1;
				if (number>6) {
					count++;
					document.getElementById(f+'_'+b).innerHTML = array[f][b];
					array_num[(array[f][b]-1)]++;
				}
			}
		}
	}else{
		for(let f = 0; f<size; f++){
			for(let b = 0; b<size; b++){
				let number = Math.floor(Math.random() * 9) + 1;
				if (number>7) {
					count++;
					document.getElementById(f+'_'+b).innerHTML = array[f][b];
					array_num[(array[f][b]-1)]++;
				}
			}
		}
	}
	minute=0;
	second=0;
	mil=0;
	clearInterval(timer);
	time();
	console.log("----------------------");
	print();	
	console.log("----------------------");
}
function chose(a){
	if (a.innerHTML==="") {
		if (a === address) {
			a.className = "datark";
		}else{
			if (address!=null) {
				address.className = "datark";
			}
			address = a;
			a.className = "temp";
		}
			
	}
}

function hair(q){
	if (address!=null) {
		let a = address.id.split("_");
		if (array[parseInt(a[0])][parseInt(a[1])]===parseInt(q.innerHTML)) {
			address.innerHTML=q.innerHTML;
			address.className = "lime";
			count++;
			array_num[parseInt(q.innerHTML)-1]++;
			for(let h = 0; h<size; h++){
				if (array_num[h]===size) {
					let doc = document.getElementsByClassName("num");
					for(let c of doc){
						if (parseInt(c.innerHTML)===(h+1)) {
							c.className = "num_null";
							c.onclick= function (event) {};
						}
					}
					doc = document.getElementsByClassName("num");
					for(let c of doc){
						if (parseInt(c.innerHTML)===(h+1)) {
							c.className = "num_null";
							c.onclick= function (event) {};
						}
					}
				}
			}

			if (count === size*size) {
				clearInterval(timer);
				let y=document.getElementById('TIME');
				let iiii=document.getElementById("re");
				let qqqq=document.createElement("h2");
				if (name=="") {
					qqqq.innerHTML="no name: "+ y.innerHTML;
				}else{
					qqqq.innerHTML=name+": "+ y.innerHTML;
				}
				for(let f = 0; f<size; f++){
					for(let b = 0; b<size; b++){
						document.getElementById(f+'_'+b).className = "lime";
					}
				}
				iiii.appendChild(qqqq);
				document.getElementById("finish").play();
				setTimeout(function(){
					for(let f = 0; f<size; f++){
						for(let b = 0; b<size; b++){
							document.getElementById(f+'_'+b).className = "datark";
							document.getElementById(f+'_'+b).innerHTML = null;
						}
					}
					level_a.className = "";
					document.getElementById("wrong").innerHTML = "wrong: 0";
					wrong = 0;
					mil = 0;
					second = 0; 
					minute = 0;
					document.getElementById("TIME").innerHTML = `Time: 0${minute} min ${second} sec 0${mil++} mil`;
					let doc = document.getElementById("numb").children;
					for (let c of doc) {
					    c.className = "num";
					    c.onclick = function (event) {
					        event.preventDefault(); 
					        hair(this); 
					    };
					}
					doc = document.getElementById("numb").children;
					for (let c of doc) {
					    c.className = "num";
					    c.onclick = function (event) {
					        event.preventDefault(); 
					        hair(this); 
					    };
					}
					doc = document.getElementById("numb").children;
					for (let c of doc) {
					    c.className = "num";
					    c.onclick = function (event) {
					        event.preventDefault(); 
					        hair(this); 
					    };
					}
				},4000);
			}
			
			setTimeout(function(){
				address.className = "datark";
				address = null;
			}, 1000);
			
		}else{
			
			document.getElementById("wrong").innerHTML = "wrong: "+(++wrong);
			if (wrong===5) {
				clearInterval(timer);
				document.getElementById("wrong_a").play();
				wrong = 0;
				for(let a=0; a<size; a++){
					array[a] = [];
					for(let b=0; b<size; b++){
						array[a][b] = 0;
					}
				}
				for(let f = 0; f<size; f++){
					for(let b = 0; b<size; b++){
						document.getElementById(f+'_'+b).className = "red";
					}
				}
				
				
				setTimeout(function(){
					for(let f = 0; f<size; f++){
						for(let b = 0; b<size; b++){
							document.getElementById(f+'_'+b).innerHTML = null;
							document.getElementById(f+'_'+b).className = "datark";
						}
					}
					level_a.className = "";
					document.getElementById("wrong").innerHTML = "wrong: 0";
					wrong = 0;
					mil = 0;
					second = 0; 
					minute = 0;
					document.getElementById("TIME").innerHTML = `Time: 0${minute} min ${second} sec 0${mil++} mil`;
					let doc = document.getElementById("numb").children;
					for (let c of doc) {
					    c.className = "num";
					    c.onclick = function (event) {
					        event.preventDefault(); 
					        hair(this); 
					    };
					}
					doc = document.getElementById("numb").children;
					for (let c of doc) {
					    c.className = "num";
					    c.onclick = function (event) {
					        event.preventDefault(); 
					        hair(this); 
					    };
					}
					doc = document.getElementById("numb").children;
					for (let c of doc) {
					    c.className = "num";
					    c.onclick = function (event) {
					        event.preventDefault(); 
					        hair(this); 
					    };
					}
				}, 4000);
			}else{
				document.getElementById("fal").addEventListener("click", () => {
				  document.getElementById("fal").play()
				    .catch(err => console.error(err));
				});
				address.className = "red";
				address.innerHTML=q.innerHTML;
				setTimeout(function(){
					address.className = "datark";
					address.innerHTML="";
					address = null;
				}, 1000);

			}
			
		}
	}
}
