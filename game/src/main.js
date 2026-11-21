import {createWorld,startGame,resetLevel,nextLevel,tick,registerClick,useHint} from './world.js';
import {attachInput} from './input.js';
import {render} from './render.js';
import {makeAudio} from './audio.js';
import {shotRequest,stageShot,runSelftest} from './shots.js';
const canvas=document.querySelector('#game'),ctx=canvas.getContext('2d');
const request=shotRequest(),world=createWorld(request.seed),audio=makeAudio();let last=0,started=false,tickMark=0;
const actions={
 start(){startGame(world);started=true},
 retry(){resetLevel(world);world.state='playing'},
 next(){nextLevel(world);if(world.state==='won')audio.win()},
 pause(){if(world.state==='playing')world.state='paused';else if(world.state==='paused')world.state='playing'},
 resume(){if(world.state==='paused')world.state='playing'},
 restart(){startGame(world);started=true},
 click(x,y,side=0){const result=registerClick(world,x,y,side);if(result.type==='found'){audio.find();if(world.state==='level-complete')audio.win()}else if(result.type==='wrong')audio.wrong();return result},
 hint(){const d=useHint(world);if(d)audio.hint();return d},
 mute(){world.muted=!world.muted;audio.setMuted(world.muted)}
};
attachInput(canvas,world,actions);
if(request.shot)stageShot(request.shot,world,actions);
if(request.selftest)runSelftest(actions,world);
function frame(t){const now=t/1000;const dt=last?Math.min(.05,Math.max(0,now-last)):0;last=now;tick(world,dt);if(world.state==='playing'&&world.time<11&&Math.floor(world.time)!==tickMark){tickMark=Math.floor(world.time);audio.tick()}render(ctx,world,now);requestAnimationFrame(frame)}
render(ctx,world,0);requestAnimationFrame(frame);
