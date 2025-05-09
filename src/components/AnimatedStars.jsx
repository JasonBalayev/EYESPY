import React, { useEffect, useRef } from 'react';

const AnimatedStars = ({ financeMode = false }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef({
    particles: [],
    codeElements: [],
    geometricShapes: []
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Finance symbols for finance mode
    const financeSymbols = [
      { symbol: '$', name: 'USD' },
      { symbol: '€', name: 'EUR' },
      { symbol: '£', name: 'GBP' },
      { symbol: '¥', name: 'JPY' },
      { symbol: '₿', name: 'BTC' },
      { symbol: 'Ξ', name: 'ETH' },
      { symbol: '📊', name: 'CHART' },
      { symbol: '📈', name: 'GROWTH' }
    ];

    // Code elements for tech background
    const codeElements = [
      'function()', 'const', 'let', 'if()', 'for()', 'while()', 
      'return', 'class', 'import', 'export', 'async', 'await',
      '<div>', '</div>', '<span>', '{...}', '(props)', '=>',
      'useState', 'useEffect', 'map()', 'filter()', 'reduce()'
    ];
    
    // Geometric shapes for visual interest
    const shapes = ['circle', 'square', 'triangle', 'diamond', 'hexagon'];
    
    // Code characters for small particles
    const codeChars = ['0', '1', '{', '}', '<', '>', '/', '=', '+', '-', '*', '&', '|', ';', ':', '.'];
    
    // Define initParticles function first
    const initParticles = () => {
      particlesRef.current.particles = [];
      particlesRef.current.codeElements = [];
      particlesRef.current.geometricShapes = [];
      
      const maxParticles = 80;
      
      if (financeMode) {
        // Finance mode particles (similar to before)
        const gridRows = 4;
        const gridCols = 2;
        const gridSpacingX = canvas.width / (gridCols + 1);
        const gridSpacingY = canvas.height / (gridRows + 1);
        
        for (let row = 0; row < gridRows; row++) {
          for (let col = 0; col < gridCols; col++) {
            const symbolIndex = row * gridCols + col;
            if (symbolIndex < financeSymbols.length) {
              const finance = financeSymbols[symbolIndex];
              particlesRef.current.particles.push({
                x: gridSpacingX * (col + 1),
                y: gridSpacingY * (row + 1),
                size: Math.min(24, Math.max(16, canvas.width / 40)),    
                type: 'finance',
                symbol: finance.symbol,
                name: finance.name,
                opacity: 0.8,
                hue: 0,
                pulse: 0,
                pulseSpeed: Math.random() * 0.03 + 0.01,
                connectDistance: Math.max(canvas.width, canvas.height)
              });
            }
          }
        }
        
        for (let i = 0; i < maxParticles; i++) {
          particlesRef.current.particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 10 + 8,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.3 + 0.1,
            type: 'code',
            symbol: codeChars[Math.floor(Math.random() * codeChars.length)],
            direction: Math.random() * Math.PI * 2,
            hue: Math.random() * 20 + 210, // Blue hue
            connectDistance: 100
          });
        }
      } else {
        // Creative tech background
        
        // Add code element particles
        for (let i = 0; i < 15; i++) {
          const codeElement = codeElements[Math.floor(Math.random() * codeElements.length)];
          particlesRef.current.codeElements.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            text: codeElement,
            size: Math.random() * 6 + 10,
            opacity: Math.random() * 0.4 + 0.1,
            speed: Math.random() * 0.3 + 0.1,
            direction: Math.random() * Math.PI * 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 0.5,
            hue: Math.random() * 40 + 200, // Blue to purple hues
            pulse: 0,
            pulseSpeed: Math.random() * 0.02 + 0.01
          });
        }
        
        // Add geometric shapes
        for (let i = 0; i < 12; i++) {
          const shape = shapes[Math.floor(Math.random() * shapes.length)];
          particlesRef.current.geometricShapes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            shape: shape,
            size: Math.random() * 15 + 5,
            opacity: Math.random() * 0.15 + 0.05,
            speed: Math.random() * 0.2 + 0.05,
            direction: Math.random() * Math.PI * 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 0.8,
            hue: Math.random() * 60 + 180, // Cyan to blue hues
            pulse: 0,
            pulseSpeed: Math.random() * 0.02 + 0.005
          });
        }
        
        // Add small code character particles
        for (let i = 0; i < maxParticles * 1.5; i++) {
          particlesRef.current.particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 8 + 3,
            speed: Math.random() * 0.5 + 0.1,
            opacity: Math.random() * 0.3 + 0.1,
            type: 'code',
            symbol: codeChars[Math.floor(Math.random() * codeChars.length)],
            direction: Math.random() * Math.PI * 2,
            hue: Math.random() * 60 + 180, // Blue to purple hues
            connectDistance: 100
          });
        }
      }
    };
    
    // Now set canvas size and call initParticles
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Define animate function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle grid lines for tech background
      if (!financeMode) {
        ctx.strokeStyle = 'rgba(100, 150, 255, 0.05)';
        ctx.lineWidth = 0.5;
        
        const gridSize = 50;
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }
      
      // Update and draw particles
      particlesRef.current.particles.forEach(particle => {
        // Update position
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;
        
        // Wrap around screen
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        
        // Draw particle
        if (particle.type === 'finance') {
          particle.pulse += particle.pulseSpeed;
          const pulseScale = 1 + Math.sin(particle.pulse) * 0.2;
          
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          ctx.translate(particle.x, particle.y);
          ctx.scale(pulseScale, pulseScale);
          ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, 0.8)`;
          ctx.font = `${particle.size}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.symbol, 0, 0);
          
          // Draw glow
          ctx.shadowColor = `hsla(${particle.hue}, 80%, 60%, 0.8)`;
          ctx.shadowBlur = 15;
          ctx.fillText(particle.symbol, 0, 0);
          ctx.restore();
        } else if (particle.type === 'code') {
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, 0.8)`;
          ctx.font = `${particle.size}px monospace`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.symbol, particle.x, particle.y);
          ctx.restore();
        }
      });
      
      // Update and draw code elements
      particlesRef.current.codeElements.forEach(element => {
        // Update position
        element.x += Math.cos(element.direction) * element.speed;
        element.y += Math.sin(element.direction) * element.speed;
        element.rotation += element.rotationSpeed;
        element.pulse += element.pulseSpeed;
        
        // Wrap around screen
        if (element.x < -100) element.x = canvas.width + 100;
        if (element.x > canvas.width + 100) element.x = -100;
        if (element.y < -100) element.y = canvas.height + 100;
        if (element.y > canvas.height + 100) element.y = -100;
        
        // Draw code element
        ctx.save();
        ctx.globalAlpha = element.opacity * (0.7 + Math.sin(element.pulse) * 0.3);
        ctx.translate(element.x, element.y);
        ctx.rotate(element.rotation * Math.PI / 180);
        ctx.fillStyle = `hsla(${element.hue}, 70%, 60%, 0.8)`;
        ctx.font = `${element.size}px monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(element.text, 0, 0);
        
        // Draw subtle glow
        ctx.shadowColor = `hsla(${element.hue}, 80%, 60%, 0.5)`;
        ctx.shadowBlur = 10;
        ctx.fillText(element.text, 0, 0);
        ctx.restore();
      });
      
      // Update and draw geometric shapes
      particlesRef.current.geometricShapes.forEach(shape => {
        // Update position
        shape.x += Math.cos(shape.direction) * shape.speed;
        shape.y += Math.sin(shape.direction) * shape.speed;
        shape.rotation += shape.rotationSpeed;
        shape.pulse += shape.pulseSpeed;
        
        // Wrap around screen
        if (shape.x < -50) shape.x = canvas.width + 50;
        if (shape.x > canvas.width + 50) shape.x = -50;
        if (shape.y < -50) shape.y = canvas.height + 50;
        if (shape.y > canvas.height + 50) shape.y = -50;
        
        // Draw shape
        ctx.save();
        ctx.globalAlpha = shape.opacity * (0.7 + Math.sin(shape.pulse) * 0.3);
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation * Math.PI / 180);
        ctx.strokeStyle = `hsla(${shape.hue}, 70%, 60%, 0.8)`;
        ctx.lineWidth = 1;
        
        if (shape.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (shape.shape === 'square') {
          ctx.beginPath();
          ctx.rect(-shape.size/2, -shape.size/2, shape.size, shape.size);
          ctx.stroke();
        } else if (shape.shape === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(0, -shape.size/2);
          ctx.lineTo(shape.size/2, shape.size/2);
          ctx.lineTo(-shape.size/2, shape.size/2);
          ctx.closePath();
          ctx.stroke();
        } else if (shape.shape === 'diamond') {
          ctx.beginPath();
          ctx.moveTo(0, -shape.size/2);
          ctx.lineTo(shape.size/2, 0);
          ctx.lineTo(0, shape.size/2);
          ctx.lineTo(-shape.size/2, 0);
          ctx.closePath();
          ctx.stroke();
        } else if (shape.shape === 'hexagon') {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = shape.size * Math.cos(angle);
            const y = shape.size * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        }
        ctx.restore();
      });
      
      // Draw connections between particles in finance mode
      if (financeMode) {
        ctx.lineWidth = 0.8;
        const financeParticles = particlesRef.current.particles.filter(p => p.type === 'finance');
        
        for (let i = 0; i < financeParticles.length; i++) {
          for (let j = i + 1; j < financeParticles.length; j++) {
            const p1 = financeParticles[i];
            const p2 = financeParticles[j];
            const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            
            const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);
            const opacity = Math.max(0.05, 0.4 * (1 - distance / maxDistance));
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(30, 144, 255, ${opacity})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            
            // Draw data packets moving along connections
            const speed = (i * 3 + j * 7) % 5 + 3;
            const packetPos = (Date.now() % (speed * 1000)) / (speed * 1000);
            const packetX = p1.x + (p2.x - p1.x) * packetPos;
            const packetY = p1.y + (p2.y - p1.y) * packetPos;
            
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 2})`;
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
            ctx.fill();
            
            if ((i + j) % 2 === 0) {
              const reversePacketPos = (Date.now() % (speed * 1200)) / (speed * 1200);
              const reversePacketX = p2.x + (p1.x - p2.x) * reversePacketPos;
              const reversePacketY = p2.y + (p1.y - p2.y) * reversePacketPos;
              
              ctx.beginPath();
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 2})`;
              ctx.arc(reversePacketX, reversePacketY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      } else {
        // Draw connections between nearby particles in tech mode
        ctx.lineWidth = 0.5;
        const particles = particlesRef.current.particles;
        const connectDistance = 100;
        
        for (let i = 0; i < particles.length; i++) {
          if (particles[i].type !== 'code') continue;
          
          for (let j = i + 1; j < particles.length; j++) {
            if (particles[j].type !== 'code') continue;
            
            const p1 = particles[i];
            const p2 = particles[j];
            const distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            
            if (distance < connectDistance) {
              const opacity = 0.15 * (1 - distance / connectDistance);
              const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
              gradient.addColorStop(0, `hsla(${p1.hue}, 80%, 60%, ${opacity})`);
              gradient.addColorStop(1, `hsla(${p2.hue}, 80%, 60%, ${opacity})`);
              
              ctx.beginPath();
              ctx.strokeStyle = gradient;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        
        // Draw occasional data flow animations
        if (Math.random() < 0.02) {
          const startX = Math.random() * canvas.width;
          const startY = Math.random() * canvas.height;
          const length = Math.random() * 200 + 100;
          const angle = Math.random() * Math.PI * 2;
          const endX = startX + Math.cos(angle) * length;
          const endY = startY + Math.sin(angle) * length;
          
          const dataFlow = {
            startX, startY, endX, endY,
            progress: 0,
            speed: Math.random() * 0.01 + 0.005,
            hue: Math.random() * 40 + 200,
            width: Math.random() * 2 + 1
          };
          
          const animateDataFlow = () => {
            dataFlow.progress += dataFlow.speed;
            
            if (dataFlow.progress >= 1) return;
            
            const x = dataFlow.startX + (dataFlow.endX - dataFlow.startX) * dataFlow.progress;
            const y = dataFlow.startY + (dataFlow.endY - dataFlow.startY) * dataFlow.progress;
            
            ctx.beginPath();
            ctx.arc(x, y, dataFlow.width, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${dataFlow.hue}, 80%, 60%, 0.8)`;
            ctx.fill();
            
            requestAnimationFrame(animateDataFlow);
          };
          
          animateDataFlow();
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [financeMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-transparent"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedStars;
