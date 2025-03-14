unicodeExtendedEscapesInRegularExpressions03.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 42,
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
            "end": 42,
            "raw": "/\\u{0000}/gu",
            "regex": {
              "flags": "gu",
              "pattern": "\\u{0000}"
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
