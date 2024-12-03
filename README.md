# Netlify's NextJS ISR & SSR testing

This is just a dummy project to test if ISR & SSR is working on Netlify.

# Installation notes

## 1. Setup environment variables

To be able to run the project locally, first you need to have NodeJS v18 installed on your maching. You could either use [`nvm`](https://github.com/nvm-sh/nvm) to manage your node versions or download and install the specific version of node manually. ([here](https://nodejs.org/en/download/package-manager))

### (OPTIONAL) Install nvm

1. nvm (node version manager) will be helpful to have and can be installed per instructions at https://github.com/nvm-sh/nvm
2. There are sometimes issues with mac installations of nvm, follow troubleshooting instructions in nvm project README
3. Since this project has a `.nvmrc` file, you can run `nvm use` to switch to the correct node version

### Package manager

This project uses `pnpm` as package manager. To have `pnpm` installed on your machine, you can either use `corepack` that comes bundled with NodeJS starting from version 16.10.0, or you can install `pnpm` globally using npm:

```bash
npm install -g pnpm
```

## 2. Install dependencies

Before running the project, you need to install the dependencies. You can do this by running the following command:

```bash
pnpm install
```

## 3. Start a development server

To start a development server, you can use the following command:

```bash
pnpm dev
```

This will start a development server on `http://localhost:3000`.

## 4. Build the project

To build the project, you can use the following command:

```bash
pnpm build
```

## 5. Unit tests

To run the unit tests, you can use the following command:

```bash
pnpm test
```

## 6. Linting

To run the linting, you can use the following command:

```bash
pnpm lint
```
