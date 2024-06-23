import React, { useState, useEffect, useCallback } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SIZE = 50;
const ENEMY_SIZE = 60;
const CAKE_SIZE = 70;
const PLAYER_SPEED = 5;
const ENEMY_SPEED = 2;

const RetrogamerGame = () => {
  const [playerPos, setPlayerPos] = useState({ x: GAME_WIDTH / 2, y: GAME_HEIGHT / 2 });
  const [enemies, setEnemies] = useState([
    { x: 100, y: 100 },
    { x: GAME_WIDTH - 100, y: 100 },
    { x: 100, y: GAME_HEIGHT - 100 },
    { x: GAME_WIDTH - 100, y: GAME_HEIGHT - 100 }
  ]);
  const [cakePos] = useState({ x: Math.random() * (GAME_WIDTH - CAKE_SIZE), y: Math.random() * (GAME_HEIGHT - CAKE_SIZE) });
  const [gameState, setGameState] = useState('playing');
  const [score, setScore] = useState(0);

  const movePlayer = useCallback((dx, dy) => {
    setPlayerPos(prev => ({
      x: Math.max(PLAYER_SIZE / 2, Math.min(GAME_WIDTH - PLAYER_SIZE / 2, prev.x + dx * PLAYER_SPEED)),
      y: Math.max(PLAYER_SIZE / 2, Math.min(GAME_HEIGHT - PLAYER_SIZE / 2, prev.y + dy * PLAYER_SPEED))
    }));
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp': movePlayer(0, -1); break;
        case 'ArrowDown': movePlayer(0, 1); break;
        case 'ArrowLeft': movePlayer(-1, 0); break;
        case 'ArrowRight': movePlayer(1, 0); break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [movePlayer]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      if (gameState !== 'playing') return;

      setEnemies(prev => prev.map(enemy => {
        const dx = playerPos.x - enemy.x;
        const dy = playerPos.y - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return {
          x: enemy.x + (dx / distance) * ENEMY_SPEED,
          y: enemy.y + (dy / distance) * ENEMY_SPEED
        };
      }));

      setScore(prev => prev + 1);

      // Check collisions
      if (enemies.some(enemy => 
        Math.hypot(enemy.x - playerPos.x, enemy.y - playerPos.y) < (PLAYER_SIZE + ENEMY_SIZE) / 2
      )) {
        setGameState('lost');
      }

      if (Math.hypot(cakePos.x - playerPos.x, cakePos.y - playerPos.y) < (PLAYER_SIZE + CAKE_SIZE) / 2) {
        setGameState('won');
      }
    }, 50);

    return () => clearInterval(gameLoop);
  }, [playerPos, enemies, cakePos, gameState]);

  const restartGame = () => {
    setPlayerPos({ x: GAME_WIDTH / 2, y: GAME_HEIGHT / 2 });
    setEnemies([
      { x: 100, y: 100 },
      { x: GAME_WIDTH - 100, y: 100 },
      { x: 100, y: GAME_HEIGHT - 100 },
      { x: GAME_WIDTH - 100, y: GAME_HEIGHT - 100 }
    ]);
    setGameState('playing');
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="mb-4 text-4xl font-bold text-white animate-pulse">Score: {score}</div>
      <div className="relative rounded-3xl shadow-2xl overflow-hidden" style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}>
        {/* Extreme background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-red-500 to-yellow-500 animate-gradient-xy"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30"></div>
        
        {/* Particle effect */}
        <div className="particle-container">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>
        
        {/* Player */}
        <div
          className="absolute rounded-full shadow-neon transition-transform duration-300 ease-in-out transform hover:scale-110"
          style={{ 
            width: PLAYER_SIZE, 
            height: PLAYER_SIZE, 
            left: playerPos.x - PLAYER_SIZE / 2, 
            top: playerPos.y - PLAYER_SIZE / 2,
            transition: 'left 0.1s, top 0.1s',
            background: 'radial-gradient(circle, #ffff00 0%, #ff9900 100%)',
            boxShadow: '0 0 15px #ffff00, 0 0 25px #ff9900'
          }}
        >
          <div className="absolute inset-2 rounded-full bg-yellow-300 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-black rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-black rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/4 right-1/4 h-2 bg-black rounded-full"></div>
        </div>
        
        {/* Enemies */}
        {enemies.map((enemy, index) => (
          <div
            key={index}
            className="absolute rounded-lg shadow-neon"
            style={{ 
              width: ENEMY_SIZE, 
              height: ENEMY_SIZE, 
              left: enemy.x - ENEMY_SIZE / 2, 
              top: enemy.y - ENEMY_SIZE / 2,
              transition: 'left 0.05s, top 0.05s',
              background: 'radial-gradient(circle, #ff0000 0%, #990000 100%)',
              boxShadow: '0 0 15px #ff0000, 0 0 25px #990000'
            }}
          >
            <div className="absolute inset-2 rounded-lg bg-red-900"></div>
            <div className="absolute top-1/4 left-1/4 w-5 h-5 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute top-1/4 right-1/4 w-5 h-5 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/4 w-8 h-3 bg-white rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-8 h-3 bg-white rounded-full"></div>
          </div>
        ))}
        
        {/* Cake */}
        <div
          className="absolute rounded-lg shadow-neon animate-float"
          style={{ 
            width: CAKE_SIZE, 
            height: CAKE_SIZE, 
            left: cakePos.x - CAKE_SIZE / 2, 
            top: cakePos.y - CAKE_SIZE / 2,
            background: 'radial-gradient(circle, #ff69b4 0%, #ff1493 100%)',
            boxShadow: '0 0 15px #ff69b4, 0 0 25px #ff1493'
          }}
        >
          <div className="absolute inset-2 rounded-lg bg-pink-300"></div>
          <div className="absolute top-1/4 left-1/4 w-3 h-12 bg-red-500 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-3 h-12 bg-red-500 rounded-full"></div>
          <div className="absolute top-1/6 left-1/2 w-3 h-14 bg-red-500 rounded-full -translate-x-1/2"></div>
          <div className="absolute top-0 left-1/4 w-5 h-5 bg-yellow-300 rounded-full animate-flicker"></div>
          <div className="absolute top-0 right-1/4 w-5 h-5 bg-yellow-300 rounded-full animate-flicker"></div>
          <div className="absolute -top-2 left-1/2 w-5 h-5 bg-yellow-300 rounded-full animate-flicker -translate-x-1/2"></div>
        </div>
      </div>
      
      {gameState === 'won' && (
        <Alert className="mt-4 bg-green-100">
          <AlertTitle>Congratulazioni!</AlertTitle>
          <AlertDescription>
            Hai vinto! Auguri Retrogamer!!!
            <Button onClick={restartGame} className="mt-2">Gioca ancora</Button>
          </AlertDescription>
        </Alert>
      )}
      
      {gameState === 'lost' && (
        <Alert className="mt-4 bg-red-100">
          <AlertTitle>Game Over</AlertTitle>
          <AlertDescription>
            Sei stato catturato dall'Uomo Falena!
            <Button onClick={restartGame} className="mt-2">Riprova</Button>
          </AlertDescription>
        </Alert>
      )}

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
        }
        .shadow-neon {
          filter: drop-shadow(0 0 10px currentColor);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-flicker {
          animation: flicker 0.5s ease-in-out infinite;
        }
        .particle-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        .particle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: white;
          border-radius: 50%;
          animation: particleAnimation 10s infinite linear;
        }
        @keyframes particleAnimation {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty));
            opacity: 0;
          }
        }
      `}</style>

      <script dangerouslySetInnerHTML={{__html: `
        document.querySelectorAll('.particle').forEach(particle => {
          const x = Math.random() * 100 - 50;
          const y = Math.random() * 100 - 50;
          particle.style.setProperty('--tx', \`\${x}vw\`);
          particle.style.setProperty('--ty', \`\${y}vh\`);
          particle.style.left = \`\${Math.random() * 100}%\`;
          particle.style.top = \`\${Math.random() * 100}%\`;
          particle.style.animationDelay = \`\${Math.random() * 10}s\`;
        });
      `}} />
    </div>
  );
};

export default RetrogamerGame;
