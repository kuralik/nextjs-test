// eslint-disable-next-line import/no-extraneous-dependencies
import "@testing-library/jest-dom"
// eslint-disable-next-line import/no-extraneous-dependencies
import { loadEnvConfig } from "@next/env"

// eslint-disable-next-line no-console
loadEnvConfig(__dirname, true, { info: () => null, error: console.error })
