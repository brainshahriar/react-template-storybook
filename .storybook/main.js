module.exports = {
    stories: [   "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [],
    typescript: {
      reactDocgen: 'react-docgen-typescript',
      reactDocgenTypescriptOptions: {
        compilerOptions: {
          allowSyntheticDefaultImports: false,
          esModuleInterop: false,
        },
      }
    }
  };