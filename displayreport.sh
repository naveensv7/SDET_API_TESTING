#!/bin/sh
set -e

echo "Generate the report from results"
npx allure generate /allure/allure-results --clean -o /allure/allure-report

