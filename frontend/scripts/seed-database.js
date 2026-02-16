const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const coursesData = [
  {
    title: 'Python Programming',
    slug: 'python',
    description: 'Master Python from basics to advanced concepts. Learn syntax, data structures, OOP, and more.',
    icon: 'Code2',
    difficulty_level: 'beginner',
    order_index: 1,
    color: '#3b82f6',
  },
  {
    title: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    description: 'Explore AI fundamentals, search algorithms, knowledge representation, and intelligent agents.',
    icon: 'Brain',
    difficulty_level: 'intermediate',
    order_index: 2,
    color: '#8b5cf6',
  },
  {
    title: 'Machine Learning',
    slug: 'machine-learning',
    description: 'Learn supervised, unsupervised learning, neural networks, and ML algorithms from scratch.',
    icon: 'Network',
    difficulty_level: 'intermediate',
    order_index: 3,
    color: '#10b981',
  },
  {
    title: 'Deep Learning',
    slug: 'deep-learning',
    description: 'Deep dive into neural networks, CNNs, RNNs, transformers, and modern deep learning architectures.',
    icon: 'Cpu',
    difficulty_level: 'advanced',
    order_index: 4,
    color: '#f59e0b',
  },
  {
    title: 'Robotics',
    slug: 'robotics',
    description: 'Learn robotics fundamentals, sensors, actuators, kinematics, ROS, and AI-powered robotics.',
    icon: 'Bot',
    difficulty_level: 'advanced',
    order_index: 5,
    color: '#ef4444',
  },
];

const lessonsData = {
  python: [
    {
      title: 'Introduction to Python',
      slug: 'introduction',
      content: `Welcome to Python Programming! Python is a high-level, interpreted programming language known for its simplicity and readability.

Why Learn Python?
- Easy to learn and read
- Versatile: web development, data science, AI, automation
- Large community and extensive libraries
- High demand in the job market

Python is used by companies like Google, Netflix, NASA, and Instagram. It's perfect for beginners yet powerful enough for experts.

In this course, you'll learn:
1. Python basics and syntax
2. Data structures and algorithms
3. Object-oriented programming
4. File handling and modules
5. Real-world projects

Let's start your Python journey!`,
      order_index: 1,
      duration_minutes: 10,
    },
    {
      title: 'Variables and Data Types',
      slug: 'variables-data-types',
      content: `Variables are containers for storing data values. Python has various data types to handle different kinds of information.

Basic Data Types:
1. Numbers: int, float, complex
2. Strings: text data
3. Boolean: True or False
4. NoneType: represents absence of value

Variable Naming Rules:
- Start with letter or underscore
- Can contain letters, numbers, underscores
- Case-sensitive (age and Age are different)
- Cannot use Python keywords

Python is dynamically typed, meaning you don't need to declare variable types explicitly.`,
      order_index: 2,
      duration_minutes: 15,
    },
    {
      title: 'Control Flow: If-Else',
      slug: 'control-flow',
      content: `Control flow statements allow you to execute different code blocks based on conditions.

If Statement:
Executes code only when condition is True.

If-Else Statement:
Executes one block if condition is True, another if False.

If-Elif-Else Statement:
Checks multiple conditions in sequence.

Comparison Operators:
- == (equal to)
- != (not equal to)
- > (greater than)
- < (less than)
- >= (greater than or equal to)
- <= (less than or equal to)

Logical Operators:
- and: both conditions must be True
- or: at least one condition must be True
- not: negates the condition`,
      order_index: 3,
      duration_minutes: 20,
    },
  ],
  'artificial-intelligence': [
    {
      title: 'What is Artificial Intelligence?',
      slug: 'introduction-to-ai',
      content: `Artificial Intelligence (AI) is the simulation of human intelligence in machines programmed to think and learn like humans.

Types of AI:
1. Narrow AI (Weak AI): Designed for specific tasks (Siri, chess programs)
2. General AI (Strong AI): Can perform any intellectual task a human can
3. Super AI: Surpasses human intelligence (theoretical)

AI Applications:
- Virtual assistants (Alexa, Google Assistant)
- Self-driving cars
- Medical diagnosis
- Recommendation systems
- Game playing (AlphaGo)

Core AI Concepts:
- Machine Learning
- Natural Language Processing
- Computer Vision
- Robotics
- Expert Systems

AI aims to create systems that can reason, learn, perceive, and solve problems.`,
      order_index: 1,
      duration_minutes: 15,
    },
    {
      title: 'Search Algorithms',
      slug: 'search-algorithms',
      content: `Search algorithms are fundamental to AI, used to find solutions in problem spaces.

Types of Search:
1. Uninformed Search (Blind Search):
   - Breadth-First Search (BFS)
   - Depth-First Search (DFS)
   - Uniform Cost Search

2. Informed Search (Heuristic Search):
   - Greedy Best-First Search
   - A* Search
   - Hill Climbing

Key Concepts:
- State Space: All possible configurations
- Initial State: Starting point
- Goal State: Desired outcome
- Actions: Possible moves
- Path Cost: Cost of reaching a state

A* Algorithm:
Combines actual cost from start and estimated cost to goal.
f(n) = g(n) + h(n)
- g(n): cost from start to node n
- h(n): estimated cost from n to goal`,
      order_index: 2,
      duration_minutes: 25,
    },
  ],
  'machine-learning': [
    {
      title: 'Introduction to Machine Learning',
      slug: 'ml-introduction',
      content: `Machine Learning is a subset of AI that enables systems to learn and improve from experience without explicit programming.

Types of Machine Learning:

1. Supervised Learning:
   - Learn from labeled data
   - Predict outputs for new inputs
   - Examples: classification, regression

2. Unsupervised Learning:
   - Learn patterns from unlabeled data
   - Examples: clustering, dimensionality reduction

3. Reinforcement Learning:
   - Learn through trial and error
   - Agent interacts with environment
   - Examples: game playing, robotics

Key Concepts:
- Training Data: Data used to train the model
- Testing Data: Data used to evaluate the model
- Features: Input variables
- Labels: Output variables (supervised learning)
- Model: Mathematical representation of patterns

ML Workflow:
1. Data collection
2. Data preprocessing
3. Feature engineering
4. Model selection
5. Training
6. Evaluation
7. Deployment`,
      order_index: 1,
      duration_minutes: 20,
    },
    {
      title: 'Linear Regression',
      slug: 'linear-regression',
      content: `Linear Regression is a supervised learning algorithm used to predict continuous values.

Concept:
Find the best-fitting straight line through data points to predict outcomes.

Equation:
y = mx + b
- y: predicted value
- x: input feature
- m: slope (weight)
- b: y-intercept (bias)

Multiple Linear Regression:
y = b₀ + b₁x₁ + b₂x₂ + ... + bₙxₙ

Cost Function:
Mean Squared Error (MSE) measures prediction accuracy:
MSE = (1/n) Σ(yᵢ - ŷᵢ)²

Gradient Descent:
Optimization algorithm to minimize cost function by adjusting weights.

Applications:
- House price prediction
- Sales forecasting
- Stock price prediction
- Salary estimation`,
      order_index: 2,
      duration_minutes: 25,
    },
  ],
  'deep-learning': [
    {
      title: 'Introduction to Deep Learning',
      slug: 'deep-learning-intro',
      content: `Deep Learning is a subset of Machine Learning using artificial neural networks with multiple layers.

What Makes it "Deep"?
Multiple hidden layers between input and output layers allow learning complex patterns.

Key Components:

1. Neurons (Nodes):
   Basic computational units that receive inputs, apply weights, and produce outputs.

2. Layers:
   - Input Layer: Receives raw data
   - Hidden Layers: Process and transform data
   - Output Layer: Produces final predictions

3. Activation Functions:
   Non-linear functions that introduce complexity:
   - ReLU: max(0, x)
   - Sigmoid: 1/(1 + e^(-x))
   - Tanh: (e^x - e^(-x))/(e^x + e^(-x))

Why Deep Learning?
- Automatic feature extraction
- Handles large amounts of data
- Superior performance in complex tasks
- State-of-the-art results in vision, NLP, speech

Applications:
- Image recognition
- Natural language processing
- Speech recognition
- Autonomous vehicles
- Game playing (AlphaGo)`,
      order_index: 1,
      duration_minutes: 20,
    },
    {
      title: 'Neural Networks Fundamentals',
      slug: 'neural-networks',
      content: `Neural Networks are computing systems inspired by biological neural networks in animal brains.

Architecture:

1. Input Layer:
   Receives feature data (pixels, text, numbers)

2. Hidden Layers:
   Process information through weighted connections
   Each neuron: output = activation(Σ(weight × input) + bias)

3. Output Layer:
   Produces final prediction or classification

Forward Propagation:
Data flows from input to output through network layers.

Backpropagation:
Algorithm for training neural networks:
1. Calculate error between prediction and actual value
2. Propagate error backward through network
3. Update weights to minimize error

Loss Functions:
- Mean Squared Error (regression)
- Cross-Entropy (classification)

Optimization:
- Gradient Descent
- Stochastic Gradient Descent (SGD)
- Adam Optimizer

Training Process:
1. Initialize weights randomly
2. Forward pass: make predictions
3. Calculate loss
4. Backward pass: compute gradients
5. Update weights
6. Repeat until convergence`,
      order_index: 2,
      duration_minutes: 30,
    },
  ],
  robotics: [
    {
      title: 'Introduction to Robotics',
      slug: 'robotics-introduction',
      content: `Robotics is the intersection of mechanical engineering, electrical engineering, and computer science.

What is a Robot?
A robot is a programmable machine capable of carrying out complex actions automatically.

Key Components:

1. Mechanical Structure:
   Physical body, joints, links, and end-effectors

2. Sensors:
   Devices that perceive the environment
   - Cameras (vision)
   - Lidar (distance)
   - IMU (orientation)
   - Force/torque sensors

3. Actuators:
   Devices that create motion
   - Motors (DC, servo, stepper)
   - Hydraulic systems
   - Pneumatic systems

4. Control System:
   Brain of the robot (microcontrollers, computers)

5. Power Supply:
   Batteries, power management systems

Types of Robots:
- Industrial robots (manufacturing)
- Mobile robots (autonomous vehicles)
- Humanoid robots
- Drones
- Medical robots
- Service robots

Applications:
- Manufacturing automation
- Healthcare assistance
- Search and rescue
- Space exploration
- Agriculture
- Entertainment`,
      order_index: 1,
      duration_minutes: 20,
    },
    {
      title: 'Sensors and Actuators',
      slug: 'sensors-actuators',
      content: `Sensors and actuators are the eyes, ears, and muscles of a robot.

SENSORS:

1. Position Sensors:
   - Encoders: measure rotation
   - Potentiometers: measure angle
   - GPS: global positioning

2. Distance Sensors:
   - Ultrasonic: sound waves
   - Infrared (IR): light reflection
   - Lidar: laser scanning

3. Vision Sensors:
   - Cameras: image capture
   - Depth cameras: 3D perception

4. Force/Touch Sensors:
   - Force sensors: measure applied force
   - Tactile sensors: detect contact

5. Inertial Sensors:
   - Accelerometer: linear acceleration
   - Gyroscope: angular velocity
   - IMU: combined acceleration and rotation

ACTUATORS:

1. Electric Motors:
   - DC Motors: continuous rotation
   - Servo Motors: precise position control
   - Stepper Motors: discrete steps

2. Linear Actuators:
   - Convert rotary motion to linear
   - Used for extending/retracting

3. Pneumatic/Hydraulic:
   - Air or fluid pressure
   - High force applications

Sensor Fusion:
Combining data from multiple sensors for better accuracy and reliability.

Control Loop:
Sense → Process → Act → Sense (repeat)`,
      order_index: 2,
      duration_minutes: 25,
    },
    {
      title: 'Robot Kinematics',
      slug: 'kinematics',
      content: `Kinematics is the study of motion without considering forces.

Forward Kinematics:
Calculate end-effector position from joint angles.
Given: Joint angles θ₁, θ₂, ..., θₙ
Find: End-effector position (x, y, z) and orientation

Inverse Kinematics:
Calculate joint angles needed to reach desired position.
Given: Desired end-effector position
Find: Required joint angles

This is more challenging and may have multiple solutions.

Coordinate Frames:
- Base frame: fixed reference
- Link frames: attached to each link
- End-effector frame: tool position

Transformation Matrices:
Describe position and orientation of one frame relative to another.

Denavit-Hartenberg (DH) Parameters:
Standard method to describe robot geometry:
- Link length (a)
- Link twist (α)
- Link offset (d)
- Joint angle (θ)

Applications:
- Path planning
- Trajectory generation
- Robot arm control
- Animation

Degrees of Freedom (DOF):
Number of independent movements a robot can make.
- 6 DOF needed for arbitrary position and orientation`,
      order_index: 3,
      duration_minutes: 30,
    },
    {
      title: 'ROS Basics',
      slug: 'ros-basics',
      content: `Robot Operating System (ROS) is a flexible framework for writing robot software.

Note: ROS is not an actual operating system but a middleware framework.

Key Concepts:

1. Nodes:
   Individual processes that perform computation
   Example: camera_node, motor_controller_node

2. Topics:
   Named channels for message passing
   Publishers send messages, subscribers receive
   Many-to-many communication

3. Messages:
   Data structures sent over topics
   Examples: sensor_msgs/Image, geometry_msgs/Twist

4. Services:
   Request-response communication
   One-to-one, synchronous

5. Actions:
   For long-running tasks with feedback
   Can be preempted (cancelled)

6. Parameter Server:
   Shared dictionary for configuration

ROS Architecture:
- Master: coordinates communication
- Nodes: run computations
- roscore: starts master and other core components

Common ROS Tools:
- rosrun: run a node
- roslaunch: start multiple nodes
- rostopic: interact with topics
- rosbag: record and playback data
- rviz: 3D visualization
- rqt: graphical tools

Advantages:
- Hardware abstraction
- Code reusability
- Language independent (C++, Python)
- Large community and packages
- Simulation tools (Gazebo)`,
      order_index: 4,
      duration_minutes: 25,
    },
    {
      title: 'AI in Robotics',
      slug: 'ai-robotics',
      content: `Artificial Intelligence enhances robot capabilities with perception, decision-making, and learning.

Computer Vision:
Enable robots to understand visual world:
- Object detection and recognition
- Semantic segmentation
- Depth estimation
- Visual SLAM (Simultaneous Localization and Mapping)

Path Planning:
Find optimal routes from start to goal:
- A* algorithm
- Dijkstra's algorithm
- RRT (Rapidly-exploring Random Tree)
- Potential fields

Machine Learning in Robotics:

1. Supervised Learning:
   - Object classification
   - Gesture recognition
   - Quality inspection

2. Reinforcement Learning:
   - Robot learns by trial and error
   - Examples: walking, grasping
   - Reward-based optimization

3. Deep Learning:
   - CNN for image processing
   - RNN for sequential tasks
   - Transfer learning

Natural Language Processing:
- Voice commands
- Human-robot interaction
- Task understanding

Sensor Fusion:
Combine multiple sensor data using ML:
- Kalman filters
- Particle filters
- Neural network fusion

Autonomous Navigation:
- Obstacle avoidance
- Localization
- Mapping
- Motion planning

Challenges:
- Real-time processing
- Uncertainty handling
- Safety and reliability
- Sim-to-real transfer`,
      order_index: 5,
      duration_minutes: 30,
    },
  ],
};

const codeExamplesData = {
  'introduction': [
    {
      title: 'Your First Python Program',
      code: `# This is a comment
print("Hello, World!")
print("Welcome to Python Programming!")`,
      language: 'python',
      output: `Hello, World!
Welcome to Python Programming!`,
      explanation: 'The print() function displays text to the console. Comments start with # and are ignored by Python.',
      order_index: 1,
    },
  ],
  'variables-data-types': [
    {
      title: 'Variable Assignment',
      code: `# Integer
age = 25

# Float
height = 5.9

# String
name = "Alice"

# Boolean
is_student = True

# Print variables
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Student: {is_student}")`,
      language: 'python',
      output: `Name: Alice
Age: 25
Height: 5.9
Student: True`,
      explanation: 'Python variables can store different types of data. F-strings (formatted strings) allow easy variable interpolation.',
      order_index: 1,
    },
    {
      title: 'Type Checking',
      code: `x = 10
y = 3.14
z = "Hello"

print(type(x))  # <class 'int'>
print(type(y))  # <class 'float'>
print(type(z))  # <class 'str'>`,
      language: 'python',
      output: `<class 'int'>
<class 'float'>
<class 'str'>`,
      explanation: 'The type() function returns the data type of a variable.',
      order_index: 2,
    },
  ],
  'control-flow': [
    {
      title: 'If-Else Statement',
      code: `age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")`,
      language: 'python',
      output: `You are an adult`,
      explanation: 'If condition is True, first block executes. Otherwise, else block executes.',
      order_index: 1,
    },
    {
      title: 'If-Elif-Else',
      code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Your grade is: {grade}")`,
      language: 'python',
      output: `Your grade is: B`,
      explanation: 'Elif (else if) checks additional conditions. First True condition executes, rest are skipped.',
      order_index: 2,
    },
  ],
  'introduction-to-ai': [
    {
      title: 'Simple AI Decision Making',
      code: `def make_decision(temperature):
    if temperature > 30:
        return "It's hot! Turn on AC"
    elif temperature > 20:
        return "Weather is pleasant"
    else:
        return "It's cold! Turn on heater"

# Test the AI agent
print(make_decision(35))
print(make_decision(25))
print(make_decision(15))`,
      language: 'python',
      output: `It's hot! Turn on AC
Weather is pleasant
It's cold! Turn on heater`,
      explanation: 'This simple rule-based system demonstrates basic AI decision-making logic.',
      order_index: 1,
    },
  ],
  'search-algorithms': [
    {
      title: 'Breadth-First Search',
      code: `from collections import deque

def bfs(graph, start, goal):
    queue = deque([start])
    visited = {start}
    parent = {start: None}

    while queue:
        node = queue.popleft()
        if node == goal:
            path = []
            while node:
                path.append(node)
                node = parent[node]
            return path[::-1]

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                parent[neighbor] = node
                queue.append(neighbor)

    return None

# Example graph
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

result = bfs(graph, 'A', 'F')
print(f"Path: {' -> '.join(result)}")`,
      language: 'python',
      output: `Path: A -> C -> F`,
      explanation: 'BFS explores all neighbors at current depth before moving deeper. Uses a queue for level-by-level traversal.',
      order_index: 1,
    },
  ],
  'ml-introduction': [
    {
      title: 'Simple ML Example',
      code: `import numpy as np

# Simple dataset
X = np.array([1, 2, 3, 4, 5])
y = np.array([2, 4, 6, 8, 10])

# Calculate mean
X_mean = np.mean(X)
y_mean = np.mean(y)

# Calculate slope and intercept
numerator = np.sum((X - X_mean) * (y - y_mean))
denominator = np.sum((X - X_mean) ** 2)
slope = numerator / denominator
intercept = y_mean - slope * X_mean

print(f"Equation: y = {slope}x + {intercept}")

# Make prediction
new_x = 6
prediction = slope * new_x + intercept
print(f"Prediction for x=6: {prediction}")`,
      language: 'python',
      output: `Equation: y = 2.0x + 0.0
Prediction for x=6: 12.0`,
      explanation: 'This implements simple linear regression from scratch using the least squares method.',
      order_index: 1,
    },
  ],
};

async function seedDatabase() {
  console.log('Starting database seed...');

  for (const courseData of coursesData) {
    const { data: course, error: courseError } = await supabase
      .from('courses')
      .insert(courseData)
      .select()
      .single();

    if (courseError) {
      console.error(`Error creating course ${courseData.title}:`, courseError);
      continue;
    }

    console.log(`Created course: ${course.title}`);

    const lessons = lessonsData[courseData.slug];
    if (lessons) {
      for (const lessonData of lessons) {
        const { data: lesson, error: lessonError } = await supabase
          .from('lessons')
          .insert({
            ...lessonData,
            course_id: course.id,
          })
          .select()
          .single();

        if (lessonError) {
          console.error(`Error creating lesson ${lessonData.title}:`, lessonError);
          continue;
        }

        console.log(`  Created lesson: ${lesson.title}`);

        const codeExamples = codeExamplesData[lessonData.slug];
        if (codeExamples) {
          for (const exampleData of codeExamples) {
            const { error: exampleError } = await supabase
              .from('code_examples')
              .insert({
                ...exampleData,
                lesson_id: lesson.id,
              });

            if (exampleError) {
              console.error(`Error creating code example:`, exampleError);
            } else {
              console.log(`    Created code example: ${exampleData.title}`);
            }
          }
        }
      }
    }
  }

  console.log('Database seed completed!');
}

seedDatabase().catch(console.error);
