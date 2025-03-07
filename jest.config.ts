import type {Config} from 'jest';

const config: Config = {
  preset: "ts-jest",
  transform: {
    "^.+.tsx?$": ["ts-jest", {
      tsconfig: "tsconfig.jest.json",
    }],
  },
  moduleNameMapper: {
    "\\.svg": "<rootDir>/tests/__mocks__/fileMock.ts",
    "\\.css": "<rootDir>/tests/__mocks__/styleMock.ts",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jsdom",
};

export default config;