rm -rf ./build;
if tsc
then
  node build.js;
else
  echo "build failed."
fi
rm -rf ./tmp;