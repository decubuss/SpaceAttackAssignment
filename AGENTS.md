The task: build Space Attack, a small, polished browser arcade game where the player pilots a spaceship against waves of enemies. 
It must include these elements which are built in this sequence:
- a start screen, where you can press PLAY (screen shows the game after that)
- the game, which includes
    - (functionality) controllable spaceship at the bottom of the screen, that can shoot up projectiles
    - (functionality) spaceship lives - spaceship loses 1 if gets hit
    - (ui) current number of remaining spaceship lives
    - (functionality) Keyboard movement (keyboard arrow buttons <- and ->) and firing(spacebar)
    - (ui) on-screen instructions for how to control the spaceship (movement and firing)
    - (functionality/ui) player gains score for killing enemies, visible at the left corner of the screen 

    - (functionality) visible enemy who can shoot down, move and can be shot at (be killed) - when player projectile hits them

    - (functionality) arrays of enemies, moving in unison, preserving set formation
    - (functionality) occasional number of enemies, going down faster, separated from foramtion
    - (functionality) when the player finishes level, the new level has enemies in new formation, new number of enemies
    - (functionality) the less the number of enemies, the more is their speed
- game end screen, where player sees the accumulated score, high score and restart button, that starts the game from level 1

tech stuff:
- the game runs on web browser
- the implementation of your choice: deploy or local run on browser
- the thing is - people gotta be able to play it outside of this miachine: i can send them file and it will work or deployment with free tools avbl to you

CODEX_INPUT
Parameters: screen size; player speed; player starting lives; shooting cooldown; projectile speed;  enemy movement speed; enemy firing rate; fast-diver frequency and speed; points per enemy;
Level parameters: number of enemies on the level; enemy speed buildup per casualty; enemy rows and columns; max fast diver count;
CODEX_INPUT Parameters: enemy horizontal speed; enemy vertical speed applied when the formation reaches either screen edge and reverses direction; horizontal and vertical space between enemies; enemy shooting cooldown for formation fire; formation fire-rate increase per level; enemy accuracy increase per level, from random aim at 0 to direct aim at 1; separated-enemy personal shooting countdown; breakaway enemy speed multiplier.

CODEX_INPUT
Tech approach: a self-contained browser game using HTML, CSS, and vanilla JavaScript with Canvas rendering. It will run locally from shared files without a build step or required server, keeping distribution simple.
