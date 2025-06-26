"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Code2, Sparkles, Zap, Rocket } from "lucide-react";

interface CodeTemplate {
  html: string;
  css: string;
  js: string;
  title: string;
  description: string;
}

const courseTemplates: Record<string, CodeTemplate> = {
  fullstack: {
    title: "Full Stack - Interactive Todo App",
    description: "Complete CRUD application with frontend and backend logic",
    html: `<div class="todo-app">
  <h1>My Todo App</h1>
  <div class="input-section">
    <input type="text" id="todoInput" placeholder="Add a new task...">
    <button onclick="addTodo()">Add Task</button>
  </div>
  <ul id="todoList"></ul>
</div>`,
    css: `.todo-app {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input-section {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

button {
  padding: 10px 15px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background: #ff5252;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: rgba(255,255,255,0.1);
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-btn {
  background: #ff4757;
  padding: 5px 10px;
  font-size: 12px;
}`,
    js: `let todos = [];

function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  
  if (text) {
    todos.push({
      id: Date.now(),
      text: text,
      completed: false
    });
    input.value = '';
    renderTodos();
  }
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.innerHTML = \`
      <span>\${todo.text}</span>
      <button class="delete-btn" onclick="deleteTodo(\${todo.id})">Delete</button>
    \`;
    list.appendChild(li);
  });
}

// Add some sample todos
todos = [
  { id: 1, text: "Learn HTML & CSS", completed: false },
  { id: 2, text: "Master JavaScript", completed: false },
  { id: 3, text: "Build Full Stack Apps", completed: false }
];
renderTodos();`,
  },
  frontend: {
    title: "Frontend - Animated Landing Page",
    description: "Modern responsive design with CSS animations",
    html: `<div class="hero-section">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">Welcome to the Future</h1>
      <p class="hero-subtitle">Experience cutting-edge frontend development</p>
      <button class="cta-button" onclick="animateButton()">Get Started</button>
    </div>
    <div class="floating-elements">
      <div class="float-item item-1">💻</div>
      <div class="float-item item-2">🚀</div>
      <div class="float-item item-3">⭐</div>
    </div>
  </div>
</div>`,
    css: `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero-section {
  height: 100vh;
  background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.container {
  text-align: center;
  color: white;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: slideInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: slideInUp 1s ease-out 0.3s both;
}

.cta-button {
  padding: 15px 30px;
  font-size: 1.1rem;
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid white;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: slideInUp 1s ease-out 0.6s both;
}

.cta-button:hover {
  background: white;
  color: #667eea;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.float-item {
  position: absolute;
  font-size: 2rem;
  animation: float 6s ease-in-out infinite;
}

.item-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.item-2 {
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.item-3 {
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}`,
    js: `function animateButton() {
  const button = document.querySelector('.cta-button');
  
  // Add click animation
  button.style.transform = 'scale(0.95)';
  button.style.background = '#ff6b6b';
  button.style.borderColor = '#ff6b6b';
  button.textContent = 'Loading...';
  
  setTimeout(() => {
    button.style.transform = 'scale(1)';
    button.textContent = '✨ Welcome Aboard!';
    
    // Create celebration particles
    createParticles();
  }, 500);
  
  setTimeout(() => {
    button.style.background = 'rgba(255,255,255,0.2)';
    button.style.borderColor = 'white';
    button.textContent = 'Get Started';
  }, 3000);
}

function createParticles() {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = \`
      position: absolute;
      width: 6px;
      height: 6px;
      background: white;
      border-radius: 50%;
      pointer-events: none;
      top: 50%;
      left: 50%;
      animation: explode 1s ease-out forwards;
      transform: translate(-50%, -50%);
    \`;
    
    const angle = (i / 20) * 360;
    particle.style.setProperty('--angle', angle + 'deg');
    
    document.querySelector('.hero-section').appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000);
  }
}

// Add particle explosion animation
const style = document.createElement('style');
style.textContent = \`
  @keyframes explode {
    to {
      transform: translate(-50%, -50%) 
                 rotate(var(--angle)) 
                 translateX(100px);
      opacity: 0;
    }
  }
\`;
document.head.appendChild(style);`,
  },
  mobile: {
    title: "Flutter Mobile App - Material Design",
    description: "Cross-platform mobile app with Flutter widgets",
    html: `<div class="flutter-app">
  <div class="status-bar">
    <span class="time">9:41</span>
    <div class="status-icons">
      <span>📶</span>
      <span>📶</span>
      <span>🔋</span>
    </div>
  </div>
  
  <div class="app-bar">
    <button class="back-btn">←</button>
    <h1>Flutter Demo</h1>
    <button class="menu-btn" onclick="showMenu()">⋮</button>
  </div>
  
  <div class="body-content">
    <div class="fab-container">
      <div class="counter-text">
        <p>You have pushed the button this many times:</p>
        <h2 id="counter" class="counter-number">0</h2>
      </div>
    </div>
    
    <div class="widget-showcase">
      <div class="material-card" onclick="cardTap(this)">
        <div class="card-header">
          <span class="material-icon">🎨</span>
          <h3>Material Design</h3>
        </div>
        <p>Beautiful, intuitive UI components</p>
      </div>
      
      <div class="material-card" onclick="cardTap(this)">
        <div class="card-header">
          <span class="material-icon">⚡</span>
          <h3>Hot Reload</h3>
        </div>
        <p>Instant code changes without restart</p>
      </div>
      
      <div class="material-card" onclick="cardTap(this)">
        <div class="card-header">
          <span class="material-icon">📱</span>
          <h3>Cross Platform</h3>
        </div>
        <p>One codebase for iOS and Android</p>
      </div>
    </div>
  </div>
  
  <button class="fab" onclick="incrementCounter()">
    <span class="fab-icon">+</span>
  </button>
</div>`,
    css: `.flutter-app {
  width: 375px;
  height: 667px;
  margin: 20px auto;
  background: #fafafa;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  position: relative;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
}

.status-bar {
  background: #2196F3;
  color: white;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
}

.status-icons {
  display: flex;
  gap: 5px;
}

.app-bar {
  background: #2196F3;
  color: white;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.app-bar h1 {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}

.back-btn, .menu-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
}

.back-btn:hover, .menu-btn:hover {
  background: rgba(255,255,255,0.1);
}

.body-content {
  padding: 32px 24px;
  height: calc(100% - 140px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fab-container {
  text-align: center;
  margin-bottom: 32px;
}

.counter-text p {
  color: #666;
  font-size: 16px;
  margin-bottom: 16px;
}

.counter-number {
  font-size: 48px;
  font-weight: 300;
  color: #2196F3;
  margin: 0;
  transition: all 0.3s ease;
}

.widget-showcase {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.material-card {
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 4px solid #2196F3;
}

.material-card:active {
  transform: scale(0.98);
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.material-icon {
  font-size: 24px;
}

.material-card h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.material-card p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.4;
}

.fab {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background: #FF4081;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(255,64,129,0.4);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fab:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(255,64,129,0.5);
}

.fab:active {
  transform: scale(0.95);
}

.fab-icon {
  color: white;
  font-size: 24px;
  font-weight: 300;
}

@keyframes counterPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); color: #FF4081; }
  100% { transform: scale(1); }
}

.counter-pulse {
  animation: counterPulse 0.3s ease;
}

@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

.ripple-effect {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
  transform: scale(0);
  animation: ripple 0.6s linear;
  pointer-events: none;
}`,
    js: `let counter = 0;

function incrementCounter() {
  counter++;
  const counterElement = document.getElementById('counter');
  counterElement.textContent = counter;
  counterElement.classList.add('counter-pulse');
  
  // Create ripple effect
  createRipple(event);
  
  // Remove animation class after animation completes
  setTimeout(() => {
    counterElement.classList.remove('counter-pulse');
  }, 300);
  
  // Simulate haptic feedback
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
}

function createRipple(event) {
  const button = event.target.closest('.fab');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  const ripple = document.createElement('span');
  ripple.classList.add('ripple-effect');
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

function cardTap(card) {
  // Material Design ripple effect for cards
  const rect = card.getBoundingClientRect();
  const ripple = document.createElement('div');
  ripple.style.cssText = \`
    position: absolute;
    border-radius: 50%;
    background: rgba(33, 150, 243, 0.3);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
    width: 100px;
    height: 100px;
    left: \${event.clientX - rect.left - 50}px;
    top: \${event.clientY - rect.top - 50}px;
  \`;
  
  card.style.position = 'relative';
  card.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
  
  // Simulate haptic feedback
  if (navigator.vibrate) {
    navigator.vibrate(30);
  }
}

function showMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  menuBtn.style.transform = 'rotate(90deg)';
  
  setTimeout(() => {
    menuBtn.style.transform = 'rotate(0deg)';
  }, 200);
  
  // Simulate haptic feedback
  if (navigator.vibrate) {
    navigator.vibrate(25);
  }
}

// Add touch event listeners for better mobile experience
document.querySelectorAll('.material-card, .fab, .back-btn, .menu-btn').forEach(element => {
  element.addEventListener('touchstart', function() {
    this.style.opacity = '0.8';
  });
  
  element.addEventListener('touchend', function() {
    this.style.opacity = '1';
  });
});`,
  },
};

interface LiveCodeEditorProps {
  selectedCourse: string;
}

export default function LiveCodeEditor({
  selectedCourse,
}: LiveCodeEditorProps) {
  const [activeTab, setActiveTab] = useState<"html" | "css" | "js">("html");
  const [code, setCode] = useState({
    html: "",
    css: "",
    js: "",
  });
  const [isRunning, setIsRunning] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const currentTemplate =
    courseTemplates[selectedCourse] || courseTemplates.fullstack;

  useEffect(() => {
    setCode({
      html: currentTemplate!.html,
      css: currentTemplate!.css,
      js: currentTemplate!.js,
    });
    setActiveTab("html");
  }, [selectedCourse, currentTemplate!]);

  const runCode = () => {
    if (!iframeRef.current) return;

    setIsRunning(true);

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${code.css}</style>
        </head>
        <body>
          ${code.html}
          <script>${code.js}</script>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;

    setTimeout(() => {
      setIsRunning(false);
      URL.revokeObjectURL(url);
    }, 500);
  };

  const resetCode = () => {
    setCode({
      html: currentTemplate!.html,
      css: currentTemplate!.css,
      js: currentTemplate!.js,
    });
  };

  useEffect(() => {
    if (selectedCourse) {
      runCode();
    }
  }, [code, selectedCourse]);

  if (!selectedCourse) {
    return (
      <Card className="bg-brand-white-5 border-brand-white-10 relative h-full overflow-hidden backdrop-blur-sm">
        <div className="from-brand-sky-mint-5 to-brand-primary-20 absolute inset-0 bg-gradient-to-br"></div>
        <CardContent className="relative flex h-full items-center justify-center p-8">
          <div className="text-center">
            {/* Floating Icons */}
            <div className="relative mb-8">
              <div className="animate-float-slow absolute -left-4 -top-4">
                <Code2 className="text-brand-sky-mint h-8 w-8 opacity-60" />
              </div>
              <div className="animate-float-medium absolute -right-6 -top-2">
                <Sparkles className="text-brand-sky-mint h-6 w-6 opacity-40" />
              </div>
              <div className="animate-float-fast absolute -bottom-2 -left-2">
                <Zap className="text-brand-sky-mint h-5 w-5 opacity-50" />
              </div>

              {/* Main Icon */}
              <div className="bg-brand-sky-mint-10 relative inline-block rounded-full p-6">
                <Rocket className="text-brand-sky-mint h-16 w-16 animate-pulse" />
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-brand-white animate-fade-in mb-4 text-2xl font-bold">
              ✨ See the Magic Happen
            </h3>
            <p className="text-brand-grey mx-auto mb-6 max-w-md text-lg leading-relaxed">
              Select a course above to unlock interactive code examples and see
              what you'll build
            </p>

            {/* Animated Dots */}
            <div className="mb-8 flex justify-center space-x-2">
              <div className="bg-brand-sky-mint h-2 w-2 animate-bounce rounded-full"></div>
              <div
                className="bg-brand-sky-mint h-2 w-2 animate-bounce rounded-full"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="bg-brand-sky-mint h-2 w-2 animate-bounce rounded-full"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="bg-brand-white-10 border-brand-white-20 text-brand-white rounded-full border px-4 py-2 text-sm backdrop-blur-sm">
                🚀 Live Preview
              </div>
              <div className="bg-brand-white-10 border-brand-white-20 text-brand-white rounded-full border px-4 py-2 text-sm backdrop-blur-sm">
                ⚡ Instant Feedback
              </div>
              <div className="bg-brand-white-10 border-brand-white-20 text-brand-white rounded-full border px-4 py-2 text-sm backdrop-blur-sm">
                🎨 Interactive Learning
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-brand-white-5 border-brand-white-10 relative flex h-full flex-col overflow-hidden backdrop-blur-sm">
      <div className="from-brand-sky-mint-5 absolute inset-0 bg-gradient-to-br to-transparent opacity-30"></div>

      <CardHeader className="relative z-10 pb-4">
        <CardTitle className="text-brand-white flex items-center gap-2 text-lg font-bold">
          <Code2 className="text-brand-sky-mint h-5 w-5" />
          {currentTemplate!.title}
        </CardTitle>
        <p className="text-brand-grey text-sm">
          {currentTemplate!.description}
        </p>
      </CardHeader>

      <CardContent className="relative z-10 flex min-h-0 flex-1 flex-col space-y-4">
        {/* Code Editor Tabs */}
        <div className="bg-brand-white-10 border-brand-white-20 flex space-x-1 rounded-lg border p-1 backdrop-blur-sm">
          {(["html", "css", "js"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-brand-sky-mint text-brand-primary shadow-sm"
                  : "text-brand-white hover:bg-brand-white-10"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Code Editor */}
        <div className="bg-brand-white-5 border-brand-white-20 min-h-0 flex-1 rounded-lg border backdrop-blur-sm">
          <textarea
            value={code[activeTab]}
            onChange={(e) =>
              setCode((prev) => ({ ...prev, [activeTab]: e.target.value }))
            }
            className="text-brand-white placeholder:text-brand-grey h-full min-h-[120px] w-full resize-none border-none bg-transparent p-4 font-mono text-sm outline-none"
            placeholder={`Enter ${activeTab.toUpperCase()} code here...`}
            style={{ minHeight: "120px" }}
          />
        </div>

        {/* Control Buttons */}
        <div className="flex flex-shrink-0 space-x-2">
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-brand-sky-mint hover:bg-brand-sky-mint-90 text-brand-primary flex-1 shadow-sm"
          >
            <Play className="mr-2 h-4 w-4" />
            {isRunning ? "Running..." : "Run Code"}
          </Button>
          <Button
            onClick={resetCode}
            className="bg-brand-white-10 border-brand-white-20 text-brand-white hover:bg-brand-white-20 border shadow-sm backdrop-blur-sm"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Preview */}
        <div className="border-brand-white-20 min-h-[200px] flex-1 overflow-hidden rounded-lg border bg-white shadow-sm">
          <iframe
            ref={iframeRef}
            className="h-full w-full rounded-lg"
            title="Code Preview"
            sandbox="allow-scripts"
            style={{ minHeight: "200px" }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
