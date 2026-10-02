// Human-editable game tuning values.
window.GAME_PARAMETERS = {
  player: { speed: 390, startingLives: 3, shootingCooldown: 0.2, projectileSpeed: 540, deathScreenDelay: 2 },
  enemy: { horizontalSpeed: 77.5, verticalSpeed: 12, firingCooldown: 1.8, projectileSpeed: 220, separatedShootingCountdown: 2.5, breakawaySpeedMultiplier: 2, fastDiverFrequency: 0, fastDiverSpeed: 0 },
  level: { startingRows: 2, maximumRows: 10, columns: 10, horizontalSpacing: 42, verticalSpacing: 24, pointsPerEnemy: 100, formationFireRateIncrease: 0.10, enemyAccuracyIncreasePerLevel: 0.10, enemySpeedBuildupPerCasualty: 0.03, maxFastDiverCount: 0 },
  screen: { width: 960, height: 540 }
};
