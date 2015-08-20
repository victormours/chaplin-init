#!/bin/bash

set -e

rm -rf .git
rm README.md

bundle
npm install
bower install

rm install.sh

echo "Your install is complete!"
echo "Run gulp build to compile the project"
echo "Run bundle exec rackup to start the server"
