#!/usr/bin/env bash

HEAD='
<html>
<head>
<style>
  html * {
    font-family: "Courier New", monospace;
  }
  table, td {
    border: 1px solid black;
    padding-top: 1em;
    padding-bottom: 1em;
  }
  th {
    position: sticky;
    top: 0;
    background-color: yellow;
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
