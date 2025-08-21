// Default placeholder for missing images
const defaultPlaceholder = "https://via.placeholder.com/64x64/333333/ffffff?text=?";

// Placeholder URLs for different categories
const placeholders = {
  git: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  // Using generic placeholder for all other items
  generic: defaultPlaceholder,
};

export const languagesData = [
  { name: "Python", image: placeholders.generic },
  { name: "Java", image: placeholders.generic },
  { name: "Kotlin", image: placeholders.generic },
  { name: "LaTeX", image: placeholders.generic },
  { name: "C++", image: placeholders.generic },
  { name: "C", image: placeholders.generic },
  { name: "JavaScript", image: placeholders.generic },
  { name: "TypeScript", image: placeholders.generic },
  { name: "Assembly", image: placeholders.generic },
  { name: "SQL", image: placeholders.generic },
  { name: "Lua", image: placeholders.generic },
  { name: "Solidity", image: placeholders.generic },
  { name: "Rust", image: placeholders.generic },
];

export const toolsData = [
  { name: "Git/GitHub", image: placeholders.git },
  { name: "PowerShell", image: placeholders.generic },
  { name: "Linux", image: placeholders.generic },
  { name: "Firebase", image: placeholders.generic },
  { name: "AWS", image: placeholders.generic },
  { name: "JetBrain IDEs", image: placeholders.generic },
  { name: "Netlify", image: placeholders.generic },
  { name: "JUnit Testing", image: placeholders.generic },
  { name: "VS Code", image: placeholders.generic },
  { name: "Android Studio", image: placeholders.generic },
  { name: "Docker", image: placeholders.generic },
  { name: "Jupyter NB", image: placeholders.generic },
  { name: "Google Colab", image: placeholders.generic },
  { name: "Kaggle", image: placeholders.generic },
  { name: "Roblox Studio", image: placeholders.generic },
];

export const frameworksData = [
  { name: "NodeJS", image: placeholders.generic },
  { name: "NextJS", image: placeholders.generic },
  { name: "ExpressJS", image: placeholders.generic },
  { name: "ReactJS", image: placeholders.generic },
  { name: "GatsbyJS", image: placeholders.generic },
  { name: "Convex", image: placeholders.generic },
  { name: "Django", image: placeholders.generic },
  { name: "Flask", image: placeholders.generic },
  { name: "Tailwind CSS", image: placeholders.generic },
  { name: "Angular", image: placeholders.generic },
  { name: "Prisma", image: placeholders.generic }
];
