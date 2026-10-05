import CourseCard from "@/components/CourseCard";

const roboticsCourses = [
  {
    slug: "robot-kinematics",
    title: "Robot Kinematics",
    description:
      "Learn forward kinematics, inverse kinematics, coordinate frames and robot motion.",
    icon: "Cpu",
    color: "#3B82F6",
  },
  {
    slug: "motors-actuators",
    title: "Motors & Actuators",
    description:
      "Learn motors, servos, actuators and robotic drive systems.",
    icon: "Cpu",
    color: "#10B981",
  },
  {
    slug: "robot-sensors",
    title: "Robot Sensors",
    description:
      "Learn encoders, IMU, LiDAR, ultrasonic sensors and robotic sensing.",
    icon: "Brain",
    color: "#8B5CF6",
  },
  {
    slug: "robot-kinematics-mathematics",
    title: "Robotics Mathematics",
    description:
      "Learn coordinate systems, transformations and mathematics used in robotics.",
    icon: "Code2",
    color: "#F59E0B",
  },
];

export default function RoboticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold text-gray-900 mb-10">
        Robotics Tutorials
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {roboticsCourses.map((course) => (
          <CourseCard
            key={course.slug}
            course={course}
          />
        ))}

      </div>

    </div>
  );
}