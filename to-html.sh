#!/usr/bin/env bash

HEAD='
<html>
<head>
<style>
  html * {
    font-family: "Courier New", monospace;
  }
  table, th, td {
    border: 1px solid black;
  }
</style>
</head>
<body>

'

BODY="$(npx -y marked -i $1)"

FOOTER='
</body>
</html>
'

echo "$HEAD"
echo "$BODY"
echo "$FOOTER"
