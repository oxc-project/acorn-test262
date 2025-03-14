unicodeExtendedEscapesInRegularExpressions18.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 48,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 46,
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
            "end": 46,
            "raw": "/\\u{65}\\u{65}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{65}\\u{65}"
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
