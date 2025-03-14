unicodeExtendedEscapesInRegularExpressions13.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 45,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 43,
            "raw": "/\\u{DDDDD}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{DDDDD}"
            },
            "value": {}
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
