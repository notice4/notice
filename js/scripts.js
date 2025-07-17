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
    setTimeout(typeWriter, 80);
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
    setTimeout(typeSubtitle, 40);
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
    const count = Math.floor((width * height) / 7000);
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
      ctx.fillStyle = '#61dafb';
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
          ctx.strokeStyle = `rgba(97, 218, 251, ${opacity})`;
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


// Tech Stack

document.addEventListener('DOMContentLoaded', () => {
    const techStack = [
        {
            title: 'Programming Languages',
            icons: [
                { name: 'python', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
                { name: 'javascript', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
                { name: 'mysql', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
                { name: 'oracle', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' }
            ]
        },
        {
            title: 'Data Analysis & Manipulation',
            icons: [
                { name: 'pandas', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg' },
                { name: 'numpy', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg' },
                { name: 'matlab', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg'}
            ]
        },
        {
            title: 'Machine Learning',
            icons: [
                { name: 'scikitlearn', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' }
            ]
        },
        {
            title: 'Data Visualization',
            icons: [
                { name: 'matplotlib', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' }
            ]
        },
        {
            title: 'Databases & SQL Tools',
            icons: [
                { name: 'mysql', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
                { name: 'oracle', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg' },
                { name: 'sqlalchemy', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original-wordmark.svg' },
                { name: 'sqldeveloper', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg' }
            ]
        },
        {
            title: 'Web Development',
            icons: [
                { name: 'html5', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
                { name: 'css3', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
                { name: 'javascript', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' }
            ]
        },
        {
            title: 'Version Control',
            icons: [
                { name: 'git', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg' },
                { name: 'github', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' }
            ]
        },
        {
            title: 'Development Tools & Environments',
            icons: [
                { name: 'jupyter', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg' },
                { name: 'linux', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
                { name: 'docker', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg' },
                { name: 'kaggle', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original-wordmark.svg' }
            ]
        }
    ];

    const skillsContainer = document.getElementById('skills-container');

    techStack.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('skill-category');

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.title;
        categoryDiv.appendChild(categoryTitle);

        const iconsWrapper = document.createElement('div');
        iconsWrapper.classList.add('icons-wrapper');

        category.icons.forEach(icon => {
            const img = document.createElement('img');
            img.src = icon.path;
            img.alt = `${icon.name} icon`;
            img.classList.add('skill-icon');
            iconsWrapper.appendChild(img);

            img.onerror = () => {
                console.error(`Failed to load icon: ${icon.name} from ${icon.path}`);
                img.style.filter = 'grayscale(100%)';
            };
        });



        categoryDiv.appendChild(iconsWrapper);
        skillsContainer.appendChild(categoryDiv);
    });
});