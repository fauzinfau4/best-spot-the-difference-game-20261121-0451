const TAU=Math.PI*2;
const path=(c,pts,fill,stroke='#34251f',lw=3)=>{c.beginPath();c.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)c.lineTo(pts[i][0],pts[i][1]);c.closePath();c.fillStyle=fill;c.fill();if(stroke){c.lineWidth=lw;c.strokeStyle=stroke;c.stroke()}};
const rect=(c,x,y,w,h,fill,stroke='#34251f',lw=3)=>{c.fillStyle=fill;c.fillRect(x,y,w,h);if(stroke){c.lineWidth=lw;c.strokeStyle=stroke;c.strokeRect(x,y,w,h)}};
const circ=(c,x,y,r,fill,stroke='#34251f',lw=2)=>{c.beginPath();c.arc(x,y,r,0,TAU);c.fillStyle=fill;c.fill();if(stroke){c.lineWidth=lw;c.strokeStyle=stroke;c.stroke()}};
const line=(c,a,b,color='#34251f',lw=3)=>{c.beginPath();c.moveTo(...a);c.lineTo(...b);c.strokeStyle=color;c.lineWidth=lw;c.lineCap='round';c.stroke()};
function grain(c,seed=1){let n=seed|0;for(let i=0;i<65;i++){n=(n*1664525+1013904223)|0;const x=(n>>>0)%640;n=(n*1664525+1013904223)|0;const y=(n>>>0)%720;c.fillStyle=i%2?'#fff1c40b':'#100b0b0b';c.fillRect(x,y,2+(i%4),1)}}
function workshop(c,f){
 const w=!!f.windowStar, gear=!!f.gearTooth, hands=!!f.clockHands, tail=!!f.catTail, jar=!!f.extraJar, hammer=!!f.hammer, teapot=!!f.teapot;
 let g=c.createLinearGradient(0,0,0,720);g.addColorStop(0,'#76533c');g.addColorStop(.62,'#543a2d');g.addColorStop(1,'#352620');rect(c,0,0,640,720,g,null);
 rect(c,25,25,590,440,'#77533b','#31241f',8);for(let x=42;x<630;x+=40)line(c,[x,32],[x,456],'#c08b5338',2);for(let y=85;y<470;y+=44)line(c,[28,y],[612,y],'#281b1b42',2);
 // window, moon and stitched curtains
 rect(c,405,55,190,184,'#2a2e43','#382721',8);rect(c,416,66,168,162,'#1b2940','#d09a58',3);circ(c,540,110,27,w?'#e8d39a':'#f0d89c','none');if(w){for(let q=0;q<8;q++){const a=q*.785;line(c,[540+Math.cos(a)*35,110+Math.sin(a)*35],[540+Math.cos(a)*42,110+Math.sin(a)*42],'#ead8a3',2)}}for(let i=0;i<10;i++)circ(c,433+i*16,88+(i%3)*19,1.5,'#fff0cc','none');rect(c,398,47,18,202,'#a3543c','#4b2c27');path(c,[[405,54],[438,71],[428,203],[398,242]],'#9b533d');path(c,[[596,54],[568,72],[581,207],[611,242]],'#9b533d');
 // clock
 circ(c,176,145,86,'#bd8d50','#39271f',7);circ(c,176,145,70,'#ecd5a4','#5a3828',4);circ(c,176,145,5,'#613b28','none');for(let i=0;i<12;i++){let a=i*TAU/12-Math.PI/2;line(c,[176+Math.cos(a)*55,145+Math.sin(a)*55],[176+Math.cos(a)*63,145+Math.sin(a)*63],'#593c2b',3)}
 let h=hands?-.45:-1.25,m=hands?2.15:.6;line(c,[176,145],[176+Math.cos(h)*34,145+Math.sin(h)*34],'#392920',5);line(c,[176,145],[176+Math.cos(m)*50,145+Math.sin(m)*50],'#392920',3);
 rect(c,157,232,38,14,'#b98548');line(c,[176,244],[176,332],'#bd8d50',6);path(c,[[160,332],[192,332],[185,371],[167,371]],'#c28b47');circ(c,176,350,10,'#efd18f','#654023',3);
 // shelves and jars
 rect(c,45,280,265,17,'#40291f');rect(c,52,432,220,15,'#40291f');for(const [x,y,col] of [[62,239,'#769087'],[102,236,'#d5a967'],[246,392,'#809268'],[208,392,'#b36b51'],[130,238,'#b77359']]){rect(c,x,y,30,41,col,'#432b21',2);rect(c,x+7,y-7,16,8,'#c2a06a');line(c,[x+7,y+13],[x+23,y+13],'#f3dba977',2)}if(jar){rect(c,274,390,28,39,'#cfb576','#432b21',2);rect(c,280,383,15,7,'#9b7544')}
 // workbench and drawer fronts
 rect(c,37,493,570,37,'#98663d','#3c291e',4);rect(c,58,529,525,100,'#74492e','#35251f',4);for(let x=88;x<570;x+=115){rect(c,x,547,89,57,'#805334','#3c291e',3);circ(c,x+45,574,4,'#d2a366')};for(let x=50;x<86;x+=14)line(c,[x,630],[x-8,702],'#3e2a20',8);for(let x=557;x<595;x+=14)line(c,[x,630],[x+8,702],'#3e2a20',8);
 // gears / tools on bench
 for(const [x,y,r] of [[156,477,19],[205,481,13],[250,478,17]]){circ(c,x,y,r,'#c99a51','#563923',3);circ(c,x,y,5,'#65432c');for(let k=0;k<8;k++){let a=k*TAU/8;line(c,[x+Math.cos(a)*r*.68,y+Math.sin(a)*r*.68],[x+Math.cos(a)*r*1.12,y+Math.sin(a)*r*1.12],'#c99a51',5)}}if(gear)path(c,[[250,460],[256,463],[258,469],[253,474],[247,470],[246,465]],'#704b31','#704b31',1);
 // hanging tools
 line(c,[70,308],[70,344],'#d0aa71',3);path(c,[[60,344],[69,330],[78,344],[74,367],[64,367]],'#b97743');line(c,[102,310],[102,350],'#dfc08a',3);circ(c,102,355,9,'#b77d47');line(c,[300,305],[300,350],'#d8b879',3);path(c,[[286,350],[314,350],[309,365],[291,365]],hammer?'#5d4937':'#ac7143');line(c,[300,365],[300,405],'#8b5536',5);
 // cat asleep on oval rug
 c.beginPath();c.ellipse(392,605,154,59,0,0,TAU);c.fillStyle='#9a5940';c.fill();c.lineWidth=5;c.strokeStyle='#d3a166';c.stroke();for(let x=278;x<514;x+=24)line(c,[x,563],[x+15,574],'#e0b87666',2);
 circ(c,382,584,47,'#d69e63','#643e2b',3);circ(c,431,577,29,'#d69e63','#643e2b',3);path(c,[[413,558],[418,531],[433,551]],'#d69e63');path(c,[[440,554],[459,537],[458,565]],'#d69e63');line(c,[438,579],[449,579],'#4e3027',3);circ(c,445,573,2,'#30211d');
 if(tail){c.beginPath();c.moveTo(345,595);c.bezierCurveTo(297,594,307,545,340,557);c.strokeStyle='#d69e63';c.lineWidth=13;c.stroke()}else{c.beginPath();c.moveTo(346,599);c.bezierCurveTo(318,615,328,640,357,628);c.strokeStyle='#d69e63';c.lineWidth=13;c.stroke()}
 line(c,[416,598],[402,610],'#f3d9af',2);line(c,[421,600],[405,617],'#f3d9af',2);
 // teapot, cup and loose screwdriver
 circ(c,536,469,23,teapot?'#b85f44':'#d7b878','#463025',3);rect(c,521,447,30,7,'#e5cf9b');line(c,[557,466],[576,457],'#ddc58e',5);line(c,[515,466],[500,457],'#ddc58e',4);circ(c,582,484,12,'#e2c795');line(c,[72,478],[103,459],'#d0a45c',4);circ(c,72,478,5,'#d0a45c');grain(c,2);
}
function garden(c,f){
 const koirev=!!f.koi, lantern=!!f.lantern, bonsai=!!f.bonsai, flower=!!f.flower, cup=!!f.cup, bridge=!!f.bridge, stone=!!f.stone, leaf=!!f.leaf;
 const g=c.createLinearGradient(0,0,0,720);g.addColorStop(0,'#829b82');g.addColorStop(.48,'#b4b685');g.addColorStop(1,'#4b6f68');rect(c,0,0,640,720,g,null);
 rect(c,22,25,596,376,'#aec19a','#514332',7);for(let y=63;y<390;y+=38)line(c,[25,y],[615,y],'#5b674e33',2);for(let x=42;x<610;x+=54)line(c,[x,28],[x,399],'#65705333',2);
 // pond
 c.beginPath();c.ellipse(320,515,296,137,0,0,TAU);c.fillStyle='#477f81';c.fill();c.lineWidth=8;c.strokeStyle='#536344';c.stroke();for(let i=0;i<8;i++){c.beginPath();c.ellipse(87+i*67,500+(i%3)*32,26,8,-.2,0,TAU);c.strokeStyle='#c6d5a255';c.lineWidth=2;c.stroke()}
 // bridge
 path(c,[[160,468],[190,418],[459,418],[493,468],[470,484],[183,484]],bridge?'#835640':'#a06d49','#4d382a',4);for(let x=205;x<460;x+=34)line(c,[x,428],[x+6,468],'#d2a275',3);line(c,[183,419],[463,419],'#e4bd82',5);
 // fish, patches and bubbles
 const fish=(x,y,flip,color)=>{c.save();c.translate(x,y);if(flip)c.scale(-1,1);c.beginPath();c.ellipse(0,0,31,15,.05,0,TAU);c.fillStyle=color;c.fill();c.strokeStyle='#e3d5ad';c.lineWidth=2;c.stroke();path(c,[[-27,0],[-45,-14],[-42,0],[-45,14]],color,'#e3d5ad',2);circ(c,17,-3,2,'#272a27','none');c.restore()};fish(234,533,koirev,'#dc875b');fish(437,574,false,'#e7d49e');fish(350,500,true,'#bf6555');if(f.koiSpot)circ(c,236,533,5,'#fcdd99','none');
 // stepping stones
 for(const [x,y,r] of [[73,459,27],[121,423,24],[520,436,29],[568,468,24],[92,506,22]]){circ(c,x,y,r,stone&&x===520?'#8c8b7c':'#aaa38d','#565247',3);line(c,[x-r/2,y],[x+r/2,y-3],'#d9d0b688',2)}
 // tree trunk and flowering bonsai
 path(c,[[50,400],[92,275],[78,207],[121,126],[137,142],[112,225],[132,306],[105,405]],'#73523c','#4e3c2d',4);const clumps=[[85,136,52],[135,112,48],[66,179,40],[146,181,48],[100,227,49]];for(const [x,y,r]of clumps){circ(c,x,y,r,bonsai&&x===135?'#55805a':'#587a54','#415b43',3);for(let i=0;i<5;i++)circ(c,x-20+i*10,y-8+(i%2)*14,3,'#c5a66f','none')}
 // teahouse, lanterns
 rect(c,406,205,194,176,'#d6c69b','#554434',4);path(c,[[385,211],[500,127],[622,211]],'#704d38','#49362b',5);rect(c,429,241,54,137,'#563d32');rect(c,493,246,87,99,'#758677','#544437',3);line(c,[537,248],[537,344],'#d3bf91',3);line(c,[495,295],[579,295],'#d3bf91',3);
 const paper=(x,y,lit)=>{line(c,[x,y-44],[x,y-30],'#543d30',3);path(c,[[x-19,y-30],[x+19,y-30],[x+14,y+22],[x,y+34],[x-14,y+22]],lit?'#e8b96b':'#a55043','#483329',3);line(c,[x-13,y-5],[x+13,y-5],'#f2d7a2',2);if(lit){circ(c,x,y+1,7,'#ffe2a0','none')}};paper(328,205,lantern);paper(373,167,true);
 // bonsai pot and tea table
 rect(c,229,342,84,31,'#a65f43');path(c,[[218,340],[323,340],[306,385],[234,385]],'#a65f43','#50392c',3);line(c,[269,384],[269,422],'#654733',5);rect(c,213,420,116,10,'#936442');circ(c,266,393,18,'#dad0ab','#624b39',3);path(c,[[250,385],[280,385],[278,399],[252,399]],cup?'#c98756':'#f0e4c2','#6b5540',2);line(c,[280,389],[286,390],'#6b5540',2);
 // stone lantern, blooms, foliage
 rect(c,535,394,41,45,'#888575','#4e4b42',3);path(c,[[526,394],[585,394],[576,382],[536,382]],'#9b9881','#4e4b42',3);path(c,[[528,382],[555,361],[584,382]],'#8e8a78','#4e4b42',3);rect(c,548,406,15,15,'#e8c47b');rect(c,544,438,23,29,'#928d7d');for(const [x,y]of [[170,411],[183,400],[578,325],[595,341],[345,384]]){circ(c,x,y,7,flower&&x===183?'#c8dba3':'#ddad92','#79584a',1);circ(c,x,y,2,'#eddc9a','none')};for(let i=0;i<8;i++){let x=24+i*82;c.beginPath();c.ellipse(x,389+(i%2)*18,19,7,-.6,0,TAU);c.fillStyle=leaf&&i===3?'#749d66':'#557951';c.fill()}grain(c,3)
}
function observatory(c,f){
 const planet=!!f.planet, candle=!!f.candle, star=!!f.skylight, chart=!!f.chart, book=!!f.book, globe=!!f.globe, comet=!!f.comet, telescope=!!f.telescope, chartDot=!!f.chartDot, orb=!!f.orb;
 let g=c.createLinearGradient(0,0,0,720);g.addColorStop(0,'#263248');g.addColorStop(.7,'#354051');g.addColorStop(1,'#242731');rect(c,0,0,640,720,g,null);
 rect(c,22,24,596,389,'#3b4553','#20232a',8);for(let x=36;x<615;x+=42)line(c,[x,29],[x,409],'#b5bdc014',1);for(let y=70;y<410;y+=42)line(c,[26,y],[614,y],'#10141c55',2);
 // arched skylight with stars
 c.beginPath();c.moveTo(400,250);c.lineTo(400,104);c.quadraticCurveTo(508,5,610,104);c.lineTo(610,250);c.closePath();c.fillStyle='#111c31';c.fill();c.strokeStyle='#bc9762';c.lineWidth=9;c.stroke();for(let i=0;i<18;i++){const x=418+(i*47%177),y=90+(i*73%142);circ(c,x,y,i%4===0?2.5:1.5,'#fff0c9','none')};if(star){for(let a=0;a<8;a++){const ang=a*Math.PI/4;line(c,[510+Math.cos(ang)*10,139+Math.sin(ang)*10],[510+Math.cos(ang)*18,139+Math.sin(ang)*18],'#ffedbb',2)}}
 // wall maps
 rect(c,49,68,142,177,'#dfd1ae','#6a573e',4);for(let i=0;i<7;i++){let x=63+i*18;line(c,[x,79],[x+Math.sin(i)*18,229],'#637082',1)};c.beginPath();c.arc(121,147,43,0,TAU);c.strokeStyle='#9a7250';c.lineWidth=2;c.stroke();circ(c,chart?151:121,chart?121:147,4,'#bd7057');for(const [x,y]of [[77,100],[164,208],[100,201]])circ(c,x,y,3,'#b77957');if(chartDot)circ(c,151,121,7,'#bd7057');
 rect(c,220,73,129,158,'#bead8d','#675640',3);for(let i=0;i<5;i++){line(c,[232,91+i*25],[337,91+i*25],'#7d7564',2);circ(c,book?247+i*17:250+i*17,87+i*25,4,['#ad6353','#d0a35d','#718a83'][i%3])};
 // orbit model
 circ(c,284,319,53,'#252b39','#c5a26b',3);circ(c,284,319,4,'#d8bb78');c.beginPath();c.ellipse(284,319,68,24,.4,0,TAU);c.strokeStyle='#c5a26b';c.lineWidth=3;c.stroke();circ(c,284,267,10,'#dfa45f');circ(c,planet?351:340,319,8,'#78a5b2');circ(c,246,363,6,'#c7785c');line(c,[284,319],[284,385],'#c2a16b',4);rect(c,251,385,66,10,'#aa8152');
 // bookshelves
 rect(c,27,440,196,229,'#513c34','#1c1b1c',4);for(let y=487;y<661;y+=56){rect(c,34,y,182,7,'#a28058');for(let i=0;i<7;i++){let x=40+i*24,h=31+(i*13%17);rect(c,x,y-h,17,h,['#805b56','#62716e','#b18a57','#59637b'][i%4],'#342a29',1);line(c,[x+5,y-h+6],[x+12,y-h+6],'#eed5a555',1)}}
 // globe on stand
 circ(c,510,374,45,globe?'#6e99a1':'#637a82','#d0b076',4);c.beginPath();c.ellipse(510,374,17,44,.1,0,TAU);c.strokeStyle='#d0b076';c.lineWidth=2;c.stroke();line(c,[470,374],[550,374],'#d0b076',2);line(c,[510,419],[510,461],'#ac8758',4);path(c,[[480,464],[540,464],[550,478],[468,478]],'#926f4c','#483a31',3);
 // telescope on tripod
 line(c,[373,508],[425,351],'#c19b65',11);line(c,[393,518],[425,351],'#d0ae77',5);line(c,[459,523],[425,351],'#d0ae77',5);line(c,[411,397],[439,302],'#b98e58',19);line(c,[406,390],[436,294],'#e0bd7c',4);circ(c,439,296,13,'#273347','#c19a65',5);line(c,[397,427],[451,443],'#c19a65',5);if(telescope)line(c,[437,300],[456,290],'#f1d38e',4);
 // desk, comet chart, candles
 rect(c,222,555,393,30,'#745542','#332a29',4);rect(c,248,585,20,112,'#4e3b33');rect(c,570,585,20,112,'#4e3b33');rect(c,291,516,114,37,'#cfbd98','#544434',3);for(let i=0;i<4;i++)line(c,[301,524+i*7],[392,524+i*7],'#737680',1);if(comet){line(c,[324,526],[371,539],'#d78565',3);circ(c,324,526,4,'#f4d797')}
 for(const [x,lit]of [[477,candle],[527,true]]){rect(c,x,514,17,41,'#e3d2a6','#594539',2);path(c,[[x+4,514],[x+8,500],[x+13,514]],lit?'#ffd986':'#d69152','none');if(lit)circ(c,x+9,511,7,'#ffe6a4','none')}
 // small brass orrery gear and a chart roll
 circ(c,112,311,22,'#ad8957','#53402f',3);circ(c,112,311,6,'#32404c');for(let i=0;i<8;i++){let a=i*TAU/8;line(c,[112+Math.cos(a)*17,311+Math.sin(a)*17],[112+Math.cos(a)*27,311+Math.sin(a)*27],'#c9a86d',4)}
 rect(c,448,479,111,19,'#d1bf9c','#5b4b3d',2);circ(c,448,488,9,'#e1d1ad','#5b4b3d',2);if(orb)circ(c,350,267,4,'#f4d796');grain(c,4)
}
export const DIFFERENCES=[
 [{id:'clockHands',x:176,y:145,r:42,label:'Clock hands'}, {id:'windowStar',x:540,y:110,r:37,label:'Window sky'}, {id:'gearTooth',x:250,y:478,r:25,label:'Gear tooth'}, {id:'catTail',x:335,y:582,r:36,label:'Cat tail'}, {id:'extraJar',x:288,y:410,r:24,label:'Extra jar'}, {id:'hammer',x:300,y:354,r:24,label:'Hammer head'}, {id:'teapot',x:536,y:469,r:27,label:'Teapot glaze'}],
 [{id:'koi',x:234,y:533,r:42,label:'Koi direction'}, {id:'lantern',x:328,y:205,r:29,label:'Paper lantern'}, {id:'bonsai',x:135,y:112,r:36,label:'Bonsai leaves'}, {id:'flower',x:183,y:400,r:21,label:'Flower'}, {id:'cup',x:266,y:393,r:24,label:'Tea cup'}, {id:'bridge',x:380,y:443,r:39,label:'Bridge rail'}, {id:'stone',x:520,y:436,r:29,label:'Stepping stone'}, {id:'leaf',x:270,y:407,r:24,label:'Leaf'}],
 [{id:'planet',x:350,y:319,r:20,label:'Orrery planet'}, {id:'candle',x:485,y:511,r:22,label:'Candle flame'}, {id:'skylight',x:510,y:139,r:25,label:'Skylight star'}, {id:'chart',x:121,y:147,r:31,label:'Star chart mark'}, {id:'book',x:301,y:162,r:24,label:'Book colour'}, {id:'globe',x:510,y:374,r:34,label:'Globe'}, {id:'comet',x:347,y:531,r:30,label:'Comet trail'}, {id:'telescope',x:443,y:298,r:25,label:'Telescope glint'}, {id:'chartDot',x:151,y:121,r:18,label:'Chart star'}, {id:'orb',x:350,y:267,r:15,label:'Orbiting moon'}]
];
export function paintScene(ctx,scene,flags={},x=0){ctx.save();ctx.translate(x,0);if(scene==='workshop')workshop(ctx,flags);else if(scene==='garden')garden(ctx,flags);else observatory(ctx,flags);ctx.restore()}
