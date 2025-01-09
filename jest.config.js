/** @type {import('jest').Config} */
export default {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom", // Эмулирует браузерную среду для тестирования
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // Использование Babel для обработки тестов
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer", // Трансформация SVG
    "^.+\\.(css|less|scss)$": "identity-obj-proxy", // Мок для CSS модулей
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Расширения файлов
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
