#!/usr/bin/env bash

HEAD='
<html>
<head>
<style>
  html * {
    font-family: Verdana, sans-serif;
  }
  table, th, td {
    border: 1px solid black;
  }
</style>
</head>
<body>

'

BODY="$(npx -y marked -i airbnb-vs-latest.md)"

FOOTER='
</body>
</html>
'

echo "$HEAD"
echo "$BODY"
echo "$FOOTER"
