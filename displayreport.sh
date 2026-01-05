#!/bin/sh
set -e

echo "Generate the report from results"
npx allure generate allure-results --clean -o allure-report

