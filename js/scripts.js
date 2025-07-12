// Quarter Display and Animated Text

function getCurrentQuarter() {
    const month = new Date().getMonth(); // 0-indexed (0 = Jan)
    const quarter = Math.floor(month / 3) + 1;
    return `Q-${quarter} of ${new Date().getFullYear()}`;
  }

document.getElementById('quarterDisplay').textContent = getCurrentQuarter();

// Title and Animated Text

const text = "Collects, Cleans and Analyzes Data";
const animatedText = document.getElementById('animatedText');
let index = 0;

function typeWriter() {
  if (index < text.length) {
    animatedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80); // typing speed in ms
  }
}

typeWriter();

// Subtitle and Animated Text

const subtitleText = "Specialize in Data Science. Creating data-driven, digestable business solutions.";
const animatedSubtitle = document.getElementById('animatedSubtitle');
let subtitleIndex = 0;

function typeSubtitle() {
  if (subtitleIndex < subtitleText.length) {
    animatedSubtitle.textContent += subtitleText.charAt(subtitleIndex);
    subtitleIndex++;
    setTimeout(typeSubtitle, 40); // speed: smaller is faster
  }
}

typeSubtitle();

// Background Animation with Canvas | Graph-Data Style

const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let width, height, points = [];

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    generatePoints();
  }

  function generatePoints() {
    points = [];
    const count = Math.floor((width * height) / 7000); // density control
    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw each point
    points.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#61dafb'; // neon blue dot
      ctx.fill();
    });

    // Draw connecting lines
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const opacity = 1 - dist / 100;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(97, 218, 251, ${opacity})`; // neon blue line
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  draw();

