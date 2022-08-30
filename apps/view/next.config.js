const dotenv = require('dotenv');
const { readdirSync, statSync, readFileSync } = require('fs');
const { resolve, join } = require('path');
const webpack = require('webpack');

const projectRoot = resolve(__dirname, '..', '..');

const envOrder = [
  'view.env',
  'view.env.development',
  'view.env.test',
  'view.env.local',
];

function loadEnv() {
  return Object.assign(
    {},
    ...readdirSync(projectRoot)
      .filter(
        (file) =>
          statSync(join(projectRoot, file)).isFile() &&
          file.match(/^view\.env(\.(local|development|test))?$/),
      )
      .sort((file1, file2) => envOrder.indexOf(file1) - envOrder.indexOf(file2))
      .map((file) => dotenv.parse(readFileSync(join(projectRoot, file)))),
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: '../../dist/apps/view',
  webpack: (config) => {
    const env = loadEnv();

    config.plugins.push(new webpack.EnvironmentPlugin(env));

    return config;
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
