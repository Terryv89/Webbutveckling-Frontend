const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 25;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

// const har uppercase för att göra de lättare att se dom
// och att veta att dom inte ska ändras

const enteredMaxHp = prompt(
  "Enter the max life for you and the monster ",
  "100"
);

let chosenMaxLife = parseInt(enteredMaxHp);

// typeof
if (isNaN(enteredMaxHp) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let combatLog = [];
let hasBonusLife = true;
let lastLoggedEntry;

adjustHealthBars(chosenMaxLife);

function writeToLog(eve, val, monsterHealth, monsterHealth, finalPlayerHealth) {
  let logEntry = {
    event: eve,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: finalPlayerHealth,
  };
  switch (eve) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        event: eve,
        value: val,
        target: "MONSTER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: finalPlayerHealth,
      };
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: eve,
        value: val,
        target: "MONSTER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: finalPlayerHealth,
      };
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        event: eve,
        value: val,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: finalPlayerHealth,
      };
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: eve,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: finalPlayerHealth,
      };
      break;
    default:
      logEntry = {};
  }

  /*
  if (eve === LOG_EVENT_PLAYER_ATTACK) {
    //kan göra så här på alla ställen, bara ha kvar de som är olikt
  } else if (eve === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry = {
      event: eve,
      value: val,
      target: "MONSTER",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: finalPlayerHealth,
    };
  } else if (eve === LOG_EVENT_MONSTER_ATTACK) {
    logEntry = {
      event: eve,
      value: val,
      target: "PLAYER",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: finalPlayerHealth,
    };
  } else if (eve === LOG_EVENT_PLAYER_HEAL) {
    logEntry = {
      event: eve,
      value: val,
      target: "PLAYER",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: finalPlayerHealth,
    };
  } else if (eve === LOG_EVENT_GAME_OVER) {
    logEntry = {
      event: eve,
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: finalPlayerHealth,
    };
  } */
  combatLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  hasBonusLife = true;
  addBonusLife();
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);

    alert("Iceblock used");
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("you won");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("you lost");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0) {
    alert("its a draw");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "ITS A DRAW",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  /* if om man inte vill köra tenary
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  } */
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= 100 - HEAL_VALUE) {
    alert(`you cant heal to more than max hp`);
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler() {
  let j = 0;

  while (j < 3) {
    console.log("----------");
    j++;
  }

  /*
  for (let i = 0; i < 3; i++) {
    console.log("----------");
  }
  
  for (let i = 0; i < combatLog.length; i++) {
    console.log(combatLog[i]);
  }
  */
  let i = 0;
  for (const logEntry of combatLog) {
    if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {
      console.log(`#${i}`);
      for (const key in logEntry) {
        console.log(`${key} => ${logEntry[key]}`);
      }
      lastLoggedEntry = i;
      break;
    }
    i++;
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
